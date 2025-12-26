'use client'

import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
  animation?: boolean
}

export const Skeleton = ({ 
  className = '', 
  variant = 'rectangular',
  animation = true 
}: SkeletonProps) => {
  const baseClasses = 'bg-gradient-to-r from-[#e8dfd0]/30 via-[#d4c4ab]/40 to-[#e8dfd0]/30 dark:from-gray-800/50 dark:via-gray-700/60 dark:to-gray-800/50'
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl'
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      animate={animation ? {
        backgroundPosition: ['200% 0', '-200% 0'],
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        backgroundSize: '200% 100%'
      }}
    />
  )
}

// Hero Skeleton
export const HeroSkeleton = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* Name skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-16 md:h-24 w-3/4 mx-auto" variant="text" />
            <Skeleton className="h-16 md:h-24 w-2/3 mx-auto" variant="text" />
          </div>

          {/* Subtitle skeleton */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <Skeleton className="h-6 w-full" variant="text" />
            <Skeleton className="h-6 w-5/6 mx-auto" variant="text" />
          </div>

          {/* Pills skeleton */}
          <div className="flex flex-wrap justify-center gap-3">
            <Skeleton className="h-12 w-48" variant="rectangular" />
            <Skeleton className="h-12 w-40" variant="rectangular" />
            <Skeleton className="h-12 w-52" variant="rectangular" />
          </div>

          {/* Buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Skeleton className="h-14 w-48" variant="rectangular" />
            <Skeleton className="h-14 w-48" variant="rectangular" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section Skeleton
export const AboutSectionSkeleton = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Title skeleton */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-12 w-96 mx-auto" variant="text" />
            <Skeleton className="h-6 w-2/3 mx-auto" variant="text" />
          </div>

          {/* Cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Skeleton 
                key={i} 
                className="h-64 w-full" 
                variant="card"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Featured Posts Skeleton
export const FeaturedPostsSkeleton = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Title skeleton */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-12 w-64 mx-auto" variant="text" />
            <Skeleton className="h-6 w-96 mx-auto" variant="text" />
          </div>

          {/* Carousel skeleton */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <Skeleton className="h-[400px] w-full" variant="card" />
              
              {/* Navigation buttons skeleton */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <Skeleton className="h-12 w-12" variant="circular" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <Skeleton className="h-12 w-12" variant="circular" />
              </div>
            </div>

            {/* Dots skeleton */}
            <div className="flex justify-center gap-2 mt-8">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-3 w-3" variant="circular" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Achievements Preview Skeleton
export const AchievementsPreviewSkeleton = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Title skeleton */}
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-12 w-80 mx-auto" variant="text" />
            <Skeleton className="h-6 w-2/3 mx-auto" variant="text" />
          </div>

          {/* Achievement cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton 
                key={i} 
                className="h-48 w-full" 
                variant="card"
              />
            ))}
          </div>

          {/* Button skeleton */}
          <div className="text-center">
            <Skeleton className="h-14 w-56 mx-auto" variant="rectangular" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Blog Page Skeleton
export const BlogPageSkeleton = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header skeleton */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-16 w-64 mx-auto" variant="text" />
            <Skeleton className="h-6 w-96 mx-auto" variant="text" />
          </div>

          {/* Blog posts grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full" variant="card" />
                <Skeleton className="h-6 w-3/4" variant="text" />
                <Skeleton className="h-4 w-full" variant="text" />
                <Skeleton className="h-4 w-5/6" variant="text" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// About Page Skeleton
export const AboutPageSkeleton = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-20"
        >
          {/* Hero section with image */}
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Skeleton className="h-64 w-64 mx-auto" variant="circular" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-96 mx-auto" variant="text" />
              <Skeleton className="h-6 w-2/3 mx-auto" variant="text" />
              <Skeleton className="h-6 w-1/2 mx-auto" variant="text" />
            </div>
          </div>

          {/* Quick facts section */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-32 w-full" variant="card" />
            ))}
          </div>

          {/* Skills section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <Skeleton className="h-10 w-64 mx-auto" variant="text" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-8 w-full" variant="rectangular" />
              ))}
            </div>
          </div>

          {/* Interests/Hobbies cards */}
          <div className="max-w-6xl mx-auto space-y-8">
            <Skeleton className="h-10 w-96 mx-auto" variant="text" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-64 w-full" variant="card" />
              ))}
            </div>
          </div>

          {/* Journey timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            <Skeleton className="h-10 w-80 mx-auto" variant="text" />
            <Skeleton className="h-96 w-full" variant="card" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skeleton
