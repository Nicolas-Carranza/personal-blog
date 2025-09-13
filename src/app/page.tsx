import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import FeaturedPosts from '@/components/FeaturedPosts'
import AchievementsPreview from '@/components/AchievementsPreview'
import PageBackground from '@/components/PageBackground'

export default function Home() {
  return (
    <PageBackground variant="dotgrid" className="min-h-screen">
      <Hero />
      <AboutSection />
      <FeaturedPosts />
      <AchievementsPreview />
    </PageBackground>
  )
}
