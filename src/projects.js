const projects = [
  {
    id: 1,
    category: "graphic-design",
    title: "Weather Dashboard UI Design",
    description: "UI Design for a live web project",
    links: {
      repo: "",
      deployed:
        "https://www.behance.net/gallery/190078749/Weather-Dashboard-UI-Project",
    },
    image: {
      source: "/project-images/weather-dashboard-thumb.png",
      alt: "thumbnail for weather dashboard ui project",
    },
  },
  {
    id: 2,
    category: "web-dev",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions and a five day forecast for a city.",
    links: {
      repo: "https://github.com/cazthetraveler/Weather-Dashboard",
      deployed: "https://cazthetraveler.github.io/Weather-Dashboard/",
    },
    image: {
      source: "/project-images/weather-dashboard-thumb.png",
      alt: "thumbnail for weather dashboard project",
    },
  },
  {
    id: 3,
    category: "web-dev",
    title: "Coding Quiz",
    description: "A ten question quiz made with javascript, about javascript!",
    links: {
      repo: "https://github.com/cazthetraveler/Coding-Quiz",
      deployed: "https://cazthetraveler.github.io/Coding-Quiz/",
    },
    image: {
      source: "/project-images/coding-quiz-thumb.png",
      alt: "thumbnail for coding quiz project",
    },
  },
  {
    id: 4,
    category: "web-dev",
    title: "Pixel Pets",
    description:
      "A simple virtual pet game made with model view controllers and NodeJS.",
    links: {
      repo: "https://github.com/cazthetraveler/Pixel-Pets",
      deployed: "https://pixel-pets-8842a450b767.herokuapp.com/",
    },
    image: {
      source:
        "https://github.com/cazthetraveler/Pixel-Pets/blob/main/public/images/pets/mouse/white/default.gif?raw=true",
      alt: "gif thumbnail for pixel pets project",
    },
  },
  {
    id: 5,
    category: "web-dev",
    title: "Wizard Escape",
    description: "Group Project; Survival Escape Puzzle Game.",
    links: {
      repo: "https://github.com/drewhouses/wizard-escape",
      deployed: "https://murmuring-springs-90075-ee5dfd14bef1.herokuapp.com/",
    },
    image: {
      source: "/project-images/wizard-escape-thumb.png",
      alt: "thumbnail for wizard escape project",
    },
  },
  {
    id: 6,
    category: "web-dev",
    title: "weeklyMoodal",
    description: "Group Project; Weekly Mood Checker.",
    links: {
      repo: "https://github.com/jameslwilson364/weeklyMoodal",
      deployed: "https://jameslwilson364.github.io/weeklyMoodal/",
    },
    image: {
      source: "/project-images/weekly-moodal-thumb.png",
      alt: "thumbnail for weeklyMoodal project",
    },
  },
  {
    id: 7,
    category: "graphic-design",
    title: "Bike Poster Illustration",
    description: "A fun bike poster illustration.",
    links: {
      repo: "",
      deployed: "https://www.behance.net/gallery/190077495/Bike-Poster",
    },
    image: {
      source: "/project-images/bike-thumb.png",
      alt: "thumbnail for bike poster illustration",
    },
  },
  {
    id: 8,
    category: "graphic-design",
    title: "XTAL Clothing Co.",
    description: "Logo design project.",
    links: {
      repo: "",
      deployed:
        "https://www.behance.net/gallery/190447801/XTAL-Clothing-Co-Logo-Design-Project",
    },
    image: {
      source: "/project-images/xtal-thumb.png",
      alt: "thumbnail for xtal clothing co logo design project",
    },
  },
  {
    id: 9,
    category: "web-dev",
    title: "Hobby E-Commerce",
    description: "Final Project: ecommerce site.",
    links: {
      repo: "https://github.com/cazthetraveler/Hobby-E-Commerce",
      deployed: "https://hobby-ecommerce.onrender.com/",
    },
    image: {
      source: "/project-images/hobby-thumb.png",
      alt: "thumbnail for hobby shop project",
    },
  },
  {
    id: 10,
    category: "graphic-design",
    title: "Venturaline Email Blasts",
    description:
      "Email blasts I've worked on for Ventura Promotional Products and Time Products International.",
    links: {
      repo: "",
      deployed:
        "https://www.behance.net/gallery/192921927/Venturaline-Email-Blasts",
    },
    image: {
      source: "/project-images/ventura-blasts-thumb.png",
      alt: "thumbnail for ventura blasts",
    },
  },
  {
    id: 11,
    category: "photography",
    title: "Venturaline Product Photography",
    description:
      "Product photos I've taken for Ventura Promotional Products and Time Products International.",
    links: {
      repo: "",
      deployed:
        "https://www.behance.net/gallery/196652685/Venturaline-Product-Photography",
    },
    image: {
      source: "/project-images/ventura-product-photo-thumb.png",
      alt: "thumbnail for ventura product photography",
    },
  },
  {
    id: 12,
    category: "photography",
    title: "Ariela Headshots",
    description: "My first headshot photography session.",
    links: {
      repo: "",
      deployed: "https://www.behance.net/gallery/196651709/Ariela-Headshots",
    },
    image: {
      source: "/project-images/ariela-headshot-thumb.jpg",
      alt: "thumbnail for ariela's headshots",
    },
  },
  {
    id: 13,
    category: "graphic-design",
    title: "Bloom & Petal Floristy Logo Design",
    description: "Logo design project.",
    links: {
      repo: "",
      deployed:
        "https://www.behance.net/gallery/198232625/Bloom-Petal-Floristry-Logo-Design-Project",
    },
    image: {
      source: "/project-images/bloom-petal-logo-thumb.png",
      alt: "thumbnail for bloom and petal logo design",
    },
  },
  {
    id: 14,
    category: "web-dev",
    title: "Bloom & Petal Floristy MERN Stack Website",
    description: "MERN stack project.",
    links: {
      repo: "https://github.com/cazthetraveler/Bloom-and-Petal-Floristry",
      deployed: "https://bloom-and-petal-floristry.onrender.com/",
    },
    image: {
      source: "/project-images/bloom-petal-mern-thumb.png",
      alt: "thumbnail for bloom and petal mern stack website",
    },
  },
  {
    id: 15,
    category: "graphic-design",
    title: "Ventura Summer Catalog 2024",
    description: "Ventura Promotional Products Summer Catalog for 2024.",
    links: {
      repo: "",
      deployed:
        "https://www.behance.net/gallery/199613781/Ventura-Summer-Catalog-2024?",
    },
    image: {
      source: "/project-images/ventura-summer-catalog-2024-thumb.png",
      alt: "thumbnail for ventura summer catalog 2024",
    },
  },
  {
    id: 16,
    category: "web-dev",
    title: "Photography Site",
    description:
      "My photography portfolio website to showcase my works as a photographer.",
    links: {
      repo: "https://github.com/cazthetraveler/Luis-Olmos-Photography",
      deployed: "https://luisolmosphotography.netlify.app/",
    },
    image: {
      source: "https://luisolmosphotography.netlify.app/logo-icon.png",
      alt: "luis olmos photography logo",
    },
  },
  {
    id: 17,
    category: "graphic-design",
    title: "Coastal Interiors Logo Design",
    description: "Logo design practice for an interior company.",
    links: {
      repo: "",
      deployed:
        "https://www.behance.net/gallery/202891313/Coastal-Interiors-Logo-Case-Study",
    },
    image: {
      source: "/project-images/coastal-logo-thumb.png",
      alt: "luis olmos photography logo",
    },
  },
  {
    id: 18,
    category: "graphic-design",
    title: "Coastal Interiors UI Design",
    description: "UI design practice for an interior company.",
    links: {
      repo: "",
      deployed:
        "https://www.behance.net/gallery/202891749/Coastal-Interiors-UI-Design",
    },
    image: {
      source: "/project-images/coastal-ui-thumb.png",
      alt: "luis olmos photography logo",
    },
  },
];

export default projects;
