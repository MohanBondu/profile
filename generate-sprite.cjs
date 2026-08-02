const fs = require('fs');
const path = require('path');

// Import icon sets
const logos = require('@iconify-json/logos/icons.json');
const mdi = require('@iconify-json/mdi/icons.json');
const vscodeIcons = require('@iconify-json/vscode-icons/icons.json');
const tabler = require('@iconify-json/tabler/icons.json');

// Icons needed from skills.yaml
const skillIcons = [
  // Languages
  'java', 'python', 'javascript', 'typescript', 'bash', 'r', 'postgresql', 'php',
  // Frameworks & Libraries
  'spring', 'angular', 'django', 'fastapi', 'spring', 'react', 'apachespark', 'openai',
  // Microservices & Cloud
  'microservices', 'netflix', 'apigateway', 'docker', 'kubernetes', 'redis', 'cloud',
  // Security & DevOps
  'shield', 'terminal', 'owasp', 'search', 'microsoft', 'prometheus', 'elastic', 'splunk', 'git', 'jira', 'githubactions',
  // Tools & Platforms
  'intellij', 'pycharm', 'vscode', 'wireshark', 'burpsuite', 'nmap', 'metasploit', 'kali',
];

// Map skill icon names to actual icon names in icon sets
const iconMap = {
  'java': 'logos:java',
  'python': 'logos:python',
  'javascript': 'logos:javascript',
  'typescript': 'logos:typescript',
  'bash': 'logos:bash',
  'r': 'logos:r',
  'postgresql': 'logos:postgresql',
  'php': 'logos:php',
  'spring': 'logos:spring',
  'angular': 'logos:angular',
  'django': 'logos:django',
  'fastapi': 'logos:fastapi',
  'react': 'logos:react',
  'apachespark': 'logos:apache-spark',
  'openai': 'logos:openai',
  'microservices': 'mdi:application-outline',
  'netflix': 'logos:netflix',
  'apigateway': 'mdi:api',
  'docker': 'logos:docker',
  'kubernetes': 'logos:kubernetes',
  'redis': 'logos:redis',
  'cloud': 'mdi:cloud',
  'shield': 'mdi:shield',
  'terminal': 'mdi:console-line',
  'owasp': 'mdi:shield-lock',
  'search': 'mdi:magnify',
  'microsoft': 'logos:microsoft',
  'prometheus': 'logos:prometheus',
  'elastic': 'logos:elastic',
  'splunk': 'logos:splunk',
  'git': 'logos:git',
  'jira': 'logos:jira',
  'githubactions': 'logos:github-actions',
  'intellij': 'logos:intellij-idea',
  'pycharm': 'logos:pycharm',
  'vscode': 'vscode-icons:file-type-vscode',
  'wireshark': 'mdi:shark',
  'burpsuite': 'mdi:bug',
  'nmap': 'mdi:scan',
  'metasploit': 'mdi:shield-sword',
  'kali': 'logos:kali-linux',
  'bash': 'logos:bash',
  'r': 'logos:r',
  'postgresql': 'logos:postgresql',
  'php': 'logos:php',
  'apachespark': 'logos:apache-spark',
  'openai': 'logos:openai',
  'microservices': 'mdi:application-outline',
  'netflix': 'logos:netflix',
  'apigateway': 'mdi:api',
  'docker': 'logos:docker',
  'kubernetes': 'logos:kubernetes',
  'redis': 'logos:redis',
  'cloud': 'mdi:cloud',
  'shield': 'mdi:shield',
  'terminal': 'mdi:console-line',
  'owasp': 'mdi:shield-lock',
  'search': 'mdi:magnify',
  'microsoft': 'logos:microsoft',
  'prometheus': 'logos:prometheus',
  'elastic': 'logos:elastic',
  'splunk': 'logos:splunk',
  'git': 'logos:git',
  'jira': 'logos:jira',
  'githubactions': 'logos:github-actions',
  'intellij': 'logos:intellij-idea',
  'pycharm': 'logos:pycharm',
  'vscode': 'vscode-icons:file-type-vscode',
  'wireshark': 'mdi:shark',
  'burpsuite': 'mdi:bug',
  'nmap': 'mdi:scan',
  'metasploit': 'mdi:shield-sword',
  'kali': 'logos:kali-linux',
  'java': 'logos:java',
  'python': 'logos:python',
  'javascript': 'logos:javascript',
  'typescript': 'logos:typescript',
  'bash': 'logos:bash',
  'r': 'logos:r',
  'postgresql': 'logos:postgresql',
  'php': 'logos:php',
  'spring': 'logos:spring',
  'angular': 'logos:angular',
  'django': 'logos:django',
  'fastapi': 'logos:fastapi',
  'react': 'logos:react',
  'apachespark': 'logos:apache-spark',
  'openai': 'logos:openai',
  'microservices': 'mdi:application-outline',
  'netflix': 'logos:netflix',
  'apigateway': 'mdi:api',
  'docker': 'logos:docker',
  'kubernetes': 'logos:kubernetes',
  'redis': 'logos:redis',
  'cloud': 'mdi:cloud',
  'shield': 'mdi:shield',
  'terminal': 'mdi:console-line',
  'owasp': 'mdi:shield-lock',
  'search': 'mdi:magnify',
  'microsoft': 'logos:microsoft',
  'prometheus': 'logos:prometheus',
  'elastic': 'logos:elastic',
  'splunk': 'logos:splunk',
  'git': 'logos:git',
  'jira': 'logos:jira',
  'githubactions': 'logos:github-actions',
  'intellij': 'logos:intellij-idea',
  'pycharm': 'logos:pycharm',
  'vscode': 'vscode-icons:file-type-vscode',
  'wireshark': 'mdi:shark',
  'burpsuite': 'mdi:bug',
  'nmap': 'mdi:scan',
  'metasploit': 'mdi:shield-sword',
  'kali': 'logos:kali-linux',
  // Additional icons for other components
  'folder': 'mdi:folder',
  'external-link': 'mdi:open-in-new',
  'calendar': 'mdi:calendar',
  'clock': 'mdi:clock',
  'check-circle': 'mdi:check-circle',
  'map-pin': 'mdi:map-marker',
  'pen': 'mdi:pencil',
  'trophy': 'mdi:trophy',
  'alert-circle': 'mdi:alert-circle',
  'globe': 'mdi:earth',
  'mail': 'mdi:email',
  'file-text': 'mdi:file-document',
  'home': 'mdi:home',
  'external-link': 'mdi:open-in-new',
  'calendar': 'mdi:calendar',
  'clock': 'mdi:clock',
  'check-circle': 'mdi:check-circle',
  'map-pin': 'mdi:map-marker',
  'pen': 'mdi:pencil',
  'trophy': 'mdi:trophy',
  'alert-circle': 'mdi:alert-circle',
  'globe': 'mdi:earth',
  'mail': 'mdi:email',
  'file-text': 'mdi:file-document',
  'home': 'mdi:home',
  'github': 'logos:github',
  'linkedin': 'logos:linkedin',
  'twitter': 'logos:twitter',
  'mail': 'mdi:email',
  'phone': 'mdi:phone',
  'file-text': 'mdi:file-document',
  'folder': 'mdi:folder',
  'external-link': 'mdi:open-in-new',
  'calendar': 'mdi:calendar',
  'clock': 'mdi:clock',
  'check-circle': 'mdi:check-circle',
  'map-pin': 'mdi:map-marker',
  'pen': 'mdi:pencil',
  'trophy': 'mdi:trophy',
  'alert-circle': 'mdi:alert-circle',
  'globe': 'mdi:earth',
  'mail': 'mdi:email',
  'file-text': 'mdi:file-document',
  'home': 'mdi:home',
  'folder': 'mdi:folder',
  'external-link': 'mdi:open-in-new',
  'calendar': 'mdi:calendar',
  'clock': 'mdi:clock',
  'check-circle': 'mdi:check-circle',
  'map-pin': 'mdi:map-marker',
  'pen': 'mdi:pencil',
  'trophy': 'mdi:trophy',
  'alert-circle': 'mdi:alert-circle',
  'globe': 'mdi:earth',
  'mail': 'mdi:email',
  'file-text': 'mdi:file-document',
  'home': 'mdi:home',
};

// Combine all icon sets
const allIcons = {
  ...logos.icons,
  ...mdi.icons,
  ...vscodeIcons.icons,
  ...tabler.icons,
};

const svgSymbols = [];

for (const [alias, iconName] of Object.entries(iconMap)) {
  if (allIcons[iconName]) {
    const icon = allIcons[iconName];
    const body = icon.body || '';
    svgSymbols.push(`  <symbol id="${alias}" viewBox="0 0 ${icon.width} ${icon.height}">${body}</symbol>`);
  } else {
    console.warn(`Icon not found: ${iconName} for alias ${alias}`);
  }
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${svgSymbols.join('\n')}
</svg>`;

fs.writeFileSync(path.join(__dirname, 'public/icons/sprite.svg'), svgContent);
console.log('sprite.svg generated successfully!');