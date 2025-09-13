'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code2, PenTool, Target, ChevronLeft } from 'lucide-react'
import { useState } from 'react'

const AboutSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const aboutCards = [
    {
      id: 1,
      title: "Developer",
      icon: Code2,
      shortDesc: "Crafting digital experiences",
      fullDescription: "I'm passionate about building modern web applications with cutting-edge technologies. From React and Next.js to TypeScript and Tailwind, I love creating seamless user experiences with clean, efficient code. Currently studying Computer Science at St Andrews and interning at BlackRock.",
      hoverAnimation: "code",
      bgColor: "from-slate-600 via-indigo-600 to-slate-600"
    },
    {
      id: 2,
      title: "Writer", 
      icon: PenTool,
      shortDesc: "Sharing stories & insights",
      fullDescription: "Through my blog, I share my journey from Madrid to Scotland, experiences in the tech industry, and lessons learned along the way. I believe in the power of storytelling to connect, inspire, and help others navigate their own paths in technology and life.",
      hoverAnimation: "writing",
      bgColor: "from-slate-600 via-indigo-600 to-slate-600"
    },
    {
      id: 3,
      title: "Achiever",
      icon: Target,
      shortDesc: "Pushing boundaries daily",
      fullDescription: "From founding Unhatched.ai to leading the Spanish Society at university, I'm always pursuing new challenges. Whether it's securing internships at top firms, academic excellence, or entrepreneurial ventures, I believe in setting ambitious goals and working relentlessly to achieve them.",
      hoverAnimation: "target",
      bgColor: "from-slate-600 via-indigo-600 to-slate-600"
    }
  ]

  const handleCardClick = (cardId: number) => {
    setFlippedCard(flippedCard === cardId ? null : cardId)
  }

  const getHoverAnimations = (animationType: string) => {
    switch (animationType) {
      case 'code':
        return {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      case 'writing':
        return {
          x: [0, -2, 2, 0],
          y: [0, -1, 1, 0],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      case 'target':
        return {
          scale: [1, 0.95, 1.05, 1],
          transition: { duration: 0.4, ease: "easeInOut" }
        }
      default:
        return {}
    }
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
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Welcome to my corner of the internet! Discover who I am through these three core aspects of my journey.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                className="relative h-80 perspective-1000"
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer transform-style-preserve-3d"
                  animate={{ rotateY: flippedCard === card.id ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onClick={() => handleCardClick(card.id)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className={`relative w-full h-full bg-gradient-to-r ${card.bgColor} rounded-xl overflow-hidden`}>
                      {/* Blur overlay */}
                      <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                        <motion.div
                          whileHover={getHoverAnimations(card.hoverAnimation)}
                          className="mb-6"
                        >
                          <card.icon className="w-16 h-16 text-white drop-shadow-lg" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                          {card.title}
                        </h3>
                        
                        <p className="text-white/90 text-sm drop-shadow-sm">
                          {card.shortDesc}
                        </p>
                      </div>

                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <motion.div 
                          className="w-full h-full"
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          style={{
                            backgroundImage: "radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)",
                            backgroundSize: "100% 100%"
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full p-6">
                        <div className="flex items-center mb-4">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleCardClick(card.id)
                            }}
                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                            whileHover={{ x: -2 }}
                          >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Back
                          </motion.button>
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center items-center text-center">
                          <p className="text-gray-300 leading-relaxed">
                            {card.fullDescription}
                          </p>
                        </div>
                      </div>

                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-purple-500/5 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
