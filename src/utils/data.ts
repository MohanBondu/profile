import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {
  profileSchema,
  skillsSchema,
  socialSchema,
  navigationSchema,
  certificationsSchema,
  achievementsSchema,
  projectsSchema,
  experienceSchema,
} from '../schemas';
import type {
  Profile,
  SkillCategory,
  SocialLink,
  NavItem,
  Certification,
  Achievement,
  Project,
  Experience,
  SkillsData,
  SocialData,
  NavigationData,
  CertificationsData,
  AchievementsData,
  ProjectsData,
  ExperienceData,
} from '../schemas';

// Cache for parsed data
const cache = new Map<string, any>();

function loadYaml<T>(filePath: string, schema: any): T {
  if (cache.has(filePath)) {
    return cache.get(filePath) as T;
  }

  const fullPath = path.resolve(filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = yaml.load(fileContents);
  const validated = schema.parse(data) as T;
  cache.set(filePath, validated);
  return validated;
}

export function getProfile(): Profile {
  return loadYaml('./src/data/profile.yaml', profileSchema);
}

export function getSkills(): SkillCategory[] {
  return loadYaml<SkillsData>('./src/data/skills.yaml', skillsSchema).categories;
}

export function getSocial(): SocialLink[] {
  return loadYaml<SocialData>('./src/data/social.yaml', socialSchema).links;
}

export function getNavigation(): NavItem[] {
  return loadYaml<NavigationData>('./src/data/navigation.yaml', navigationSchema).items;
}

export function getCertifications(): Certification[] {
  return loadYaml<CertificationsData>('./src/data/certifications.yaml', certificationsSchema).certifications;
}

export function getAchievements(): Achievement[] {
  return loadYaml<AchievementsData>('./src/data/achievements.yaml', achievementsSchema).achievements;
}

export function getProjects(options: { includeDrafts?: boolean } = {}): Project[] {
  const { includeDrafts = false } = options;
  const projects = loadYaml<ProjectsData>('./src/data/projects.yaml', projectsSchema).projects;
  return includeDrafts ? projects : projects.filter((p: Project) => p.status === 'published');
}

export function getProjectBySlug(slug: string, options: { includeDrafts?: boolean } = {}): Project | undefined {
  const projects = getProjects(options);
  return projects.find((p: Project) => p.slug === slug);
}

export function getFeaturedProjects(options: { includeDrafts?: boolean } = {}): Project[] {
  const projects = getProjects(options);
  return projects.filter((p: Project) => p.featured);
}

export function getExperience(options: { includeDrafts?: boolean } = {}): Experience[] {
  const { includeDrafts = false } = options;
  const experience = loadYaml<ExperienceData>('./src/data/experience.yaml', experienceSchema).experience;
  return includeDrafts ? experience : experience.filter((e: Experience) => e.status === 'published');
}

export function getAllTags(): string[] {
  const projects = getProjects({ includeDrafts: true });
  const tags = new Set<string>();
  projects.forEach((p: Project) => p.stack.forEach((tag: string) => tags.add(tag)));
  return Array.from(tags).sort();
}

// Clear cache (useful for development)
export function clearCache(): void {
  cache.clear();
}