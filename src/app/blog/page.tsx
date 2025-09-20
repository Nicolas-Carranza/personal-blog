'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import PageBackground from '@/components/PageBackground'

export default function BlogPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const blogPosts = [
    {
      id: 1,
      title: "Journey from Madrid to St Andrews",
      excerpt: "The story of leaving my hometown in Madrid to pursue Computer Science at the University of St Andrews. A journey of adaptation, growth, and discovering opportunities in Scotland.",
      date: "2024-12-15",
      category: "Personal",
      readTime: "6 min read"
    },
    {
      id: 2, 
      title: "My Experience at BlackRock: Breaking into the Market",
      excerpt: "Landing a summer internship at BlackRock and what I learned about the financial industry. From application process to real-world experience in one of the world's largest asset managers.",
      date: "2024-08-20",
      category: "Career", 
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Exploring the Highlands with Friends",
      excerpt: "Adventures through the Scottish Highlands with university friends. Discovering the breathtaking landscapes, culture, and memories that make Scotland truly special.",
      date: "2024-07-10", 
      category: "Travel",
      readTime: "5 min read"
    }
  ]

  const categories = ["Personal", "Career", "Travel"]

  // Category handling functions
  const handleCategoryClick = (category: string) => {
    if (category === "All") {
      setSelectedCategories([])
    } else {
      setSelectedCategories(prev => {
        if (prev.includes(category)) {
          // Remove category if already selected
          return prev.filter(cat => cat !== category)
        } else {
          // Add category if not selected
          return [...prev, category]
        }
      })
    }
  }

  // Smart filtering logic
  const filteredPosts = selectedCategories.length === 0 || selectedCategories.length === categories.length
    ? blogPosts // Show all posts if no categories selected or all categories selected
    : blogPosts.filter(post => selectedCategories.includes(post.category))

  const isCategorySelected = (category: string) => {
    if (category === "All") {
      return selectedCategories.length === 0 || selectedCategories.length === categories.length
    }
    return selectedCategories.includes(category)
  }

  // Newsletter signup handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with your actual Google Apps Script URL
      // Follow setup instructions in GOOGLE_SHEETS_SETUP.md
      const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'; // Replace this!
      
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'blog-newsletter'
        }),
      })

      // Since mode is 'no-cors', we assume success if no error is thrown
      setSubmitStatus('success')
      setEmail('') // Clear form
      
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <PageBackground variant="dotgrid" className="min-h-screen">
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stories, insights, and lessons learned from my journey through technology, 
              entrepreneurship, and life as a Computer Science student.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* All button */}
            <motion.button
              onClick={() => handleCategoryClick("All")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                isCategorySelected("All")
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-gray-200/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 hover:text-gray-900 dark:hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tag className="w-4 h-4 inline mr-2" />
              All
            </motion.button>

            {/* Category buttons */}
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                  isCategorySelected(category)
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gray-200/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tag className="w-4 h-4 inline mr-2" />
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="mb-4">
            <motion.p 
              className="text-gray-500 dark:text-gray-400 text-center text-sm"
              key={filteredPosts.length} // Re-animate when count changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPosts.length === blogPosts.length 
                ? `Showing all ${filteredPosts.length} posts` 
                : `Showing ${filteredPosts.length} of ${blogPosts.length} posts`}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredPosts.length === 0 ? (
              <motion.div 
                className="col-span-full text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-500 dark:text-gray-400 text-lg">
                  No posts found for the selected categories.
                </div>
              </motion.div>
            ) : (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={`${post.id}-${selectedCategories.join('-')}`} // Re-animate when filter changes
                  className="group relative bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-300/60 dark:border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: [
                      "0 0 0 1px rgba(147, 51, 234, 0)",
                      "0 0 0 1px rgba(147, 51, 234, 0.3), 0 0 25px rgba(147, 51, 234, 0.2), 0 0 50px rgba(147, 51, 234, 0.1)"
                    ]
                  }}
                >
                {/* Neon glow border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 via-orange-400/30 to-purple-500/30 blur-md animate-pulse" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 via-orange-300/20 to-purple-400/20 blur-lg" />
                </div>

                <div className="p-8 relative z-10">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-200/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric'
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read Time & Read More Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                      
                    <Link href={`/blog/${post.id}`}>
                      <motion.button
                        className="bg-gray-200/70 dark:bg-gray-700/70 hover:bg-purple-600/80 dark:hover:bg-purple-600/80 text-gray-900 dark:text-white px-6 py-3 rounded-full font-medium flex items-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
              ))
            )}
          </div>

          {/* Newsletter Signup */}
          <motion.div 
            className="relative group bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-300/60 dark:border-gray-700/50 p-12 text-gray-900 dark:text-white text-center overflow-hidden transition-all duration-700 hover:border-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow: [
                "0 0 0 1px rgba(147, 51, 234, 0)",
                "0 0 0 1px rgba(147, 51, 234, 0.3), 0 0 30px rgba(147, 51, 234, 0.2), 0 0 60px rgba(251, 146, 60, 0.1)"
              ]
            }}
          >
            {/* Neon glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-orange-400/30 to-purple-500/20 blur-xl animate-pulse" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/10 via-orange-300/20 to-purple-400/10 blur-2xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Get notified when I publish new posts about tech, entrepreneurship, and my journey.
              </p>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  className="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-green-400 font-medium">
                    🎉 Successfully subscribed! You&apos;ll hear from me soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-red-400 font-medium">
                    ❌ Something went wrong. Please try again or email me directly.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 rounded-full bg-gray-200/70 dark:bg-gray-800/70 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300/60 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </PageBackground>
  )
}
