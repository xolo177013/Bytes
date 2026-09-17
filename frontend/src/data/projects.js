export const projects = [
  {
    slug: "bytes-jobs",
    number: "01",
    category: "HIRING / FULL-STACK",

    title:
      "A job platform that scores fit instead of just listing keywords.",

    summary:
      "A full-stack job portal connecting candidates and recruiters, with an explainable matching engine instead of a black-box score.",

    problem:
      "Keyword-matched job boards surface volume, not relevance — candidates apply blind, and recruiters spend time sorting applicants who were never a real fit.",

    solution:
      "Bytes Jobs combines structured signals such as location, experience, salary and work mode with text similarity into one transparent match score.",

    stack: [
      "React",
      "Django REST Framework",
      "PostgreSQL",
      "scikit-learn",
    ],

    architecture: [
      {
        title: "Accounts",
        text:
          "Cookie-based JWT authentication with separate candidate and recruiter roles, plus team and company membership.",
      },
      {
        title: "Matching",
        text:
          "TF-IDF text similarity blended with structured compatibility signals into one explainable score.",
      },
      {
        title: "Applications",
        text:
          "Status-tracked application pipeline from applied through interview to offer, with an audit history.",
      },
      {
        title: "Delivery",
        text:
          "Dockerized Django API on Render, PostgreSQL on Neon, and React frontend on Vercel.",
      },
    ],

    liveUrl:
      "https://bytes-jobs.vercel.app/",

    githubUrl:
      "https://github.com/xolo177013/Bytes_Jobs",
  },

  {
    slug: "Zylo",
    number: "02",
    category: "E-COMMERCE / FULL-STACK",

    title:
      "A production-structured e-commerce platform with a complete shopping and order workflow.",

    summary:
      "A full-stack e-commerce application connecting a React storefront to a Node.js, Express and MongoDB API, with JWT authentication, persistent carts, checkout, mock payments, order tracking and admin controls.",

    problem:
      "Basic storefronts often separate product browsing from the operational workflows behind it — authentication, persistent carts, payments, inventory and order management. Zylo brings the complete customer and admin flow into one connected system.",

    solution:
      "Zylo combines a React and Tailwind CSS storefront with an Express REST API and MongoDB persistence, providing authenticated shopping, server-side cart management, checkout with a simulated payment gateway, order tracking and role-based administration.",

    stack: [
      "React",
      "Node.js / Express",
      "MongoDB / Mongoose",
      "JWT / bcrypt",
    ],

    architecture: [
      {
        title: "Authentication",
        text:
          "JWT-based signup and login with bcrypt password hashing and role-based access control for customer and admin accounts.",
      },
      {
        title: "Catalog",
        text:
          "MongoDB-backed product catalog with keyword search, category and price filtering, sorting, pagination and individual product pages.",
      },
      {
        title: "Cart & Checkout",
        text:
          "Server-persisted carts with live stock-aware quantities, followed by checkout and a simulated payment gateway supporting successful, failed and retry payment flows.",
      },
      {
        title: "Orders & Admin",
        text:
          "Customer order history and status timelines combined with an admin dashboard for product management and advancing order fulfillment statuses.",
      },
    ],

    liveUrl:
      "https://zylo-kappa.vercel.app/",

    githubUrl:
      "https://github.com/xolo177013/Zylo",
  },

];