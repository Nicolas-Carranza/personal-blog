'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const FeaturedPosts = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // This would typically come from your CMS or markdown files
  const featuredPosts = [
    {
      id: 1,
      title: "From Madrid to St Andrews",
      excerpt: "The story of leaving my hometown in Madrid to study Computer Science at the University of St Andrews. A journey of adapting to a new place, growing through challenges, and discovering fresh opportunities in Scotland.",
      date: "2024-12-15",
      category: "Personal",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Breaking into Finance: My Internship at BlackRock",
      excerpt: "How I landed a summer internship at BlackRock and what I learned about the financial industry. From the application process to hands-on experience inside one of the world's largest asset managers.",
      date: "2024-08-20",
      category: "Career",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Adventures in the Scottish Highlands",
      excerpt: "Exploring the Scottish Highlands with my friends! From driving 6 hours straight to unforgettable memories in the mountains.",
      date: "2024-07-10",
      category: "Travel",
      readTime: "5 min read"
    }
  ]


  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPosts.length)
  }

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
  }

  const getPostPosition = (index: number) => {
    const diff = (index - currentIndex + featuredPosts.length) % featuredPosts.length
    return diff
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recent thoughts, experiences, and insights from my journey
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative h-[500px] mb-16 overflow-visible">
            <div className="absolute inset-0 flex items-center justify-center">
              {featuredPosts.map((post, index) => {
                const position = getPostPosition(index)
                const isActive = position === 0
                const isLeft = position === featuredPosts.length - 1
                const isRight = position === 1

                return (
                  <motion.div
                    key={post.id}
                    className="absolute"
                    animate={{
                      x: position === 0 ? 0 : position === 1 ? 300 : -300,
                      scale: position === 0 ? 1 : 0.8,
                      zIndex: position === 0 ? 10 : 1,
                      opacity: position === 0 ? 1 : 0.3,
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeInOut",
                      type: "spring",
                      damping: 20
                    }}
                    style={{
                      filter: position === 0 ? 'blur(0px)' : 'blur(4px)',
                    }}
                  >
                    <div className="w-80">
                      <Link href={`/blog/${post.id}`}>
                        <article className="bg-white/90 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 group">
                          {/* Neon glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-500 rounded-xl" />
                          
                          <div className="relative z-10">
                            <div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-blue-500/20 dark:to-purple-500/20 group-hover:from-white/20 group-hover:to-white/10 dark:group-hover:from-blue-500/30 dark:group-hover:to-purple-500/30 transition-all duration-500" />
                            </div>
                            
                            <div className="p-6">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
                                  <Tag className="w-3 h-3" />
                                  {post.category}
                                </span>
                              </div>
                              
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                                {post.title}
                              </h3>
                              
                              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-500">
                                <div className="flex items-center gap-4">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'short', 
                                      day: 'numeric' 
                                    })}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                  </span>
                                </div>
                                
                                <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevPost}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full p-3 text-gray-700 dark:text-white hover:bg-gray-300/80 dark:hover:bg-gray-700/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextPost}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full p-3 text-gray-700 dark:text-white hover:bg-gray-300/80 dark:hover:bg-gray-700/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {featuredPosts.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-medium hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-400 transition-all duration-300"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
