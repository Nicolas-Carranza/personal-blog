'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { MapPin, Plane, BookOpen, Users } from 'lucide-react'

export default function BlogPost1() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section with Parallax */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"
          animate={{ 
            y: [0, -20, 0], 
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 bg-yellow-400/20 rounded-lg backdrop-blur-sm"
          animate={{ 
            y: [0, 15, 0], 
            rotate: [0, -90, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              From Madrid to 
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                St Andrews
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A tech adventure across borders, cultures, and opportunities
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center justify-center space-x-4 text-sm"
          >
            <span>December 15, 2024</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span>Career Journey</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Madrid Origins */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Growing Up in Madrid
              </h2>
            </div>
            
            <motion.div 
              className="bg-gradient-to-r from-red-50 to-yellow-50 dark:from-red-900/20 dark:to-yellow-900/20 rounded-2xl p-8 mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Madrid wasn't just my birthplace—it was my launchpad. Growing up in Spain's vibrant capital, 
                I was surrounded by a rich tapestry of culture, innovation, and ambition. The bustling streets 
                of Madrid taught me resilience, while the warm Spanish community showed me the power of connection.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  🎓 Academic Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Achieving 9.5/10 in my BiBac Bilingual Baccalaureate at British Council School 
                  opened doors I never imagined possible.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  👑 Leadership Early On
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Being selected as Head Student taught me that leadership isn't about titles—
                  it's about inspiring others and making a difference.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* The Journey North */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <Plane className="w-8 h-8 text-blue-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                The Great Adventure North
              </h2>
            </div>
            
            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white mb-8">
                <blockquote className="text-xl italic mb-4">
                  "Sometimes the best opportunities come disguised as the scariest decisions."
                </blockquote>
                <p className="text-blue-100">
                  Leaving the warmth of Madrid for the ancient stones of St Andrews wasn't just 
                  a geographical move—it was a leap into the unknown that would reshape my entire future.
                </p>
              </div>
            </motion.div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The decision to study Computer Science and Management Science at the University of St Andrews 
                was both exhilarating and terrifying. Here I was, trading the familiar tapas bars and sunny 
                plazas of Madrid for Scottish highlands and medieval buildings. But sometimes, the most 
                transformative journeys begin with a single brave step into uncertainty.
              </p>
            </div>
          </motion.div>

          {/* St Andrews Discoveries */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Discovering My Potential
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 mb-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                St Andrews became my playground for innovation. Three consecutive years on the Dean's List 
                wasn't just about grades—it was proof that when you combine Spanish passion with Scottish 
                determination, magic happens.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { year: "2022/23", achievement: "Dean's List", icon: "🏆" },
                  { year: "2023/24", achievement: "Dean's List", icon: "⭐" },
                  { year: "2024/25", achievement: "Dean's List", icon: "🎯" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center"
                    whileHover={{ rotate: [0, -1, 1, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{item.year}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{item.achievement}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Opportunities Unlocked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-purple-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Opportunities Unlocked
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "BlackRock Internship",
                  description: "From St Andrews lecture halls to Edinburgh's financial district—an incredible journey into fintech.",
                  color: "from-gray-600 to-black",
                  year: "2025"
                },
                {
                  title: "DCycle Impact",
                  description: "Building sustainability tech in Madrid's startup scene, combining my Spanish roots with newfound skills.",
                  color: "from-green-500 to-teal-600",
                  year: "2024"
                },
                {
                  title: "Research with Oxford",
                  description: "Ancient Egyptian databases and modern JavaScript—proof that tech can preserve history.",
                  color: "from-yellow-500 to-orange-600",
                  year: "2023"
                }
              ].map((opportunity, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${opportunity.color} rounded-xl p-6 text-white`}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{opportunity.title}</h3>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{opportunity.year}</span>
                  </div>
                  <p className="text-white/90">{opportunity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reflection */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              The Journey Continues
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              From Madrid's sunny boulevards to Scotland's ancient halls, every step has been a building block 
              in my journey. The boy who left Spain has returned as a global citizen, armed with technical skills, 
              cultural awareness, and an unshakeable belief that the best adventures always begin with saying "yes" 
              to the unknown.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold"
            >
              Next stop: The future 🚀
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
