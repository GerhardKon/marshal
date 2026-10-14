/* Multi-photo product carousel and one-image lightbox. No third-party dependencies. */
(() => {
  const photoViewer = document.querySelector('#photo-viewer');
  const viewerTitle = document.querySelector('#photo-viewer-title');
  const viewerImage = document.querySelector('#photo-viewer-image');
  const viewerImageWrap = document.querySelector('#photo-viewer-image-wrap');
  const viewerError = document.querySelector('#photo-viewer-error');
  const viewerCounter = document.querySelector('#photo-viewer-counter');
  const viewerDots = document.querySelector('#photo-viewer-dots');
  const viewerStage = document.querySelector('#photo-viewer-stage');
  const appDialog = document.querySelector('#app-window');
  let returnFocus = null;
  let swipeStart = null;
  const viewerZoom = { scale: 1, x: 0, y: 0, pointers: new Map(), pinchDistance: 0, pinchScale: 1, pan: null };

  function syncZoomControls() {
    photoViewer.querySelector('[data-viewer-zoom="-1"]')?.toggleAttribute('disabled', viewerZoom.scale <= 1.001);
    photoViewer.querySelector('[data-viewer-zoom="1"]')?.toggleAttribute('disabled', viewerZoom.scale >= 3.999);
    const reset = photoViewer.querySelector('[data-viewer-zoom="reset"]');
    if (reset) { reset.textContent = `${Math.round(viewerZoom.scale * 100)}%`; reset.toggleAttribute('disabled', viewerZoom.scale <= 1.001); }
  }

  function applyViewerZoom() {
    if (!viewerImage || !viewerImageWrap) return;
    const bounds = viewerImageWrap.getBoundingClientRect();
    const maxX = Math.max(0, (viewerImage.offsetWidth * viewerZoom.scale - bounds.width) / 2);
    const maxY = Math.max(0, (viewerImage.offsetHeight * viewerZoom.scale - bounds.height) / 2);
    viewerZoom.x = Math.max(-maxX, Math.min(maxX, viewerZoom.x));
    viewerZoom.y = Math.max(-maxY, Math.min(maxY, viewerZoom.y));
    viewerImage.style.transform = viewerZoom.scale <= 1.001 ? 'none' : `translate3d(${viewerZoom.x}px, ${viewerZoom.y}px, 0) scale(${viewerZoom.scale})`;
    viewerImage.classList.toggle('is-zoomed', viewerZoom.scale > 1.001);
    syncZoomControls();
  }

  function setViewerZoom(requested, anchor = null) {
    if (!viewerImage?.naturalWidth) return;
    const previous = viewerZoom.scale;
    const next = Math.max(1, Math.min(4, requested));
    if (anchor && viewerImageWrap && next > 1) {
      const bounds = viewerImageWrap.getBoundingClientRect();
      const px = anchor.x - (bounds.left + bounds.width / 2);
      const py = anchor.y - (bounds.top + bounds.height / 2);
      const ratio = next / previous;
      viewerZoom.x = px - (px - viewerZoom.x) * ratio;
      viewerZoom.y = py - (py - viewerZoom.y) * ratio;
    }
    viewerZoom.scale = next;
    if (next <= 1.001) { viewerZoom.scale = 1; viewerZoom.x = 0; viewerZoom.y = 0; }
    applyViewerZoom();
  }

  function resetViewerZoom() {
    viewerZoom.scale = 1; viewerZoom.x = 0; viewerZoom.y = 0;
    viewerZoom.pointers.clear(); viewerZoom.pinchDistance = 0; viewerZoom.pan = null;
    viewerImage?.classList.remove('is-panning');
    applyViewerZoom();
  }

  function photoPaths(product) {
    const fromList = Array.isArray(product.images)
      ? product.images.filter((path) => typeof path === 'string' && path.trim())
      : [];
    const unique = [...new Set(fromList)];
    if (!unique.length && product.image) unique.push(product.image);
    if (!unique.length && product.icon) unique.push(product.icon);
    return unique;
  }

  function productVideoPostUrl(product) {
    return typeof window.getTelegramVideoPostUrl === 'function' ? window.getTelegramVideoPostUrl(product) : '';
  }

  function productHasVideo(product) {
    return Boolean(product.video || productVideoPostUrl(product));
  }

  function assignPhoto(image, product, index, images) {
    const src = images[index] || images[0] || product.icon || product.image;
    const fallbacks = [...new Set([product.icon, product.image, ...images].filter((path) => path && path !== src))];
    const imageWrap = image === viewerImage ? viewerImageWrap : null;
    let fallbackIndex = 0;
    image.alt = `${product.alt || product.name}, фото ${index + 1} из ${images.length}`;
    image.loading = 'eager';
    image.decoding = 'async';
    image.onerror = () => {
      const fallback = fallbacks[fallbackIndex++];
      if (fallback) { image.src = fallback; return; }
      image.onerror = null;
      image.classList.add('is-load-error');
      if (imageWrap) { imageWrap.classList.remove('is-loading'); imageWrap.classList.add('has-image-error'); viewerError.hidden = false; }
    };
    image.onload = () => {
      image.classList.remove('is-load-error');
      if (imageWrap) { imageWrap.classList.remove('is-loading', 'has-image-error'); viewerError.hidden = true; applyViewerZoom(); }
    };
    if (imageWrap) { imageWrap.classList.add('is-loading'); imageWrap.classList.remove('has-image-error'); viewerError.hidden = true; }
    image.src = src;
    if (image.complete) {
      if (image.naturalWidth > 0) image.onload();
      else image.onerror();
    }
  }

  function syncWindowGallery(windowEl) {
    const product = productById.get(windowEl.dataset.productWindow);
    if (!product) return;
    const images = photoPaths(product);
    if (!images.length) return;
    const stage = windowEl.querySelector('.detail-photo-stage');
    const triggers = [...(stage?.querySelectorAll('.detail-photo-trigger') || [])];
    if (!stage || !triggers.length) return;
    const index = Math.max(0, Math.min(images.length - 1, Number(windowEl.dataset.imageIndex || 0)));
    stage.dataset.currentIndex = String(index);
    triggers.forEach((trigger, triggerIndex) => {
      const active = triggerIndex === index;
      trigger.classList.toggle('is-active', active);
      trigger.hidden = !active;
      trigger.setAttribute('aria-hidden', String(!active));
    });
    const counter = windowEl.querySelector('.detail-carousel-count');
    const pad = (value) => String(value + 1).padStart(2, '0');
    if (counter) counter.textContent = `${pad(index)} / ${String(images.length).padStart(2, '0')}`;
    const caption = windowEl.querySelector('.detail-media-caption');
    if (caption) caption.textContent = images.length > 1
      ? `ФОТО ${index + 1} ИЗ ${images.length}`
      : productHasVideo(product) ? 'ФОТО И ВИДЕО' : 'ФОТО ИЗДЕЛИЯ';
    windowEl.querySelectorAll('[data-product-photo-index]').forEach((dot) => {
      const active = Number(dot.dataset.productPhotoIndex) === index;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  }

  function updateWindowPhoto(windowEl, requestedIndex) {
    const product = productById.get(windowEl.dataset.productWindow);
    if (!product) return;
    const images = photoPaths(product);
    if (!images.length) return;
    const index = (requestedIndex % images.length + images.length) % images.length;
    const stage = windowEl.querySelector('.detail-photo-stage');
    const trigger = stage?.querySelector(`.detail-photo-trigger[data-photo-index="${index}"]`);
    if (!stage || !trigger) return;
    windowEl.dataset.imageIndex = String(index);
    stage.dataset.currentIndex = String(index);
    syncWindowGallery(windowEl);
  }

  function updateViewer(requestedIndex) {
    const product = productById.get(photoViewer.dataset.productId);
    if (!product) return;
    const images = photoPaths(product);
    if (!images.length) return;
    const index = (requestedIndex % images.length + images.length) % images.length;
    photoViewer.dataset.photoIndex = String(index);
    viewerTitle.textContent = `${product.model} · ${product.name}`;
    resetViewerZoom();
    viewerImage.fetchPriority = 'high';
    assignPhoto(viewerImage, product, index, images);
    viewerCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
    viewerDots.replaceChildren(...images.map((_, dotIndex) => {
      const dot = node('button', `photo-viewer-dot${dotIndex === index ? ' is-active' : ''}`);
      dot.type = 'button';
      dot.dataset.viewerIndex = String(dotIndex);
      dot.setAttribute('aria-label', `Показать фото ${dotIndex + 1} из ${images.length}`);
      dot.setAttribute('aria-pressed', String(dotIndex === index));
      return dot;
    }));
    photoViewer.querySelectorAll('[data-viewer-step]').forEach((button) => {
      button.hidden = images.length < 2;
    });
  }

  function openViewer(windowEl, index = Number(windowEl.dataset.imageIndex || 0)) {
    const product = productById.get(windowEl.dataset.productWindow);
    if (!product) return;
    returnFocus = windowEl.querySelector(`.detail-photo-trigger[data-photo-index="${index}"]`) || windowEl.querySelector('.detail-photo-trigger');
    photoViewer.dataset.productId = product.id;
    if (!photoViewer.open) {
      try { if (typeof photoViewer.showModal === 'function') photoViewer.showModal(); else photoViewer.setAttribute('open', ''); }
      catch { photoViewer.setAttribute('open', ''); }
    }
    window.syncWindowLock();
    updateViewer(index);
    requestAnimationFrame(() => { if (photoViewer.open) applyViewerZoom(); });
    photoViewer.querySelector('[data-viewer-close]')?.focus({ preventScroll: true });
  }

  function syncLock() {
    const locked = Boolean(appDialog?.open || document.querySelector('.product-window') || photoViewer?.open);
    document.body.classList.toggle('has-window-open', locked);
    document.body.classList.toggle('has-photo-viewer', Boolean(photoViewer?.open));
  }

  function openProductWithCarousel(product, source = 'desktop') {
    if (!product) return;
    const images = photoPaths(product);
    const videoPostUrl = productVideoPostUrl(product);
    const hasVideo = Boolean(product.video || videoPostUrl);
    const windowEl = node('article', `app-window product-window floating-window ${source === 'photos' ? 'catalog-window' : 'desktop-window'}${hasVideo ? ' has-product-video' : ''}`);
    windowEl.dataset.productWindow = product.id;
    windowEl.dataset.navigation = source;
    windowEl.dataset.imageIndex = '0';

    const openCount = document.querySelectorAll('.product-window').length;
    const mobileWindow = window.matchMedia('(max-width: 760px)').matches;
    windowEl.style.left = `${mobileWindow ? 6 + (openCount % 3) * 12 : Math.max(18, 8 + (openCount % 4) * 42)}px`;
    windowEl.style.top = `${mobileWindow ? 62 + (openCount % 3) * 22 : Math.max(62, 92 + (openCount % 4) * 30)}px`;

    const shell = node('div', 'window-shell');
    const bar = node('header', 'window-bar');
    const controls = node('div', 'window-controls');
    const close = node('button', 'traffic-light traffic-close');
    close.type = 'button';
    close.dataset.windowClose = '';
    close.setAttribute('aria-label', 'Закрыть окно');
    close.append(iconUse('i-close'));
    controls.append(close, node('span', 'traffic-light traffic-minimize'), node('span', 'traffic-light traffic-expand'));

    const heading = node('div', 'window-heading');
    heading.append(
      node('small', '', source === 'photos' ? 'КАТАЛОГ ИЗДЕЛИЙ' : 'АВТОРСКОЕ УКРАШЕНИЕ'),
      node('h2', '', product.name),
    );
    const navigation = node('div', 'window-nav');
    if (source === 'photos') {
      const previous = node('button', 'window-nav-button', '‹');
      previous.type = 'button';
      previous.dataset.photoNav = 'prev';
      previous.setAttribute('aria-label', 'Предыдущее изделие');
      const next = node('button', 'window-nav-button', '›');
      next.type = 'button';
      next.dataset.photoNav = 'next';
      next.setAttribute('aria-label', 'Следующее изделие');
      navigation.append(previous, next);
    }
    bar.append(controls, heading, navigation);

    const content = node('div', 'window-content');
    const layout = node('article', 'detail-view');
    const media = node('div', 'detail-media');
    const mediaRow = node('div', `detail-media-row${hasVideo ? ' detail-media-row--with-video' : ''}`);
    const stage = node('div', 'detail-photo-stage');
    stage.dataset.photoCount = String(images.length);
    stage.tabIndex = images.length > 1 ? 0 : -1;
    stage.setAttribute('role', 'region');
    stage.setAttribute('aria-label', `Фотографии изделия «${product.name}». Используйте кнопки или точки, чтобы переключать снимки.`);
    images.forEach((_, index) => {
      const trigger = node('button', 'detail-photo-trigger');
      trigger.type = 'button';
      trigger.dataset.openProductPhoto = '';
      trigger.dataset.photoIndex = String(index);
      trigger.classList.toggle('is-active', index === 0);
      trigger.hidden = index !== 0;
      trigger.setAttribute('aria-haspopup', 'dialog');
      trigger.setAttribute('aria-label', `Открыть фото ${index + 1} из ${images.length}: ${product.name}`);
      const image = node('img', 'detail-photo');
      image.draggable = false;
      image.decoding = 'async';
      image.loading = index < 2 ? 'eager' : 'lazy';
      if (index === 0) image.fetchPriority = 'high';
      assignPhoto(image, product, index, images);
      trigger.append(image);
      stage.append(trigger);
    });

    mediaRow.append(stage);

    const carouselFooter = node('div', 'detail-carousel-footer');
    if (images.length > 1) {
      const previous = node('button', 'detail-photo-nav detail-photo-nav--previous', '‹');
      previous.type = 'button';
      previous.dataset.productPhotoStep = '-1';
      previous.setAttribute('aria-label', 'Предыдущее фото');
      const dots = node('div', 'detail-carousel-dots');
      images.forEach((_, index) => {
        const dot = node('button', `detail-carousel-dot${index === 0 ? ' is-active' : ''}`);
        dot.type = 'button';
        dot.dataset.productPhotoIndex = String(index);
        dot.setAttribute('aria-label', `Показать фото ${index + 1} из ${images.length}`);
        dot.setAttribute('aria-pressed', String(index === 0));
        dots.append(dot);
      });
      const count = node('span', 'detail-carousel-count', `01 / ${String(images.length).padStart(2, '0')}`);
      const next = node('button', 'detail-photo-nav detail-photo-nav--next', '›');
      next.type = 'button';
      next.dataset.productPhotoStep = '1';
      next.setAttribute('aria-label', 'Следующее фото');
      carouselFooter.append(previous, dots, count, next);
    } else {
      carouselFooter.append(node('span', 'detail-carousel-count', `01 / ${String(images.length).padStart(2, '0')}`));
    }
    media.append(
      mediaRow,
      carouselFooter,
      node('span', 'detail-media-label', product.model.toUpperCase()),
      node('div', 'detail-media-caption', images.length > 1 ? `ФОТО 1 ИЗ ${images.length}` : hasVideo ? 'ФОТО И ВИДЕО' : 'ФОТО ИЗДЕЛИЯ'),
    );

    if (hasVideo) {
      const videoPanel = node('div', 'product-video-panel');
      videoPanel.append(node('span', 'video-label', 'ВИДЕО ИЗДЕЛИЯ'));
      if (product.video) {
        const video = node('video', 'product-video');
        video.src = product.video;
        video.controls = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.setAttribute('aria-label', `Видео кольца ${product.name}`);
        videoPanel.append(video);
      } else if (videoPostUrl && typeof window.appendTelegramVideoEmbed === 'function') {
        window.appendTelegramVideoEmbed(videoPanel, videoPostUrl, product);
      } else if (videoPostUrl) {
        const fallback = node('a', 'telegram-video-fallback', 'Открыть видео в Telegram ↗');
        fallback.href = videoPostUrl;
        fallback.target = '_blank';
        fallback.rel = 'noopener noreferrer';
        videoPanel.append(fallback);
      }
      mediaRow.append(videoPanel);
    }

    const copy = node('div', 'detail-copy');
    copy.append(node('p', 'detail-kicker', 'АВТОРСКОЕ УКРАШЕНИЕ'));
    if (product.description?.trim()) copy.append(node('p', 'detail-description', product.description));
    const facts = node('div', 'detail-facts');
    const price = node('div', 'detail-fact');
    price.append(node('small', '', 'Стоимость'), node('strong', '', product.price));
    const size = node('div', 'detail-fact');
    size.append(node('small', '', 'Наличие / размер'), node('strong', '', 'Изготовление под размер'));
    facts.append(price, size);
    copy.append(
      facts,
      node('p', 'price-warning', 'Точную стоимость, наличие и сроки изготовления подтвердите у автора.'),
    );
    const actions = node('div', 'detail-actions');
    const add = node('button', 'window-action cart-add');
    add.type = 'button';
    add.dataset.cartAdd = product.id;
    syncAddButton(add, product);
    actions.append(
      add,
      externalLink(`https://t.me/coldnixen?text=${encodeURIComponent(`Здравствуйте! Подскажите, пожалуйста, актуальную цену, наличие и размер позиции «${product.name}».`)}`, 'Спросить у автора'),
      externalLink(product.post, product.id === 'custom' ? 'Профиль автора' : 'Канал украшений'),
    );
    copy.append(actions);
    layout.append(media, copy);
    content.append(layout);
    shell.append(bar, content);
    windowEl.append(shell);

    if (!mobileWindow) ['nw', 'ne', 'sw', 'se'].forEach((corner) => {
      const grip = node('span', `window-resize-grip window-resize-grip--${corner}`);
      grip.dataset.resize = corner;
      grip.setAttribute('aria-hidden', 'true');
      windowEl.append(grip);
    });
    desktop.append(windowEl);
    bringToFront(windowEl);
    makeFloating(windowEl);
    makeResizable(windowEl);
    syncWindowGallery(windowEl);
    window.syncWindowLock();
  }

  function moveViewer(step) {
    updateViewer(Number(photoViewer.dataset.photoIndex || 0) + step);
  }

  window.openProduct = openProductWithCarousel;
  window.syncWindowLock = syncLock;

  photoViewer.addEventListener('click', (event) => {
    if (event.target === photoViewer) photoViewer.close();
  });
  photoViewer.addEventListener('close', () => {
    resetViewerZoom();
    syncLock();
    if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  });

  viewerStage.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button') || (event.pointerType === 'mouse' && event.button !== 0)) return;
    viewerZoom.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    viewerStage.setPointerCapture?.(event.pointerId);
    if (viewerZoom.pointers.size === 1) {
      if (viewerZoom.scale > 1.001) viewerZoom.pan = { id: event.pointerId, x: event.clientX, y: event.clientY, offsetX: viewerZoom.x, offsetY: viewerZoom.y };
      else swipeStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
    } else if (viewerZoom.pointers.size === 2) {
      swipeStart = null;
      viewerZoom.pan = null;
      const points = [...viewerZoom.pointers.values()];
      viewerZoom.pinchDistance = Math.max(1, Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y));
      viewerZoom.pinchScale = viewerZoom.scale;
    }
  });
  viewerStage.addEventListener('pointermove', (event) => {
    if (!viewerZoom.pointers.has(event.pointerId)) return;
    viewerZoom.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (viewerZoom.pointers.size >= 2 && viewerZoom.pinchDistance > 0) {
      const points = [...viewerZoom.pointers.values()];
      const distance = Math.max(1, Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y));
      const center = { x: (points[0].x + points[1].x) / 2, y: (points[0].y + points[1].y) / 2 };
      setViewerZoom(viewerZoom.pinchScale * distance / viewerZoom.pinchDistance, center);
      event.preventDefault();
    } else if (viewerZoom.pan?.id === event.pointerId) {
      viewerZoom.x = viewerZoom.pan.offsetX + event.clientX - viewerZoom.pan.x;
      viewerZoom.y = viewerZoom.pan.offsetY + event.clientY - viewerZoom.pan.y;
      applyViewerZoom();
      event.preventDefault();
    }
  });
  viewerStage.addEventListener('pointerup', (event) => {
    const start = swipeStart?.id === event.pointerId ? swipeStart : null;
    const dx = start ? event.clientX - start.x : 0;
    const dy = start ? event.clientY - start.y : 0;
    viewerZoom.pointers.delete(event.pointerId);
    if (start && viewerZoom.scale <= 1.001 && Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.15) moveViewer(dx < 0 ? 1 : -1);
    if (start) swipeStart = null;
    if (viewerZoom.pointers.size < 2) viewerZoom.pinchDistance = 0;
    if (viewerZoom.pointers.size === 1 && viewerZoom.scale > 1.001) {
      const [id, point] = [...viewerZoom.pointers.entries()][0];
      viewerZoom.pan = { id, x: point.x, y: point.y, offsetX: viewerZoom.x, offsetY: viewerZoom.y };
    } else viewerZoom.pan = null;
    viewerImage.classList.toggle('is-panning', Boolean(viewerZoom.pan));
    try { viewerStage.releasePointerCapture(event.pointerId); } catch {}
  });
  viewerStage.addEventListener('pointercancel', (event) => {
    viewerZoom.pointers.delete(event.pointerId);
    viewerZoom.pinchDistance = 0; viewerZoom.pan = null; swipeStart = null;
    viewerImage.classList.remove('is-panning');
  });
  viewerStage.addEventListener('wheel', (event) => {
    if (event.target.closest('button')) return;
    event.preventDefault();
    setViewerZoom(viewerZoom.scale + (event.deltaY < 0 ? .25 : -.25), { x: event.clientX, y: event.clientY });
  }, { passive: false });
  viewerStage.addEventListener('dblclick', (event) => {
    if (event.target.closest('button')) return;
    setViewerZoom(viewerZoom.scale > 1.001 ? 1 : 2.25, { x: event.clientX, y: event.clientY });
  });

  document.addEventListener('click', (event) => {
    const viewerClose = event.target.closest('[data-viewer-close]');
    if (viewerClose) { photoViewer.close(); return; }
    const zoomButton = event.target.closest('[data-viewer-zoom]');
    if (zoomButton && photoViewer.open) {
      if (zoomButton.dataset.viewerZoom === 'reset') resetViewerZoom();
      else setViewerZoom(viewerZoom.scale + Number(zoomButton.dataset.viewerZoom) * .25);
      return;
    }
    const viewerStep = event.target.closest('[data-viewer-step]');
    if (viewerStep && photoViewer.open) { moveViewer(Number(viewerStep.dataset.viewerStep)); return; }
    const viewerDot = event.target.closest('[data-viewer-index]');
    if (viewerDot && photoViewer.open) { updateViewer(Number(viewerDot.dataset.viewerIndex)); return; }
    const photoStep = event.target.closest('[data-product-photo-step]');
    if (photoStep) {
      const windowEl = photoStep.closest('.product-window');
      if (windowEl) updateWindowPhoto(windowEl, Number(windowEl.dataset.imageIndex || 0) + Number(photoStep.dataset.productPhotoStep));
      return;
    }
    const photoDot = event.target.closest('[data-product-photo-index]');
    if (photoDot) {
      const windowEl = photoDot.closest('.product-window');
      if (windowEl) updateWindowPhoto(windowEl, Number(photoDot.dataset.productPhotoIndex));
      return;
    }
    const trigger = event.target.closest('[data-open-product-photo]');
    if (trigger) {
      const windowEl = trigger.closest('.product-window');
      if (windowEl) openViewer(windowEl, Number(trigger.dataset.photoIndex || 0));
    }
  });

  window.addEventListener('resize', applyViewerZoom, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (!photoViewer.open) return;
    if (event.key === '+' || event.key === '=') { event.preventDefault(); setViewerZoom(viewerZoom.scale + .25); return; }
    if (event.key === '-' || event.key === '_') { event.preventDefault(); setViewerZoom(viewerZoom.scale - .25); return; }
    if (event.key === '0') { event.preventDefault(); resetViewerZoom(); return; }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      event.stopImmediatePropagation();
      moveViewer(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }, true);
})();
