export type Project = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  details: string[];
  year: number;
  aiHint: string;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    slug: 'budget-buddy',
    title: 'Budget Buddy - AI Finance Tracker',
    tags: ['Next.js', 'Supabase', 'React', 'Node.js', 'Tailwind CSS'],
    description: "An AI-powered finance tracking app for seamless expense management.",
    details: [
      "Integrated Google Generative AI API for automatic receipt data extraction and transaction detail autofill.",
      "Implemented secure authentication with Clerk and rate-limiting/bot protection via Arcjet.",
    ],
    year: 2024,
    aiHint: 'finance analytics dashboard',
    coverImage: '/bb-cover-image.jpg'
  },
  {
    slug: 'medconnect',
    title: 'MedConnect - Healthcare Appointment System',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    description: "A system to streamline patient appointment booking.",
    details: [
      "Reduced appointment booking time by 60% through streamlined UI/UX design.",
      "Processed 50+ monthly appointments with a 99.9% payment success rate via Stripe.",
      "Handled 40+ concurrent users through load balancing implementation."
    ],
    year: 2024,
    aiHint: 'medical healthcare interface'
  },
  {
    slug: 'age-gender-prediction',
    title: 'Age and Gender Prediction System',
    tags: ['Python', 'TensorFlow', 'Keras', 'Pandas'],
    description: "A machine learning model to predict age and gender from images.",
    details: [
      "Achieved 85% accuracy in gender classification and 4.2 years MAE in age prediction.",
      "Processed 23,000+ images with 15% faster training through optimized preprocessing.",
    ],
    year: 2023,
    aiHint: 'facial recognition technology'
  },
   {
    slug: 'student-management-system',
    title: 'Student Management System',
    tags: ['Java', 'Spring Boot', 'Hibernate', 'Maven', 'REST API'],
    description: "A mini-project for managing student data.",
    details: [
      "Gained expertise in Java fundamentals, servlets, and Spring Boot.",
      "Implemented REST APIs and optimized database interactions using Hibernate.",
    ],
    year: 2023,
    aiHint: 'database management system'
  }
];
