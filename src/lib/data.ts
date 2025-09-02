
export const personalData = {
  name: "Javeed",
  email: "durgijaveed07@gmail.com",
  phone: "+91 9391531765",
  website: "javeed-dev.vercel.app",
  heroTitle: "Building digital products, brands, and experiences.",
  heroSubtitle: "A passionate developer specializing in Full Stack Web Development and Machine Learning.",
  aboutTitle: "I'm a developer with a passion for creating and problem-solving.",
  about: "I am a passionate developer with a knack for creating intuitive and powerful applications. My journey into tech started with a curiosity for how things work, which quickly evolved into a full-fledged passion for crafting digital products that are not only functional but also delightful to use.",
  socialLinks: {
    github: "https://github.com/javeedm07",
    linkedin: "https://www.linkedin.com/in/javeed-mahammad",
    leetcode: "https://leetcode.com/javeedm_07/",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/javeed_m07",
    codechef: "https://www.codechef.com/users/javeed_07",
  },
};

export const projects = [
  {
    title: 'Budget Buddy - AI Finance Tracker',
    tags: ['Next.js', 'Supabase', 'React', 'Node.js', 'Tailwind CSS'],
    description: "An AI-powered finance tracking app for seamless expense management.",
    details: [
      "Integrated Google Generative AI API for automatic receipt data extraction and transaction detail autofill.",
      "Implemented secure authentication with Clerk and rate-limiting/bot protection via Arcjet.",
    ],
    link: '#', // Add live link if available
    aiHint: 'finance analytics dashboard'
  },
  {
    title: 'MedConnect - Healthcare Appointment System',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    description: "A system to streamline patient appointment booking.",
    details: [
      "Reduced appointment booking time by 60% through streamlined UI/UX design.",
      "Processed 50+ monthly appointments with a 99.9% payment success rate via Stripe.",
      "Handled 40+ concurrent users through load balancing implementation."
    ],
    link: '#',
    aiHint: 'medical healthcare interface'
  },
  {
    title: 'Age and Gender Prediction System',
    tags: ['Python', 'TensorFlow', 'Keras', 'Pandas'],
    description: "A machine learning model to predict age and gender from images.",
    details: [
      "Achieved 85% accuracy in gender classification and 4.2 years MAE in age prediction.",
      "Processed 23,000+ images with 15% faster training through optimized preprocessing.",
    ],
    link: '#',
    aiHint: 'facial recognition technology'
  },
   {
    title: 'Student Management System',
    tags: ['Java', 'Spring Boot', 'Hibernate', 'Maven', 'REST API'],
    description: "A mini-project for managing student data.",
    details: [
      "Gained expertise in Java fundamentals, servlets, and Spring Boot.",
      "Implemented REST APIs and optimized database interactions using Hibernate.",
    ],
    link: '#',
    aiHint: 'database management system'
  }
];

export const resumeData = {
  experience: [
    {
      role: "Data Science Intern",
      company: "Skilldzire",
      period: "Jan 2025 - Present | Vijayawada",
      description: [
        "Learning data science fundamentals, Python basics, data structures, Pandas, NumPy, and machine learning concepts.",
        "Applying knowledge through hands-on exercises and practical implementations."
      ],
    },
    {
      role: "Java Full Stack Intern",
      company: "Data Valley",
      period: "Jun 2024 - Aug 2024 | Vijayawada",
      description: [
        "Gained expertise in Java fundamentals, servlets, and Spring Boot.",
        "Developed a Student Management System as a mini-project using Maven and Spring Boot.",
        "Implemented REST APIs and optimized database interactions using Hibernate."
      ],
    },
    {
      role: "Machine Learning Intern",
      company: "Indian Servers",
      period: "May 2023 - Jul 2023 | Vijayawada",
      description: [
        "Explored NLP fundamentals, text preprocessing, OpenAI API, Hugging Face, GPT, and BERT.",
        "Created Telegram quiz bot using SVM, achieving 88% response accuracy.",
        "Optimized NLP preprocessing techniques to enhance model efficiency."
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech in CSE",
      institution: "ALIET, JNTUK",
      period: "2021 - 2025 | Vijayawada",
      grade: "CGPA: 8.8/10.0",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Jr. College",
      period: "2019 - 2021 | Vijayawada",
      grade: "96.8%",
    },
    {
      degree: "Secondary School",
      institution: "Adarsh High School",
      period: "2019 | Macherla",
      grade: "GPA: 10.0/10.0",
    },
  ],
  skills: {
    programming: ["Python", "Java", "JavaScript", "R"],
    databases: ["MySQL", "PostgreSQL"],
    "development Tools": ["Git", "GitHub", "Postman", "VS Code", "Google Colab", "Jupyter"],
    "web Stack": ["React.js", "Next.js", "Express.js", "Node.js", "HTML/CSS", "Tailwind CSS"],
  },
  certifications: [
    "Google Data Analytics",
    "Full Stack Web Development (Udemy)",
    "Software Testing (NPTEL)",
    "Python Essentials (CISCO)",
    "Python Basic (HackerRank)",
    "Problem Solving Basic (HackerRank)",
  ],
  awards: [
    "2024 - Third Prize, Academic Excellence, ALIET, CSE",
    "2024 - Winner, Coding Competition, Samiksha 2K23"
  ],
  languages: ["English", "Hindi", "Telugu"],
};
