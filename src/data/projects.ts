export default [
  {
    id: 6,
    live: true,
    isFeatured: true,
    iscasestudy: true,
    name: "Farol Discover 🗺️",
    shortDescription:
      "Farol Discover is a travel-focused website with a custom CMS, dynamic content fetching, and a responsive design, built using React.js and Next.js.",
    description:
      "Farol Discover is a travel-centric website, uniquely designed to be user-friendly. It features a customized Sanity Studio CMS that allows easy content management across various pages, including the homepage, about page, and contact page. The CMS also enables the client to manage tour programs and testimonials dynamically.",
    image: "/farol-discover-clipped.png",
    links: {
      github: "https://github.com/jrparente/farol-discover",
      live: "https://www.faroldiscover.pt/",
    },
    techstack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity.io",
      "Shadcnui",
    ],
    features: [
      "Custom Sanity Studio: Allows the client to manage content for multiple pages and create tour programs and testimonials.",
      "Contact Form: Features a fully functional contact form for customer inquiries.",
      "Dynamic Content Fetching: Utilizes GROQ queries to fetch content dynamically to display on the frontend.",
      "Responsive Design: Built with Tailwind CSS and Shadcnui for a fully responsive user interface.",
    ],
    codeHighlights: [
      "Sanity Studio: Created custom schemas in Sanity Studio for real-time updates and content management.",
      "GROQ: Utilized GROQ queries for dynamic content fetching from Sanity Studio.",
      "Tailwind and Shadcnui: Leveraged Tailwind CSS and Shadcnui for styling and responsive design.",
    ],
    challengesAndLearnings: [
      "CMS Integration: Learned how to integrate a headless CMS (Sanity Studio) into a React and Next.js application.",
      "Dynamic Data Fetching: Gained experience in using GROQ for querying data dynamically.",
      "UI/UX Design: Focused on creating a seamless and intuitive user interface.",
    ],
  },
  {
    id: 5,
    live: true,
    isFeatured: false,
    iscasestudy: true,
    name: "AI Business Genie 🤖",
    shortDescription:
      "An AI-powered business and content creation assistant designed to streamline daily tasks for professionals.",
    description:
      "AI Business Genie is an advanced platform that automates the generation of high-quality content as well as intricate business plans. Aimed at marketers, entrepreneurs, and business professionals, the platform uses sophisticated AI algorithms to save time and effort in content creation and business planning.",
    image: "/ai-business-genie.png",
    links: {
      github: "https://github.com/jrparente/ai-business-genie",
      live: "https://www.aibusinessgenie.pt/",
    },
    techstack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcnui",
      "Clerk Auth",
      "Prisma",
    ],
    features: [
      "Content Generation: Automatically generates high-quality blog posts, social media captions, and marketing copies.",
      "Business Planning: Assists in crafting comprehensive business plans and financial projections.",
      "User Authentication: Secure login and registration functionality through Clerk Auth.",
      "Real-time Database: Utilizes Prisma for real-time database management.",
    ],
    codeHighlights: [
      "AI Integration: Integrated OpenAI for automated content creation.",
      "Authentication: Used Clerk Auth for secure and efficient user authentication.",
      "Database: Implemented Prisma for database management.",
    ],
    challengesAndLearnings: [
      "Function Timeouts: Faced challenges with Vercel's function timeouts during OpenAI fetch requests.",
      "Compatibility Issues: Encountered compatibility issues between Clerk Auth, Prisma, and edge functions.",
    ],
  },
  {
    id: 4,
    live: true,
    isFeatured: true,
    iscasestudy: true,
    name: "Library Management Dashboard 📚",
    shortDescription:
      "A CRUD application built to manage library assets and loans, featuring a responsive design for desktop and mobile. Offers user authentication and real-time database updates.",
    description:
      "The Library Management Dashboard is a comprehensive CRUD web application with both desktop and mobile versions. The desktop version is built on top of Next.js and Tailwind CSS, while the mobile version uses React Native. For the backend, the project uses Supabase to handle user authentication and database management.",
    image: "/library-management-dashboard.png",
    links: {
      github: "https://github.com/jrparente/my-book-library",
      live: "https://mybooklibrary.vercel.app/",
    },
    techstack: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Supabase",
    ],
    features: [
      "User Authentication: Secure login and registration functionality.",
      "Book Management: Add, edit, and delete books from the library. Book details include title, author, series, and status.",
      "Loan Management: Add new loans associated with books and borrowers. Keep track of loan status, loan date, and due date.",
      "Search and Filter: Search for books by title, author, or series. Exclude books with specific statuses from search results.",
      "Dashboard: View total books in the library and other key statistics. Listing of books with an option to view more details.",
      "Responsive Design: The UI is fully responsive and adapts to various screen sizes.",
    ],
    codeHighlights: [
      "State Management: Utilized React hooks (useState, useEffect) and custom hooks for state management.",
      "Backend Integration: Integrated Supabase for real-time database updates and user authentication.",
      "Server-side Rendering: Used Next.js for server-side rendering in the desktop version, improving performance and SEO.",
      "Mobile Development: Implemented React Native for the mobile app versions.",
      "UI Development: Used Tailwind CSS for rapid UI development in the desktop version, adhering to a mobile-first design approach.",
      "Code Organization: Modularized the codebase with a focus on component reusability and clean architecture.",
    ],
    challengesAndLearnings: [
      "Search and Filter: Implementing real-time search and filter functionalities.",
      "State Management: Managing state across various components and contexts.",
      "Backend Learning: Learning to work with Supabase for backend functionalities.",
      "Mobile Adaptation: Adapting the desktop version into a mobile app using React Native.",
    ],
  },
  {
    id: 3,
    live: true,
    isFeatured: false,
    iscasestudy: false,
    name: "AI Travel Planner ✈️",
    shortDescription:
      "An intuitive travel planner powered by AI. Generates personalized travel itineraries based on user preferences, including destinations, attractions, and activities. Features secure user authentication through Firebase.",
    description:
      "AI Travel Planner is a web application that helps users plan their trips using artificial intelligence. By inputting their destination and travel preferences, the application provides personalized travel plans including recommended destinations, attractions, and itineraries. It's a powerful tool for those who love to travel but find the planning process overwhelming or time-consuming.",
    image: "/ai-travel-agent-screenshot.png",
    links: {
      github: "https://github.com/jrparente/ai-travel-agent",
      live: "https://ai-travel-agent.netlify.app/",
    },
    techstack: [
      "React",
      "NextJS",
      "Node.js",
      "CSS",
      "APIs",
      "Firebase",
      "AI Prompt Engineering",
    ],
    features: [
      "Personalized Itineraries: Leverages OpenAI's API to generate unique travel plans based on user input such as destination, budget, travel partner, and preferred activities.",
      "User Authentication: Incorporates Firebase for secure login and registration, allowing users to save and manage their itineraries.",
      "Itinerary Management: Users can add new, delete, or modify existing itineraries, which are saved in a Firebase database.",
      "Real-Time AI Responses: Utilizes a series of fetch requests to OpenAI's API to generate itineraries in real-time.",
    ],
    codeHighlights: [
      "OpenAI API Integration: Engineered custom prompts to fetch personalized travel suggestions from OpenAI's API.",
      "Firebase: Integrated Firebase for user authentication and real-time database management.",
      "State Management: Utilized React hooks for state management, particularly to capture and handle user input.",
    ],
    challengesAndLearnings: [
      "API Limitations: Initially faced challenges due to rate-limiting and had to optimize the number of API calls.",
      "Data Parsing: Learned to efficiently parse and format the data returned by the OpenAI API into a user-friendly itinerary.",
      "User Experience: Focused on providing a smooth experience where itineraries could be easily created, saved, and managed.",
      "Authentication: Implemented Firebase for user authentication, learning about its various features like real-time database updates.",
    ],
  },
  {
    id: 2,
    live: true,
    isFeatured: false,
    iscasestudy: false,
    name: "Personal portfolio website 📝",
    shortDescription:
      "My personal portfolio built with the latest React 18 and Vite, showcasing my work and experiments in web development. Features Lucide React icons and styled with Tailwind CSS.",
    description:
      "Welcome to my digital playground! This site is where I tinker with the latest technologies and showcase my work. It's built with Vite and React 18, leveraging features from React Router 6 and Lucide React for icons. The styling is done using Tailwind CSS.",
    image: "./joanaramosparente.png",
    links: {
      github: "https://github.com/jrparente/joanaramosparente",
      live: "",
    },
    techstack: ["React", "TypeScript", "React Router", "Vite", "Tailwind CSS"],
  },
  {
    id: 1,
    live: true,
    isFeatured: false,
    iscasestudy: false,
    name: "Simple Dinners Generator 🍽️",
    image: "./simple-dinners.png",
    shortDescription:
      "A meal planning app designed for simplicity. Automatically generates a week's worth of easy-to-cook dinner ideas along with a shopping list. Tailored for those who prefer straightforward meals.",
    description:
      "Ever found yourself stuck deciding what to cook for dinner? Me too! That's why I'm creating an app that'll whip up simple dinner ideas for the whole week. It'll even generate a shopping list for you. I know there are already some out there, but this one's custom-made for those of us who prefer 'simpler' meals. It's a work in progress, but I'm quite proud of it.",
    links: {
      github: "https://github.com/jrparente/app-simple-dinners",
      live: "https://simple-dinner-generator.netlify.app/",
    },
    techstack: ["React", "CSS", "JavaScript"],
  },
];
