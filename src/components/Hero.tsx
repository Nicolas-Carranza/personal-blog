'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Code2, Brain, Rocket } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HeroSkeleton } from './Skeleton'

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate component mounting/hydration
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <HeroSkeleton />
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-12 h-12 bg-purple-500/10 rounded-full blur-lg"
            animate={{ 
              y: [0, 15, 0],
              x: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-20 h-20 bg-blue-400/5 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-[#2c251c] dark:text-white mb-2">Nicolás</span>
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-500 bg-clip-text text-transparent">
              Carranza
            </span>
          </motion.h1>

          {/* Dynamic Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <p className="text-xl md:text-2xl text-[#5a4d3d] dark:text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Crafting digital experiences with <span className="text-cyan-600 dark:text-blue-400 font-semibold">code</span>, 
              exploring the frontiers of <span className="text-blue-600 dark:text-purple-400 font-semibold">AI</span>, 
              and building the <span className="text-cyan-600 dark:text-blue-400 font-semibold">future</span> of technology.
            </p>
            
            {/* Role Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { icon: Code2, text: "Full-Stack Developer", delay: 0.5 },
                { icon: Brain, text: "AI Enthusiast", delay: 0.6 },
                { icon: Rocket, text: "Tech Entrepreneur", delay: 0.7 },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(14, 165, 233, 0.3)"
                  }}
                  className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-[#e8dfd0] dark:border-gray-700 hover:border-cyan-500 dark:hover:border-blue-500/50 rounded-full px-6 py-3 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-[#5a4d3d] dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-blue-400 transition-colors" />
                    <span className="text-[#2c251c] dark:text-gray-300 group-hover:text-[#2c251c] dark:group-hover:text-white font-medium transition-colors">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/blog" 
                  className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Explore My Journey</span>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/achievements" 
                  className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-[#d4c4ab] dark:border-gray-700 hover:border-cyan-600 dark:hover:border-blue-500/50 text-[#2c251c] dark:text-gray-300 hover:text-[#2c251c] dark:hover:text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
                >
                  <span className="group-hover:text-cyan-600 dark:group-hover:text-blue-400 transition-colors">View Achievements</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-slate-600 dark:text-gray-500 text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-cyan-600 dark:text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
