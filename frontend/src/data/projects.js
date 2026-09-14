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

  /*
   * Add your next real project here.
   *
   * Example:
   *
   * {
   *   slug: "my-project",
   *   number: "02",
   *   category: "AI / FULL-STACK",
   *   title: "Project title",
   *   summary: "Short description...",
   *   problem: "Problem...",
   *   solution: "Solution...",
   *   stack: ["React", "Django", "PostgreSQL"],
   *   architecture: [],
   *   liveUrl: "https://...",
   *   githubUrl: "https://github.com/..."
   * }
   */
];