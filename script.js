const jewelryProducts = [
  { id: "marshall-jew-1-1", model: "Модель 1", name: "СПИРАЛЬ", image: "assets/marshall/product-display-tight/model-1-display.png", images: ["assets/marshall/product-display-tight/model-1-display.png"], icon: "assets/jewelry-icons/model-1.png", alt: "Модель 1 · СПИРАЛЬ", description: "", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/44" },
  { id: "marshall-jew-2-2", model: "Модель 2", name: "ЦВЕТОК ЖИЗНИ", image: "assets/marshall/product-display-tight/model-2-display.png", images: ["assets/marshall/product-display-tight/model-2-display.png"], icon: "assets/jewelry-icons/model-2.png", alt: "Модель 2 · ЦВЕТОК ЖИЗНИ", description: "Если вам нужен мини кастет на один палец, то пожалуйста :)", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/45" },
  { id: "marshall-jew-3-3", model: "Модель 3", name: "Ромбовидное", image: "assets/marshall/product-display-tight/model-3-display.png", images: ["assets/marshall/product-display-tight/model-3-display.png"], icon: "assets/jewelry-icons/model-3.png", alt: "Модель 3 · Ромбовидное", description: "( оно не царапает палец , все ок , сам ношу )", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/46" },
  { id: "marshall-jew-4-4", model: "Модель 4", name: "Архангел Гавриил", image: "assets/marshall/product-display-tight/model-4-display.png", images: ["assets/marshall/product-display-tight/model-4-display.png"], icon: "assets/jewelry-icons/model-4.png", alt: "Модель 4 · Архангел Гавриил", description: "Вообще сам рисунок разный . Кто то видит ангела , кто то птичку , ну а кто то жука ) Вайб немножко наследственного кольца !", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/47" },
  { id: "marshall-jew-5-5", model: "Модель 5", name: "Ренегат", image: "assets/marshall/product-display-tight/model-5-display.png", images: ["assets/marshall/product-display-tight/model-5-display.png"], icon: "assets/jewelry-icons/model-5.png", alt: "Модель 5 · Ренегат", description: "Использовал разные техники обработки с каждой стороны . Так же решил попробовать сделать матовый эффект с прозрачными пятнами поверх . Выглядит как странный кусок камня ;^)", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/48" },
  { id: "marshall-jew-6-6", model: "Модель 6", name: "Причастные", image: "assets/marshall/product-display-tight/model-6-display.png", images: ["assets/marshall/product-display-tight/model-6-display.png"], icon: "assets/jewelry-icons/model-6.png", alt: "Модель 6 · Причастные", description: "", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/49" },
  { id: "marshall-jew-7-7", model: "Модель 7", name: "Данте", image: "assets/marshall/product-display-tight/model-7-display.png", images: ["assets/marshall/product-display-tight/model-7-display.png"], icon: "assets/jewelry-icons/model-7.png", alt: "Модель 7 · Данте", description: "", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/50" },
  { id: "marshall-jew-8-8", model: "Модель 8", name: "Зубной техник", image: "assets/marshall/product-display-tight/model-8-display.png", images: ["assets/marshall/product-display-tight/model-8-display.png"], icon: "assets/jewelry-icons/model-8.png", alt: "Модель 8 · Зубной техник", description: "Кольцо тесно связано с моей профессией . Я моделирую импланты в 3д и в связи с этим появилось кольцо якобы в закрытом боксе ( то есть в мониторе ) .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/85" },
  { id: "marshall-jew-9-9", model: "Модель 9", name: "Цветок жизни v2", image: "assets/marshall/product-display-tight/model-9-display.png", images: ["assets/marshall/product-display-tight/model-9-display.png"], icon: "assets/jewelry-icons/model-9.png", alt: "Модель 9 · Цветок жизни v2", description: "Идея заключается в бытие паинта 3д, где я регулярно рисую и делаю объекты плоскими и сжатыми , как этот цветок .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/86" },
  { id: "marshall-jew-10-10", model: "Модель 10", name: "Кресты", image: "assets/marshall/product-display-tight/model-10-display.png", images: ["assets/marshall/product-display-tight/model-10-display.png"], icon: "assets/jewelry-icons/model-10.png", alt: "Модель 10 · Кресты", description: "Четыре креста , разная история , разная культура , но одна идея .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/87" },
  { id: "marshall-jew-11-11", model: "Модель 11", name: "Терновое кольцо", image: "assets/marshall/product-display-tight/model-11-retouched-display.png", images: ["assets/marshall/product-display-tight/model-11-retouched-display.png"], icon: "assets/jewelry-icons/model-11.png", alt: "Модель 11 · Терновое кольцо", description: "Посыл Иисуса и его финал . Отсутствие шипов ведет к тому , что страдать уже «не модно» .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/88", video: "video/telegram-model-11.mp4" },
  { id: "marshall-jew-12-12", model: "Модель 12", name: "Надгробный крест", image: "assets/marshall/product-display-tight/model-12-openings-display.png", images: ["assets/marshall/product-display-tight/model-12-openings-display.png"], icon: "assets/jewelry-icons/model-12.png", alt: "Модель 12 · Надгробный крест", description: "Готика и многослойность. Смысл в акцентных деталях и силуэте , как раз то , на чем сейчас базируется мода .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/89", video: "video/tomb-cross.mp4" },
  { id: "marshall-jew-13-13", model: "Модель 13", name: "Скуфья", image: "assets/marshall/product-display-tight/model-13-display.png", images: ["assets/marshall/product-display-tight/model-13-display.png"], icon: "assets/jewelry-icons/model-13.png", alt: "Модель 13 · Скуфья", description: "Тема религии очень сильна осела в моем творчестве. Впервые я услышал о разности , и названиях церковных головных уборах в труднодоступном монастыре , в горах Грузии .\nОтсюда и такая форма высеченного камня по кругу и акцентным - якобы головным убором .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/90", video: "video/skufia.mp4" },
  { id: "marshall-jew-14-14", model: "Модель 14", name: "Цветочки 2", image: "assets/marshall/product-display-tight/model-14-openings-display.png", images: ["assets/marshall/product-display-tight/model-14-openings-display.png"], icon: "assets/jewelry-icons/model-14.png", alt: "Модель 14 · Цветочки 2", description: "Кольцо вдохновлено переизбытком и однообразностью флористики .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/91" },
  { id: "marshall-jew-15-15", model: "Модель 15", name: "Напоминание", image: "assets/marshall/product-display-tight/model-15-display.png", images: ["assets/marshall/product-display-tight/model-15-display.png"], icon: "assets/jewelry-icons/model-15.png", alt: "Модель 15 · Напоминание", description: "Я пытался восстановить силуэт - обоев комнаты своего родственника , с восточной атмосферой спроецировать это все на кольцо .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/92" },
  { id: "marshall-jew-16-16", model: "Модель 16", name: "Двойное", image: "assets/marshall/product-display-tight/model-16-display.png", images: ["assets/marshall/product-display-tight/model-16-display.png"], icon: "assets/jewelry-icons/model-16.png", alt: "Модель 16 · Двойное", description: "Случайный дизайн, когда я загружал модели они наслоились друг на друга и волей случая все так и осталось с небольшой доработкой .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/93" },
  { id: "marshall-jew-17-17", model: "Модель 17", name: "Холодный Сименс", image: "assets/marshall/product-display-tight/model-17-retouched-display.png", images: ["assets/marshall/product-display-tight/model-17-retouched-display.png"], icon: "assets/jewelry-icons/model-17.png", alt: "Модель 17 · Холодный Сименс", description: "Эстетика Нокиа будет еще очень долгим референсом . И я не стал исключением , кольцо полностью вдохновлено телефоном . На нем расположена микросхема и легендарная заставка , ну и конечно же сам кирпич.", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/94", video: "video/cold-siemens.mp4" },
  { id: "marshall-jew-18-18", model: "Модель 18", name: "Сердце", image: "assets/marshall/product-display-tight/model-18-openings-display.png", images: ["assets/marshall/product-display-tight/model-18-openings-display.png"], icon: "assets/jewelry-icons/model-18.png", alt: "Модель 18 · Сердце", description: "Кольцо в стиле трайбл и ассоциирует форму сердца с внутренними пробелами отсылая на то , что сейчас многие стали бессердечными .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/95" },
  { id: "marshall-jew-19-19", model: "Модель 19", name: "Крест простой", image: "assets/marshall/product-display-tight/model-19-display.png", images: ["assets/marshall/product-display-tight/model-19-display.png"], icon: "assets/jewelry-icons/model-19.png", alt: "Модель 19 · Крест простой", description: "Крест простой , еще с узорами .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/96" },
  { id: "marshall-jew-20-20", model: "Модель 20", name: "Кость будущего", image: "assets/marshall/product-display-tight/model-20-openings-display.png", images: ["assets/marshall/product-display-tight/model-20-openings-display.png"], icon: "assets/jewelry-icons/model-20.png", alt: "Модель 20 · Кость будущего", description: "Довольно интересное кольцо с точки зрения функционала . Его можно носить на передней фаланге спокойно . Внутри кольца небольшой , не мешающей носке - загиб . Он и позволяет кольцу быть фиксированным , даже при тряске рукой ( если вы не ошиблись с размером )", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/97", video: "video/future-bone.mp4" },
  { id: "marshall-jew-21-22", model: "Модели 21–22", name: "Старинное 1", image: "assets/marshall/product-display-tight/model-21-22-01-openings-display.png", images: ["assets/marshall/product-display-tight/model-21-22-01-openings-display.png", "assets/marshall/product-display-tight/model-21-22-02-openings-display.png"], icon: "assets/jewelry-icons/model-21-22-01.png", alt: "Модели 21–22 · Старинное 1", description: "Как то раз у моего знакомого упала бабушка , разбив все камни на кольце . Отсюда и идея почему бы не сделать кольца будто в них нет камней. Мысль заключается в том , что каркас ( фундамент ) это и есть само совершенство, а не брюлики .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/98" },
  { id: "marshall-jew-23-23", model: "Модель 23", name: "Божественная Комедия ( архитектура )", image: "assets/marshall/product-display-tight/model-23-openings-display.png", images: ["assets/marshall/product-display-tight/model-23-openings-display.png"], icon: "assets/jewelry-icons/model-23.png", alt: "Модель 23 · Божественная Комедия ( архитектура )", description: "Кольцо с перевернутой картой Ада . Когда я смотрел Бэтмен против Супермена , то увидел , как картину демоны и ангелы переворачивает Лекс Лютор - ссылая на то ,что ангелы тоже могут быть воинственны . После этого у меня появилась привычка , иногда переворачивать картины и видеть новые смыслы .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/100" },
  { id: "marshall-jew-24-24", model: "Модель 24", name: "Волна", image: "assets/marshall/product-display-tight/model-24-display.png", images: ["assets/marshall/product-display-tight/model-24-display.png"], icon: "assets/jewelry-icons/model-24.png", alt: "Модель 24 · Волна", description: "Символы , инициалы и однородный шрифт . Попытка освежить память о Ките Харине .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/101" },
  { id: "marshall-jew-25-25", model: "Модель 25", name: "Двуглавый орел", image: "assets/marshall/product-display-tight/model-25-display.png", images: ["assets/marshall/product-display-tight/model-25-display.png"], icon: "assets/jewelry-icons/model-25.png", alt: "Модель 25 · Двуглавый орел", description: "Как то я посещал корпус Бенуа в русском музеи . Именно тогда случилась любовь к кубизму и простым формам . Выйдя из музе я случайно увидел небольшое построение ребят из военного училища с флагами Орлов . Отсюда такая и смесь ( Двуглавый орел — это древний символ, означающий государственное могущество, единство, суверенитет и верховную власть )", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/102" },
  { id: "marshall-jew-26-26", model: "Модель 26", name: "Метеор литья", image: "assets/marshall/product-display-tight/model-26-openings-display.png", images: ["assets/marshall/product-display-tight/model-26-openings-display.png"], icon: "assets/jewelry-icons/model-26.png", alt: "Модель 26 · Метеор литья", description: "Кольцо из легко плавленного металла «Олово» . Это полностью ручное изделие выполненное на кухне буквально за час времени . Отсюда и такая цена ! Важно знать - каждое кольцо будет сугубо индивидуально связи с отсутствием макета. ( партия ограничена ) .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/103", video: "video/casting-meteor.mp4" },
  { id: "marshall-jew-27-27", model: "Модель 27", name: "Булава", image: "assets/marshall/product-display-tight/model-27-display.png", images: ["assets/marshall/product-display-tight/model-27-display.png"], icon: "assets/jewelry-icons/model-27.png", alt: "Модель 27 · Булава", description: "Оружие которое мне сильно нравилось в играх . Я решил преобразить его наконечник в мини кастет ( не несет злых помыслов ) .", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/104" },
  { id: "marshall-jew-28-28", model: "Модель 28", name: "Храм Христа Спасителя", image: "assets/marshall/product-display-tight/model-28-openings-display.png", images: ["assets/marshall/product-display-tight/model-28-openings-display.png"], icon: "assets/jewelry-icons/model-28-openings.png", alt: "Модель 28 · Храм Христа Спасителя", description: "", price: "4 700–7 900 ₽ · зависит от размера", post: "https://t.me/marshaljew/111" }
];
const customProduct =   { id: "custom", model: "CUSTOM", name: "Кастом", image: "assets/marshall/product-display-tight/custom-order-cover.webp", icon: "assets/marshall/product-display-tight/custom-order-cover.webp", alt: "Кольцо-вопрос — иллюстрация кастомного заказа Artem Marshal", description: "Можно заказать кастомное изделие по собственной идее: обсудим форму, символы, материал, размер и способ производства.", price: "от 3.450 ₽", post: "https://t.me/coldnixen" };
const allProducts = [...jewelryProducts, customProduct];
const desktopProducts = [...allProducts];
const productById = new Map(allProducts.map((product) => [product.id, product]));
const musicTracks = [
  { title: 'Rennegat · Clear Sky', file: 'assets/music/rennegat-clear-sky.mp3' },
  { title: 'Jew', file: 'assets/music/jew.mp3' },
  { title: 'Artem Marshal · Radio Меченый', file: 'assets/music/radio-mecheny.mp3' },
  { title: 'Artem Marshal · Radio зовёт!', file: 'assets/music/radio-zovet.mp3' },
  { title: '26.04.1986', file: 'assets/music/track.mp3' }
];
let musicIndex = 0;
let ambientAudio = null;
const desktop = document.querySelector('#desktop');
const iconArea = document.querySelector('.desktop-icons');
const dock = document.querySelector('#dock');
const audioToggle = document.querySelector('#audio-toggle');
const dialog = document.querySelector('#app-window');
const dialogTitle = document.querySelector('#window-title');
const dialogContent = document.querySelector('#window-content');
const backButton = document.querySelector('[data-back]');
const cartBadge = document.querySelector('#cart-badge');
const cartCountText = document.querySelector('#cart-count-text');
const cartStorageKey = 'marshaljew-cart-v3';
let cart = loadCart();
let floatingLayer = 50;

function node(tag, className, text) { const element = document.createElement(tag); if (className) element.className = className; if (text !== undefined) element.textContent = text; return element; }
function iconUse(id) { const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('aria-hidden', 'true'); const use = document.createElementNS('http://www.w3.org/2000/svg', 'use'); use.setAttribute('href', `#${id}`); svg.append(use); return svg; }
function loadCart() { try { const saved = JSON.parse(localStorage.getItem(cartStorageKey) || '{}'); return Object.fromEntries(Object.entries(saved || {}).filter(([id, quantity]) => productById.has(id) && Number(quantity) > 0).map(([id, quantity]) => [id, Math.min(99, Math.floor(Number(quantity)))])); } catch { return {}; } }
function saveCart() { try { localStorage.setItem(cartStorageKey, JSON.stringify(cart)); } catch {} }
function cartCount() { return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0); }
function russianPlural(count, one, few, many) { const lastTwo = count % 100; const last = count % 10; if (lastTwo >= 11 && lastTwo <= 14) return many; if (last === 1) return one; if (last >= 2 && last <= 4) return few; return many; }
function updateCartBadge() { const count = cartCount(); cartBadge.hidden = !count; cartBadge.textContent = count > 99 ? '99+' : String(count); cartCountText.textContent = count ? `В корзине ${count} ${russianPlural(count, 'изделие', 'изделия', 'изделий')}` : 'Корзина пуста'; }
function markRunning(app) { document.querySelectorAll('.dock-app[data-app]').forEach((item) => item.classList.toggle('is-running', Boolean(app) && item.dataset.app === app)); }
function externalLink(href, text, primary = false) { const link = node('a', primary ? 'window-action' : ''); link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.append(node('span', '', text), iconUse('i-external')); return link; }
function musicSocialLink(href, label, brand) {
  const link = externalLink(href, label, true);
  link.classList.add('music-social-link', `music-social-link--${brand}`);
  const icon = node('span', `music-social-icon music-social-icon--${brand}`);
  if (brand === 'vk') icon.textContent = 'VK';
  else {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 44 30'); svg.setAttribute('aria-hidden', 'true');
    const cloud = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    cloud.setAttribute('d', 'M9 24h22a7 7 0 0 0 0-14 10 10 0 0 0-19-2A8 8 0 0 0 9 24Z'); cloud.setAttribute('fill', 'currentColor');
    svg.append(cloud);
    [[5, 17, 2, 7], [1, 18, 2, 5], [35, 16, 2, 9], [39, 17, 2, 7]].forEach(([x, y, width, height]) => {
      const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      bar.setAttribute('x', x); bar.setAttribute('y', y); bar.setAttribute('width', width); bar.setAttribute('height', height); bar.setAttribute('rx', 1); bar.setAttribute('fill', 'currentColor'); svg.append(bar);
    });
    icon.append(svg);
  }
  link.prepend(icon);
  return link;
}
function updateAudioToggle() { if (!audioToggle || !ambientAudio) return; const muted = ambientAudio.muted; audioToggle.classList.toggle('is-muted', muted); audioToggle.setAttribute('aria-label', muted ? 'Включить звук фоновой музыки' : 'Заглушить фоновую музыку'); const label = audioToggle.querySelector('span'); if (label) label.textContent = muted ? 'Звук выкл.' : 'Звук вкл.'; }
function getAmbientAudio() { if (ambientAudio) return ambientAudio; ambientAudio = document.createElement('audio'); ambientAudio.id = 'ambient-audio'; ambientAudio.preload = 'auto'; ambientAudio.volume = .28; ambientAudio.muted = true; ambientAudio.addEventListener('ended', () => playTrack((musicIndex + 1) % musicTracks.length)); ambientAudio.addEventListener('loadeddata', updateAudioToggle); document.body.append(ambientAudio); updateAudioToggle(); return ambientAudio; }
function playTrack(index = musicIndex) { musicIndex = (index + musicTracks.length) % musicTracks.length; const audio = getAmbientAudio(); const muted = audio.muted; audio.src = musicTracks[musicIndex].file; audio.muted = muted; const promise = audio.play(); if (promise?.catch) promise.catch(() => {}); updateAudioToggle(); return audio; }
function unlockAmbientAudio() { const audio = getAmbientAudio(); if (!audio.src) audio.src = musicTracks[musicIndex].file; if (!audio.muted) audio.volume = .28; const promise = audio.play(); if (promise?.catch) promise.catch(() => {}); updateAudioToggle(); }
function toggleAmbientAudio() { const audio = getAmbientAudio(); audio.muted = !audio.muted; if (!audio.muted) { audio.volume = .28; const promise = audio.play(); if (promise?.catch) promise.catch(() => {}); } updateAudioToggle(); }
audioToggle?.addEventListener('click', (event) => { event.stopPropagation(); toggleAmbientAudio(); });
window.addEventListener('pointerdown', unlockAmbientAudio, { once: true, passive: true });
window.addEventListener('keydown', unlockAmbientAudio, { once: true });
function syncWindowLock() { document.body.classList.toggle('has-window-open', Boolean(dialog?.open || document.querySelector('.product-window'))); }
function openDialog(title, view, returnView = '') { dialogTitle.textContent = title; dialogContent.replaceChildren(); dialog.dataset.view = view; dialog.dataset.returnView = returnView; backButton.hidden = !returnView; if (!dialog.open) dialog.show(); syncWindowLock(); }

function renderDesktop() {
  desktop.classList.toggle('dense-catalog', desktopProducts.length > 24); iconArea.replaceChildren();
  let page; orderedDesktopProducts().forEach((product, index) => {
    if (index % 16 === 0) { page = node('div', 'desktop-page'); page.dataset.page = String(Math.floor(index / 16) + 1); iconArea.append(page); }
    const button = node('button', 'jewel-icon jewelry-icon'); button.type = 'button'; button.dataset.product = product.id; button.dataset.depth = String(.28 + (index % 6) * .1); button.setAttribute('aria-haspopup', 'dialog'); button.setAttribute('aria-label', `Открыть ${product.name}`); button.title = 'Перетащите в корзину · перетащите в другое место, чтобы переставить · нажмите, чтобы открыть';
    const columns = desktopProducts.length > 24 ? 7 : 5; const col = index % columns; const row = Math.floor(index / columns); const rowStep = desktopProducts.length > 24 ? 11.5 : 25; button.style.left = `${1 + col * (98 / columns)}%`; button.style.top = `${3 + row * rowStep}%`;
    const photo = node('span', 'icon-photo'); const image = node('img'); image.src = product.icon; image.alt = ''; image.loading = index < 5 ? 'eager' : 'lazy'; photo.append(image, node('span', 'icon-glint'));
    const label = node('span', 'icon-label'); label.append(node('small', '', product.model.toUpperCase()), node('strong', '', product.id === 'custom' ? 'Кастом · от 3.450 ₽' : product.name)); button.append(photo, label); page.append(button);
  });
  const pageIndicator = document.querySelector('#desktop-page-indicator'); if (pageIndicator) { pageIndicator.replaceChildren(...[...iconArea.querySelectorAll('.desktop-page')].map((page, index) => node('span', index === 0 ? 'is-active' : ''))); if (!iconArea.dataset.pageScrollBound) { iconArea.addEventListener('scroll', () => { const active = Math.round(iconArea.scrollLeft / Math.max(1, iconArea.clientWidth)); pageIndicator.querySelectorAll('span').forEach((dot, index) => dot.classList.toggle('is-active', index === active)); }, { passive: true }); iconArea.dataset.pageScrollBound = 'true'; } }
  const brandName = document.querySelector('.brand-copy strong'); if (brandName) brandName.textContent = 'Artem Marshal';
  document.querySelector('.desktop-status').innerHTML = `<span class="status-light"></span><span>КАТАЛОГ</span><b>${allProducts.length}</b>`;
  desktop.querySelector('.desktop-signature').innerHTML = '<span>Артём Маршал</span><i aria-hidden="true"></i><span>@MARSHALJEW</span>';
  applyDesktopPositions();
}
function productButton(product) { const button = node('button', 'window-product'); button.type = 'button'; button.dataset.product = product.id; button.setAttribute('aria-haspopup', 'dialog'); const image = node('img'); image.src = product.icon; image.alt = product.alt; image.loading = 'lazy'; button.append(image, node('strong', '', `${product.model} · ${product.name}`), node('small', '', product.price)); return button; }
function openPhotos() { openDialog('Фото · все изделия', 'photos'); const intro = node('p', 'window-intro'); intro.append(node('span', '', `ARTEM MARSHAL · ${allProducts.length} ПОЗИЦИЙ`), node('span', '', 'ВЫБЕРИТЕ ОБЪЕКТ')); const grid = node('div', 'window-grid gallery-grid'); allProducts.forEach((product) => grid.append(productButton(product))); dialogContent.append(intro, grid); markRunning('photos'); }
function openNotes() {
  openDialog('Заметки · условия и производство', 'notes');
  const note = node('article', 'note-window');
  note.append(
    node('p', 'note-date', 'ARTEM MARSHAL · JEWELRY'),
    node('h3', '', 'Перед заказом'),
    node('p', '', 'Заказ оформляется через личные сообщения @coldnixen в Telegram. Напишите название украшения, нужный размер, город и желаемый способ получения. До оплаты подтвердите актуальную цену, наличие, срок изготовления или готовности и условия доставки: публикации канала могут обновляться, а цена зависит от модели и размера.'),
    node('h3', '', 'Ювелирное производство и качество'),
    node('p', '', 'В канале Artem Marshal автор описывает производство через селективную печать. Каждый размер создаётся под конкретного покупателя, включая нестандартные значения вроде 18,7. По информации автора, для коллекции «Вопреки Обитель» используется кобальт-хром; свойства металла и особенности ухода уточняйте перед заказом.'),
    node('p', '', 'Цены, размеры и сроки подтверждаются индивидуально. В публикациях встречаются ограниченные тиражи; некоторые изделия выполняются вручную и могут отличаться друг от друга.'),
    node('h3', '', 'Что проверить перед оплатой'),
    node('p', '', '1) название и актуальную цену; 2) размер и посадку; 3) материал и уход; 4) наличие или срок изготовления; 5) доставку; 6) возможность возврата или корректировки заказа. Корзина на сайте собирает заявку и не является оплатой — окончательные условия подтверждаются автором в переписке.'),
    node('p', 'note-source', 'Сводка составлена по публичным публикациям @marshaljew; сведения о производстве и материалах принадлежат автору канала.'),
    externalLink('https://t.me/marshaljew', 'Канал украшений @marshaljew', true),
    node('h3', '', 'Одежда от Marshal'),
    node('p', '', 'Новости и ассортимент магазина одежды размещаются в отдельном Telegram-канале.'),
    externalLink('https://t.me/artplai', 'Магазин одежды ArtPlai · Telegram', true)
  );
  dialogContent.append(note);
  markRunning('notes');
}
function openMusic() {
  openDialog('Авторские материалы · музыка', 'music');
  const note = node('article', 'note-window music-window');
  const cover = node('img', 'music-album-cover');
  cover.src = 'assets/music/album-cover.webp';
  cover.alt = 'Авторская музыка Artem Marshal';
  cover.loading = 'lazy';
  note.append(node('p', 'note-date', 'ARTEM MARSHAL · АВТОРСКИЕ МАТЕРИАЛЫ'), node('h3', '', 'АЛЬБОМ System Requires (ген-код)'), cover);
  const audio = getAmbientAudio();
  audio.controls = true;
  audio.className = 'ambient-player';
  note.append(audio);
  const list = node('div', 'music-track-list');
  musicTracks.forEach((track, index) => {
    const button = node('button', `music-track ${index === musicIndex ? 'is-active' : ''}`);
    button.type = 'button';
    button.dataset.track = String(index);
    button.append(node('span', 'music-track-number', String(index + 1).padStart(2, '0')), node('span', 'music-track-title', track.title), node('span', 'music-track-action', 'PLAY'));
    list.append(button);
  });
  const socialLinks = node('div', 'music-social-links');
  socialLinks.append(
    musicSocialLink('https://vk.ru/music?z=audio_playlist-2000518084_29518084&access_key=696d1ccc7aeb05a82d', 'Открыть дискографию', 'vk'),
    musicSocialLink('https://on.soundcloud.com/5bZbYk99JYvyQmMyGi', 'Открыть Dj Set', 'soundcloud'),
  );
  note.append(list, socialLinks);
  dialogContent.append(note);
  markRunning('music');
}

function syncAddButton(button, product, justAdded = false) { const count = cart[product.id] || 0; button.replaceChildren(iconUse('i-cart'), node('span', '', justAdded ? `Добавлено · ${count} шт.` : count ? 'В корзине · добавить ещё' : 'Добавить в корзину')); }
function appendTelegramVideoEmbed(panel, postUrl, product) {
  const embed = node('div', 'telegram-video-embed');
  embed.setAttribute('role', 'group');
  embed.setAttribute('aria-label', `Видео изделия ${product.name} из Telegram`);
  const widget = document.createElement('script');
  widget.async = true;
  widget.src = 'https://telegram.org/js/telegram-widget.js?24';
  widget.dataset.telegramPost = new URL(postUrl).pathname.replace(/^\/+/, '');
  widget.dataset.width = '100%';
  widget.dataset.userpic = 'false';
  const fallback = node('a', 'telegram-video-fallback', 'Открыть видео в Telegram ↗');
  fallback.href = postUrl;
  fallback.target = '_blank';
  fallback.rel = 'noopener noreferrer';
  embed.append(fallback, widget);
  panel.append(embed);
}
function getTelegramVideoPostUrl(product) {
  return product && !product.video && typeof product.id === 'string' && product.id.startsWith('marshall-jew-') && /^https:\/\/t\.me\/marshaljew\/\d+$/.test(product.post)
    ? product.post
    : '';
}
window.getTelegramVideoPostUrl = getTelegramVideoPostUrl;
window.appendTelegramVideoEmbed = appendTelegramVideoEmbed;
function openProduct(product, source = 'desktop') {
  const videoPostUrl = getTelegramVideoPostUrl(product);
  const hasVideo = Boolean(product.video || videoPostUrl);
  const windowEl = node('article', `app-window product-window floating-window ${source === 'photos' ? 'catalog-window' : 'desktop-window'}${hasVideo ? ' has-product-video' : ''}`);
  windowEl.dataset.productWindow = product.id;
  windowEl.dataset.navigation = source;
  const openCount = document.querySelectorAll('.product-window').length;
  const mobileWindow = window.matchMedia('(max-width: 760px)').matches;
  windowEl.style.left = `${mobileWindow ? 6 + (openCount % 3) * 12 : Math.max(18, 8 + (openCount % 4) * 42)}px`;
  windowEl.style.top = `${mobileWindow ? 62 + (openCount % 3) * 22 : Math.max(62, 92 + (openCount % 4) * 30)}px`;

  const shell = node('div', 'window-shell');
  const bar = node('header', 'window-bar');
  const controls = node('div', 'window-controls');
  const close = node('button', 'traffic-light traffic-close', '');
  close.type = 'button'; close.dataset.windowClose = '';
  close.setAttribute('aria-label', 'Закрыть окно'); close.append(iconUse('i-close'));
  controls.append(close, node('span', 'traffic-light traffic-minimize'), node('span', 'traffic-light traffic-expand'));
  const heading = node('div', 'window-heading');
  heading.append(node('small', '', source === 'photos' ? 'ГАЛЕРЕЯ ИЗДЕЛИЙ' : 'АВТОРСКОЕ ИЗДЕЛИЕ'), node('h2', '', product.name));
  const navigation = node('div', 'window-nav');
  if (source === 'photos') {
    const previous = node('button', 'window-nav-button', '‹');
    previous.type = 'button'; previous.dataset.photoNav = 'prev'; previous.setAttribute('aria-label', 'Предыдущее изделие');
    const next = node('button', 'window-nav-button', '›');
    next.type = 'button'; next.dataset.photoNav = 'next'; next.setAttribute('aria-label', 'Следующее изделие');
    navigation.append(previous, next);
  }
  bar.append(controls, heading, navigation);

  const content = node('div', 'window-content');
  const layout = node('article', 'detail-view');
  const media = node('div', `detail-media${hasVideo ? ' detail-media--with-video' : ''}`);
  const mediaRow = node('div', `detail-media-row${hasVideo ? ' detail-media-row--with-video' : ''}`);
  const stage = node('div', 'detail-photo-stage');
  const imagePaths = product.images?.length ? product.images : [product.image];
  const image = node('img', 'detail-photo');
  image.src = imagePaths[0] || product.icon;
  image.alt = product.alt;
  image.draggable = false;
  image.onerror = () => { image.onerror = null; if (product.icon) image.src = product.icon; };
  stage.append(image);
  mediaRow.append(stage);
  if (hasVideo) {
    const videoPanel = node('div', 'product-video-panel');
    videoPanel.append(node('span', 'video-label', 'ВИДЕО ИЗДЕЛИЯ'));
    if (product.video) {
      const video = node('video', 'product-video');
      video.src = product.video; video.controls = true; video.playsInline = true; video.preload = 'metadata';
      video.setAttribute('aria-label', `Видео кольца ${product.name}`);
      videoPanel.append(video);
    } else {
      appendTelegramVideoEmbed(videoPanel, videoPostUrl, product);
    }
    mediaRow.append(videoPanel);
  }
  media.append(
    mediaRow,
    node('div', 'detail-media-caption', imagePaths.length > 1 ? `ФОТО 1 ИЗ ${imagePaths.length}` : hasVideo ? 'ФОТО И ВИДЕО' : 'ФОТО ИЗДЕЛИЯ')
  );

  const copy = node('div', 'detail-copy');
  copy.append(node('p', 'detail-kicker', 'АВТОРСКОЕ УКРАШЕНИЕ'));
  if (product.description?.trim()) copy.append(node('p', 'detail-description', product.description));
  const facts = node('div', 'detail-facts');
  const price = node('div', 'detail-fact'); price.append(node('small', '', 'Стоимость'), node('strong', '', product.price));
  const size = node('div', 'detail-fact'); size.append(node('small', '', 'Наличие / размер'), node('strong', '', 'Изготовление под размер'));
  facts.append(price, size);
  copy.append(facts, node('p', 'price-warning', 'Точную стоимость, наличие и сроки изготовления подтвердите у автора.'));
  const actions = node('div', 'detail-actions');
  const add = node('button', 'window-action cart-add'); add.type = 'button'; add.dataset.cartAdd = product.id; syncAddButton(add, product);
  actions.append(add,
    externalLink(`https://t.me/coldnixen?text=${encodeURIComponent(`Здравствуйте! Подскажите, пожалуйста, актуальную цену, наличие и размер позиции «${product.name}».`)}`, 'Спросить у автора'),
    externalLink(product.post, product.id === 'custom' ? 'Профиль автора' : 'Пост изделия в Telegram')
  );
  copy.append(actions);
  layout.append(media, copy); content.append(layout); shell.append(bar, content); windowEl.append(shell);
  if (!mobileWindow) ['nw', 'ne', 'sw', 'se'].forEach((corner) => {
    const grip = node('span', `window-resize-grip window-resize-grip--${corner}`);
    grip.dataset.resize = corner; grip.setAttribute('aria-hidden', 'true'); windowEl.append(grip);
  });
  desktop.append(windowEl); bringToFront(windowEl); makeFloating(windowEl); makeResizable(windowEl); makePhotoGestures(windowEl); syncWindowLock();
}
function bringToFront(windowEl) { document.querySelectorAll('.product-window').forEach((item) => item.classList.remove('is-front')); windowEl.classList.add('is-front'); windowEl.style.zIndex = String(++floatingLayer); }
function makeFloating(windowEl) { const bar = windowEl.querySelector('.window-bar'); let drag = null; windowEl.addEventListener('pointerdown', () => bringToFront(windowEl), true); bar.addEventListener('pointerdown', (event) => { if (event.target.closest('button')) return; const rect = windowEl.getBoundingClientRect(); drag = { id: event.pointerId, x: event.clientX, y: event.clientY, left: rect.left, top: rect.top }; bar.setPointerCapture?.(event.pointerId); event.preventDefault(); }); bar.addEventListener('pointermove', (event) => { if (!drag || drag.id !== event.pointerId) return; const maxLeft = Math.max(8, window.innerWidth - windowEl.offsetWidth - 8); const maxTop = Math.max(54, window.innerHeight - windowEl.offsetHeight - 70); windowEl.style.left = `${Math.min(maxLeft, Math.max(8, drag.left + event.clientX - drag.x))}px`; windowEl.style.top = `${Math.min(maxTop, Math.max(54, drag.top + event.clientY - drag.y))}px`; }); const end = () => { drag = null; }; bar.addEventListener('pointerup', end); bar.addEventListener('pointercancel', end); }
function makeResizable(windowEl) { const grips = windowEl.querySelectorAll('[data-resize]'); if (!grips.length) return; grips.forEach((grip) => { let resize = null; grip.addEventListener('pointerdown', (event) => { event.preventDefault(); event.stopPropagation(); bringToFront(windowEl); const rect = windowEl.getBoundingClientRect(); resize = { id: event.pointerId, corner: grip.dataset.resize, x: event.clientX, y: event.clientY, left: rect.left, top: rect.top, width: rect.width, height: rect.height }; grip.setPointerCapture?.(event.pointerId); }); grip.addEventListener('pointermove', (event) => { if (!resize || resize.id !== event.pointerId) return; const dx = event.clientX - resize.x; const dy = event.clientY - resize.y; const minWidth = 330; const minHeight = 250; let left = resize.left; let top = resize.top; let width = resize.width; let height = resize.height; if (resize.corner.includes('e')) width = Math.max(minWidth, resize.width + dx); if (resize.corner.includes('s')) height = Math.max(minHeight, resize.height + dy); if (resize.corner.includes('w')) { width = Math.max(minWidth, resize.width - dx); left = resize.left + resize.width - width; } if (resize.corner.includes('n')) { height = Math.max(minHeight, resize.height - dy); top = resize.top + resize.height - height; } const maxWidth = window.innerWidth - left - 8; const maxHeight = window.innerHeight - top - 70; windowEl.style.width = `${Math.min(width, maxWidth)}px`; windowEl.style.height = `${Math.min(height, maxHeight)}px`; windowEl.style.maxWidth = 'none'; windowEl.style.maxHeight = 'none'; windowEl.style.left = `${Math.max(8, left)}px`; windowEl.style.top = `${Math.max(54, top)}px`; }); const end = () => { resize = null; }; grip.addEventListener('pointerup', end); grip.addEventListener('pointercancel', end); }); }
 function makePhotoGestures(windowEl) { const stage = windowEl.querySelector('.detail-photo-stage'); const image = windowEl.querySelector('.detail-photo-gallery') || windowEl.querySelector('.detail-photo'); if (!stage || !image) return; const pointers = new Map(); const state = { scale: 1, x: 0, y: 0, startDistance: 0, startScale: 1, dragX: 0, dragY: 0, startX: 0, startY: 0 }; const clampPan = () => { const extraX = Math.max(0, (stage.clientWidth * state.scale - stage.clientWidth) / 2); const extraY = Math.max(0, (stage.clientHeight * state.scale - stage.clientHeight) / 2); state.x = clamp(state.x, -extraX, extraX); state.y = clamp(state.y, -extraY, extraY); }; const apply = () => { clampPan(); image.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`; stage.classList.toggle('is-zoomed', state.scale > 1.01); stage.classList.toggle('is-panning', state.scale > 1.01); }; const distance = () => { const points = [...pointers.values()]; return points.length < 2 ? 0 : Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y); }; stage.addEventListener('pointerdown', (event) => { if (!event.target.closest('.detail-photo')) return; pointers.set(event.pointerId, { x: event.clientX, y: event.clientY }); stage.setPointerCapture?.(event.pointerId); if (pointers.size === 1) { state.startX = event.clientX; state.startY = event.clientY; state.dragX = state.x; state.dragY = state.y; } else if (pointers.size === 2) { state.startDistance = distance(); state.startScale = state.scale; } event.preventDefault(); }); stage.addEventListener('pointermove', (event) => { if (!pointers.has(event.pointerId)) return; pointers.set(event.pointerId, { x: event.clientX, y: event.clientY }); if (pointers.size >= 2) state.scale = clamp(state.startScale * (distance() / Math.max(1, state.startDistance)), 1, 4); else if (state.scale > 1) { state.x = state.dragX + event.clientX - state.startX; state.y = state.dragY + event.clientY - state.startY; } apply(); }); const end = (event) => { pointers.delete(event.pointerId); if (pointers.size < 2) state.startDistance = 0; if (!pointers.size && state.scale <= 1.01) { state.scale = 1; state.x = 0; state.y = 0; } apply(); }; stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end); stage.addEventListener('wheel', (event) => { event.preventDefault(); state.scale = clamp(state.scale * Math.exp(-event.deltaY * .0025), 1, 4); if (state.scale <= 1.01) { state.scale = 1; state.x = 0; state.y = 0; } apply(); }, { passive: false }); }
document.addEventListener('click', (event) => { const navigation = event.target.closest('[data-photo-nav]'); if (navigation) { const windowEl = navigation.closest('.product-window'); if (!windowEl || windowEl.dataset.navigation !== 'photos') return; const currentIndex = allProducts.findIndex((product) => product.id === windowEl.dataset.productWindow); const step = navigation.dataset.photoNav === 'prev' ? -1 : 1; const nextProduct = allProducts[(currentIndex + step + allProducts.length) % allProducts.length]; windowEl.remove(); (window.openProduct || openProduct)(nextProduct, 'photos'); return; } const trackButton = event.target.closest('[data-track]'); if (trackButton) { musicIndex = Number(trackButton.dataset.track); const audio = playTrack(musicIndex); audio.muted = false; updateAudioToggle(); document.querySelectorAll('.music-track').forEach((item) => item.classList.toggle('is-active', item === trackButton)); } });
document.addEventListener('keydown', (event) => { const windowEl = document.querySelector('.product-window.is-front'); if (!windowEl || windowEl.dataset.navigation !== 'photos' || event.target.closest('input, textarea, select, button, a')) return; if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); const currentIndex = allProducts.findIndex((product) => product.id === windowEl.dataset.productWindow); const step = event.key === 'ArrowLeft' ? -1 : 1; windowEl.remove(); (window.openProduct || openProduct)(allProducts[(currentIndex + step + allProducts.length) % allProducts.length], 'photos'); } });
function openCart() { openDialog('Корзина покупок', 'cart'); const entries = allProducts.filter((product) => cart[product.id]).map((product) => [product, cart[product.id]]); dialogContent.append(node('div', 'cart-intro', `ЗАЯВКА · ${cartCount()} ИЗДЕЛИЙ`)); if (!entries.length) { const empty = node('div', 'cart-empty'); empty.append(iconUse('i-cart'), node('h3', '', 'Корзина пуста'), node('p', '', 'Добавьте изделие из Photos или прямо с рабочего стола.')); dialogContent.append(empty); markRunning('cart'); return; } const list = node('div', 'cart-list'); entries.forEach(([product, quantity]) => { const row = node('article', 'cart-item'); const image = node('img'); image.src = product.icon; image.alt = product.alt; const copy = node('div', 'cart-item-copy'); copy.append(node('strong', '', product.name), node('small', '', `${product.model} · ${product.price}`)); const controls = node('div', 'cart-item-controls'); const stepper = node('div', 'cart-stepper'); const minus = node('button', 'cart-step-button', '−'); minus.type = 'button'; minus.dataset.cartAction = 'decrement'; minus.dataset.cartId = product.id; const quantityNode = node('span', 'cart-quantity', String(quantity)); const plus = node('button', 'cart-step-button', '+'); plus.type = 'button'; plus.dataset.cartAction = 'increment'; plus.dataset.cartId = product.id; stepper.append(minus, quantityNode, plus); const remove = node('button', 'cart-remove', 'Убрать'); remove.type = 'button'; remove.dataset.cartAction = 'remove'; remove.dataset.cartId = product.id; controls.append(stepper, remove); row.append(image, copy, controls); list.append(row); }); dialogContent.append(list); const footer = node('div', 'cart-footer'); footer.append(node('strong', '', 'Заявка, не оплата'), node('p', '', 'Корзина собирает список, а финальные условия подтверждаются автором.')); const message = entries.map(([product, quantity]) => `• ${product.name} — ${quantity} шт. (${product.price})`).join('\n'); const submit = externalLink(`https://t.me/coldnixen?text=${encodeURIComponent(`Здравствуйте! Хочу оставить заявку:\n${message}`)}`, 'Отправить заявку в Telegram', true); submit.classList.add('cart-submit'); footer.append(submit); dialogContent.append(footer); markRunning('cart'); }
function changeCart(action, id) { if (action === 'remove') delete cart[id]; if (action === 'increment') cart[id] = Math.min(99, (cart[id] || 0) + 1); if (action === 'decrement') { cart[id] = (cart[id] || 0) - 1; if (cart[id] <= 0) delete cart[id]; } saveCart(); updateCartBadge(); if (dialog.open && dialog.dataset.view === 'cart') openCart(); }

function openView(view) { if (view === 'photos') openPhotos(); }
document.addEventListener('click', (event) => { const floating = event.target.closest('.floating-window'); if (floating) bringToFront(floating); if (event.target.closest('[data-window-close]')) { event.target.closest('.floating-window')?.remove(); syncWindowLock(); return; } if (event.target.closest('[data-close]')) { dialog.close(); return; } const back = event.target.closest('[data-back]'); if (back && !back.hidden) { openView(dialog.dataset.returnView); return; } const cartAction = event.target.closest('[data-cart-action]'); if (cartAction) { changeCart(cartAction.dataset.cartAction, cartAction.dataset.cartId); return; } const cartAdd = event.target.closest('[data-cart-add]'); if (cartAdd) { const product = productById.get(cartAdd.dataset.cartAdd); if (product) { cart[product.id] = Math.min(99, (cart[product.id] || 0) + 1); saveCart(); updateCartBadge(); syncAddButton(cartAdd, product, true); } return; } const clickedIcon = event.target.closest?.('.jewel-icon'); if (suppressedClickItem && clickedIcon === suppressedClickItem) { event.preventDefault(); suppressedClickItem = null; return; } const productTrigger = event.target.closest('[data-product]'); if (productTrigger) { const product = productById.get(productTrigger.dataset.product); const source = productTrigger.closest('.window-product') ? 'photos' : 'desktop'; if (product) (window.openProduct || openProduct)(product, source); return; } const appButton = event.target.closest('[data-app]'); if (appButton) { const app = appButton.dataset.app; if (app === 'photos') openPhotos(); if (app === 'notes') openNotes(); if (app === 'music') openMusic(); if (app === 'cart') openCart(); } });
dialog.addEventListener('click', (event) => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { dialog.dataset.view = ''; dialog.dataset.returnView = ''; backButton.hidden = true; markRunning(''); syncWindowLock(); });

const desktopViewport = window.matchMedia('(min-width: 761px)');
function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
function readPositions() { try { return JSON.parse(localStorage.getItem('marshaljew-all-positions-v1') || '{}'); } catch { return {}; } }
const iconOrderStorageKey = 'marshaljew-desktop-order-v1';
function readIconOrder() { try { const order = JSON.parse(localStorage.getItem(iconOrderStorageKey) || '[]'); return Array.isArray(order) ? order : []; } catch { return []; } }
function orderedDesktopProducts() { const rank = new Map(readIconOrder().map((id, index) => [id, index])); return [...desktopProducts].sort((a, b) => (rank.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (rank.get(b.id) ?? Number.MAX_SAFE_INTEGER)); }
function saveIconOrder() { try { localStorage.setItem(iconOrderStorageKey, JSON.stringify([...iconArea.querySelectorAll('.jewel-icon')].map((icon) => icon.dataset.product))); } catch {} }
let iconPositions = readPositions();
function applyDesktopPositions() { if (!iconArea || !desktopViewport.matches || desktop.classList.contains('dense-catalog')) return; const bounds = iconArea.getBoundingClientRect(); iconArea.querySelectorAll('.jewel-icon').forEach((icon) => { const position = iconPositions[icon.dataset.product]; if (!position) return; icon.style.left = `${clamp(position.x, 0, 94)}%`; icon.style.top = `${clamp(position.y, 0, 78)}%`; }); }
function saveIconPosition(icon) { const bounds = iconArea.getBoundingClientRect(); iconPositions[icon.dataset.product] = { x: clamp(icon.offsetLeft, 0, bounds.width - icon.offsetWidth) / bounds.width * 100, y: clamp(icon.offsetTop, 0, bounds.height - icon.offsetHeight) / bounds.height * 100 }; localStorage.setItem('marshaljew-all-positions-v1', JSON.stringify(iconPositions)); }
let dragState = null; let suppressedClickItem = null;
const cartDropTarget = document.querySelector('.dock-app--cart');
function isOverCartDropTarget(x, y) { if (!cartDropTarget) return false; const rect = cartDropTarget.getBoundingClientRect(); return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom; }
function setCartDropHighlight(active) { if (!cartDropTarget) return; cartDropTarget.classList.toggle('is-drop-target', active); cartDropTarget.style.setProperty('--dock-scale', active ? '1.16' : '1'); cartDropTarget.style.setProperty('--dock-lift', active ? '-10px' : '0px'); }
function finishDrag(event) {
  if (!dragState || (event && event.pointerId !== dragState.pointerId)) return;
  const state = dragState;
  const droppedOnCart = Boolean(state.moved && event?.type === 'pointerup' && isOverCartDropTarget(event.clientX, event.clientY));
  dragState = null;
  state.item.classList.remove('is-dragging');
  state.item.style.removeProperty('--drag-x');
  state.item.style.removeProperty('--drag-y');
  setCartDropHighlight(false);
  if (state.moved) {
    if (droppedOnCart) {
      state.item.style.left = state.originalLeft;
      state.item.style.top = state.originalTop;
      changeCart('increment', state.item.dataset.product);
    } else if (state.dense && event?.type === 'pointerup') {
      const candidates = [...iconArea.querySelectorAll('.jewel-icon')].filter((icon) => icon !== state.item);
      const target = candidates.reduce((best, icon) => {
        const rect = icon.getBoundingClientRect();
        const distance = Math.hypot(state.lastX - (rect.left + rect.width / 2), state.lastY - (rect.top + rect.height / 2));
        return !best || distance < best.distance ? { icon, rect, distance } : best;
      }, null);
      if (target) {
        const before = state.lastY < target.rect.top + target.rect.height / 2 || (Math.abs(state.lastY - (target.rect.top + target.rect.height / 2)) < 10 && state.lastX < target.rect.left + target.rect.width / 2);
        target.icon.parentNode.insertBefore(state.item, before ? target.icon : target.icon.nextSibling);
      }
      saveIconOrder();
    } else if (!state.dense) saveIconPosition(state.item);
    suppressedClickItem = state.item;
    setTimeout(() => { suppressedClickItem = null; }, 0);
  }
  try { state.item.releasePointerCapture(state.pointerId); } catch {}
  resetDepth();
}
iconArea.addEventListener('pointerdown', (event) => {
  if (!desktopViewport.matches || event.button !== 0) return;
  const item = event.target.closest('.jewel-icon');
  if (!item) return;
  dragState = { item, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, lastX: event.clientX, lastY: event.clientY, startLeft: item.offsetLeft, startTop: item.offsetTop, originalLeft: item.style.left, originalTop: item.style.top, dense: desktop.classList.contains('dense-catalog'), moved: false };
  item.setPointerCapture?.(event.pointerId);
});
iconArea.addEventListener('pointermove', (event) => {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  const dx = event.clientX - dragState.startX;
  const dy = event.clientY - dragState.startY;
  dragState.lastX = event.clientX;
  dragState.lastY = event.clientY;
  if (!dragState.moved && Math.hypot(dx, dy) < 7) return;
  dragState.moved = true;
  event.preventDefault();
  setCartDropHighlight(isOverCartDropTarget(event.clientX, event.clientY));
  if (dragState.dense) {
    dragState.item.style.setProperty('--drag-x', `${dx}px`);
    dragState.item.style.setProperty('--drag-y', `${dy}px`);
  } else {
    const bounds = iconArea.getBoundingClientRect();
    dragState.item.style.left = `${clamp(dragState.startLeft + dx, 0, bounds.width - dragState.item.offsetWidth) / bounds.width * 100}%`;
    dragState.item.style.top = `${clamp(dragState.startTop + dy, 0, bounds.height - dragState.item.offsetHeight) / bounds.height * 100}%`;
  }
  dragState.item.classList.add('is-dragging');
}, { passive: false });
iconArea.addEventListener('pointerup', finishDrag); iconArea.addEventListener('pointercancel', finishDrag); window.addEventListener('resize', applyDesktopPositions, { passive: true });
function updateDepth(event) { if (!desktopViewport.matches) return; const bounds = desktop.getBoundingClientRect(); const x = (event.clientX - bounds.left) / bounds.width - .5; const y = (event.clientY - bounds.top) / bounds.height - .5; desktop.style.setProperty('--scene-x', `${(x * 15).toFixed(2)}px`); desktop.style.setProperty('--scene-y', `${(y * 11).toFixed(2)}px`); desktop.querySelectorAll('.jewel-icon').forEach((icon) => { const depth = Number(icon.dataset.depth || .5); icon.style.setProperty('--float-x', `${(-x * depth * 16).toFixed(2)}px`); icon.style.setProperty('--float-y', `${(-y * depth * 12).toFixed(2)}px`); }); }
function resetDepth() { desktop.style.setProperty('--scene-x', '0px'); desktop.style.setProperty('--scene-y', '0px'); desktop.querySelectorAll('.jewel-icon').forEach((icon) => { icon.style.setProperty('--float-x', '0px'); icon.style.setProperty('--float-y', '0px'); }); }
desktop.addEventListener('pointermove', updateDepth, { passive: true }); desktop.addEventListener('pointerleave', resetDepth, { passive: true });
if (dock && window.matchMedia('(pointer: fine)').matches) { const dockItems = [...dock.querySelectorAll('.dock-app')]; dock.addEventListener('pointermove', (event) => dockItems.forEach((item) => { const rect = item.getBoundingClientRect(); const influence = Math.max(0, 1 - Math.abs(event.clientX - (rect.left + rect.width / 2)) / 150); item.style.setProperty('--dock-scale', (1 + influence * .28).toFixed(3)); item.style.setProperty('--dock-lift', `${-(influence * 13).toFixed(1)}px`); }), { passive: true }); dock.addEventListener('pointerleave', () => dockItems.forEach((item) => { item.style.setProperty('--dock-scale', '1'); item.style.setProperty('--dock-lift', '0px'); })); }
updateCartBadge(); renderDesktop(); playTrack(0);


initWallpaperVideoBackground();
function initWallpaperVideoBackground() {
  const wall = document.querySelector('#wallpaper-video-wall');
  if (!wall) return;
  const panels = [...wall.querySelectorAll('.wallpaper-video-panel')];
  const videos = panels.map((panel) => panel.querySelector('[data-wallpaper-video]')).filter(Boolean);
  if (!videos.length) return;
  const mobile = window.matchMedia('(max-width: 760px)');
  let activeIndex = Math.max(0, panels.findIndex((panel) => panel.classList.contains('is-active')));

  function safePlay(video) {
    try {
      const result = video.play();
      if (result && typeof result.then === 'function') {
        result.then(() => { wall.dataset.playback = 'playing'; }).catch(() => { wall.dataset.playback = 'gesture-required'; });
      } else wall.dataset.playback = 'playing';
    } catch { wall.dataset.playback = 'gesture-required'; }
  }
  function activateMobile(index) {
    activeIndex = (index + videos.length) % videos.length;
    panels.forEach((panel, panelIndex) => panel.classList.toggle('is-active', panelIndex === activeIndex));
    videos.forEach((video, videoIndex) => {
      video.muted = true;
      video.loop = false;
      video.autoplay = videoIndex === activeIndex;
      if (videoIndex !== activeIndex) { video.pause(); video.preload = 'none'; }
    });
    const activeVideo = videos[activeIndex];
    activeVideo.muted = true;
    activeVideo.loop = false;
    activeVideo.autoplay = true;
    activeVideo.preload = 'auto';
    if (activeVideo.ended) activeVideo.currentTime = 0;
    safePlay(activeVideo);
  }
  function applyWallpaperVideoMode() {
    document.body.classList.add('has-wallpaper-video');
    if (mobile.matches) {
      videos.forEach((video, index) => {
        video.muted = true;
        video.loop = false;
        if (index !== activeIndex) { video.pause(); video.preload = 'none'; }
      });
      activateMobile(activeIndex);
      return;
    }
    panels.forEach((panel) => panel.classList.add('is-active'));
    videos.forEach((video) => {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.preload = 'auto';
      safePlay(video);
    });
  }
  videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
      if (mobile.matches && index === activeIndex) activateMobile((activeIndex + 1) % videos.length);
    });
    video.addEventListener('timeupdate', () => {
      if (mobile.matches && index === activeIndex && video.duration - video.currentTime <= 4) {
        videos[(activeIndex + 1) % videos.length].preload = 'auto';
      }
    });
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach((video) => video.pause());
    else applyWallpaperVideoMode();
  });
  const listenForChange = (query) => {
    if (typeof query.addEventListener === 'function') query.addEventListener('change', applyWallpaperVideoMode);
    else if (typeof query.addListener === 'function') query.addListener(applyWallpaperVideoMode);
  };
  listenForChange(mobile);
  const retryAfterGesture = () => {
    if (wall.dataset.playback === 'gesture-required') applyWallpaperVideoMode();
  };
  const desktopArea = document.querySelector('#desktop');
  desktopArea?.addEventListener('pointerdown', retryAfterGesture, { passive: true });
  desktopArea?.addEventListener('touchstart', retryAfterGesture, { passive: true });
  applyWallpaperVideoMode();
}
