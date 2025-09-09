'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Coffee, Globe } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A passionate developer, writer, and lifelong learner sharing my journey, 
            achievements, and thoughts on technology and life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 rounded-full px-6 py-3 backdrop-blur-sm">
              <Code className="w-5 h-5 text-primary-600" />
              <span className="text-gray-700 dark:text-gray-300">Developer</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 rounded-full px-6 py-3 backdrop-blur-sm">
              <Coffee className="w-5 h-5 text-primary-600" />
              <span className="text-gray-700 dark:text-gray-300">Blogger</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 rounded-full px-6 py-3 backdrop-blur-sm">
              <Globe className="w-5 h-5 text-primary-600" />
              <span className="text-gray-700 dark:text-gray-300">Creator</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Read My Blog
            </Link>
            <Link 
              href="/achievements" 
              className="bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              View Achievements
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <ArrowDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
