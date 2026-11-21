# Портфолио — Константин Лисов

Статичный сайт-портфолио: 3D, VFX, цифровая одежда, постобработка.
Только десктоп, тёмная тема, фиксированные кадила по краям, ленты работ.

## Как посмотреть

Откройте `index.html` двойным кликом — сайт работает без сборки и сервера.

Шрифт Cinzel подгружается с Google Fonts, поэтому для точного вида нужен интернет.
Альтернатива — локальный сервер:

```powershell
py -m http.server 8000
# затем http://localhost:8000
```

## Структура

```
index.html               разметка страницы
css/style.css            все стили, палитра и шрифты — в :root
js/config.js             контент: контакты, работы, кейсы
js/i18n.js               тексты RU / EN
js/main.js               ленты, лайтбокс, кадила, язык, дым во вратах
Assets/opt/              облегчённые файлы для сайта: WebP + MP4
Assets/web/              кадила, имя, сигилы в WebP
Assets/works/            исходники работ (в репозиторий не нужны)
tools/optimize_assets.py пересборка WebP/MP4
tools/trim_assets.py     обрезка кадил, имени и сигилов
```

## Как добавить работу

1. Положите исходник в `Assets/works/…` (например, `Assets/works/modeling/01.png`).
2. Пересоберите лёгкие версии: `py tools/optimize_assets.py`
   (нужны Python с Pillow и ffmpeg; ffmpeg лежит в `_tools/`).
   На выходе появится `Assets/opt/works/modeling/01.webp`, а GIF станет `.mp4`.
3. Добавьте запись в `js/config.js`:

```js
works: {
  modeling: [
    { img: "Assets/opt/works/modeling/01.webp", ru: "Безликий", en: "Faceless" }
  ]
}
```

Для анимации укажите `.mp4` — карточка сама отрисует `<video autoplay muted loop>`.
Подпись — поле `ru`/`en` после `img`.

## Оптимизация

Вес сайта после пересборки — **~18 МБ** вместо 123:

| Что | Было | Стало |
|---|---|---|
| PNG-работы | 29,6 МБ | 3,3 МБ (WebP q82, до 1800 px) |
| GIF-анимации | 71,1 МБ | 7,8 МБ (MP4, H.264, CRF 28) |
| Видео hero | 12,6 МБ | 6,1 МБ (1600×900, CRF 34) |
| Кадила/имя/сигилы | 2,8 МБ | 0,8 МБ (WebP) |

Оригиналы остаются в `Assets/` локально, но исключены из репозитория через
`.gitignore`. На хостинг уходят только `index.html`, `css/`, `js/`,
`Assets/opt/` и `Assets/web/*.webp`.

## Процесс (схема)

Секция `#workflow` — инлайновый SVG в `index.html`: девять этапов от референса
до финала. Текст переводится через ключи `wf.*` в `js/i18n.js`, стили — `.wf-*`.

## Врата и пыль

После каждой скилл-секции — полоса тумана (`Sigil1`–`Sigil4`). Туман на Canvas 2D:
клубы поднимаются, растут и рассеиваются; раскрывается, когда заголовок следующей
секции уже в кадре. Логика — `initGates` в `js/main.js`, стили — `.gate*`.

Пыль — `<canvas id="ash">`: частицы падают от лент, лежат за контентом.
При `prefers-reduced-motion` анимации отключаются.

Заменить сигил: положить `sigilN.png` в `Assets/`, пересобрать
`py tools/trim_assets.py`, затем `py tools/optimize_assets.py`.
Страница использует `Assets/web/sigilN.webp`.

## Просмотр работ

Клик по работе открывает её по центру: фото — как изображение, анимация — как видео
без звука, на петле. Подпись внизу, закрытие — крестик, фон или Esc.

## Кадила

Используются WebP из `Assets/web/` (без прозрачных полей). Исходники — `Assets/kadilo*.png`.
После замены: `py tools/trim_assets.py`, затем `py tools/optimize_assets.py`.

Слева — Telegram и почта, справа — Instagram; качаются при скролле.
Ссылки — в `SITE.contacts`.

## Hero

Фон — `Assets/opt/hero_background.mp4` (1600×900, ~6 МБ, без звука) с постером
`Assets/opt/hero_poster.jpg`, чтобы первый кадр появлялся сразу.
Имя — `Assets/web/my_name.webp` на светлой «бумажной» подложке (`.hero__name`).

Заменить видео — положить исходник в `Assets/hero_background.mp4` и запустить
`py tools/optimize_assets.py`.

## Деплой на GitHub Pages

1. Создайте публичный репозиторий.
2. Загрузите файлы (`.gitignore` уже исключает тяжёлые исходники).
3. Settings → Pages → Deploy from a branch → `main`, папка `/ (root)`.
4. Сайт будет на `https://<username>.github.io/<repo>/`.

Если исходники уже были закоммичены ранее, уберите их из индекса:

```powershell
git rm -r --cached Assets/works Assets/hero_background.mp4
git commit -m "remove heavy sources"
git push
```

История при этом останется тяжёлой — для чистого репозитория проще создать новый
и залить только нужные файлы.
