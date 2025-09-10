'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Coffee, Globe } from 'lucide-react'
import Link from 'next/link'
import { 
  DotGridBackground, 
  GeometricMeshBackground, 
  OrganicBlobBackground, 
  GridGlowBackground, 
  ParticlesFieldBackground,
  NeuralNetworkBackground 
} from './backgrounds/BackgroundVariants'

const Hero = () => {
  // Easy background switching - uncomment the one you want:
  const BackgroundComponent = DotGridBackground
  // const BackgroundComponent = GeometricMeshBackground
  // const BackgroundComponent = OrganicBlobBackground
  // const BackgroundComponent = GridGlowBackground
  // const BackgroundComponent = ParticlesFieldBackground
  // const BackgroundComponent = NeuralNetworkBackground

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <BackgroundComponent />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Nicolas Carranza</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science & Management student at St Andrews, passionate about AI, 
            fintech, and full-stack development. Sharing my journey through tech, leadership, and innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 rounded-full px-6 py-3 shadow-lg">
              <Code className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Full-Stack Developer</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 rounded-full px-6 py-3 shadow-lg">
              <Coffee className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">CS Student</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 rounded-full px-6 py-3 shadow-lg">
              <Globe className="w-5 h-5 text-pink-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Tech Entrepreneur</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/blog" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Read My Blog
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/achievements" 
                className="bg-white/90 dark:bg-gray-800/90 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                View Achievements
              </Link>
            </motion.div>
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
