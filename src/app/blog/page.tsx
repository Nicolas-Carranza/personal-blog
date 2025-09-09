'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "My Journey from Madrid to St Andrews: A Tech Adventure",
      excerpt: "How moving to Scotland for Computer Science opened doors to incredible opportunities at BlackRock, DCycle, and beyond. A personal story of growth, challenges, and discoveries.",
      date: "2024-12-15",
      category: "Career",
      readTime: "6 min read",
      featured: true,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      id: 2, 
      title: "Building Unhatched: AI-Powered Startup Co-founder",
      excerpt: "The story behind founding Unhatched.ai and lessons learned while building an AI platform that helps entrepreneurs validate ideas. From 2 AM inspiration to working product.",
      date: "2024-11-28",
      category: "Entrepreneurship", 
      readTime: "8 min read",
      featured: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      id: 3,
      title: "From CERN to QuantConnect: My AI & ML Adventures",
      excerpt: "Exploring artificial intelligence through research projects, trading algorithms, and real-world applications in fintech. A journey through physics, algorithms, and competition.",
      date: "2024-10-10", 
      category: "AI & Tech",
      readTime: "5 min read",
      featured: true,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    }
  ]

  const categories = ["All", "Career", "Entrepreneurship", "AI & Tech"]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
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
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className={`bg-gradient-to-br ${post.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 dark:border-gray-700/50`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-6 left-6 z-10">
                    <motion.div
                      className={`bg-gradient-to-r ${post.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                      animate={{ 
                        boxShadow: [
                          "0 0 10px rgba(0,0,0,0.2)",
                          "0 0 20px rgba(0,0,0,0.4)",
                          "0 0 10px rgba(0,0,0,0.2)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨ Featured
                    </motion.div>
                  </div>
                )}

                <div className="p-8 relative">
                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${post.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16`} />
                  
                  <div className="relative z-10">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`bg-gradient-to-r ${post.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
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
                    <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      
                      <Link href={`/blog/${post.id}`}>
                        <motion.button
                          className={`bg-gradient-to-r ${post.color} text-white px-6 py-3 rounded-full font-semibold flex items-center hover:shadow-lg transition-all duration-200`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div 
            className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl opacity-90 mb-8">
              Get notified when I publish new posts about tech, entrepreneurship, and my journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              />
              <motion.button
                className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
