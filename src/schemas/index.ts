import { z } from 'zod';

// ============================================
// Profile
// ============================================
export const profileSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  tagline: z.string().min(1),
  bio: z.string(),
  email: z.string().email(),
  location: z.string().min(1),
  avatar: z.string().url().or(z.string().startsWith('/')),
  resume: z.string().url().or(z.string().startsWith('/')).optional()
});

export type Profile = z.infer<typeof profileSchema>;

// ============================================
// Skills
// ============================================
export const skillItemSchema = z.object({
  name: z.string().min(1),
  icon: z.string().min(1)
});

export const skillCategorySchema = z.object({
  name: z.string().min(1),
  items: z.array(skillItemSchema).min(1)
});

export const skillsSchema = z.object({
  categories: z.array(skillCategorySchema).min(1)
});

export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type SkillItem = z.infer<typeof skillItemSchema>;
export type SkillsData = z.infer<typeof skillsSchema>;

// ============================================
// Social
// ============================================
export const socialLinkSchema = z.object({
  platform: z.string().min(1),
  url: z.string().url(),
  icon: z.string().min(1)
});

export const socialSchema = z.object({
  links: z.array(socialLinkSchema).min(1)
});

export type SocialLink = z.infer<typeof socialLinkSchema>;
export type SocialData = z.infer<typeof socialSchema>;

// ============================================
// Navigation
// ============================================
export const navItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().startsWith('/')
});

export const navigationSchema = z.object({
  items: z.array(navItemSchema).min(1)
});

export type NavItem = z.infer<typeof navItemSchema>;
export type NavigationData = z.infer<typeof navigationSchema>;

// ============================================
// Certifications
// ============================================
export const certificationSchema = z.object({
  name: z.string().min(1),
  issuer: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}$/),
  expiry: z.string().regex(/^\d{4}-\d{2}$/).optional(),
  credentialId: z.string().optional(),
  url: z.string().url().optional(),
  icon: z.string().min(1)
});

export const certificationsSchema = z.object({
  certifications: z.array(certificationSchema)
});

export type Certification = z.infer<typeof certificationSchema>;
export type CertificationsData = z.infer<typeof certificationsSchema>;

// ============================================
// Achievements
// ============================================
export const achievementSchema = z.object({
  title: z.string().min(1),
  organization: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}$/),
  description: z.string().min(1),
  url: z.string().url().optional(),
  icon: z.string().min(1)
});

export const achievementsSchema = z.object({
  achievements: z.array(achievementSchema)
});

export type Achievement = z.infer<typeof achievementSchema>;
export type AchievementsData = z.infer<typeof achievementsSchema>;

// ============================================
// Projects
// ============================================
export const projectSchema = z.object({
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(1),
  longDescription: z.string(),
  stack: z.array(z.string()).min(1),
  github: z.string().url().optional(),
  demo: z.string().url().optional(),
  image: z.string().startsWith('/'),
  featured: z.boolean().default(false),
  status: z.enum(['draft', 'published']).default('published'),
  startDate: z.string().regex(/^\d{4}-\d{2}$/),
  endDate: z.string().regex(/^\d{4}-\d{2}$/).optional()
});

export const projectsSchema = z.object({
  projects: z.array(projectSchema)
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectsData = z.infer<typeof projectsSchema>;

// ============================================
// Experience
// ============================================
export const experienceItemSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  location: z.string().min(1),
  startDate: z.string().regex(/^\d{4}-\d{2}$/),
  endDate: z.string().regex(/^\d{4}-\d{2}$/).optional(),
  type: z.enum(['full-time', 'contract', 'internship']).default('full-time'),
  skills: z.array(z.string()).default([]),
  highlights: z.array(z.string()).default([]),
  status: z.enum(['draft', 'published']).default('published')
});

export const experienceSchema = z.object({
  experience: z.array(experienceItemSchema)
});

export type Experience = z.infer<typeof experienceItemSchema>;
export type ExperienceData = z.infer<typeof experienceSchema>;

// ============================================
// Utility: Parse with Validation
// ============================================
export function parseYaml<T>(schema: z.ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error('Validation errors:', result.error.flatten().fieldErrors);
    throw new Error(`YAML validation failed: ${result.error.message}`);
  }
  return result.data;
}