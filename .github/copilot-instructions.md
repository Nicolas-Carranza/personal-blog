<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Personal Blog & Portfolio - AI Agent Guide

**Tech Stack:** Next.js 15.5.2 (App Router) · TypeScript 5.6+ · Tailwind CSS 3.4+ · Framer Motion · Vercel

## Development Workflow

**Start dev server:** `npm run dev` (runs on `localhost:3000`)  
**Build:** `npm run build` → `npm start` (production mode)  
**Lint:** `npm run lint` (ESLint with Next.js config)

**Path aliases:** Use `@/components` and `@/app` (configured in `tsconfig.json`)  
**Node requirement:** >=18.17.0 (see `package.json` engines field)

## Architecture Patterns

### Component Structure
All components are **client-side** (`'use client'` directive) except API routes and page layouts. This is deliberate for Framer Motion animations and interactive state.

**Example pattern from Hero.tsx:**
```tsx
'use client'
import { motion } from 'framer-motion'
// Component with animations and state
```

### Background System (Critical)
Every page **must** wrap content in `<PageBackground>` component with a variant prop:

```tsx
import PageBackground from '@/components/PageBackground'

export default function Page() {
  return (
    <PageBackground variant="dotgrid">
      {/* page content */}
    </PageBackground>
  )
}
```

**Available variants:** `dotgrid` (default) | `geometric` | `organic` | `gridglow` | `particles` | `neural`  
**Implementation:** See `src/components/PageBackground.tsx` and `src/components/backgrounds/BackgroundVariants.tsx`

### Glass-morphism Pattern
Standard card styling uses Tailwind utility classes for glass effect:

```tsx
className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-300/60 dark:border-gray-700/50"
```

**Predefined classes in globals.css:**
- `.glass-card` → Primary glass effect with stronger backdrop blur
- `.card` → Standard card with lighter backdrop blur

### Theme System
- **ThemeProvider** wraps entire app in `layout.tsx` with `suppressHydrationWarning`
- Uses **ThemeScript** in `<head>` to prevent flash of unstyled content
- Theme state managed by `ThemeProvider.tsx` (client component)
- Always add `suppressHydrationWarning` to `<html>` and `<body>` tags

### Navigation State
Navigation uses **`usePathname()`** hook for active route highlighting:

```tsx
const pathname = usePathname()
const isActive = pathname === item.href
```

See `src/components/Navigation.tsx` for full implementation with scroll-based styling changes.

## Animation Standards (Framer Motion)

**Standard entrance animation:**
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Stagger children pattern:**
```tsx
<motion.div variants={containerVariants}>
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants}>
      {/* content */}
    </motion.div>
  ))}
</motion.div>
```

**Timing conventions:**
- Hover effects: `0.2-0.3s`
- Page entrances: `0.6-0.8s`
- Stagger delays: `0.1s` between items

## Content Management

### Blog Posts
Blog posts currently use **ComingSoonPage** template component. To add real content:

1. Create new route: `src/app/blog/[id]/page.tsx`
2. Import `PageBackground` with appropriate variant
3. Add metadata export for SEO
4. Use glass-morphism card styling for content

**ComingSoonPage props interface:**
```tsx
{ title: string, category: string, date: string, readTime: string, excerpt: string }
```

### API Routes
Newsletter API at `src/app/api/newsletter/route.ts` handles CSV storage and email validation. Does **not** use Google Sheets by default—writes to `data/newsletter-subscribers.csv`.

**Email validation:** Custom function with regex, length checks, and domain format validation (no DNS lookup in Edge runtime).

## Styling Conventions

### Tailwind Patterns
**Responsive breakpoints:** Use `sm:` (640px), `md:` (768px), `lg:` (1024px) prefixes  
**Dark mode:** Always include `dark:` variants for colors and backgrounds  
**Spacing:** Use consistent scale (4, 8, 12, 16, 20, 24, 32, etc.)

**Custom Tailwind extensions in tailwind.config.js:**
- `primary` color palette (50, 500, 600, 700)
- Custom animations: `fade-in`, `slide-up`
- Custom keyframes for CSS animations

### Typography
**Font:** Inter from `next/font/google` (configured in `layout.tsx`)  
**Heading sizes:** `text-5xl md:text-7xl lg:text-8xl` for hero, scale down for subheadings

## Integration Points

### External Services
- **Formspree:** Contact form (requires form endpoint configuration)
- **Vercel Analytics/Speed Insights:** Imported in `layout.tsx` (`<Analytics />`, `<SpeedInsights />`)
- **Google Sheets:** Newsletter integration documented in `GOOGLE_SHEETS_SETUP.md` (optional, not default)

