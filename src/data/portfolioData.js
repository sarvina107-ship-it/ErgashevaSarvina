export const personalInfo = {
  name: "Ergasheva Sarvina",
  englishName: "Sarvina Ergasheva",
  nickname: "Сара",
  birthDate: "18.04.2010",
  role: "Fullstack & Frontend Developer",
  tagline: "Aspiring Fullstack Developer & UI/UX Enthusiast",
  location: "Ташкент, Узбекистан",
  timezone: "UTC+5",
  status: "Открыта к интересным проектам и сотрудничеству",
  bio: "Создаю современные веб-интерфейсы и масштабируемые fullstack-приложения. Соединяю эстетическое видение графического дизайна с мощью React, Next.js, TypeScript и бэкенда на Node.js.",
  quote: "Изначально я была увлечена дизайном, но в программировании нашла нечто большее — возможность не просто рисовать интерфейсы, а вдыхать в них жизнь с помощью чистого кода и надежной архитектуры.",
  story1: "Будучи ученицей 10 класса, я осознанно выбрала путь Fullstack-разработки. Путь из графического дизайна в мир кода позволил мне соединить внимание к деталям, типографике и композиции с архитектурой программных решений.",
  story2: "Сейчас я активно создаю реальные продукты — от премиальных e-commerce сервисов на Next.js 16 до fullstack соцсетей с веб-сокетами.",
  contacts: {
    telegram: {
      handle: "@suuun_o",
      url: "https://t.me/suuun_o"
    },
    github: {
      handle: "sarvina107-ship-it",
      url: "https://github.com/sarvina107-ship-it"
    },
    email: {
      address: "sarvina107@gmail.com",
      url: "mailto:sarvina107@gmail.com"
    }
  },
  stats: [
    { number: "7+", label: "Завершенных проектов" },
    { number: "3", label: "Языка локализации (RU/UZ/EN)" },
    { number: "100%", label: "Mobile-First & Responsive" }
  ]
};

export const skillsData = [
  {
    category: "Frontend разработка",
    description: "Разработка динамичных, производительных и отзывчивых веб-интерфейсов",
    skills: [
      { name: "React 19", level: "Продвинутый", icon: "Code2", desc: "Хуки, Context API, оптимизация рендеринга, SPA" },
      { name: "Next.js 16", level: "Продвинутый", icon: "Layers", desc: "App Router, Server/Client Components, SEO, SSR" },
      { name: "TypeScript", level: "Средний+", icon: "FileCode", desc: "Типизация интерфейсов, props, безопасность типов" },
      { name: "JavaScript (ES6+)", level: "Продвинутый", icon: "FileJson", desc: "Асинхронность, промисы, DOM, замыкания, структуры" },
      { name: "Tailwind CSS (v3/v4)", level: "Эксперт", icon: "Palette", desc: "Адаптивная верстка, кастомные темы, анимации" },
      { name: "TanStack Query v5", level: "Продвинутый", icon: "RefreshCw", desc: "Кэширование серверных запросов, синхронизация" },
      { name: "HTML5 / CSS3", level: "Эксперт", icon: "Layout", desc: "Семантика, Flexbox, CSS Grid, микроанимации" }
    ]
  },
  {
    category: "Backend & Базы данных",
    description: "Серверная логика, защита, авторизация и работа в реальном времени",
    skills: [
      { name: "Node.js & Express", level: "Продвинутый", icon: "Server", desc: "RESTful API архитектура, middleware, обработка ошибок" },
      { name: "MongoDB & Mongoose", level: "Продвинутый", icon: "Database", desc: "Схемы данных, агрегации, CRUD, валидация" },
      { name: "Socket.io", level: "Продвинутый", icon: "Wifi", desc: "Real-time чат, мгновенные уведомления, комнаты" },
      { name: "JWT & Безопасность", level: "Продвинутый", icon: "ShieldCheck", desc: "Авторизация по токенам, защита от брутфорса, bcrypt" },
      { name: "Swagger UI", level: "Продвинутый", icon: "BookOpen", desc: "Интерактивная спецификация и документация API" },
      { name: "Multer & Медиа", level: "Продвинутый", icon: "Image", desc: "Загрузка, сохранение и обработка файлов на сервере" }
    ]
  },
  {
    category: "Инструменты & DevOps",
    description: "Современный инструментарий продуктивной веб-разработки",
    skills: [
      { name: "Git & GitHub", level: "Продвинутый", icon: "GitBranch", desc: "Ветки, PR, управление версиями, деплой-хуки" },
      { name: "Vercel & Railway", level: "Продвинутый", icon: "Cloud", desc: "Деплой фронтенда, бэкенда и баз данных в облако" },
      { name: "Vite & PWA", level: "Эксперт", icon: "Zap", desc: "Мгновенный HMR, установка веб-приложений на телефон" },
      { name: "UI/UX Дизайн & Figma", level: "Эксперт", icon: "Figma", desc: "Прототипирование, палитры, сетки, дизайн-системы" },
      { name: "VS Code & AI Tools", level: "Эксперт", icon: "Cpu", desc: "Эффективная разработка с AI-ассистентами и Antigravity" }
    ]
  }
];

