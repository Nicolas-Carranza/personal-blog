import { Suspense } from 'react'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import FeaturedPosts from '@/components/FeaturedPosts'
import AchievementsPreview from '@/components/AchievementsPreview'
import PageBackground from '@/components/PageBackground'
import { 
  HeroSkeleton, 
  AboutSectionSkeleton, 
  FeaturedPostsSkeleton, 
  AchievementsPreviewSkeleton 
} from '@/components/Skeleton'

export default function Home() {
  return (
    <PageBackground variant="dotgrid" className="min-h-screen">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<AboutSectionSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<FeaturedPostsSkeleton />}>
        <FeaturedPosts />
      </Suspense>
      <Suspense fallback={<AchievementsPreviewSkeleton />}>
        <AchievementsPreview />
      </Suspense>
    </PageBackground>
  )
}
