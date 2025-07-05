import { z } from "zod";

// ========================================
// Users
// ========================================
export const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
});

export const InsertUserSchema = UserSchema.pick({
  username: true,
  password: true,
});

export type User = z.infer<typeof UserSchema>;
export type InsertUser = z.infer<typeof InsertUserSchema>;

// ========================================
// Projects
// ========================================
export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  longDescription: z.string().optional(),
  image: z.string(),
  technologies: z.array(z.string()),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  featured: z.boolean().default(false),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

export const InsertProjectSchema = ProjectSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type Project = z.infer<typeof ProjectSchema>;
export type InsertProject = z.infer<typeof InsertProjectSchema>;

// ========================================
// Blog Posts
// ========================================
export const BlogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  excerpt: z.string(),
  image: z.string().optional(),
  slug: z.string(),
  published: z.boolean().default(false),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

export const InsertBlogPostSchema = BlogPostSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type BlogPost = z.infer<typeof BlogPostSchema>;
export type InsertBlogPost = z.infer<typeof InsertBlogPostSchema>;

// ========================================
// Messages
// ========================================
export const MessageSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  message: z.string(),
  read: z.boolean().default(false),
  createdAt: z.date().or(z.string()),
});

export const InsertMessageSchema = MessageSchema.omit({
  id: true,
  read: true,
  createdAt: true,
});

export type Message = z.infer<typeof MessageSchema>;
export type InsertMessage = z.infer<typeof InsertMessageSchema>;

// ========================================
// Analytics
// ========================================
export const AnalyticsSchema = z.object({
  id: z.number(),
  pageViews: z.number().default(0),
  uniqueVisitors: z.number().default(0),
  totalProjects: z.number().default(0),
  totalBlogPosts: z.number().default(0),
  totalMessages: z.number().default(0),
  date: z.date().or(z.string()),
});

export type Analytics = z.infer<typeof AnalyticsSchema>;

// ========================================
// Skills
// ========================================
export const SkillSchema = z.object({
  id: z.number(),
  name: z.string(),
  level: z.number().min(1).max(100),
  category: z.string(),
  icon: z.string().optional(),
});

export const InsertSkillSchema = SkillSchema.omit({ id: true });

export type Skill = z.infer<typeof SkillSchema>;
export type InsertSkill = z.infer<typeof InsertSkillSchema>;

// ========================================
// Testimonials
// ========================================
export const TestimonialSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  content: z.string(),
  avatar: z.string().optional(),
  rating: z.number().min(1).max(5).default(5),
  featured: z.boolean().default(false),
});

export const InsertTestimonialSchema = TestimonialSchema.omit({ id: true });

export type Testimonial = z.infer<typeof TestimonialSchema>;
export type InsertTestimonial = z.infer<typeof InsertTestimonialSchema>;