export const projectsData = [
  {
    id: "benkov",
    title: "Benkov Art School",
    subtitle: "Официальный сайт художественного училища имени П. П. Бенкова",
    category: "Production Web",
    type: "Fullstack / Production",
    featured: true,
    desc: "Комплексный веб-портал для одного из старейших художественных училищ. Включает интерактивный таймлайн истории, цифровую галерею с фильтрацией, защищенную панель администрирования новостей и ленивую Яндекс.Карту.",
    highlights: [
      "Мультиязычный интерфейс на 3 языках (RU / UZ / EN) на базе i18next",
      "Защищенная админка новостей с защитой от перебора (блокировка на 1 час после 5 попыток)",
      "Интеграция с Railway API и деплой на Vercel",
      "Ленивая загрузка Яндекс.Карт и генерация RSS-ленты"
    ],
    tech: ["React 19", "Vite", "Tailwind CSS", "i18next", "React Router", "Railway API", "Vercel"],
    link: "https://benkov.vercel.app/",
    github: "https://github.com/sarvina107-ship-it",
    status: "В продакшене"
  },
  {
    id: "cake",
    title: "Cake — Velvet & Bloom",
    subtitle: "Премиальный интернет-магазин с 3D-конструктором тортов",
    category: "Next.js / E-Commerce",
    type: "Next.js 16 App Router",
    featured: true,
    desc: "Авторская онлайн-кондитерская с уникальным кастомным конфигуратором тортов (/custom-cake). Клиент может в реальном времени выбирать форму, ярусы, коржи, начинки и декор с динамическим подсчетом стоимости.",
    highlights: [
      "Полноценный конфигуратор тортов в реальном времени с калькулятором цены",
      "Каталог авторских десертов с фильтрацией (/catalog)",
      "Корзина (/cart), оформление заказа (/checkout) и страница успеха",
      "Анимация праздничного конфетти при подтверждении заказа (Canvas Confetti)",
      "Пастельная гамма и адаптивная десертная типографика"
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Lucide React", "Canvas Confetti"],
    link: "https://github.com/sarvina107-ship-it",
    github: "https://github.com/sarvina107-ship-it",
    status: "Готовый MVP"
  },
  {
    id: "avtorent",
    title: "AvtoRent TAS",
    subtitle: "Сервис посуточной аренды автомобилей в Ташкенте",
    category: "Next.js / Service",
    type: "Next.js 16 Platform",
    featured: true,
    desc: "Платформа онлайн-бронирования автопарка в Ташкенте (Gentra, Cobalt, BYD Song Plus, Tracker 2, Mercedes) с круглосуточной подачей в аэропорт. Стильный премиальный интерфейс в темных тонах с панелью администратора.",
    highlights: [
      "Каталог автопарка с фильтрацией по классам, КПП и типу топлива (/cars)",
      "Прозрачные условия проката и расчета залога (/conditions)",
      "Панель администратора для управления автопарком (/admin)",
      "Темная тема (Slate-950 с акцентами индиго) и детальные бейджи характеристик",
      "SEO-оптимизация с автогенерацией sitemap.xml и robots.txt"
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Lucide React"],
    link: "https://github.com/sarvina107-ship-it",
    github: "https://github.com/sarvina107-ship-it",
    status: "Готовый MVP"
  },
  {
    id: "instagram",
    title: "Instagram Clone",
    subtitle: "Полнофункциональная социальная сеть с Real-Time чатом",
    category: "Fullstack",
    type: "React 19 + Node.js Fullstack",
    featured: true,
    desc: "Высокотехнологичный клон Instagram с поддержкой PWA. Включает клиент на React 19 с TanStack Query и надежный сервер на Node.js / Express с базой данных MongoDB, сокетами и Swagger документацией.",
    highlights: [
      "Лента постов, публикация фотографий через Multer, лайки и комментарии",
      "Real-time чат и мгновенные уведомления на Socket.io",
      "Авторизация и регистрация пользователей на JWT-токенах и Bcrypt",
      "PWA-функционал: возможность установки как нативное приложение на смартфон",
      "Полная интерактивная документация серверного API в Swagger UI (/api-docs)"
    ],
    tech: ["React 19", "Vite", "Node.js", "Express", "MongoDB", "Socket.io", "TanStack Query", "Vite PWA"],
    link: "https://github.com/sarvina107-ship-it",
    github: "https://github.com/sarvina107-ship-it",
    status: "Fullstack MVP"
  },
  {
    id: "humster",
    title: "Humster Kombat Clicker",
    subtitle: "Интерактивная кликер-игра с прокачкой карт",
    category: "Mini-apps & Games",
    type: "React 19 Web Game",
    featured: false,
    desc: "Кликер-игра по мотивам популярного Hamster Kombat. Реализована физика тапов с анимацией всплывающих цифр, шкала энергии с регенерацией во времени и магазин прокачки пассивного заработка.",
    highlights: [
      "Плавная физика кликов с динамическим начислением монет",
      "Система расхода и восстановления энергии",
      "Магазин улучшений и карточек с пассивным доходом в час",
      "Централизованное управление состоянием через Context API"
    ],
    tech: ["React 19", "Vite", "React Router v7", "Context API", "CSS3 Animations"],
    link: "https://github.com/sarvina107-ship-it",
    github: "https://github.com/sarvina107-ship-it",
    status: "Завершен"
  },
  {
    id: "weather",
    title: "Weather App",
    subtitle: "Платформа быстрого отслеживания погоды в реальном времени",
    category: "Frontend / API",
    type: "JavaScript SPA",
    featured: false,
    desc: "Лаконичное и быстрое погодное приложение. Позволяет мгновенно узнать текущую погоду и прогноз в любом городе мира с анимацией погодных условий.",
    highlights: [
      "Интеграция с API погоды и геолокацией",
      "Адаптивный дизайн на Tailwind CSS",
      "Быстрый отклик и чистый JavaScript код"
    ],
    tech: ["JavaScript", "Tailwind CSS", "Weather API", "Vercel"],
    link: "https://weather-five-phi-17.vercel.app/",
    github: "https://github.com/sarvina107-ship-it",
    status: "В продакшене"
  },
  {
    id: "techstore",
    title: "Tech Store",
    subtitle: "Интернет-магазин электроники и техники",
    category: "Frontend / E-Commerce",
    type: "E-Commerce Frontend",
    featured: false,
    desc: "Платформа для удобного выбора и покупки гаджетов с адаптивной сеткой товаров, корзиной и плавной фильтрацией.",
    highlights: [
      "Адаптивный каталог с удобной карточной системой",
      "Корзина покупок с подсчетом общей стоимости",
      "Оптимизированная вёрстка"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    link: "https://tech-store-rosy.vercel.app/",
    github: "https://github.com/sarvina107-ship-it",
    status: "В продакшене"
  }
];

export const journeyMilestones = [
  {
    period: "2024",
    title: "От дизайна к коду",
    desc: "Увлечение графическим дизайном, типографикой и композицией. Осознание желания вдыхать жизнь в статичные макеты — старт изучения HTML5, семантической верстки, CSS3 и JavaScript."
  },
  {
    period: "2025",
    title: "Погружение в React & Frontend архитектуру",
    desc: "Освоение библиотеки React, хуков, Context API, Tailwind CSS. Создание первых функциональных приложений: Weather App, Tech Store и интерактивного кликера Humster."
  },
  {
    period: "2025 — 2026",
    title: "Реальный продакшн: Benkov Art School",
    desc: "Разработка официального портала Республиканского училища имени П. П. Бенкова. Создание 3-язычной версии (RU/UZ/EN), защищенной админки с защитой от брутфорса и деплой на Vercel + Railway."
  },
  {
    period: "2026 (Настоящее время)",
    title: "Next.js 16, TypeScript & Fullstack решения",
    desc: "Разработка сервисов на Next.js 16 (кондитерская Velvet & Bloom с 3D-конструктором, сервис проката авто AvtoRent TAS) и полноценной Fullstack социальной сети Instagram Clone с Node.js, Express, MongoDB и WebSockets."
  }
];
