# Implementation Plan: Astro + Decap CMS Profile Site

## Overview
Build a static profile website using Astro 5, Tailwind CSS, and Decap CMS with all content in YAML files. Deploy to GitHub Pages with PR-based workflow.

---

## Phase 1: Project Scaffold & Config ✓ (Files created)
- [x] package.json with all dependencies
- [x] astro.config.mjs
- [x] tailwind.config.mjs
- [x] tsconfig.json
- [x] .eslintrc.cjs
- [x] .prettierrc
- [x] Directory structure created

---

## Phase 2: Data Layer - YAML Files (8 files)
Create all YAML data files in `src/data/`:

1. **profile.yaml** - Identity, bio, contact
2. **skills.yaml** - Tech stack categories
3. **social.yaml** - Social links
4. **navigation.yaml** - Site navigation
5. **certifications.yaml** - Certifications list
6. **achievements.yaml** - Achievements/awards
7. **projects.yaml** - Projects (with draft support)
8. **experience.yaml** - Work experience (with draft support)

---

## Phase 3: Zod Validation Schemas
Create `src/schemas/index.ts` with schemas for all 8 data files + parseYaml helper.

---

## Phase 4: Decap CMS Configuration
1. `src/cms/config.yml` - Full CMS config with:
   - GitHub OAuth backend (PR workflow)
   - 4 singleton file collections (profile, skills, social, navigation)
   - 2 folder collections (certifications, achievements)
   - 2 draft-supported folder collections (projects, experience)
   - Media folder: `public/assets`
2. `public/admin/index.html` - Decap CMS entry point
3. Copy script in package.json

---

## Phase 5: Layout & UI Components
```
src/components/
├── layout/
│   ├── Header.astro
│   ├── Footer.astro
│   └── BaseLayout.astro
├── ui/
│   ├── Card.astro
│   ├── Tag.astro
│   ├── Icon.astro
│   ├── ThemeToggle.astro
│   └── Badge.astro
```

---

## Phase 6: Section Components
```
src/components/sections/
├── Hero.astro
├── About.astro
├── SkillsGrid.astro
├── ProjectGrid.astro
├── ExperienceTimeline.astro
├── CertificationGrid.astro
├── AchievementGrid.astro
└── ContactSection.astro
```

---

## Phase 7: Pages (7 routes)
```
src/pages/
├── index.astro                    # Home
├── projects/
│   ├── index.astro                # All projects (filterable)
│   └── [slug].astro               # Project detail
├── experience/
│   └── index.astro                # Timeline
├── certifications/
│   └── index.astro                # Grid
├── achievements/
│   └── index.astro                # Grid
└── contact/
    └── index.astro                # Contact form + links
```

---

## Phase 8: Utilities & Data Loading
- `src/utils/data.ts` - Typed data loaders with draft filtering
- `src/utils/icons.ts` - Icon helper

---

## Phase 9: Global Styles
- `src/styles/global.css` - Tailwind directives + custom styles

---

## Phase 10: GitHub Actions Workflows
1. `.github/workflows/pr.yml` - PR validation (build, lint, typecheck)
2. `.github/workflows/deploy.yml` - Deploy to GitHub Pages

---

## Phase 11: SEO & Polish
- Sitemap generation
- RSS feed
- 404 page
- Favicon
- PWA manifest
- Meta tags in BaseLayout

---

## Phase 12: GitHub OAuth & Deploy
- Create GitHub OAuth App
- Configure Pages deployment
- Test `/admin` CMS
- First content entry via CMS

---

## Execution Order
Phases 2-12 will be executed sequentially. Each phase creates/updates files in the existing `profile-site` directory.