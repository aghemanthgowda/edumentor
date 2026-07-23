export type Mentor = {
  id: string;
  name: string;
  expertise: string;
  category: string;
  rating: number;
  price: number;
  bio: string;
  accent: string;
};

export type Course = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  desc: string;
};

export const CATEGORIES = [
  "All",
  "Web Dev",
  "Data Science",
  "AI/ML",
  "Design",
  "Cloud",
  "Career",
] as const;

export const MENTORS: Mentor[] = [
  {
    id: "m1",
    name: "Aisha Nakamura",
    expertise: "Senior Frontend Engineer",
    category: "Web Dev",
    rating: 4.9,
    price: 65,
    bio: "Ex-Vercel. Ships design systems and teaches React, Next.js & accessible UI.",
    accent: "#7C5CFF",
  },
  {
    id: "m2",
    name: "Diego Fernández",
    expertise: "Machine Learning Lead",
    category: "AI/ML",
    rating: 5.0,
    price: 95,
    bio: "Builds LLM pipelines at scale. Loves demystifying transformers for beginners.",
    accent: "#5B8DEF",
  },
  {
    id: "m3",
    name: "Priya Sharma",
    expertise: "Data Science Manager",
    category: "Data Science",
    rating: 4.8,
    price: 80,
    bio: "10 yrs turning messy data into decisions. Python, SQL, and storytelling.",
    accent: "#2FBF9E",
  },
  {
    id: "m4",
    name: "Marcus Bell",
    expertise: "Product Designer",
    category: "Design",
    rating: 4.9,
    price: 70,
    bio: "Designed apps for millions. Figma workflows, UX research & portfolio reviews.",
    accent: "#F0658D",
  },
  {
    id: "m5",
    name: "Lena Okoro",
    expertise: "Cloud Solutions Architect",
    category: "Cloud",
    rating: 4.7,
    price: 90,
    bio: "AWS & Kubernetes specialist. Helps engineers pass certs and design systems.",
    accent: "#E8A33D",
  },
  {
    id: "m6",
    name: "Tom Hollis",
    expertise: "Engineering Career Coach",
    category: "Career",
    rating: 4.9,
    price: 55,
    bio: "Ex-FAANG recruiter. Mock interviews, resume rewrites & offer negotiation.",
    accent: "#9B82FF",
  },
  {
    id: "m7",
    name: "Sofia Rossi",
    expertise: "Full-Stack Engineer",
    category: "Web Dev",
    rating: 4.8,
    price: 60,
    bio: "TypeScript everywhere. Node, Postgres, and pragmatic testing strategies.",
    accent: "#5CC8FF",
  },
  {
    id: "m8",
    name: "Kwame Mensah",
    expertise: "AI Research Engineer",
    category: "AI/ML",
    rating: 5.0,
    price: 110,
    bio: "Published in NeurIPS. Guides applied ML projects from idea to deployment.",
    accent: "#7C5CFF",
  },
  {
    id: "m9",
    name: "Hana Kim",
    expertise: "Analytics Engineer",
    category: "Data Science",
    rating: 4.7,
    price: 75,
    bio: "dbt, warehousing & dashboards. Makes analytics engineering click.",
    accent: "#2FBF9E",
  },
  {
    id: "m10",
    name: "Oliver Grant",
    expertise: "UX & Brand Designer",
    category: "Design",
    rating: 4.8,
    price: 68,
    bio: "Brand systems and motion. Helps designers craft standout case studies.",
    accent: "#F0658D",
  },
];

export const COURSES: Course[] = [
  {
    id: "c1",
    title: "Modern React & Next.js 14",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 42,
    desc: "Master the App Router, server components, and production-grade patterns.",
  },
  {
    id: "c2",
    title: "Foundations of Machine Learning",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 30,
    desc: "From linear regression to neural nets with hands-on Python notebooks.",
  },
  {
    id: "c3",
    title: "Data Analysis with Python",
    level: "Beginner",
    duration: "5 weeks",
    lessons: 26,
    desc: "Pandas, visualization, and real datasets to build analytical intuition.",
  },
  {
    id: "c4",
    title: "Product Design Systems",
    level: "Intermediate",
    duration: "7 weeks",
    lessons: 34,
    desc: "Design tokens, components, and scalable Figma libraries teams love.",
  },
  {
    id: "c5",
    title: "Cloud Native on AWS",
    level: "Advanced",
    duration: "9 weeks",
    lessons: 48,
    desc: "Containers, IaC, and resilient architectures for real workloads.",
  },
  {
    id: "c6",
    title: "Ace the Tech Interview",
    level: "Intermediate",
    duration: "4 weeks",
    lessons: 22,
    desc: "Data structures, system design, and behavioral prep with mock rounds.",
  },
];

export const STATS = [
  { value: "200+", label: "Expert Mentors" },
  { value: "5,000+", label: "Sessions Booked" },
  { value: "4.9", label: "Average Rating" },
  { value: "30+", label: "Domains Covered" },
];

export const STEPS = [
  {
    title: "Find your mentor",
    desc: "Search and filter by domain, skill, and rating to find the perfect match for your goals.",
  },
  {
    title: "Book a session",
    desc: "Pick a date and time that works for you and share what you'd like to focus on.",
  },
  {
    title: "Learn 1:1",
    desc: "Meet live over video for personalized guidance, code review, and honest feedback.",
  },
  {
    title: "Grow & repeat",
    desc: "Track progress, set milestones, and keep the momentum with follow-up sessions.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "My mentor helped me refactor my portfolio and I landed a frontend role in six weeks. Worth every session.",
    name: "Jordan Ellis",
    role: "Junior Developer",
    accent: "#7C5CFF",
  },
  {
    quote:
      "The ML guidance was incredible — clear explanations and real project reviews. I finally understand transformers.",
    name: "Meera Patel",
    role: "Data Analyst",
    accent: "#2FBF9E",
  },
  {
    quote:
      "Mock interviews on EduMentor gave me the confidence to negotiate a 30% higher offer. Game changer.",
    name: "Chris Nowak",
    role: "Backend Engineer",
    accent: "#F0658D",
  },
  {
    quote:
      "As a career switcher, having a real designer review my work weekly made all the difference.",
    name: "Amara Diallo",
    role: "Product Designer",
    accent: "#E8A33D",
  },
];
