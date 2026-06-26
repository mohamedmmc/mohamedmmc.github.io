// Translations for the portfolio
const translations = {
  fr: {
    // Navigation
    nav_about: "À Propos",
    nav_projects: "Projets",
    nav_contact: "Contact",

    // Hero Section
    hero_greeting: "BONJOUR, JE M'APPELLE",
    hero_tagline: "Je conçois et publie des apps mobiles & web — 3 en production sur l'App Store & Google Play.",
    hero_description:
      "Ingénieur spécialisé Flutter & Node.js, je conçois des applications mobiles et web performantes. Découvrez mes projets et n'hésitez pas à me contacter.",
    hero_contact: "Me contacter",
    hero_download_cv: "Télécharger le CV",
    hero_cv_glitch: "CV",
    hero_view_projects: "Voir mes projets",
    hero_projects_glitch: "PROJETS",
    hero_typing: [
      "Ingénieur logiciel",
      "Développeur Flutter & Node.js",
      "Créateur de produits",
      "Un peu geek, un peu gamer",
    ],

    // CV Modal
    cv_modal_title: "Choisir une version",
    cv_modal_subtitle: "Deux formats disponibles selon vos besoins",
    cv_design_title: "Version Design",
    cv_design_desc: "Mise en page soignée, 2 colonnes, pour les recruteurs humains",
    cv_design_badge: "POUR LES HUMAINS",
    cv_ats_title: "Version ATS",
    cv_ats_desc: "Optimisé pour les systèmes de suivi automatique (ATS)",
    cv_ats_badge: "POUR LES ROBOTS",

    // About Section
    about_title: "À PROPOS",
    about_text: "Je suis ingénieur en génie logiciel, spécialisé dans le développement mobile (Flutter) et backend (Node.js). Ce qui me motive : transformer une idée en produit réel que des gens utilisent vraiment.",

    // Skills Section

    // Projects Section
    projects_title: "MES PROJETS",
    projects_subtitle: "Découvrez une sélection de mes réalisations récentes",

    // Contact Section
    // Project card descriptions
    card_thelandlord: "Plateforme de gestion immobilière",
    card_lostfound: "App multi-plateforme objets perdus",
    card_tesa: "Gestion de tournois sportifs",
    card_randev: "Gestion de rendez-vous B2B",
    card_artisandart: "Communauté d'artisans mobile + web",
    card_esprit: "App campus iOS native",

    // Project badges
    badge_production: "En production",
    badge_personal: "Projet personnel",
    badge_academic: "Projet académique",

    // Contact Section
    contact_title: "CONTACTEZ-MOI",
    contact_subtitle: "Vous avez un projet en tête ? Discutons-en !",
    contact_availability: "Disponible immédiatement — CDI ou Freelance",
    contact_location: "Basé en Tunisie — Ouvert au remote & relocation (France / Europe)",
    contact_text:
      "Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de vos projets.",
    contact_cta: "M'envoyer un email",

    // Footer
    footer_rights: "Tous droits réservés.",

    // Project Pages Common
    project_summary: "Résumé",
    project_technologies: "Technologies",
    project_features: "Fonctionnalités clés",
    project_year: "Année",
    project_link: "Lien du site",
    project_download: "Télécharger l'application",

    // Project Pages — shared section titles
    sec_architecture: "Architecture",
    sec_mobile_app: "Application Mobile",
    sec_web_platform: "Plateforme Web",
    sec_ios_app: "Application iOS",
    // Project Pages — shared stat labels
    stat_year: "Année",
    stat_screens: "Écrans",
    stat_platforms: "Plateformes",
    stat_framework: "Framework",
    stat_language: "Langage",
    stat_roles: "Rôles",
    stat_deployment: "Déploiement",
    stat_api: "API",
    stat_compatibility: "Compatibilité",
    stat_mapping: "Cartographie",
    stat_endpoints: "Endpoints",
    stat_multi_os: "Multi-OS",
    // Project Pages — shared device labels
    dl_home: "Accueil",
    dl_search: "Recherche",
    dl_profile: "Profil",
    dl_contact: "Contact",
    dl_events: "Événements",
    dl_news: "Actualités",
    dl_map: "Carte",
    dl_teachers: "Enseignants",
    dl_players: "Joueurs",
    dl_videos: "Vidéos",
    dl_security: "Sécurité",
    dl_details: "Détails",
    dl_services: "Services",
    dl_appointment: "Rendez-vous",
    dl_schedule: "Planning",
    dl_report: "Signalement",
    dl_ranking: "Classement",
    // Project Pages — shared architecture node terms
    arch_database: "Base de données",
    arch_persistence: "Persistance",
    arch_rest_backend: "REST Backend",
    arch_same_backend: "Même backend",
    arch_realtime: "Temps réel",
    arch_push: "Notifications push",

    // The Landlord (case study)
    stat_active_users: "Utilisateurs actifs",
    stat_members: "Membres",
    stat_modules: "Modules métier",
    stat_data_models: "Modèles de données",
    thelandlord_role_title: "Mon rôle & périmètre",
    thelandlord_role_desc: "Développeur & Product Manager : pilotage produit (backlog, sprints, équipe de 2 développeurs), développement de l'app Flutter et de l'API Node.js, puis déploiement de l'infrastructure (Docker sur VPS OVH).",
    thelandlord_title: "The Landlord",
    thelandlord_subtitle:
      "Plateforme moderne pour la gestion et la location immobilière — une solution complète pour propriétaires et locataires, déployée sur VPS OVH.",
    thelandlord_description: "The Landlord est une plateforme de location immobilière (iOS, Android, Web) en production sur le marché tunisien : 146 000 utilisateurs actifs et 2 600+ membres inscrits. Le backend Node.js dockerisé repose sur 2 serveurs, 40+ modèles de données et 19 modules métier.",
    thelandlord_features: [
      "Réservations & calendrier",
      "Paiements en ligne",
      "Messagerie temps réel (Socket.io + Redis)",
      "Système de parrainage & cohost",
      "Notifications push (Firebase FCM)",
      "Intégrations Channel Manager & WhatsApp API",
    ],

    // Tesa
    tesa_title: "Tesa",
    tesa_subtitle:
      "Application Flutter de gestion de tournois sportifs avec intégration de l'API Challonge, classements en temps réel, gestion des joueurs et suivi des événements.",
    tesa_description:
      "Tesa est une application de gestion de tournois sportifs qui intègre l'API Challonge pour les brackets de tournois. Elle offre un classement en temps réel, la gestion des joueurs, le suivi des événements et un système de vidéos.",
    tesa_features: [
      "Gestion de tournois via API Challonge",
      "Classements en temps réel",
      "Gestion des joueurs et profils",
      "Suivi des événements sportifs",
      "Intégration de vidéos",
      "Page contact et informations",
    ],

    // Artisan d'Art
    artisandart_title: "Artisan d'Art",
    artisandart_subtitle:
      "Un écosystème numérique full-stack connectant les artisans traditionnels aux consommateurs modernes. Application iOS native, tableau de bord d'administration React et API backend Node.js robuste — conçu pour préserver et promouvoir l'excellence artisanale.",
    artisandart_description:
      "Artisan d'Art est une marketplace numérique full-stack qui relie l'artisanat traditionnel à la technologie moderne. La plateforme permet aux artisans de présenter leur travail, gérer leur activité et se connecter avec des clients du monde entier via une application iOS native, un tableau de bord admin React et une API REST robuste avec plus de 60 endpoints.",
    artisandart_features: [
      "Marketplace complète pour produits artisanaux avec promotions",
      "Découverte d'artisans par géolocalisation avec cartes interactives",
      "Système multi-rôles : Utilisateurs, Artisans, Admins",
      "Support bilingue complet (Français & Anglais)",
      "Notifications push en temps réel via Firebase",
      "Système d'avis, notation et engagement social",
      "Gestion d'événements avec intégration calendrier",
      "Tableau de bord admin avec analytics et modération",
    ],
    artisandart_architecture_title: "Architecture",
    artisandart_architecture_subtitle:
      "Une architecture moderne à trois niveaux conçue pour la scalabilité et la performance.",
    artisandart_ios_title: "Application iOS",
    artisandart_ios_subtitle:
      "Application SwiftUI native offrant une expérience premium pour découvrir les artisans et leur savoir-faire.",
    artisandart_dashboard_title: "Tableau de Bord Admin",
    artisandart_dashboard_subtitle:
      "Panneau d'administration React avec contrôle complet sur la plateforme, analytics et modération de contenu.",
    artisandart_docs_title: "Documentation Complète",
    artisandart_docs_subtitle:
      "Consultez le portfolio détaillé de la plateforme avec l'architecture système, les endpoints API et toutes les fonctionnalités.",
    artisandart_btn_portfolio_fr: "Portfolio Complet (Français)",
    artisandart_btn_portfolio_en: "Full Portfolio (English)",
    artisandart_stat_platforms: "Plateformes",
    artisandart_stat_models: "Modèles",
    artisandart_stat_screens: "Écrans",
    artisandart_label_login: "Connexion",
    artisandart_label_home: "Accueil",
    artisandart_label_events: "Événements",
    artisandart_label_article: "Détail Article",
    artisandart_label_shop: "Espace Artisan",
    artisandart_label_profile: "Profil",
    artisandart_label_settings: "Paramètres",
    artisandart_label_admin_login: "Connexion Admin",
    artisandart_label_dashboard: "Tableau de Bord",
    artisandart_label_artisans: "Gestion Artisans",
    artisandart_label_articles: "Gestion Articles",
    artisandart_label_users: "Gestion Utilisateurs",
    artisandart_view_github: "Voir sur GitHub",

    // Randev
    randev_title: "Randev",
    randev_subtitle:
      "Application mobile pour la gestion des rendez-vous entre clients et commerçants — interface intuitive, filtres avancés et suivi simplifié.",
    randev_description:
      "Randev simplifie la gestion des rendez-vous pour les professionnels et leurs clients. Les commerçants peuvent gérer leurs employés et suivre les réservations, tandis que les utilisateurs trouvent facilement un service via carte ou filtre.",
    randev_features: [
      "Recherche de commerces via carte et filtres",
      "Gestion des employés et rendez-vous",
      "Vue claire du planning des réservations",
      "Interface fluide pour client et propriétaire",
      "Deux rôles distincts : client & commerçant",
    ],

    // Esprit App
    esprit_title: "Esprit App",
    esprit_subtitle:
      "Application iOS développée pour les étudiants d'Esprit afin de centraliser les actualités, les événements, les contacts enseignants et la carte interactive du campus.",
    esprit_description:
      "Esprit Mobile est une application iOS destinée aux étudiants d'Esprit. Elle permet de consulter les actualités et événements de l'école, d'accéder aux informations sur les enseignants et de s'orienter facilement grâce à une carte interactive du campus.",
    esprit_features: [
      "Actualités et événements de l'école",
      "Contacts enseignants et biographies",
      "Carte interactive du campus",
      "Interface claire et fluide sur iOS",
    ],

    // Lost & Found
    lostfound_title: "Lost & Found",
    lostfound_subtitle:
      "Application mobile multi-plateforme pour retrouver vos objets perdus ou signaler ceux trouvés. Disponible sur iOS, Android et Huawei AppGallery.",
    lostfound_description:
      "Lost & Found aide les utilisateurs à signaler et retrouver des objets perdus. L'app intègre un système de sécurité avec question secrète, et propose une fonctionnalité de don caritatif lorsque l'objet reste introuvable.",
    lostfound_features: [
      "Signalement d'objet perdu/trouvé",
      "Recherche filtrée et géolocalisation",
      "Question secrète de sécurité",
      "Option de don caritatif",
      "Disponible iOS, Android et Huawei",
    ],
  },

    // Project pages — wired i18n (auto-merged)
    thelandlord_arch_subtitle: "Architecture full-stack dockerisée sur VPS OVH : app Flutter multi-plateforme, 2 serveurs Node.js/Express avec MySQL, temps réel via Socket.io + Redis et notifications push Firebase.",
    thelandlord_web_subtitle: "Interface web moderne pour la gestion et la recherche de biens immobiliers.",
    thelandlord_dl_property_detail: "Détail Propriété",
    thelandlord_dl_overview: "Vue d'ensemble",
    thelandlord_dl_reviews: "Avis",
    thelandlord_dl_messaging: "Messagerie",
    thelandlord_dl_social_feed: "Feed Social",
    tesa_arch_subtitle: "Application Flutter connectée à un backend Node.js avec MySQL et intégration de l'API Challonge pour les tournois.",
    tesa_arch_brackets: "Tournois & Brackets",
    tesa_mobile_subtitle: "9 écrans couvrant toutes les fonctionnalités de gestion de tournois, classements et profils.",
    tesa_dl_ranking2: "Ranking",
    tesa_dl_profile_detail: "Profil Détail",
    randev_arch_subtitle: "Architecture client-serveur avec application Flutter cross-platform et API Spring Boot robuste.",
    randev_mobile_subtitle: "Interface Flutter offrant une expérience fluide pour clients et commerçants.",
    lostfound_arch_subtitle: "Architecture multi-plateforme avec une API Node.js partagée entre les clients iOS et Android.",
    lostfound_mobile_subtitle: "Interface intuitive pour signaler et retrouver des objets perdus sur iOS et Android.",
    lostfound_arch_security_title: "Sécurité",
    lostfound_arch_secret: "Question secrète",
    esprit_arch_subtitle: "Application iOS native sans backend — les données cartographiques sont gérées directement via MapKit.",
    esprit_ios_subtitle: "Interface native iOS offrant accès aux actualités, événements, enseignants et carte du campus.",
    esprit_arch_map: "Carte interactive du campus",

    // Homepage narrative & Experience (Phase 2)
    about_p2: "J'ai conçu et publié 3 applications sur l'App Store et Google Play, dont The Landlord — une plateforme de location immobilière en production qui compte aujourd'hui 146 000 utilisateurs actifs, déployée sur mon propre VPS via Docker. Je cherche une équipe ambitieuse (ou des missions freelance) où contribuer à des produits qui comptent.",
    skills_note: "Mobile (expert) : Flutter/Dart, Swift/SwiftUI, Kotlin. Backend (avancé) : Node.js/Express, Spring Boot, GraphQL, Socket.io, Redis. Aussi : React, MySQL, MongoDB, Firebase, Docker.",
    exp_title: "PARCOURS",
    exp_subtitle: "De l'école aux produits en production",
    exp_now_period: "Mars 2024 — Aujourd'hui",
    exp_now_title: "Développeur & Product Manager — The Landlord",
    exp_now_desc: "Plateforme de location immobilière (iOS, Android, Web) — 146 000 utilisateurs actifs, 2 600+ membres. Backend Node.js dockerisé : 40+ modèles, 19 modules (réservations, paiements, chat temps réel, notifications). Pilotage de 2 développeurs.",
    exp_2023_period: "Fév. 2023 — Sept. 2023",
    exp_2023_title: "Développeur Fullstack — Orange Digital Center",
    exp_2023_desc: "Développement d'une app iOS native (SwiftUI) et d'une API Node.js, au sein d'une équipe interdisciplinaire (design, mobile, backend).",
    exp_2022_period: "2022",
    exp_2022_title: "Stages — iOS (ESPRIT) & Mobile Fullstack (Future Proof)",
    exp_2022_desc: "Interfaces iOS (Swift, storyboards, Figma) puis développement Flutter + backend Spring Boot / GraphQL en méthodologie Agile.",
    exp_edu_period: "Sep. 2018 — Nov. 2023",
    exp_edu_title: "Diplôme d'Ingénieur en Informatique — ESPRIT",
    exp_edu_desc: "Spécialité Développement Mobile. École Supérieure Privée d'Ingénierie et de Technologies, Tunisie.",

  en: {
    // Navigation
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Hero Section
    hero_greeting: "HELLO, MY NAME IS",
    hero_tagline: "I design and ship mobile & web apps — 3 live on the App Store & Google Play.",
    hero_description:
      "Flutter & Node.js specialist, I build high-performance mobile and web applications. Explore my projects and feel free to get in touch.",
    hero_contact: "Contact me",
    hero_download_cv: "Download CV",
    hero_cv_glitch: "CV",
    hero_view_projects: "View my projects",
    hero_projects_glitch: "PROJECTS",
    hero_typing: [
      "Software engineer",
      "Flutter & Node.js developer",
      "Product builder",
      "A bit geek, a bit gamer",
    ],

    // CV Modal
    cv_modal_title: "Choose a version",
    cv_modal_subtitle: "Two formats available depending on your needs",
    cv_design_title: "Design version",
    cv_design_desc: "Polished two-column layout, for human recruiters",
    cv_design_badge: "FOR HUMANS",
    cv_ats_title: "ATS version",
    cv_ats_desc: "Optimized for applicant tracking systems (ATS)",
    cv_ats_badge: "FOR ROBOTS",

    // About Section
    about_title: "ABOUT",
    about_text: "I'm a software engineer specialized in mobile (Flutter) and backend (Node.js) development. What drives me: turning an idea into a real product people actually use.",

    // Skills Section

    // Projects Section
    projects_title: "MY PROJECTS",
    projects_subtitle: "Discover a selection of my recent achievements",

    // Project card descriptions
    card_thelandlord: "Real estate management platform",
    card_lostfound: "Multi-platform lost items app",
    card_tesa: "Sports tournament management",
    card_randev: "B2B appointment management",
    card_artisandart: "Artisan community mobile + web",
    card_esprit: "Native iOS campus app",

    // Project badges
    badge_production: "In production",
    badge_personal: "Personal project",
    badge_academic: "Academic project",

    // Contact Section
    contact_title: "CONTACT ME",
    contact_subtitle: "Have a project in mind? Let's discuss!",
    contact_availability: "Available immediately — Full-time or Freelance",
    contact_location: "Based in Tunisia — Open to remote & relocation (France / Europe)",
    contact_text:
      "I am always open to new opportunities and collaborations. Feel free to contact me to discuss your projects.",
    contact_cta: "Send me an email",

    // Footer
    footer_rights: "All rights reserved.",

    // Project Pages Common
    project_summary: "Summary",
    project_technologies: "Technologies",
    project_features: "Key Features",
    project_year: "Year",
    project_link: "Website Link",
    project_download: "Download the App",

    // Project Pages — shared section titles
    sec_architecture: "Architecture",
    sec_mobile_app: "Mobile App",
    sec_web_platform: "Web Platform",
    sec_ios_app: "iOS Application",
    // Project Pages — shared stat labels
    stat_year: "Year",
    stat_screens: "Screens",
    stat_platforms: "Platforms",
    stat_framework: "Framework",
    stat_language: "Language",
    stat_roles: "Roles",
    stat_deployment: "Deployment",
    stat_api: "API",
    stat_compatibility: "Compatibility",
    stat_mapping: "Mapping",
    stat_endpoints: "Endpoints",
    stat_multi_os: "Multi-OS",
    // Project Pages — shared device labels
    dl_home: "Home",
    dl_search: "Search",
    dl_profile: "Profile",
    dl_contact: "Contact",
    dl_events: "Events",
    dl_news: "News",
    dl_map: "Map",
    dl_teachers: "Teachers",
    dl_players: "Players",
    dl_videos: "Videos",
    dl_security: "Security",
    dl_details: "Details",
    dl_services: "Services",
    dl_appointment: "Appointment",
    dl_schedule: "Schedule",
    dl_report: "Report",
    dl_ranking: "Ranking",
    // Project Pages — shared architecture node terms
    arch_database: "Database",
    arch_persistence: "Persistence",
    arch_rest_backend: "REST Backend",
    arch_same_backend: "Same backend",
    arch_realtime: "Real-time",
    arch_push: "Push notifications",

    // The Landlord (case study)
    stat_active_users: "Active users",
    stat_members: "Members",
    stat_modules: "Business modules",
    stat_data_models: "Data models",
    thelandlord_role_title: "My role & scope",
    thelandlord_role_desc: "Developer & Product Manager: product ownership (backlog, sprints, a team of 2 developers), building the Flutter app and Node.js API, then deploying the infrastructure (Docker on an OVH VPS).",
    thelandlord_title: "The Landlord",
    thelandlord_subtitle:
      "A modern platform for property management and rental — a complete solution for landlords and tenants, deployed on a VPS OVH.",
    thelandlord_description: "The Landlord is a real-estate rental platform (iOS, Android, Web) in production on the Tunisian market: 146,000 active users and 2,600+ registered members. The Dockerized Node.js backend runs on 2 servers, 40+ data models and 19 business modules.",
    thelandlord_features: [
      "Bookings & calendar",
      "Online payments",
      "Real-time messaging (Socket.io + Redis)",
      "Referral & cohost system",
      "Push notifications (Firebase FCM)",
      "Channel Manager & WhatsApp API integrations",
    ],

    // Tesa
    tesa_title: "Tesa",
    tesa_subtitle:
      "Flutter app for managing sports tournaments with Challonge API integration, real-time rankings, player management and event tracking.",
    tesa_description:
      "Tesa is a sports tournament management application that integrates the Challonge API for tournament brackets. It offers real-time rankings, player management, event tracking and a video system.",
    tesa_features: [
      "Tournament management via Challonge API",
      "Real-time rankings",
      "Player and profile management",
      "Sports event tracking",
      "Video integration",
      "Contact and information page",
    ],

    // Artisan d'Art
    artisandart_title: "Artisan d'Art",
    artisandart_subtitle:
      "A full-stack digital ecosystem connecting traditional artisans to modern consumers. Native iOS app, React admin dashboard and robust Node.js backend API — designed to preserve and promote artisanal excellence.",
    artisandart_description:
      "Artisan d'Art is a full-stack digital marketplace bridging traditional craftsmanship with modern technology. The platform enables artisans to showcase their work, manage their business and connect with clients worldwide through a native iOS app, a React admin dashboard and a robust REST API with 60+ endpoints.",
    artisandart_features: [
      "Complete marketplace for handcrafted products with promotions",
      "Geolocation-based artisan discovery with interactive maps",
      "Multi-role system: Users, Artisans, Admins",
      "Full bilingual support (French & English)",
      "Real-time push notifications via Firebase",
      "Review, rating and social engagement system",
      "Event management with calendar integration",
      "Admin dashboard with analytics and moderation",
    ],
    artisandart_architecture_title: "Architecture",
    artisandart_architecture_subtitle:
      "A modern three-tier architecture designed for scalability and performance.",
    artisandart_ios_title: "iOS Application",
    artisandart_ios_subtitle:
      "Native SwiftUI application delivering a premium experience for discovering artisans and their craftsmanship.",
    artisandart_dashboard_title: "Admin Dashboard",
    artisandart_dashboard_subtitle:
      "React-based admin panel with full platform control, analytics and content moderation.",
    artisandart_docs_title: "Full Documentation",
    artisandart_docs_subtitle:
      "Browse the detailed platform portfolio with system architecture, API endpoints and all features.",
    artisandart_btn_portfolio_fr: "Full Portfolio (French)",
    artisandart_btn_portfolio_en: "Full Portfolio (English)",
    artisandart_stat_platforms: "Platforms",
    artisandart_stat_models: "Models",
    artisandart_stat_screens: "Screens",
    artisandart_label_login: "Login",
    artisandart_label_home: "Home",
    artisandart_label_events: "Events",
    artisandart_label_article: "Article Detail",
    artisandart_label_shop: "Artisan Shop",
    artisandart_label_profile: "Profile",
    artisandart_label_settings: "Settings",
    artisandart_label_admin_login: "Admin Login",
    artisandart_label_dashboard: "Dashboard",
    artisandart_label_artisans: "Artisan Management",
    artisandart_label_articles: "Article Management",
    artisandart_label_users: "User Management",
    artisandart_view_github: "View on GitHub",

    // Randev
    randev_title: "Randev",
    randev_subtitle:
      "Mobile app for managing appointments between clients and merchants — intuitive interface, advanced filters and simplified tracking.",
    randev_description:
      "Randev simplifies appointment management for professionals and their clients. Merchants can manage their employees and track reservations, while users easily find a service via map or filter.",
    randev_features: [
      "Search for businesses via map and filters",
      "Employee and appointment management",
      "Clear view of the booking schedule",
      "Smooth interface for client and owner",
      "Two distinct roles: client & merchant",
    ],

    // Esprit App
    esprit_title: "Esprit App",
    esprit_subtitle:
      "iOS application developed for Esprit students to centralize news, events, teacher contacts and the interactive campus map.",
    esprit_description:
      "Esprit Mobile is an iOS application for Esprit students. It allows consulting school news and events, accessing teacher information and navigating easily thanks to an interactive campus map.",
    esprit_features: [
      "School news and events",
      "Teacher contacts and biographies",
      "Interactive campus map",
      "Clear and fluid iOS interface",
    ],

    // Lost & Found
    lostfound_title: "Lost & Found",
    lostfound_subtitle:
      "Cross-platform mobile app to recover your lost items or report found ones. Available on iOS, Android and Huawei AppGallery.",
    lostfound_description:
      "Lost & Found helps users report and find lost items. The app integrates a security system with secret question, and offers a charitable donation feature when the item remains unfound.",
    lostfound_features: [
      "Lost/found item reporting",
      "Filtered search and geolocation",
      "Security secret question",
      "Charity donation option",
      "Available on iOS, Android and Huawei",
    ],

    // Project pages — wired i18n (auto-merged)
    thelandlord_arch_subtitle: "Dockerized full-stack architecture on an OVH VPS: cross-platform Flutter app, 2 Node.js/Express servers with MySQL, real-time via Socket.io + Redis and Firebase push notifications.",
    thelandlord_web_subtitle: "A modern web interface for managing and searching for properties.",
    thelandlord_dl_property_detail: "Property Detail",
    thelandlord_dl_overview: "Overview",
    thelandlord_dl_reviews: "Reviews",
    thelandlord_dl_messaging: "Messaging",
    thelandlord_dl_social_feed: "Social Feed",
    tesa_arch_subtitle: "Flutter app connected to a Node.js backend with MySQL and Challonge API integration for tournaments.",
    tesa_arch_brackets: "Tournaments & Brackets",
    tesa_mobile_subtitle: "9 screens covering all tournament management, ranking and profile features.",
    tesa_dl_ranking2: "Ranking",
    tesa_dl_profile_detail: "Profile Detail",
    randev_arch_subtitle: "Client-server architecture with a cross-platform Flutter app and a robust Spring Boot API.",
    randev_mobile_subtitle: "Flutter interface delivering a smooth experience for clients and merchants.",
    lostfound_arch_subtitle: "Cross-platform architecture with a Node.js API shared between the iOS and Android clients.",
    lostfound_mobile_subtitle: "Intuitive interface to report and recover lost items on iOS and Android.",
    lostfound_arch_security_title: "Security",
    lostfound_arch_secret: "Secret question",
    esprit_arch_subtitle: "Native iOS application with no backend — map data is handled directly via MapKit.",
    esprit_ios_subtitle: "Native iOS interface providing access to news, events, teachers and the campus map.",
    esprit_arch_map: "Interactive campus map",

    // Homepage narrative & Experience (Phase 2)
    about_p2: "I've designed and shipped 3 apps on the App Store and Google Play, including The Landlord — a real-estate rental platform in production with 146,000 active users today, deployed on my own VPS via Docker. I'm looking for an ambitious team (or freelance work) to build products that matter.",
    skills_note: "Mobile (expert): Flutter/Dart, Swift/SwiftUI, Kotlin. Backend (advanced): Node.js/Express, Spring Boot, GraphQL, Socket.io, Redis. Also: React, MySQL, MongoDB, Firebase, Docker.",
    exp_title: "EXPERIENCE",
    exp_subtitle: "From school to products in production",
    exp_now_period: "March 2024 — Present",
    exp_now_title: "Developer & Product Manager — The Landlord",
    exp_now_desc: "Real-estate rental platform (iOS, Android, Web) — 146,000 active users, 2,600+ members. Dockerized Node.js backend: 40+ models, 19 modules (bookings, payments, real-time chat, notifications). Led 2 developers.",
    exp_2023_period: "Feb 2023 — Sep 2023",
    exp_2023_title: "Fullstack Developer — Orange Digital Center",
    exp_2023_desc: "Built a native iOS app (SwiftUI) and a Node.js API within a cross-functional team (design, mobile, backend).",
    exp_2022_period: "2022",
    exp_2022_title: "Internships — iOS (ESPRIT) & Mobile Fullstack (Future Proof)",
    exp_2022_desc: "iOS interfaces (Swift, storyboards, Figma), then Flutter + Spring Boot / GraphQL backend development using Agile.",
    exp_edu_period: "Sep 2018 — Nov 2023",
    exp_edu_title: "Engineering Degree in Computer Science — ESPRIT",
    exp_edu_desc: "Mobile Development specialization. ESPRIT — Higher School of Engineering and Technology, Tunisia.",

  },
};

