export const COURSES = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Web Development",
    difficulty: "Beginner",
    instructor: "Aisha Verma",
    duration: "6h 30m",
    rating: 4.7,
    enrolledCount: 128,
    reviewCount: 42,
    price: 0,
    thumbnail: "⚛️",

    reviews: [
      {
        name: "Arun",
        rating: 5,
        comment: "Very easy to understand and useful for beginners.",
      },
      {
        name: "Priya",
        rating: 4,
        comment: "Good course with clear explanations.",
      },
      {
        name: "Kavin",
        rating: 5,
        comment: "The practical examples were really helpful.",
      },
    ],

    description:
      "Learn the fundamentals of React including components, props, and state management. Build real projects from scratch.",

    lessons: [
      {
        id: "1-1",
        title: "Introduction to React",
        type: "video",
        duration: "12m",
        videoUrl: "https://www.youtube.com/embed/Tn6-PIqc4UM",
        content:
          "React is a JavaScript library for building user interfaces using reusable, composable components.",
        notes:
          "Focus on the component tree mental model — everything in React is a component.",
      },
      {
        id: "1-2",
        title: "JSX & Components",
        type: "text",
        duration: "15m read",
        content:
          "JSX lets you write markup-like syntax directly in JavaScript. A component is just a function that returns JSX. Components can be nested, reused, and composed to build complex UIs from small pieces.",
        notes:
          "Remember: JSX compiles down to React.createElement() calls under the hood.",
      },
      {
        id: "1-3",
        title: "Props & State",
        type: "video",
        duration: "18m",
        videoUrl: "https://www.youtube.com/embed/9-oZI_uf8Wc",
        content:
          "Props pass data from parent to child components and are read-only. State is data owned and managed within a component that can change over time via useState.",
        notes:
          "Props flow down, events flow up — this is the core of React's data flow.",
      },
      {
        id: "1-4",
        title: "Handling Events",
        type: "text",
        duration: "10m read",
        content:
          "React event handlers are passed as props (onClick, onChange, onSubmit) and receive a synthetic event object. Always avoid inline object/array creation in hot render paths where possible.",
        notes: "",
      },
      {
        id: "1-5",
        title: "Building a To-Do App",
        type: "video",
        duration: "25m",
        videoUrl: "https://www.youtube.com/embed/RVFAyFWO4go",
        content:
          "Apply everything learned so far — components, props, state, and events — to build a working to-do list application from scratch.",
        notes:
          "Try extending it with local storage persistence as a bonus exercise.",
      },
    ],

    quiz: [
      {
        question: "What does JSX stand for?",
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JSON XML",
          "None of these",
        ],
        answer: 0,
      },
      {
        question: "Which hook is used to manage state?",
        options: [
          "useEffect",
          "useState",
          "useRef",
          "useMemo",
        ],
        answer: 1,
      },
      {
        question: "Props are ___ in React.",
        options: [
          "Mutable",
          "Read-only",
          "Optional always",
          "Not used",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    category: "Programming",
    difficulty: "Advanced",
    instructor: "Rahul Menon",
    duration: "9h 15m",
    rating: 4.8,
    enrolledCount: 96,
    reviewCount: 31,
    price: 999,
    thumbnail: "🟨",

    reviews: [
      {
        name: "Vishal",
        rating: 5,
        comment: "Excellent explanation of advanced JavaScript.",
      },
      {
        name: "Meena",
        rating: 4,
        comment: "Very useful for understanding async concepts.",
      },
      {
        name: "Rahul",
        rating: 5,
        comment: "Good examples and practical explanations.",
      },
    ],

    description:
      "Deep dive into closures, prototypes, async/await, and the event loop. Master modern JavaScript patterns.",

    lessons: [
      {
        id: "2-1",
        title: "Closures & Scope",
        type: "video",
        duration: "20m",
        videoUrl: "https://www.youtube.com/embed/3a0I8ICR1Vg",
        content:
          "A closure is a function that remembers the variables from the scope it was created in, even after that outer scope has finished executing.",
        notes:
          "Closures are the basis for patterns like memoization, private state, and currying.",
      },
      {
        id: "2-2",
        title: "Prototypal Inheritance",
        type: "text",
        duration: "16m read",
        content:
          "JavaScript objects inherit properties from a prototype object. Every object has an internal [[Prototype]] link, forming a chain that's walked during property lookup.",
        notes: "",
      },
      {
        id: "2-3",
        title: "Async/Await Deep Dive",
        type: "video",
        duration: "22m",
        videoUrl: "https://www.youtube.com/embed/vn3tm0quoqE",
        content:
          "async/await is syntactic sugar over Promises, making asynchronous code read like synchronous code while still being non-blocking.",
        notes:
          "Always wrap awaited calls in try/catch for proper error handling.",
      },
      {
        id: "2-4",
        title: "Event Loop Explained",
        type: "text",
        duration: "14m read",
        content:
          "The event loop coordinates the call stack, callback queue, and microtask queue, allowing JavaScript's single thread to handle async operations without blocking.",
        notes:
          "Microtasks (Promises) always run before the next macrotask (setTimeout).",
      },
      {
        id: "2-5",
        title: "Design Patterns",
        type: "video",
        duration: "19m",
        videoUrl: "https://www.youtube.com/embed/tv-_1er1mWI",
        content:
          "Explore common JS design patterns — module, singleton, observer, and factory — and when to reach for each.",
        notes: "",
      },
    ],

    quiz: [
      {
        question: "What is a closure?",
        options: [
          "A function bundled with its lexical scope",
          "A loop construct",
          "A CSS property",
          "A type of array",
        ],
        answer: 0,
      },
      {
        question: "What does 'await' pause?",
        options: [
          "The whole browser",
          "Execution of the async function",
          "The CSS engine",
          "Nothing",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: 3,
    title: "UI/UX Design Principles",
    category: "Design",
    difficulty: "Intermediate",
    instructor: "Meera Iyer",
    duration: "5h 45m",
    rating: 4.6,
    enrolledCount: 74,
    reviewCount: 24,
    price: 999,
    thumbnail: "🎨",

    reviews: [
      {
        name: "Ananya",
        rating: 5,
        comment: "Simple and useful design concepts.",
      },
      {
        name: "Rohit",
        rating: 4,
        comment: "The wireframing section was helpful.",
      },
      {
        name: "Divya",
        rating: 5,
        comment: "Good introduction to UI and UX.",
      },
    ],

    description:
      "Understand core design principles, color theory, typography, and how to create user-centered interfaces.",

    lessons: [
      {
        id: "3-1",
        title: "Design Thinking",
        type: "video",
        duration: "14m",
        videoUrl: "https://www.youtube.com/embed/_r0VX-aU_T8",
        content:
          "Design thinking is a human-centered process: empathize, define, ideate, prototype, and test — repeated iteratively.",
        notes: "",
      },
      {
        id: "3-2",
        title: "Color & Typography",
        type: "text",
        duration: "12m read",
        content:
          "Color communicates mood and hierarchy; typography guides readability and tone. Limit palettes to 2-3 core colors and 1-2 font families for consistency.",
        notes:
          "Check contrast ratios for accessibility (WCAG AA minimum 4.5:1 for body text).",
      },
      {
        id: "3-3",
        title: "Wireframing",
        type: "video",
        duration: "17m",
        videoUrl: "https://www.youtube.com/embed/mfoZXcuGDBE",
        content:
          "Wireframes are low-fidelity layout blueprints used to plan structure and content placement before visual design begins.",
        notes: "",
      },
      {
        id: "3-4",
        title: "Prototyping",
        type: "text",
        duration: "13m read",
        content:
          "Interactive prototypes let you test flows and interactions before writing code, catching usability issues early and cheaply.",
        notes: "",
      },
      {
        id: "3-5",
        title: "Usability Testing",
        type: "video",
        duration: "16m",
        videoUrl: "https://www.youtube.com/embed/0GcyFsUpAIA",
        content:
          "Run structured usability tests with real users to validate design decisions with evidence, not assumptions.",
        notes: "",
      },
    ],

    quiz: [
      {
        question: "What is the primary goal of UX design?",
        options: [
          "Making things colorful",
          "User satisfaction & usability",
          "Adding animations",
          "SEO",
        ],
        answer: 1,
      },
      {
        question: "A wireframe is best described as:",
        options: [
          "A final polished UI",
          "A low-fidelity layout blueprint",
          "A marketing document",
          "A font",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: 4,
    title: "Python for Data Science",
    category: "Data Science",
    difficulty: "Intermediate",
    instructor: "Karthik Subramanian",
    duration: "12h 00m",
    rating: 4.9,
    enrolledCount: 112,
    reviewCount: 38,
    price: 999,
    thumbnail: "🐍",

    reviews: [
      {
        name: "Hari",
        rating: 5,
        comment: "Very good Python and Pandas explanation.",
      },
      {
        name: "Sneha",
        rating: 5,
        comment: "The mini project was really useful.",
      },
      {
        name: "Manoj",
        rating: 4,
        comment: "Good course for beginners in data science.",
      },
    ],

    description:
      "Master Python libraries like Pandas, NumPy, and Matplotlib to analyze and visualize real-world datasets.",

    lessons: [
      {
        id: "4-1",
        title: "Python Basics Recap",
        type: "text",
        duration: "10m read",
        content:
          "Quick refresher on Python syntax, data structures (lists, dicts, tuples), and functions before diving into data-specific libraries.",
        notes: "",
      },
      {
        id: "4-2",
        title: "NumPy Arrays",
        type: "video",
        duration: "20m",
        videoUrl: "https://www.youtube.com/embed/QUT1VHiLmmI",
        content:
          "NumPy arrays are homogeneous, fixed-type, and much faster than plain Python lists for numerical operations thanks to vectorization.",
        notes: "",
      },
      {
        id: "4-3",
        title: "Pandas DataFrames",
        type: "video",
        duration: "24m",
        videoUrl: "https://www.youtube.com/embed/vmEHCJofslg",
        content:
          "DataFrames are labeled, two-dimensional tables — the primary structure for cleaning, filtering, and transforming tabular data in Pandas.",
        notes: "",
      },
      {
        id: "4-4",
        title: "Data Visualization",
        type: "text",
        duration: "15m read",
        content:
          "Matplotlib and Seaborn turn raw numbers into charts — line plots, histograms, and heatmaps — to reveal trends and outliers visually.",
        notes: "",
      },
      {
        id: "4-5",
        title: "Mini Project",
        type: "video",
        duration: "30m",
        videoUrl: "https://www.youtube.com/embed/r-uOLxNrNk8",
        content:
          "Put it all together: load a real dataset, clean it with Pandas, and produce a short visual analysis report.",
        notes: "",
      },
    ],

    quiz: [
      {
        question: "Which library is used for dataframes?",
        options: [
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Requests",
        ],
        answer: 1,
      },
      {
        question: "NumPy arrays are:",
        options: [
          "Slower than lists",
          "Homogeneous & fast",
          "Only for text",
          "Deprecated",
        ],
        answer: 1,
      },
    ],
  },

  {
    id: 5,
    title: "Node.js & Express Fundamentals",
    category: "Web Development",
    difficulty: "Beginner",
    instructor: "Sneha Rao",
    duration: "7h 20m",
    rating: 4.5,
    enrolledCount: 89,
    reviewCount: 21,
    price: 999,
    thumbnail: "🟩",

    reviews: [
      {
        name: "Akash",
        rating: 5,
        comment: "Good introduction to Node.js and Express.",
      },
      {
        name: "Keerthi",
        rating: 4,
        comment: "The REST API section was useful.",
      },
      {
        name: "Sanjay",
        rating: 5,
        comment: "Easy to follow and practical.",
      },
    ],

    description:
      "Build RESTful APIs using Node.js and Express. Learn routing, middleware, and connecting to databases.",

    lessons: [
      {
        id: "5-1",
        title: "Node.js Basics",
        type: "video",
        duration: "15m",
        videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
        content:
          "Node.js runs JavaScript outside the browser using the V8 engine, enabling server-side scripting with an event-driven, non-blocking I/O model.",
        notes: "",
      },
      {
        id: "5-2",
        title: "Express Routing",
        type: "text",
        duration: "12m read",
        content:
          "Express routes map HTTP methods and URL paths to handler functions, forming the backbone of a RESTful API.",
        notes: "",
      },
      {
        id: "5-3",
        title: "Middleware",
        type: "video",
        duration: "18m",
        videoUrl: "https://www.youtube.com/embed/lY6icfhap2o",
        content:
          "Middleware functions run between the request and response, with access to req, res, and next — used for logging, auth, and parsing.",
        notes: "",
      },
      {
        id: "5-4",
        title: "Connecting MongoDB",
        type: "text",
        duration: "16m read",
        content:
          "Use Mongoose to define schemas and models, then connect your Express app to a MongoDB database for persistent storage.",
        notes: "",
      },
      {
        id: "5-5",
        title: "Building a REST API",
        type: "video",
        duration: "28m",
        videoUrl: "https://www.youtube.com/embed/l8WPWK9mS5M",
        content:
          "Combine routing, middleware, and a database to build a complete CRUD REST API from scratch.",
        notes: "",
      },
    ],

    quiz: [
      {
        question: "Express is a framework for:",
        options: [
          "Frontend styling",
          "Node.js web servers",
          "Mobile apps",
          "Databases",
        ],
        answer: 1,
      },
      {
        question: "Middleware functions have access to:",
        options: [
          "req, res, next",
          "Only res",
          "Only the DOM",
          "CSS variables",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: 6,
    title: "Machine Learning Foundations",
    category: "Data Science",
    difficulty: "Advanced",
    instructor: "Priya Nair",
    duration: "14h 10m",
    rating: 4.8,
    enrolledCount: 67,
    reviewCount: 19,
    price: 999,
    thumbnail: "🤖",

    reviews: [
      {
        name: "Naveen",
        rating: 5,
        comment: "Great introduction to machine learning.",
      },
      {
        name: "Ishita",
        rating: 4,
        comment: "Model evaluation was explained clearly.",
      },
      {
        name: "Adithya",
        rating: 5,
        comment: "The capstone project was interesting.",
      },
    ],

    description:
      "Explore supervised & unsupervised learning, model evaluation, and hands-on scikit-learn projects.",

    lessons: [
      {
        id: "6-1",
        title: "ML Overview",
        type: "video",
        duration: "16m",
        videoUrl: "https://www.youtube.com/embed/ukzFI9rgwfU",
        content:
          "Machine learning trains algorithms on data to make predictions or decisions without being explicitly programmed for each rule.",
        notes: "",
      },
      {
        id: "6-2",
        title: "Supervised Learning",
        type: "text",
        duration: "18m read",
        content:
          "Supervised learning uses labeled data to learn a mapping from inputs to outputs — common tasks include classification and regression.",
        notes: "",
      },
      {
        id: "6-3",
        title: "Unsupervised Learning",
        type: "video",
        duration: "20m",
        videoUrl: "https://www.youtube.com/embed/JnnaDNNb380",
        content:
          "Unsupervised learning finds structure in unlabeled data — clustering and dimensionality reduction are key techniques.",
        notes: "",
      },
      {
        id: "6-4",
        title: "Model Evaluation",
        type: "text",
        duration: "15m read",
        content:
          "Evaluate models using accuracy, precision, recall, F1-score, and cross-validation to avoid overfitting and misleading results.",
        notes: "",
      },
      {
        id: "6-5",
        title: "Capstone Project",
        type: "video",
        duration: "35m",
        videoUrl: "https://www.youtube.com/embed/7eh4d6sabA0",
        content:
          "Build and evaluate a complete ML pipeline end-to-end using scikit-learn on a real-world dataset.",
        notes: "",
      },
    ],

    quiz: [
      {
        question: "Supervised learning requires:",
        options: [
          "Labeled data",
          "No data",
          "Only images",
          "Only text",
        ],
        answer: 0,
      },
      {
        question: "Which metric evaluates classification models?",
        options: [
          "RMSE",
          "Accuracy",
          "R-squared",
          "MAE",
        ],
        answer: 1,
      },
    ],
  },
];

export const CATEGORIES = [
  "All",
  ...new Set(COURSES.map((c) => c.category)),
];

export const DIFFICULTIES = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];