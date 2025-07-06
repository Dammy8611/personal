// Static data to replace API calls
export const staticProjects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing e-commerce operations with real-time analytics and inventory management.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: "https://placehold.co/400x300/png",
    githubUrl: "https://github.com/dtechy/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard.demo.com",
    featured: true,
    category: "Web Application",
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    image: "https://placehold.co/400x300/png",
    githubUrl: "https://github.com/dtechy/task-manager",
    liveUrl: "https://task-manager.demo.com",
    featured: true,
    category: "Productivity",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Leaflet", "CSS3"],
    image: "https://placehold.co/400x300/png",
    githubUrl: "https://github.com/dtechy/weather-app",
    liveUrl: "https://weather-app.demo.com",
    featured: false,
    category: "Mobile",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing projects and skills with smooth animations.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "https://placehold.co/400x300/png",
    githubUrl: "https://github.com/dtechy/portfolio",
    liveUrl: "https://dtechy.dev",
    featured: true,
    category: "Web Application",
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A full-featured blog platform with markdown support and comment system.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    image: "https://placehold.co/400x300/png",
    githubUrl: "https://github.com/dtechy/blog-platform",
    liveUrl: "https://blog.dtechy.dev",
    featured: false,
    category: "Content Management",
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media performance tracking and insights.",
    technologies: ["Vue.js", "Chart.js", "Express.js", "MongoDB"],
    image: "https://placehold.co/400x300/png",
    githubUrl: "https://github.com/dtechy/social-analytics",
    liveUrl: "https://analytics.demo.com",
    featured: false,
    category: "Analytics",
  },
];

export const staticSkills = [
  {
    id: 1,
    name: "JavaScript",
    level: 95,
    category: "Programming Languages",
  },
  {
    id: 2,
    name: "TypeScript",
    level: 90,
    category: "Programming Languages",
  },
  {
    id: 3,
    name: "React",
    level: 92,
    category: "Frontend Frameworks",
  },
  {
    id: 4,
    name: "Next.js",
    level: 88,
    category: "Frontend Frameworks",
  },
  {
    id: 5,
    name: "Vue.js",
    level: 85,
    category: "Frontend Frameworks",
  },
  {
    id: 6,
    name: "Node.js",
    level: 87,
    category: "Backend Technologies",
  },
  {
    id: 7,
    name: "Express.js",
    level: 85,
    category: "Backend Technologies",
  },
  {
    id: 8,
    name: "PostgreSQL",
    level: 82,
    category: "Databases",
  },
  {
    id: 9,
    name: "MongoDB",
    level: 80,
    category: "Databases",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    level: 93,
    category: "CSS Frameworks",
  },
  {
    id: 11,
    name: "Framer Motion",
    level: 88,
    category: "Animation Libraries",
  },
  {
    id: 12,
    name: "Git",
    level: 90,
    category: "Tools",
  },
  {
    id: 13,
    name: "Docker",
    level: 75,
    category: "DevOps",
  },
  {
    id: 14,
    name: "AWS",
    level: 78,
    category: "Cloud Platforms",
  },
];

export const staticBlogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and TypeScript",
    slug: "modern-web-apps-react-typescript",
    excerpt:
      "Learn how to build scalable and maintainable web applications using React and TypeScript with best practices and real-world examples.",
    content: `# Building Modern Web Applications with React and TypeScript

In this comprehensive guide, we'll explore how to build modern web applications using React and TypeScript...`,
    publishedAt: "2024-01-15T10:00:00Z",
    tags: ["React", "TypeScript", "Web Development"],
    status: "published",
    readingTime: 8,
    image: "https://placehold.co/600x400/png",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    published: false,
  },
  {
    id: 2,
    title: "The Future of Frontend Development",
    slug: "future-frontend-development",
    excerpt:
      "Exploring emerging trends and technologies that are shaping the future of frontend development.",
    content: `# The Future of Frontend Development

The frontend development landscape is constantly evolving...`,
    publishedAt: "2024-01-10T14:30:00Z",
    tags: ["Frontend", "Trends", "Technology"],
    status: "published",
    readingTime: 6,
    image: "https://placehold.co/600x400/png",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    published: false,
  },
  {
    id: 3,
    title: "Optimizing Performance in React Applications",
    slug: "optimizing-react-performance",
    excerpt:
      "Tips and techniques for improving the performance of your React applications.",
    content: `# Optimizing Performance in React Applications

Performance optimization is crucial for delivering great user experiences...`,
    publishedAt: "2024-01-05T09:15:00Z",
    tags: ["React", "Performance", "Optimization"],
    status: "published",
    readingTime: 10,
    image: "https://placehold.co/600x400/png",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    published: false,
  },
];

export const staticTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "Working with Dtechy was an absolute pleasure. The attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    image: "https://placehold.co/100x100/png",
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Dtechy delivered a high-quality solution on time and within budget. Highly recommended for any web development project.",
    rating: 5,
    image: "https://placehold.co/100x100/png",
    featured: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Agency",
    content:
      "The collaboration was seamless and the final product perfectly matched our vision. Great communication throughout the project.",
    rating: 5,
    image: "https://placehold.co/100x100/png",
    featured: false,
  },
];

export const staticAnalytics = {
  totalPageViews: 12547,
  uniqueVisitors: 8932,
  totalProjects: staticProjects.length,
  totalBlogPosts: staticBlogPosts.length,
  totalSkills: staticSkills.length,
  totalTestimonials: staticTestimonials.length,
};

export const staticMessages = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    subject: "Project Inquiry",
    message:
      "I'm interested in discussing a potential web development project.",
    createdAt: "2024-01-20T10:30:00Z",
    isRead: false,
  },
  {
    id: 2,
    name: "Lisa Wang",
    email: "lisa@company.com",
    subject: "Collaboration Opportunity",
    message: "Would you be interested in collaborating on a React project?",
    createdAt: "2024-01-19T15:45:00Z",
    isRead: true,
  },
];