// Language manager
const LanguageManager = {
  currentLanguage: localStorage.getItem("language") || "fr",
  isInitialLoad: true,

  init() {
    this.updateLanguage(this.currentLanguage, false); // false = no animation on initial load
    this.setupLanguageSelector();
    this.isInitialLoad = false;
  },

  setupLanguageSelector() {
    const languageButtons = document.querySelectorAll("[data-language]");
    languageButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = button.getAttribute("data-language");
        this.updateLanguage(lang, true); // true = show animation when user clicks

        // Close mobile menu when language is changed
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.getElementById('navToggle');
        if (navMenu && navToggle) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      });
    });
  },

  updateLanguage(lang, showAnimation = true) {
    this.currentLanguage = lang;
    localStorage.setItem("language", lang);

    // Keep the document language attribute in sync for a11y & SEO
    document.documentElement.lang = lang;

    // Add glitch animation to all translatable elements
    const translatableElements = [
      ...document.querySelectorAll("[data-i18n]"),
      ...document.querySelectorAll("[data-i18n-list]"),
      ...document.querySelectorAll("[data-i18n-list] li"),
      ...document.querySelectorAll(".language-transition"),
      ...document.querySelectorAll(".project-card"),
      ...document.querySelectorAll(".tech-badge"),
      ...document.querySelectorAll(".profile-image-container"),
    ];

    // Only show animation if requested (not on initial load)
    if (showAnimation) {
      // Force-restart animations so they play on every language change
      translatableElements.forEach((element) => {
        element.classList.remove("glitching");
        element.style.animation = "none";
        // force reflow to reset animation state
        void element.offsetWidth;
        element.style.animation = "";
      });

      // Add glitching class to all elements
      translatableElements.forEach((element) => {
        element.classList.add("glitching");
      });
    }

    // Wait for animation to complete before updating text (or update immediately if no animation)
    setTimeout(
      () => {
        // Update all elements with data-i18n attribute
        document.querySelectorAll("[data-i18n]").forEach((element) => {
          const key = element.getAttribute("data-i18n");
          const translation = this.getTranslation(key);

          if (translation) {
            // Check if it's an input placeholder
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
              element.placeholder = translation;
            } else {
              element.textContent = translation;
            }
          }
        });

        // Update list items with data-i18n-list
        document.querySelectorAll("[data-i18n-list]").forEach((list) => {
          const key = list.getAttribute("data-i18n-list");
          const translations = this.getTranslation(key);

          if (Array.isArray(translations)) {
            const items = list.querySelectorAll("li");
            translations.forEach((text, index) => {
              if (items[index]) {
                items[index].textContent = text;
              }
            });
          }
        });

        // Update typing animation content if available
        if (window.setTypingContent) {
          const typingContent = this.getTranslation("hero_typing");
          if (Array.isArray(typingContent)) {
            window.setTypingContent(typingContent);
          }
        }

        // Remove glitching class after animation (only if animation was shown)
        if (showAnimation) {
          setTimeout(() => {
            translatableElements.forEach((element) => {
              element.classList.remove("glitching");
            });
          }, 100);
        }
      },
      showAnimation ? 1600 : 0
    ); // Wait for animation only if showing it

    // Update active language indicator
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-pressed", "false");
    });
    const activeBtn = document.querySelector(`[data-language="${lang}"]`);
    if (activeBtn) {
      activeBtn.classList.add("active");
      activeBtn.setAttribute("aria-pressed", "true");
    }
  },

  getTranslation(key) {
    const keys = key.split(".");
    let value = translations[this.currentLanguage];

    for (const k of keys) {
      value = value?.[k];
    }

    return value;
  },
};

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    LanguageManager.init();
  });
} else {
  LanguageManager.init();
}

// Export for use in other scripts
window.LanguageManager = LanguageManager;
window.translations = translations;
