export default [
  {
    id: 6,
    live: true,
    isFeatured: true,
    isPublicRepository: true,
    iscasestudy: true,
    role: "Full-stack Developer",
    date: "2023-10-15",
    name: "Farol Discover 🗺️",
    tagline: "A Travel-focused Website with Dynamic Content and a Custom CMS",
    problemStatement:
      "Creating a user-friendly travel website that allows easy content management and dynamic content fetching.",
    shortDescription:
      "Farol Discover is a travel-focused website offering a custom CMS for dynamic content management, and a responsive design, built using React and Next.js.",
    description:
      "Farol Discover is a travel-centric website designed with user-friendliness at its core. It features a custom-built Sanity Studio CMS that allows easy and real-time content management across multiple pages, including the homepage, about us, and contact pages. This CMS flexibility extends to managing tour programs and testimonials dynamically.",
    image: "/farol-discover-clipped.png",
    links: {
      github: "https://github.com/jrparente/farol-discover",
      live: "https://www.faroldiscover.pt/",
    },
    techstack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity.io",
      "Shadcnui",
    ],
    features: [
      "Custom Sanity Studio: Enables the client to manage content across various pages, as well as dynamically create and update tour programs and testimonials.",
      "Contact Form: Incorporates a fully functional contact form for customer inquiries.",
      "Dynamic Content Fetching: Leverages GROQ queries to dynamically fetch and display content from the backend.",
      "Responsive Design: Utilizes Tailwind CSS and Shadcnui for a fully responsive and intuitive user interface.",
    ],
    codeHighlights: [
      "Sanity Studio: Developed custom schemas in Sanity Studio for real-time content updates and versatile content management.",
      "GROQ: Utilized GROQ queries to dynamically fetch content from Sanity Studio, thereby providing a real-time user experience.",
      "Tailwind and Shadcnui: Employed Tailwind CSS and Shadcnui for styling, ensuring a responsive and visually appealing design.",
    ],
    challengesAndLearnings: [
      "CMS Integration: Acquired hands-on experience in integrating a headless CMS (Sanity Studio) with a React and Next.js application. This was my first venture into using Sanity, which involved learning to set up the studio, create schemas, and manage content dynamically.",
      "Dynamic Data Fetching: Gained valuable insights into using GROQ for querying data dynamically from Sanity Studio, a crucial part of creating a real-time, dynamic website.",
      "UI/UX Design: Invested significant effort in creating a seamless and intuitive user interface, focusing on UX principles to enhance user engagement.",
    ],
    results: [],
  },
  {
    id: 5,
    live: true,
    isFeatured: false,
    iscasestudy: true,
    isPublicRepository: false,
    role: "Full-stack Developer",
    date: "2023-09-15",
    name: "AI Business Genie 🤖",
    tagline:
      "Empowering Businesses with AI: Automate Content and Plan Strategically",
    shortDescription:
      "An AI-powered business and content creation assistant designed to streamline daily tasks for professionals.",
    description:
      "AI Business Genie is an advanced platform that automates the generation of high-quality content as well as intricate business plans. Aimed at marketers, entrepreneurs, and business professionals, the platform uses sophisticated AI algorithms to save time and effort in content creation and business planning.",
    image: "/ai-business-genie.png",
    links: {
      github: "",
      live: "https://www.aibusinessgenie.pt/",
    },
    techstack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "APIs",
      "Shadcnui",
      "Clerk Auth",
      "Prisma",
      "AI Prompt Engineering",
      "Stripe Payments",
    ],
    features: [
      "Content Generation: Automatically generates high-quality blog posts, social media captions, and marketing copies.",
      "Business Planning: Assists in crafting comprehensive business plans and financial projections.",
      "User Authentication: Secure login and registration functionality through Clerk Auth.",
      "Database: Utilizes Prisma for CRUD operations, efficiently managing user data and content generations.",
      "Free Tier & Payment Logic: Features a free tier that allows up to 5 free content generations. Beyond that, payment is required. This limitation is checked prior to making API requests to OpenAI, and the user's generation count is stored in Prisma for users who are not subscribed.",
    ],
    codeHighlights: [
      "AI Integration: Integrated OpenAI for automated content creation.",
      "Authentication: Used Clerk Auth for secure and efficient user authentication.",
      "Database: Implemented Prisma for database management.",
      "Payment Integration: Successfully integrated Stripe API for payment processing, marking my first experience in handling real-time financial transactions within an app.",
      "AI Prompt Engineering: Utilized prompt engineering techniques to improve the accuracy and relevance of AI-generated content, customizing the OpenAI GPT model prompts for specialized business use-cases.",
    ],
    challengesAndLearnings: [
      "Vercel Timeouts on API Fetch: Encountering a persistent issue with Vercel's 10-second function timeout limit in the free tier, which is affecting fetch requests to OpenAI's API. The timeouts make the app appear unresponsive and this problem is unique to the deployed version; no such issue occurs in the local environment. Currently exploring alternative deployment solutions and optimization techniques to resolve this.",
      "Edge Function Compatibility: Initially explored Vercel's edge functions coupled with AI SDK streaming as a workaround to bypass the function timeout limitations. However, found that edge functions are not compatible with Clerk Auth and Prisma, creating a dilemma. The edge functions could resolve the timeout issue but introduce security vulnerabilities due to the inability to validate users and enforce request limits effectively.",
      "Shadcn UI Customization: Opted for Shadcn UI over other UI libraries for its unique installation setup. Components are installed directly into the components/ui folder, providing full access to the component code. This flexibility allows for seamless customization, unlike the rigid, pre-formatted components found in libraries like Material UI.",
      "Stripe Payment Integration: Successfully implemented Stripe for payment processing, which was a first-time experience for me. The integration is fully functional, allowing for real-time financial transactions.",
      "AI Prompt Engineering Challenges: Navigated through the complexities of AI prompt engineering to fine-tune the performance of AI-generated content. This was crucial for ensuring that the OpenAI GPT model outputs were aligned with the specialized business use-cases of the platform.",
    ],
  },
  {
    id: 4,
    live: true,
    isFeatured: true,
    iscasestudy: true,
    isPublicRepository: true,
    role: "Full-stack Developer",
    date: "2023-10-15",
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
      "React",
      "Next.js",
      "JavaScript",
      "React Native",
      "Tailwind CSS",
      "APIs",
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
      "Backend Integration: Integrated Supabase for real-time database updates and user authentication.",
      "Server-side Rendering: Used Next.js for server-side rendering in the desktop version, improving performance and SEO.",
      "Mobile Development: Implemented React Native for the mobile app versions.",
      "UI Development: Used Tailwind CSS for rapid UI development in the desktop version, adhering to a mobile-first design approach.",
      "Code Organization: Modularized the codebase with a focus on component reusability and clean architecture.",
    ],
    challengesAndLearnings: [
      "Search and Filter: Implementing real-time search and filter functionalities.",
      "Backend Learning: Learning to work with Supabase for backend functionalities.",
      "Tailwind CSS Learning: This was my first experience with Tailwind CSS. Despite an initial learning curve, I found it aligned well with my preference for utility-first CSS, enhancing my development speed.",
      "Mobile Adaptation: Adapting the desktop version into a mobile app using React Native.",
    ],
  },
  {
    id: 3,
    live: true,
    isFeatured: false,
    iscasestudy: true,
    isPublicRepository: false,
    role: "Full-stack Developer",
    date: "2023-08-15",
    name: "AI Travel Planner ✈️",
    shortDescription:
      "An intuitive travel planner powered by AI. Generates personalized travel itineraries based on user preferences, including destinations, attractions, and activities. Features secure user authentication through Firebase.",
    description:
      "AI Travel Planner is a web application that helps users plan their trips using artificial intelligence. By inputting their destination and travel preferences, the application provides personalized travel plans including recommended destinations, attractions, and itineraries. It's a powerful tool for those who love to travel but find the planning process overwhelming or time-consuming.",
    image: "/ai-travel-agent-screenshot.png",
    links: {
      github: "",
      live: "https://ai-travel-agent.netlify.app/",
    },
    techstack: [
      "React",
      "NextJS",
      "JavaScript",
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
    isPublicRepository: true,
    role: "Front-end Developer",
    date: "2023-10-15",
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
    isPublicRepository: true,
    iscasestudy: false,
    role: "Front-end Developer",
    date: "2023-01-15",
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
