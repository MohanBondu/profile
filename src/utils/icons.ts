/**
 * Icon utilities for mapping icon names to actual icons
 * Supports both Iconify names and custom SVG icons
 */

export interface IconMap {
  [key: string]: string;
}

// Common icon mappings for skills/technologies
export const skillIcons: IconMap = {
  // Languages
  'typescript': 'logos:typescript-icon',
  'python': 'logos:python',
  'go': 'logos:go',
  'rust': 'logos:rust',
  'javascript': 'logos:javascript',
  'java': 'logos:java',
  'csharp': 'logos:c-sharp',
  'php': 'logos:php',
  'ruby': 'logos:ruby',
  'swift': 'logos:swift',
  'kotlin': 'logos:kotlin',

  // Frontend
  'react': 'logos:react',
  'astro': 'logos:astro',
  'tailwindcss': 'logos:tailwindcss-icon',
  'vue': 'logos:vue',
  'svelte': 'logos:svelte-icon',
  'nextjs': 'logos:nextjs-icon',
  'nuxtjs': 'logos:nuxt-icon',
  'html5': 'logos:html-5',
  'css3': 'logos:css-3',
  'sass': 'logos:sass',
  'webpack': 'logos:webpack',
  'vite': 'logos:vitejs',

  // Backend
  'nodedotjs': 'logos:nodejs-icon',
  'express': 'logos:express',
  'fastapi': 'logos:fastapi',
  'django': 'logos:django',
  'spring': 'logos:spring',
  'laravel': 'logos:laravel',
  'rails': 'logos:rails',
  'nestjs': 'logos:nestjs',
  'graphql': 'logos:graphql',
  'rest': 'mdi:api',

  // Databases
  'postgresql': 'logos:postgresql',
  'mysql': 'logos:mysql',
  'mongodb': 'logos:mongodb',
  'redis': 'logos:redis',
  'sqlite': 'logos:sqlite',
  'dynamodb': 'logos:dynamodb',
  'firebase': 'logos:firebase',
  'supabase': 'logos:supabase',
  'prisma': 'logos:prisma',

  // Cloud & DevOps
  'aws': 'logos:aws',
  'gcp': 'logos:google-cloud',
  'azure': 'logos:microsoft-azure',
  'docker': 'logos:docker-icon',
  'kubernetes': 'logos:kubernetes',
  'terraform': 'logos:terraform',
  'githubactions': 'logos:github-actions',
  'gitlabci': 'logos:gitlab',
  'circleci': 'logos:circleci',
  'jenkins': 'logos:jenkins',
  'ansible': 'logos:ansible',
  'prometheus': 'logos:prometheus',
  'grafana': 'logos:grafana',
  'elasticsearch': 'logos:elasticsearch',
  'kafka': 'logos:apachekafka',
  'nginx': 'logos:nginx',

  // Tools
  'git': 'logos:git-icon',
  'github': 'logos:github-icon',
  'gitlab': 'logos:gitlab',
  'bitbucket': 'logos:bitbucket',
  'vscode': 'logos:visual-studio-code',
  'vim': 'logos:vim',
  'figma': 'logos:figma',
  'sketch': 'logos:sketch',
  'postman': 'logos:postman',
  'insomnia': 'logos:insomnia',
  'swagger': 'logos:swagger',
  'jira': 'logos:jira',
  'notion': 'logos:notion',
  'slack': 'logos:slack',
  'discord': 'logos:discord',
};

/**
 * Get the Iconify name for a skill
 */
export function getSkillIcon(name: string): string {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return skillIcons[normalized] || `mdi:${normalized}`;
}

/**
 * Get the Iconify name for a social platform
 */
export const socialIcons: IconMap = {
  'github': 'mdi:github',
  'gitlab': 'mdi:gitlab',
  'bitbucket': 'mdi:bitbucket',
  'linkedin': 'mdi:linkedin',
  'twitter': 'mdi:twitter',
  'x': 'mdi:twitter',
  'email': 'mdi:email',
  'mail': 'mdi:email',
  'website': 'mdi:web',
  'globe': 'mdi:web',
  'youtube': 'mdi:youtube',
  'dev.to': 'mdi:dev-to',
  'medium': 'mdi:medium',
  'hashnode': 'mdi:hashnode',
  'stackoverflow': 'mdi:stackoverflow',
  'discord': 'mdi:discord',
  'telegram': 'mdi:telegram',
  'slack': 'mdi:slack',
};

export function getSocialIcon(platform: string): string {
  const normalized = platform.toLowerCase().replace(/[^a-z0-9]/g, '');
  return socialIcons[normalized] || `mdi:${normalized}`;
}

/**
 * Get the Iconify name for a certification/achievement
 */
export const certIcons: IconMap = {
  'aws': 'logos:aws',
  'googlecloud': 'logos:google-cloud',
  'azure': 'logos:microsoft-azure',
  'kubernetes': 'logos:kubernetes',
  'docker': 'logos:docker-icon',
  'mongodb': 'logos:mongodb',
  'postgresql': 'logos:postgresql',
  'redis': 'logos:redis',
  'terraform': 'logos:terraform',
  'ansible': 'logos:ansible',
  'jenkins': 'logos:jenkins',
  'githubactions': 'logos:github-actions',
  'gitlabci': 'logos:gitlab',
  'trophy': 'mdi:trophy',
  'award': 'mdi:trophy-award',
  'medal': 'mdi:medal',
  'certificate': 'mdi:certificate',
  'star': 'mdi:star',
  'github': 'mdi:github',
  'pen-tool': 'mdi:pen',
  'article': 'mdi:file-document',
  'blog': 'mdi:file-document',
};

export function getCertIcon(name: string): string {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return certIcons[normalized] || `mdi:${normalized}`;
}