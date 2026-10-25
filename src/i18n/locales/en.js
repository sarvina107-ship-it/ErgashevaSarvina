const en = {
  translation: {
    // Navbar
    nav: {
      about: 'About',
      skills: 'Stack',
      projects: 'Projects',
      journey: 'My Path',
      contact: 'Contact',
      connect: 'Connect',
      connectMe: 'Connect with me',
      confettiTitle: 'Launch confetti!',
    },

    // Hero
    hero: {
      greeting: 'Hi, I\'m',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },

    // About
    about: {
      sectionLabel: 'From Design to Code',
      title: 'My',
      titleItalic: 'Story',
      subtitle: 'The path from graphic design to Fullstack development allowed me to combine a refined aesthetic sense with engineering rigor and architecture.',
      tag1: 'Love for UI/UX',
      tag2: 'Clean Code',
      tag3: 'Product Mindset',
      story1: 'As a 10th-grade student, I made a conscious choice to pursue Fullstack development. The journey from graphic design to the world of code allowed me to combine attention to detail, typography, and composition with software architecture.',
      story2: 'Now I actively create real products — from premium e-commerce services on Next.js 16 to fullstack social networks with web sockets.',
      statsLabel: 'Stats',
      stat1Label: 'Completed Projects',
      stat2Label: 'Languages localized (RU/UZ/EN)',
      stat3Label: 'Mobile-First & Responsive',
    },

    // Skills
    skills: {
      sectionLabel: 'Stack & Capabilities',
      title: 'Tech',
      titleItalic: 'Stack',
      description: 'A balanced arsenal of technologies for building fast, secure and scalable Fullstack web solutions from design to deployment.',
      cat1: 'Frontend Development',
      cat1Desc: 'Development of dynamic, performant and responsive web interfaces',
      cat2: 'Backend & Databases',
      cat2Desc: 'Server logic, security, authorization and real-time functionality',
      cat3: 'Tools & DevOps',
      cat3Desc: 'Modern tooling for productive web development',
      verifiedInProjects: 'Verified in real projects',
      githubNote: 'Every stack is backed by ready code in GitHub repositories',
      levels: {
        expert: 'Expert',
        advanced: 'Advanced',
        midPlus: 'Mid+',
      },
    },

    // Projects
    projects: {
      sectionLabel: 'Selected Portfolio Works',
      title: 'My',
      titleItalic: 'Projects',
      description: 'From commercial portals with real-time features to interactive Next.js e-commerce and real-time applications.',
      filterAll: 'All Projects',
      filterFullstack: 'Fullstack & Backend',
      filterNext: 'Next.js 16',
      filterLive: 'In Production',
      details: 'Details',
      viewSite: 'View Site',
      repository: 'Repository',
      highlights: 'Key features & architecture:',
      techStack: 'Tech stack used:',
      githubProfile: 'GitHub profile',
      openLiveSite: 'Open Live Site',
      statusProduction: 'In Production',
      statusMVP: 'Ready MVP',
      statusFullstack: 'Fullstack MVP',
      statusDone: 'Completed',
    },

    // Journey / Experience
    journey: {
      sectionLabel: 'Evolution & Milestones',
      title: 'My Path in',
      titleItalic: 'Development',
      description: 'How a creative design vision transformed into building reliable fullstack applications and working with live production.',
    },

    // Contact
    contact: {
      sectionLabel: 'Open for opportunities',
      title: 'Get in',
      titleItalic: 'Touch',
      description: 'Always open to new projects, internships, interesting collaborations and job offers. Write to me in any convenient messenger or leave a message!',
      locationLabel: 'Location',
      quickMessage: 'Quick Message',
      writeDirectly: 'Write to me directly',
      formDesc: 'Fill out the form and I\'ll get back to you within a few hours!',
      nameLabel: 'Your Name',
      namePlaceholder: 'What\'s your name?',
      contactLabel: 'Contact for reply',
      contactPlaceholder: 'Telegram (@...) or email',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project or idea...',
      sendButton: 'Send Message',
      successTitle: 'Thank you for your message!',
      successDesc: 'I\'ve received it and will reply soon via Telegram or email!',
      copyTitle: 'Copy',
      openTitle: 'Open',
    },

    // Footer
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React 19 & Tailwind CSS v4 with love for design',
      scrollTop: 'Back to top',
    },

    // Personal info
    personal: {
      status: 'Open to interesting projects and collaboration',
      bio: 'I build modern web interfaces and scalable fullstack applications. Combining the aesthetic vision of graphic design with the power of React, Next.js, TypeScript, and a Node.js backend.',
      tagline: 'Aspiring Fullstack Developer & UI/UX Enthusiast',
      location: 'Tashkent, Uzbekistan',
      quote: 'I was initially passionate about design, but in programming I found something more — the ability not just to draw interfaces, but to breathe life into them with clean code and reliable architecture.',
    },

    // PortfolioData (projects)
    portfolioData: {
      benkov: {
        subtitle: 'Official website of the P. P. Benkov Art School',
        desc: 'A comprehensive web portal for one of the oldest art schools. Includes an interactive historical timeline, a digital gallery with filtering, a protected news admin panel, and a lazy-loaded Yandex Map.',
        highlights: [
          'Multilingual interface in 3 languages (RU / UZ / EN) powered by i18next',
          'Secure news admin panel with brute-force protection (1-hour lockout after 5 attempts)',
          'Integration with Railway API and deployment on Vercel',
          'Lazy-loaded Yandex Maps and RSS feed generation',
        ],
      },
      cake: {
        subtitle: 'Premium online store with a 3D cake configurator',
        desc: 'A boutique online bakery with a unique custom cake configurator (/custom-cake). Clients can choose shape, tiers, sponge, fillings, and decor in real-time with dynamic price calculation.',
        highlights: [
          'Full real-time cake configurator with price calculator',
          'Curated dessert catalog with filtering (/catalog)',
          'Cart (/cart), checkout (/checkout) and success page',
          'Celebration confetti animation on order confirmation (Canvas Confetti)',
          'Pastel palette and responsive dessert typography',
        ],
      },
      avtorent: {
        subtitle: 'Daily car rental service in Tashkent',
        desc: 'An online booking platform for a car fleet in Tashkent (Gentra, Cobalt, BYD Song Plus, Tracker 2, Mercedes) with 24/7 airport pickup. Stylish premium dark-themed interface with admin panel.',
        highlights: [
          'Fleet catalog with filtering by class, transmission and fuel type (/cars)',
          'Transparent rental and deposit calculation terms (/conditions)',
          'Admin panel for fleet management (/admin)',
          'Dark theme (Slate-950 with indigo accents) and detailed feature badges',
          'SEO optimization with auto-generated sitemap.xml and robots.txt',
        ],
      },
      instagram: {
        subtitle: 'Full-featured social network with Real-Time chat',
        desc: 'A high-tech Instagram clone with PWA support. Includes a React 19 client with TanStack Query and a robust Node.js / Express server with MongoDB, sockets, and Swagger documentation.',
        highlights: [
          'Post feed, photo publishing via Multer, likes and comments',
          'Real-time chat and instant notifications via Socket.io',
          'User auth and registration with JWT tokens and Bcrypt',
          'PWA: install as a native app on your smartphone',
          'Full interactive server API documentation in Swagger UI (/api-docs)',
        ],
      },
      humster: {
        subtitle: 'Interactive clicker game with card upgrades',
        desc: 'A clicker game inspired by the popular Hamster Kombat. Features tap physics with floating number animations, an energy bar with time regeneration, and a passive income upgrade shop.',
        highlights: [
          'Smooth tap physics with dynamic coin rewards',
          'Energy spend and recovery system',
          'Upgrades and cards shop with passive income per hour',
          'Centralized state management via Context API',
        ],
      },
      weather: {
        subtitle: 'Fast real-time weather tracking platform',
        desc: 'A clean and fast weather app. Instantly check current weather and forecast for any city in the world with animated weather conditions.',
        highlights: [
          'Weather API integration with geolocation',
          'Responsive Tailwind CSS design',
          'Fast response and clean JavaScript code',
        ],
      },
      techstore: {
        subtitle: 'Electronics and gadgets online store',
        desc: 'A platform for conveniently browsing and purchasing gadgets with a responsive product grid, shopping cart, and smooth filtering.',
        highlights: [
          'Responsive catalog with a convenient card-based layout',
          'Shopping cart with total price calculation',
          'Optimized markup',
        ],
      },

      // Project statuses
      statusProduction: 'In Production',
      statusMVP: 'Ready MVP',
      statusFullstackMVP: 'Fullstack MVP',
      statusCompleted: 'Completed',

      // Project types
      typeFullstack: 'Fullstack / Production',
      typeNextApp: 'Next.js 16 App Router',
      typeNextPlatform: 'Next.js 16 Platform',
      typeReactFullstack: 'React 19 + Node.js Fullstack',
      typeReactGame: 'React 19 Web Game',
      typeJSSPA: 'JavaScript SPA',
      typeECommerce: 'E-Commerce Frontend',

      // Categories
      catProductionWeb: 'Production Web',
      catNextECommerce: 'Next.js / E-Commerce',
      catNextService: 'Next.js / Service',
      catFullstack: 'Fullstack',
      catGames: 'Mini-apps & Games',
      catFrontendAPI: 'Frontend / API',
      catFrontendECommerce: 'Frontend / E-Commerce',
    },

    // Skills data
    skillsData: {
      cat1: {
        category: 'Frontend Development',
        description: 'Development of dynamic, performant and responsive web interfaces',
        skills: {
          react: { level: 'Advanced', desc: 'Hooks, Context API, rendering optimization, SPA' },
          nextjs: { level: 'Advanced', desc: 'App Router, Server/Client Components, SEO, SSR' },
          ts: { level: 'Mid+', desc: 'Interface typing, props, type safety' },
          js: { level: 'Advanced', desc: 'Async, promises, DOM, closures, data structures' },
          tailwind: { level: 'Expert', desc: 'Responsive layouts, custom themes, animations' },
          tanstack: { level: 'Advanced', desc: 'Server-side request caching, synchronization' },
          html: { level: 'Expert', desc: 'Semantics, Flexbox, CSS Grid, micro-animations' },
        },
      },
      cat2: {
        category: 'Backend & Databases',
        description: 'Server logic, security, authorization and real-time functionality',
        skills: {
          node: { level: 'Advanced', desc: 'RESTful API architecture, middleware, error handling' },
          mongo: { level: 'Advanced', desc: 'Data schemas, aggregations, CRUD, validation' },
          socket: { level: 'Advanced', desc: 'Real-time chat, instant notifications, rooms' },
          jwt: { level: 'Advanced', desc: 'Token-based auth, brute-force protection, bcrypt' },
          swagger: { level: 'Advanced', desc: 'Interactive API specification and documentation' },
          multer: { level: 'Advanced', desc: 'File upload, storage and processing on server' },
        },
      },
      cat3: {
        category: 'Tools & DevOps',
        description: 'Modern tooling for productive web development',
        skills: {
          git: { level: 'Advanced', desc: 'Branches, PRs, version control, deploy hooks' },
          vercel: { level: 'Advanced', desc: 'Deploy frontend, backend and databases to cloud' },
          vite: { level: 'Expert', desc: 'Instant HMR, install web apps as native on phone' },
          figma: { level: 'Expert', desc: 'Prototyping, palettes, grids, design systems' },
          vscode: { level: 'Expert', desc: 'Efficient development with AI assistants and Antigravity' },
        },
      },
    },

    // Journey milestones
    journey_milestones: {
      m1: {
        title: 'From Design to Code',
        desc: 'A passion for graphic design, typography, and composition. The realization of a desire to breathe life into static mockups — the start of learning HTML5, semantic markup, CSS3, and JavaScript.',
      },
      m2: {
        title: 'Diving into React & Frontend Architecture',
        desc: 'Mastering React, hooks, Context API, Tailwind CSS. Building the first functional apps: Weather App, Tech Store, and the interactive Humster clicker.',
      },
      m3: {
        title: 'Real Production: Benkov Art School',
        desc: 'Developed the official portal for the P. P. Benkov Art School. Created a 3-language version (RU/UZ/EN), a protected admin panel with brute-force protection, and deployed on Vercel + Railway.',
      },
      m4: {
        title: 'Next.js 16, TypeScript & Fullstack Solutions',
        desc: 'Building services on Next.js 16 (Velvet & Bloom bakery with a 3D configurator, AvtoRent TAS car rental) and a complete Fullstack social network — Instagram Clone — with Node.js, Express, MongoDB, and WebSockets.',
      },
    },
  },
};

export default en;
