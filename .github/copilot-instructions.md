<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Personal Blog & Portfolio Project

This is a Next.js TypeScript project for a personal blog and portfolio website. The project uses:

- **Next.js 15.5.2** with App Router
- **TypeScript 5.6+** for type safety
- **Tailwind CSS 3.4+** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Formspree** for contact form handling
- **Google Sheets integration** for newsletter subscriptions
- **Vercel Speed Insights & Analytics**
- **Responsive design** with dark mode support

## Project Structure
The project follows Next.js 13+ App Router structure:

```
src/
├── app/                          # Next.js App Router pages
│   ├── about/page.tsx           # About page with flip cards & skills
│   ├── achievements/page.tsx    # Achievements showcase with animations
│   ├── blog/                   # Blog section
│   │   ├── page.tsx            # Blog listing with category filters
│   │   ├── 1/page.tsx          # Individual blog post (coming soon)
│   │   ├── 2/page.tsx          # Individual blog post (coming soon)
│   │   └── 3/page.tsx          # Individual blog post (coming soon)
│   ├── contact/page.tsx        # Contact form with Formspree integration
│   ├── globals.css             # Global styles and Tailwind directives
│   ├── layout.tsx              # Root layout with navigation and footer
│   └── page.tsx                # Homepage with hero and previews
├── components/                  # Reusable components
│   ├── backgrounds/            # Background animation components
│   │   └── BackgroundVariants.tsx
│   ├── AboutSection.tsx        # Interactive flip cards for homepage
│   ├── AchievementsPreview.tsx # Preview component for achievements
│   ├── ComingSoonPage.tsx      # Template for incomplete blog posts
│   ├── FeaturedPosts.tsx       # Carousel component for blog posts
│   ├── Footer.tsx              # Site footer with links and social media
│   ├── Hero.tsx                # Main hero section with animations
│   ├── Navigation.tsx          # Responsive navigation with mobile menu
│   └── PageBackground.tsx      # Background system wrapper
```

## Key Features & Components

### Background System
- **PageBackground** component with multiple variants: `dotgrid`, `geometric`, `organic`, `gridglow`, `particles`, `neural`
- Consistent across all pages except individual blog posts
- Dark mode adaptive with smooth transitions
- Glass-morphism effects with backdrop-blur

### Navigation & Layout
- **Responsive navigation** with mobile hamburger menu
- **Sticky header** with scroll-based transparency changes
- **Footer** with social links and quick navigation
- **Route-based active states** for navigation items

### Homepage Sections
- **Hero** with animated background elements and call-to-action buttons
- **AboutSection** with interactive flip cards (Developer, Writer, Achiever)
- **FeaturedPosts** with carousel functionality
- **AchievementsPreview** showing recent accomplishments

### About Page
- **Personal introduction** with animated profile elements
- **Journey timeline** with hover effects
- **Technical skills** with animated progress bars
- **Interests section** with flip cards
- **Social media integration**

### Achievements Page
- **Academic excellence** and professional experience sections
- **Leadership & entrepreneurship** highlights
- **Technical projects** showcase
- **Quick achievements** grid layout
- **Interactive hover animations** throughout

### Blog System
- **Category filtering** with smart logic
- **Newsletter signup** with Google Sheets integration
- **Coming soon pages** for blog posts in development
- **Responsive card layouts** with excerpt previews

### Contact Page
- **Formspree integration** for form handling
- **Contact information** with icons and details
- **Form validation** and submission states
- **Honeypot spam protection**

## Technical Implementation

### Animations
- **Framer Motion** for page transitions and hover effects
- **Stagger animations** for list items and cards
- **Custom hover animations** per component type
- **Scroll-based reveal animations** with intersection observer

### Styling Approach
- **Tailwind CSS** utility classes throughout
- **Custom gradients** and backdrop-blur effects
- **Consistent spacing** using Tailwind's spacing scale
- **Dark mode support** with `dark:` variants
- **Glass-morphism design** with transparency and blur

### Content Management
- **Static content** defined in component files
- **Ready for CMS integration** with clear data structures
- **Placeholder blog posts** using ComingSoonPage template
- **External integrations** (Formspree, Google Sheets)

### Performance & SEO
- **Next.js App Router** for optimal performance
- **Vercel Speed Insights** integration
- **Metadata configuration** in layout and pages
- **Optimized images** and lazy loading
- **TypeScript** for type safety

## Development Guidelines

### Code Standards
- Use **TypeScript** strictly with proper type definitions
- Follow **component composition** patterns
- Implement **responsive design** mobile-first
- Maintain **consistent naming** conventions
- Use **Tailwind CSS** utility classes over custom CSS

### Animation Standards
- Use **Framer Motion** for all animations
- Implement **stagger animations** for groups
- Add **hover states** for interactive elements
- Use **viewport-based animations** for scroll reveals
- Keep **animation durations** consistent (0.3s for hovers, 0.6s for entrances)

### Component Architecture
- Keep components **modular and reusable**
- Use **TypeScript interfaces** for props
- Implement **proper error handling**
- Add **loading states** where appropriate
- Follow **accessibility best practices**

### Background System Usage
- Use **PageBackground** wrapper for all main pages
- Default to **dotgrid** variant for consistency
- Individual blog posts can use **custom backgrounds**
- Maintain **glass-morphism effects** on content cards

### Content Integration
- Content is currently **hardcoded** in components
- Blog posts use **ComingSoonPage** template
- **External integrations** configured for forms and analytics
- Ready for **CMS integration** (Sanity, Contentful, etc.)

## Current Integrations

### External Services
- **Formspree** for contact form handling
- **Google Sheets** for newsletter subscriptions (setup required)
- **Vercel Analytics** for performance monitoring
- **Social media** links (GitHub, LinkedIn, Email)

### Personal Information
- **Nicolás Carranza** - Computer Science & Management student
- **University of St Andrews** - Final year student
- **Madrid, Spain** origins with **Scotland** current location
- **BlackRock internship** and **Unhatched.ai founder**

## Deployment
- **Vercel** optimized configuration
- **Environment variables** for API keys
- **Static generation** where possible
- **Edge functions** for form handling

## Future Enhancements Ready
- **Blog CMS integration** with minimal code changes
- **Comment system** integration points
- **Search functionality** for blog posts
- **Image optimization** for portfolio pieces
- **Multi-language support** structure in place
