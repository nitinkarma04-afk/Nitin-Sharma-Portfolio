export const projects = [
  {
    id: "virtual-assistant",
    slug: "virtual-assistant",
    title: "AI Virtual Assistant",
    tagline: "Voice-enabled intelligent AI assistant for automated task assistance.",
    category: "Full Stack / AI",
    featured: true,
    badge: "Featured / Production",
    shortDescription:
      "A full-stack AI virtual assistant featuring voice recognition, real-time command processing, and conversational intelligence powered by a custom backend API.",
    description:
      "A complete full-stack AI virtual assistant built to deliver seamless human-like interactions. Incorporates speech-to-text processing, natural language command parsing, customized context responses, and a robust Node/Express backend communicating with responsive React UI.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Web Speech API",
      "REST APIs",
      "Tailwind CSS"
    ],
    features: [
      "Real-time voice recognition & speech synthesis",
      "Intelligent command parsing & intent detection",
      "Dynamic responsive UI with interactive visual feedback",
      "Secure REST API backend for user session handling",
      "MongoDB database integration for logging & user preferences",
      "Optimized latency with CORS & environment configurations"
    ],
    architecture: [
      "Frontend: React + Tailwind CSS with Web Speech API integration",
      "Backend: Node.js & Express RESTful API microservices",
      "Database: MongoDB with Mongoose ODM schema validations",
      "Deployment: Continuous deployment on Vercel with cloud environment variables"
    ],
    challenges: [
      {
        problem: "Handling asynchronous voice streaming and state updates across different browser engines.",
        solution:
          "Implemented graceful fallbacks and normalized Web Speech API listeners within custom React hooks."
      },
      {
        problem: "Connecting frontend client with decoupled backend services securely.",
        solution:
          "Engineered structured REST APIs with CORS security, input sanitization, and environment-based endpoint routing."
      },
      {
        problem: "Zero-downtime production deployment.",
        solution:
          "Configured modular environment variables, client-side routing rewrites, and optimized production asset bundles."
      }
    ],
    learnings: [
      "Architecting end-to-end full-stack AI interactive workflows",
      "Designing clean RESTful API contracts and error-handling middleware",
      "State synchronization between real-time browser audio APIs and React state",
      "Production deployment and cross-origin resource sharing (CORS) best practices"
    ],
    github: "https://github.com/nitinkarma04-afk/Ai-Virtual-Assistant",
    live: "https://ai-virtual-assistant-amber.vercel.app/"
  },
  {
    id: "eventora",
    slug: "eventora",
    title: "Eventora",
    tagline: "Full-stack event discovery, booking, and management platform.",
    category: "Full Stack / MERN",
    featured: true,
    badge: "MERN Stack",
    shortDescription:
      "A modern event booking and management platform built with the MERN stack, featuring role-based workflows, dynamic listings, and secure CRUD operations.",
    description:
      "Eventora is an end-to-end MERN stack event management web application designed for discovering, reserving, and managing events. Features secure data flows, relational document modelling in MongoDB, and a fluid user interface built for high conversion.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS"
    ],
    features: [
      "Comprehensive event creation, editing, and deletion (CRUD)",
      "Dynamic search and multi-criteria event filtering",
      "Seat reservation and booking management workflow",
      "Responsive cards and interactive modal interfaces",
      "Structured REST API backend with modular MVC architecture",
      "Optimized database queries with indexing on event dates and categories"
    ],
    architecture: [
      "Frontend: React SPA with client-side routing & responsive layouts",
      "Backend: Express.js REST API with controller-service architecture",
      "Database: MongoDB database with Mongoose schemas & validation",
      "Hosting: Vercel frontend deployment connected to cloud API services"
    ],
    challenges: [
      {
        problem: "Structuring relational data for bookings, users, and events in a document-based database.",
        solution:
          "Implemented normalized MongoDB schemas with Mongoose population and lean queries for high read throughput."
      },
      {
        problem: "Managing complex booking state transitions and preventing overbooking.",
        solution:
          "Engineered atomic update operations in MongoDB and backend validation checks before booking confirmation."
      },
      {
        problem: "Ensuring responsive layout across diverse mobile viewport widths.",
        solution:
          "Used Tailwind CSS grid/flexbox primitives with mobile-first breakpoints and accessible tap targets."
      }
    ],
    learnings: [
      "End-to-end MERN stack application lifecycle from schema design to deployment",
      "Advanced MongoDB aggregation and schema relationship design",
      "Building resilient REST API error handling and status code conventions",
      "Component decoupling and state management in modern React"
    ],
    github: "https://github.com/nitinkarma04-afk/Eventora",
    live: "https://eventora-rosy.vercel.app/"
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find(
    (p) => p.slug === slug || p.id === slug || p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
};