### Image Configuration
`next.config.js` allows images from `images.unsplash.com` domain. Add other domains here if needed.

## Common Modifications

### Adding a New Page
1. Create `src/app/[name]/page.tsx`
2. Wrap in `<PageBackground variant="dotgrid">`
3. Add route to `navItems` array in `Navigation.tsx`
4. Export metadata for SEO

### Updating Personal Info
- **Hero text:** `src/components/Hero.tsx`
- **About content:** `src/app/about/page.tsx`
- **Footer links:** `src/components/Footer.tsx`
- **Site metadata:** `src/app/layout.tsx` (title, description)

### Changing Colors
Edit `tailwind.config.js` `theme.extend.colors` object and `globals.css` CSS variables.

## File Organization
- **Routes:** `src/app/[route]/page.tsx` (App Router convention)
- **Reusable components:** `src/components/` (Pascal case naming)
- **Layout wrapper:** `src/app/layout.tsx` (includes Navigation, Footer, theme providers)
- **Global styles:** `src/app/globals.css` (Tailwind directives + custom classes)
- **Static assets:** `public/` directory (images, icons)

## TypeScript Patterns
Always define **interfaces for props** at component level:

```tsx
interface ComponentProps {
  title: string
  optional?: boolean
}

export default function Component({ title, optional = false }: ComponentProps) {
  // implementation
}
```

Use **strict mode** (enabled in `tsconfig.json`). No implicit `any` types allowed.

## Known Issues & Browser Compatibility

### Performance: Particle Animations
**ParticlesFieldBackground** in `BackgroundVariants.tsx` generates 50 animated particles that can cause significant browser performance issues. When using this variant:
- Consider reducing particle count from 50 to 20-30
- Use `will-change: transform` CSS property sparingly
- Test performance on lower-end devices

### Safari/iOS Compatibility
**AboutSection.tsx** contains a workaround for Safari/iOS where 3D flip card animations fail:

```tsx
const [isIOSorSafari, setIsIOSorSafari] = useState(false)
// Detects Safari/iOS and redirects instead of flipping
if (isIOSorSafari) {
  router.push('/about')
  return
}
```

This is a **temporary fix**—proper solution would involve using Safari-compatible transform properties or disabling `transform-style: preserve-3d`.

## Content Management & Security

### Static Content vs CMS
Currently uses **hardcoded content** in components. For a blog with frequent updates, consider:

**Recommended CMS options:**
- **Markdown + gray-matter**: Simple, version-controlled content in repo
- **Contentful/Sanity**: Headless CMS with great DX, free tiers available
- **MDX**: Markdown with JSX components (Next.js has built-in support)

**Security note:** Source code being public is normal for static sites. Public repo ≠ security risk because:
- All content is public-facing anyway (it's a blog/portfolio)
- No secrets in code (env vars stored in Vercel dashboard)
- Authentication/API keys live in `.env.local` (gitignored)

**Environment variables pattern:**
```bash
# .env.local (never committed)
FORMSPREE_ENDPOINT=your_endpoint
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Newsletter Data
Subscriber data stored in `data/newsletter-subscribers.csv` is **gitignored** but exists locally. For production:
- Use environment-based storage (Vercel Blob, S3)
- Or integrate with email service (Mailchimp, ConvertKit, Resend)
- Current CSV approach only works for single-instance deployments

## Vercel Deployment

Recent security update (Dec 2025) fixed React Server Components CVE vulnerabilities via automated PR:
- Updated Next.js to latest secure version
- Branch: `vercel/react-server-components-cve-vu-dp0yr1`
- Changes: `package.json` and `package-lock.json` version bumps

**Standard deployment:** Push to `main` branch triggers automatic Vercel deployment.

## Working with AI Agents

### Providing Context
When asking AI agents to work on specific parts of the codebase:

**Method 1: Open relevant files in tabs**
- Open files you want the agent to see in VS Code
- Agent can access currently open editors automatically

**Method 2: Mention specific paths**
- Reference files by path: `src/components/Hero.tsx`
- Agent will read files as needed

**Method 3: Use @ mentions (if supported)**
- `@workspace` for entire project context
- `@file` to reference specific files
- File paths in chat are automatically linked

**Best practice:** Don't open too many files at once—focus on the area you're working on. Agent can search and read additional files when needed.

### Project Quick Start
To get an AI agent productive quickly:
1. Show them this file first (`.github/copilot-instructions.md`)
2. Have them read `package.json` and `tsconfig.json` for tech stack
3. Point to key files: `src/app/layout.tsx`, `src/components/PageBackground.tsx`
4. Let them explore from there using semantic search/grep
