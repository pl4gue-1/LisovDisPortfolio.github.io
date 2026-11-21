/* Данные сайта.
   Здесь только контент: ссылки, работы, кейсы.
   Внешний вид правится в css/style.css, тексты — в js/i18n.js.

   Картинки и видео берутся из Assets/opt — это облегчённые версии
   (WebP и MP4). Оригиналы лежат в Assets/works и в репозиторий не нужны. */

window.SITE = {

  /* Контакты. Меняются здесь — обновятся и кадила, и строки внизу. */
  contacts: {
    instagram: "https://www.instagram.com/ogreclu?jplx=MXJpanpoMjYyaWZmcg==/",
    telegram: "https://t.me/deux_dude/",
    email: "mailto:kostik2005lis@mail.ru"
  },

  /* Работы в лентах. Ключи = data-ribbon у секций.
     Формат: { img: "Assets/opt/works/файл.webp", ru: "Название", en: "Title" }
     Для анимаций — .mp4: { img: "Assets/opt/works/анимация.mp4", ... } */
  works: {
    modeling: [
      { img: "Assets/opt/works/pizzaMan1.webp", ru: "ПиццаЧел", en: "PizzaMan" },
      { img: "Assets/opt/works/Portf1.webp", ru: "Негодник", en: "mischief" },
      { img: "Assets/opt/works/мудя.webp", ru: "Чревовещатель", en: "Ventriloquist" },
      { img: "Assets/opt/works/duo1.webp", ru: "Близнецы", en: "Gemini" },
      { img: "Assets/opt/works/tower.webp", ru: "Башня", en: "Tower" }
    ],
    garments: [
      { img: "Assets/opt/works/garments/garment1.webp", ru: "Белорусский трикотаж №1", en: "Couture No.1" },
      { img: "Assets/opt/works/garments/garment2.webp", ru: "Белорусский трикотаж №2", en: "Couture No.2" },
      { img: "Assets/opt/works/garments/garment3.webp", ru: "Белорусский трикотаж №3", en: "Couture No.3" }
    ],
    vfx: [
      { img: "Assets/opt/works/vfx/theatre.mp4", ru: "Театр", en: "Theatre" },
      { img: "Assets/opt/works/vfx/INST1.mp4", ru: "Хочу в Тайланд", en: "Thai" },
      { img: "Assets/opt/works/vfx/joys.mp4", ru: "Трип ротейшн", en: "Trip" },
      { img: "Assets/opt/works/vfx/mirror.mp4", ru: "Мост", en: "Bridge" },
      { img: "Assets/opt/works/vfx/duo.mp4", ru: "Дуэт", en: "Duetto" }
    ],
    post: [
      { img: "Assets/opt/works/post/ffff.webp", ru: "1", en: "1" },
      { img: "Assets/opt/works/post/сфинкс2.webp", ru: "2", en: "2" },
      { img: "Assets/opt/works/post/VSJtrible.webp", ru: "3", en: "3" },
      { img: "Assets/opt/works/post/синтониДвор.webp", ru: "4", en: "4" },
      { img: "Assets/opt/works/post/Weapon2.webp", ru: "5", en: "5" },
      { img: "Assets/opt/works/post/Эмо2.webp", ru: "6", en: "6" }
    ]
  },

  /* Кейсы. Формат: { img: "...", ru: "...", en: "...", tag: "3D + VFX" } */
  cases: [
    { img: "Assets/opt/works/cases/Ikarus1.webp", ru: "Ikarus", en: "Ikarus", tag: "3D + Post" },
    { img: "Assets/opt/works/cases/sdf.mp4", ru: "PRETEND", en: "PRETEND", tag: "VFX" }
  ]
};
