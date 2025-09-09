# Personal Blog & Portfolio Website

A modern, interactive personal blog and portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase your coding skills, share your thoughts, and highlight your achievements.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-38B2AC?style=flat&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional interface with smooth animations
- Responsive design that works on all devices
- Dark mode support for better user experience
- Interactive components with hover effects

### 📱 **Navigation**
- Fixed navigation bar with scroll effects
- Mobile-friendly hamburger menu
- Smooth transitions between pages

### 🏠 **Homepage**
- Eye-catching hero section with personal introduction
- About me preview with key highlights
- Featured blog posts showcase
- Recent achievements display

### 📝 **Blog System**
- Ready-to-integrate blog structure
- Featured posts with categories and read time
- Expandable for content management systems
- SEO-optimized post structure

### 🏆 **Achievements & Portfolio**
- Professional milestones timeline
- Project showcase with technology tags
- Skills and certifications display
- Perfect for replacing traditional CV content

### 📬 **Contact**
- Interactive contact form
- Contact information display
- Social media integration ready
- Professional communication layout

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nicolas-Carranza/personal-blog.git
   cd personal-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5.6+
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── achievements/      # Achievements/Portfolio page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── AboutSection.tsx   # About section component
│   ├── AchievementsPreview.tsx
│   ├── FeaturedPosts.tsx  # Featured posts component
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   └── Navigation.tsx     # Navigation component
```

## 🎨 Customization

### 1. **Personal Information**
Update the following files with your information:
- `src/components/Hero.tsx` - Your name and introduction
- `src/components/Footer.tsx` - Social media links
- `src/app/about/page.tsx` - Your personal story
- `src/app/contact/page.tsx` - Contact details

### 2. **Content**
- **Blog posts**: Add your blog content in `src/app/blog/`
- **Achievements**: Update `src/app/achievements/page.tsx` with your accomplishments
- **Projects**: Showcase your work in the achievements section

### 3. **Styling**
- Colors are defined in `tailwind.config.js`
- Custom CSS classes are in `src/app/globals.css`
- Component styles use Tailwind utility classes

### 4. **SEO**
Update metadata in:
- `src/app/layout.tsx` - Site-wide metadata
- Individual page files for page-specific SEO

## 🚀 Deployment on Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings as instructed

## 📈 Next Steps

### Content Integration
- **CMS Integration**: Add Contentful, Strapi, or Sanity for blog management
- **Markdown Support**: Implement MDX for markdown-based blog posts
- **Comments**: Add comment system with services like Disqus or Utterances

### Enhanced Features
- **Analytics**: Integrate Google Analytics or Plausible
- **Search**: Add search functionality for blog posts
- **RSS Feed**: Generate RSS feed for blog subscribers
- **Newsletter**: Add email newsletter signup

### Performance
- **Image Optimization**: Use Next.js Image component for better performance
- **Caching**: Implement proper caching strategies
- **PWA**: Convert to Progressive Web App

## 🤝 Contributing

Feel free to customize this project for your own use! Some ideas:
- Add new page types
- Implement additional interactive components
- Enhance the design system
- Add new animation effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for showcasing your journey and skills**

Ready to make it your own? Start by updating the personal information and adding your content!
