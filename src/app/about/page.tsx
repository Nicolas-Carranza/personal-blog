'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin, 
  GraduationCap, 
  Code, 
  Heart, 
  Mail, 
  Github, 
  Linkedin,
  ArrowRight,
  Sparkles,
  Zap,
  ChevronLeft,
  ChevronRight,
  ChefHat,
  Mountain,
  Users,
  Coffee,
  Camera,
  Music,
  Wine
} from 'lucide-react'
import PageBackground from '@/components/PageBackground'

export default function AboutPage() {
  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({})
  const [currentJourneyIndex, setCurrentJourneyIndex] = useState(0)
  const skills = [
    { name: "Python", level: 95, color: "bg-blue-500" },
    { name: "Java", level: 95, color: "bg-red-500" },
    { name: "SQL/Databases", level: 95, color: "bg-purple-500" },
    { name: "JavaScript/TypeScript", level: 85, color: "bg-yellow-500" },
    { name: "React/Next.js", level: 85, color: "bg-cyan-500" },
    { name: "C/C++", level: 70, color: "bg-gray-600" }
  ]

  const interests = [
    { 
      icon: Code, 
      name: "Coding", 
      desc: "Building innovative solutions and learning new technologies", 
      detail: "From algorithms to full-stack applications, I love crafting elegant code that solves real-world problems.",
      gradient: "from-slate-600 via-blue-600 to-indigo-700" 
    },
    { 
      icon: ChefHat, 
      name: "Cooking", 
      desc: "Experimenting with flavors and creating delicious meals", 
      detail: "The kitchen is my creative lab where I experiment with international cuisines and molecular gastronomy.",
      gradient: "from-slate-600 via-orange-600 to-red-700" 
    },
    { 
      icon: Mountain, 
      name: "Hiking", 
      desc: "Exploring nature and challenging myself on new trails", 
      detail: "From Scottish Highlands to Spanish Pyrenees, every trail teaches resilience and offers perspective.",
      gradient: "from-slate-600 via-green-600 to-emerald-700" 
    },
    { 
      icon: Wine, 
      name: "Wine Appreciation", 
      desc: "Passionate about red wines, especially Spanish varieties", 
      detail: "Exploring Spanish regions like Rioja and Ribera del Duero, learning about terroir, grape varieties, and the art of winemaking. Each bottle tells a story of its origin.",
      gradient: "from-slate-600 via-red-600 to-purple-700" 
    },
    { 
      icon: Camera, 
      name: "Photography", 
      desc: "Capturing moments and telling stories through images", 
      detail: "Street photography and landscapes help me see the world through different lenses, literally and figuratively.",
      gradient: "from-slate-600 via-gray-600 to-slate-800" 
    },
    { 
      icon: Music, 
      name: "Music", 
      desc: "Discovering new artists and enjoying live performances", 
      detail: "From jazz clubs to electronic festivals, music fuels my creativity and connects me with diverse cultures.",
      gradient: "from-slate-600 via-indigo-600 to-violet-700" 
    }
  ]

  const journeySteps = [
    {
      title: "Childhood in Madrid",
      content: "Born and raised in Madrid, surrounded by family and friends. From a young age, I was drawn to science — dreaming of becoming a veterinarian, then an astrophysicist, aerospace engineer, and eventually finding my passion in software engineering.",
      period: "2004 - 2019"
    },
    {
      title: "University of St Andrews",
      content: "Currently in my final year pursuing Computer Science and Management. My studies have explored operating systems, networks, logic, complexity, and coding practices. I've gained hands-on experience with core programming languages, building a strong technical foundation.",
      period: "2019 - Present"
    },
    {
      title: "Professional Experience", 
      content: "This foundation enabled me to complete three internships, each offering unique challenges and opportunities to apply my skills in real-world settings — experiences I have truly enjoyed and learned from.",
      period: "2021 - 2024"
    },
    {
      title: "Looking Forward",
      content: "Eager to start my career as a graduate software engineer, while remaining open to emerging opportunities in technology and innovation. Passionate about using my skills to solve meaningful problems and contribute to impactful projects.",
      period: "2025 & Beyond"
    }
  ]

  // Carousel functions
  const nextJourney = () => {
    setCurrentJourneyIndex((prev) => (prev + 1) % journeySteps.length)
  }

  const prevJourney = () => {
    setCurrentJourneyIndex((prev) => (prev - 1 + journeySteps.length) % journeySteps.length)
  }

  const getJourneyPosition = (index: number) => {
    const diff = (index - currentJourneyIndex + journeySteps.length) % journeySteps.length
    return diff
  }

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextJourney()
    }, 7000) // 7 seconds

    return () => clearInterval(interval)
  }, [])

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <PageBackground variant="dotgrid" className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <motion.div 
              className="relative inline-block mb-8"
              variants={itemVariants}
            >
              {/* Professional Greeting */}
              <div className="relative">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl mb-6"
                  animate={{ 
                    rotateY: [0, 180, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-3xl font-bold text-white">NC</span>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              <span className="text-gray-900 dark:text-white">Hi there! I&apos;m </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nicolas
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Final year Computer Science and Management student passionate about 
              building innovative solutions and exploring emerging technologies.
            </motion.p>

            <motion.div
              className="flex justify-center gap-4 mb-8"
              variants={itemVariants}
            >
              {[
                { icon: Mail, href: "mailto:nicolas.carranza.work@gmail.com", label: "Email", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600" },
                { icon: Github, href: "https://github.com/Nicolas-Carranza", label: "GitHub", color: "hover:bg-gray-50 dark:hover:bg-gray-700/20 hover:border-gray-400 dark:hover:border-gray-500" },
                { icon: Linkedin, href: "https://linkedin.com/in/nicolas-carranza-arauna-4029a7252", label: "LinkedIn", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Story Section - Interactive Cards */}
      <motion.section 
        className="relative py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="flex items-center gap-3 mb-20 justify-center"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Journey</h2>
          </motion.div>

          {/* Journey Carousel */}
          <div className="relative max-w-6xl mx-auto mb-20">
            <div className="relative h-[480px] mb-12 overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center">
                {journeySteps.map((step, index) => {
                  const position = getJourneyPosition(index)
                  
                  // Position logic for 4 cards:
                  // 0: center (active)
                  // 1: right side (blurred)
                  // 2: behind center (hidden)
                  // 3: left side (blurred)
                  let xPosition = 0
                  let scale = 0.85
                  let opacity = 0.4
                  let zIndex = 1
                  let blur = 3
                  
                  if (position === 0) {
                    // Center active card
                    xPosition = 0
                    scale = 1
                    opacity = 1
                    zIndex = 10
                    blur = 0
                  } else if (position === 1) {
                    // Right side card
                    xPosition = 320
                    scale = 0.85
                    opacity = 0.4
                    zIndex = 5
                    blur = 3
                  } else if (position === 2) {
                    // Behind center (hidden, will emerge from left)
                    xPosition = 0
                    scale = 0.7
                    opacity = 0
                    zIndex = 0
                    blur = 5
                  } else if (position === 3) {
                    // Left side card
                    xPosition = -320
                    scale = 0.85
                    opacity = 0.4
                    zIndex = 5
                    blur = 3
                  }
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      animate={{
                        x: xPosition,
                        scale: scale,
                        zIndex: zIndex,
                        opacity: opacity,
                      }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeInOut",
                        type: "spring",
                        damping: 25
                      }}
                      style={{
                        filter: `blur(${blur}px)`,
                      }}
                    >
                      <div className="w-80">
                        <article className="bg-gray-50/90 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-2xl shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 h-96 flex flex-col">
                          {/* Background pattern */}
                          <div className="absolute inset-0 opacity-5 dark:opacity-10">
                            <div className="absolute inset-0 bg-blue-500/20 bg-repeat bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.5)_1px,transparent_0)] bg-[length:30px_30px]" />
                          </div>
                          
                          {/* Fixed Header */}
                          <div className="relative z-10 p-6 pb-4 flex-shrink-0">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                                {step.period}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                              {step.title}
                            </h3>
                          </div>

                          {/* Scrollable Content */}
                          <div className="relative z-10 px-6 pb-6 flex-1 overflow-hidden">
                            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent hover:scrollbar-thumb-blue-500/40">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm pr-2">
                                {step.content}
                              </p>
                            </div>
                          </div>

                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500 rounded-2xl pointer-events-none" />
                        </article>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <motion.button
                onClick={prevJourney}
                className="p-3 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-white hover:bg-gray-300/80 dark:hover:bg-gray-700/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {journeySteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentJourneyIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentJourneyIndex
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-400 dark:bg-gray-600 hover:bg-blue-400'
                    }`}
                    aria-label={`Go to step ${index + 1}: ${journeySteps[index].title}`}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextJourney}
                className="p-3 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-white hover:bg-gray-300/80 dark:hover:bg-gray-700/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="relative py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < Math.round(skill.level / 20) ? skill.color : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
                
                <div className="mt-2 text-right">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Learning"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interests Section */}
      <motion.section 
        className="relative py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
            variants={itemVariants}
          >
            What I Love Doing
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="group h-64"
                variants={itemVariants}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => handleCardFlip(index)}
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    rotateY: flippedCards[index] ? 180 : 0 
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ 
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-white`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm"
                      whileHover={{ 
                        rotate: 360,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <interest.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-center">
                      {interest.name}
                    </h3>
                    
                    <p className="text-white/80 text-center text-sm leading-relaxed">
                      {interest.desc}
                    </p>

                    <div className="mt-4 text-white/60 text-xs">
                      Click to flip
                    </div>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${interest.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg mx-auto`}>
                        <interest.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        {interest.name}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
                        {interest.detail}
                      </p>

                      <div className="mt-4 text-gray-400 text-xs text-center">
                        Click to flip back
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute inset-0 bg-blue-500/20 bg-repeat bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.5)_1px,transparent_0)] bg-[length:30px_30px]" />
            </div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                variants={itemVariants}
              >
                Let&apos;s Work Together
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                I&apos;m always interested in new opportunities and exciting projects. 
                Let&apos;s connect and create something amazing!
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </PageBackground>
  )
}
