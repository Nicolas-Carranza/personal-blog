'use client'

/* eslint-disable react/forbid-dom-props */

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
  Flower,
  Users,
  Coffee,
  Camera,
  Music,
  Wine,
  Plane,
  UtensilsCrossed,
  Tv
} from 'lucide-react'
import PageBackground from '@/components/PageBackground'

export default function AboutPage() {
  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({})
  const [currentJourneyIndex, setCurrentJourneyIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const hobbySectionRef = useRef<HTMLDivElement | null>(null)
  
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
      detail: "I enjoy turning ideas into real products. From algorithms to full stack applications, I like building clean and scalable solutions that solve real problems. Beyond this, I also love to automate tasks and create fun games!",
      gradient: "from-sky-150 via-sky-200 to-sky-250 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    },
    { 
      icon: ChefHat, 
      name: "Cooking", 
      desc: "Experimenting with flavors and creating delicious meals", 
      detail: "Cooking for me is where I get to enjoy my friends and family smiles. I enjoy experimenting with international cuisines and complex dishes, and taking my time to prepare simple but delicious meals.",
      gradient: "from-sky-200 via-sky-250 to-sky-300 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    },
    { 
      icon: Flower, 
      name: "Nature", 
      desc: "Learning about flowers, trees and discovering new species", 
      detail: "I am fascinated by the natural world and how nature expands through life. I like learning about flowers, trees and ecosystems, see their varieties and of course their fruits! Every walk is a chance to discover new species.",
      gradient: "from-sky-300 via-sky-350 to-sky-400 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    },
    { 
      icon: Wine, 
      name: "Wine Appreciation", 
      desc: "Passionate about red wines, especially Spanish varieties", 
      detail: "I have a passion for red wines, especially Spanish wine. Regions like Ribera del Duero and Toro are my favourite to explore. Each bottle is a story of its origin, and I love sharing them with friends and family.",
      gradient: "from-sky-150 via-sky-200 to-sky-250 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    },
    { 
      icon: Camera, 
      name: "Photography", 
      desc: "Capturing moments and telling stories through images", 
      detail: "Photography allows me to capture moments and tell stories. I enjoy both street photography and landscapes as they let me see the world from different perspectives. Something new I've been trying is film photography!",
      gradient: "from-sky-200 via-sky-250 to-sky-300 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    },
    { 
      icon: Music, 
      name: "Music", 
      desc: "Discovering new artists and enjoying live performances", 
      detail: "I am constantly listening to music. I enjoy discovering new artists and going to live shows, from jazz clubs to electronic festivals. I have a playlist for every mood, but my favourite right now is my Brazilian bossa nova!",
      gradient: "from-sky-300 via-sky-350 to-sky-400 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    },
    { 
      icon: Plane, 
      name: "Travel", 
      desc: "Exploring new places and experiencing different cultures", 
      detail: "I have travelled across most of Europe, especially its capitals and cultural centres which I love. Travel gives me new perspectives and lasting memories, and I look forward to exploring Japan, Tanzania or Mexico!",
      gradient: "from-sky-150 via-sky-200 to-sky-250 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    },
    { 
      icon: UtensilsCrossed, 
      name: "Food", 
      desc: "Discovering authentic cuisines and local flavors", 
      detail: "Food is one of the best ways to understand culture. I love discovering authentic flavours, from street food to fine dining. Some favourites include chuletón gallego, jamón ibérico de bellota, and homemade pizzas.",
      gradient: "from-sky-200 via-sky-250 to-sky-300 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    },
    { 
      icon: Tv, 
      name: "Sports Watching", 
      desc: "Following football, tennis, and Formula 1 with passion", 
      detail: "I follow sports with passion since I was a child, especially football. Real Madrid is my team and will always be. But apart from it I also enjoy Formula 1, the NBA, boxing and UFC.",
      gradient: "from-sky-300 via-sky-350 to-sky-400 dark:from-blue-800 dark:via-blue-900 dark:to-slate-900" 
    }
  ]

  const journeySteps = [
    {
      title: "Early Curiosity",
      content: "Growing up in Madrid, I was always fascinated by science. One year I wanted to be a vet, the next an astrophysicist, then an aerospace engineer. Curiosity shaped everything I did. I grew up surrounded by family and friends who have formed me into who I am today.",
      period: "2004 - 2012"
    },
    {
      title: "First Lines of Code",
      content: "As a teenager I discovered coding. It started as a hobby, a way to escape and create, but quickly became the thing I loved most. A fun fact is that I appeared in national TV in Spain for a school project I built in a university at the age of 12!",
      period: "2012 - 2020"
    },
    {
      title: "High School Years",
      content: "Throughout my BiBac studies, I took on leadership roles and deepened my passion for technology. I decided to go through the Science branch and then took the EVAU exams which was one of the most challenging experiences of my life. Ended getting a 12.8/14, which allowed me to apply to top universities worldwide.",
      period: "2020 - 2022"
    },
    {
      title: "Moving to Scotland",
      content: "Leaving Madrid for St Andrews was a big step. From the start it was my first choice, not only because it ranked number one in the UK, but also for the flexibility of its programs and the career opportunities it opens. I also love the countryside, so what better place to study than a beautiful town by the sea surrounded by nature?",
      period: "2022"
    },
    {
      title: "University Life",
      content: "Getting to study what you love is a privilege. At St Andrews, I found a community that shares my passion, and I have met incredible people who inspire me every day. The environment I found here was a competitive one, but also collaborative and supportive, which has helped me grow both academically and personally.",
      period: "2022 - 2025"
    },
    {
      title: "Professional Growth",
      content: "A big part of my university journey has been professional growth. Early on, I learned about spring weeks, internships, and graduate schemes, which opened doors for me. Since then, I have been a spring intern at two firms and completed three more internships, from a tech startup to a leading fintech company.",
      period: "2023 - 2025"
    },
    {
      title: "What's Next",
      content: "Now I am excited to start my career as a software engineer, explore new ideas, and keep chasing challenges that make me grow. My eyes lie now on graduate schemes and full-time roles in tech, where I can continue learning and contributing to impactful projects.",
      period: "2025 & Beyond"
    }
  ]

  // Function to start/restart the auto-rotation timer
  const startAutoRotation = () => {
    // Clear existing interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrentJourneyIndex((prev) => (prev + 1) % journeySteps.length)
    }, 7000) // 7 seconds
  }

  // Function to reset timer without changing state
  const resetTimer = () => {
    // Clear existing interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    // Start fresh interval from current position
    intervalRef.current = setInterval(() => {
      setCurrentJourneyIndex((prev) => (prev + 1) % journeySteps.length)
    }, 7000) // 7 seconds
  }

  // Carousel functions with timer reset
  const nextJourney = () => {
    setCurrentJourneyIndex((prev) => (prev + 1) % journeySteps.length)
    resetTimer() // Reset timer without state change
  }

  const prevJourney = () => {
    setCurrentJourneyIndex((prev) => (prev - 1 + journeySteps.length) % journeySteps.length)
    resetTimer() // Reset timer without state change
  }

  const goToJourneyIndex = (index: number) => {
    setCurrentJourneyIndex(index)
    resetTimer() // Reset timer without state change
  }

  const getJourneyPosition = (index: number) => {
    const diff = (index - currentJourneyIndex + journeySteps.length) % journeySteps.length
    return diff
  }

  // Auto-rotation effect
  useEffect(() => {
    startAutoRotation()

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, []) // Empty dependency array - only run on mount

  // Global particle system for entire hobby section
  useEffect(() => {
    const container = hobbySectionRef.current
    if (!container) return

    const particles: HTMLElement[] = []
    const particleTargets = new Map<HTMLElement, { x: number; y: number }>()
    let animationFrameId: number
    let mousePosition = { x: -1000, y: -1000 } // Start off-screen

    // Particle settings
    const density = 75 // Doubled from 100 to 200
    const speed = 0.5
    const movementSpeed = speed * 0.06
    const repulsionRadius = 25 // Increased radius (was 15)
    const repulsionStrength = 0.9 // 3x stronger (was 0.3)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      if (!rect) return
      mousePosition = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      }
    }

    // Function to check if mouse is within any card
    const isMouseInCard = () => {
      const cards = container.querySelectorAll('.hobby-card')
      const containerRect = container.getBoundingClientRect()
      
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cardRect = card.getBoundingClientRect()
        const relativeX = ((cardRect.left - containerRect.left) / containerRect.width) * 100
        const relativeY = ((cardRect.top - containerRect.top) / containerRect.height) * 100
        const cardWidth = (cardRect.width / containerRect.width) * 100
        const cardHeight = (cardRect.height / containerRect.height) * 100
        
        if (mousePosition.x >= relativeX && mousePosition.x <= relativeX + cardWidth &&
            mousePosition.y >= relativeY && mousePosition.y <= relativeY + cardHeight) {
          return true
        }
      }
      return false
    }

    // Function to check if a particle is over a card AND the card is not flipped
    const isParticleOverCard = (particleX: number, particleY: number) => {
      const containerRect = container.getBoundingClientRect()
      const cards = container.querySelectorAll('.hobby-card')
      
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const cardRect = card.getBoundingClientRect()
        const relativeX = ((cardRect.left - containerRect.left) / containerRect.width) * 100
        const relativeY = ((cardRect.top - containerRect.top) / containerRect.height) * 100
        const cardWidth = (cardRect.width / containerRect.width) * 100
        const cardHeight = (cardRect.height / containerRect.height) * 100
        
        if (particleX >= relativeX && particleX <= relativeX + cardWidth &&
            particleY >= relativeY && particleY <= relativeY + cardHeight) {
          // Check if this card is flipped - if so, don't show particles
          return !flippedCards[i] // Only return true if card is NOT flipped
        }
      }
      return false
    }

    const createParticle = (index: number) => {
      const particleEl = document.createElement("div")
      particleEl.style.position = "absolute"
      particleEl.style.width = "4px"
      particleEl.style.height = "4px"
      particleEl.style.borderRadius = "50%"
      particleEl.style.pointerEvents = "none"
      particleEl.style.opacity = "0"
      particleEl.style.zIndex = "1"
      particleEl.style.transition = "opacity 0.3s ease"
      
      // Use a CSS class instead of inline styles
      particleEl.className = "hobby-particle"

      // Start particles at random positions across entire hobby section
      const initialX = Math.random() * 100
      const initialY = Math.random() * 100

      particleEl.style.left = `${initialX}%`
      particleEl.style.top = `${initialY}%`

      particleTargets.set(particleEl, { x: initialX, y: initialY })

      container.appendChild(particleEl)
      particles.push(particleEl)
      return particleEl
    }

    const updateParticles = () => {
      particles.forEach((particleEl, index) => {
        const currentTarget = particleTargets.get(particleEl)
        if (!currentTarget) return

        const currentX = parseFloat(particleEl.style.left)
        const currentY = parseFloat(particleEl.style.top)

        const time = Date.now() * 0.001 * speed
        
        // Create unique movement pattern for each particle
        const noiseX = Math.sin(time * 0.5 + index * 0.5) * 30 + Math.cos(time * 0.3 + index * 0.7) * 20
        const noiseY = Math.cos(time * 0.4 + index * 0.6) * 30 + Math.sin(time * 0.2 + index * 0.8) * 20

        // Move across entire hobby section area
        let targetX = 50 + noiseX
        let targetY = 50 + noiseY

        // Apply mouse repulsion if cursor is within a card
        if (isMouseInCard()) {
          const dx = mousePosition.x - currentX
          const dy = mousePosition.y - currentY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < repulsionRadius && distance > 0) {
            const repulsionForce = (repulsionRadius - distance) / repulsionRadius * repulsionStrength
            const angle = Math.atan2(dy, dx)
            
            // Push particle away from cursor with increased force multiplier
            targetX -= Math.cos(angle) * repulsionForce * 150 // Increased from 50 to 150
            targetY -= Math.sin(angle) * repulsionForce * 150
          }
        }

        // Keep particles within the hobby section bounds
        targetX = Math.max(2, Math.min(98, targetX))
        targetY = Math.max(2, Math.min(98, targetY))

        particleTargets.set(particleEl, {
          x: targetX,
          y: targetY,
        })

        const newX = currentX + (targetX - currentX) * movementSpeed
        const newY = currentY + (targetY - currentY) * movementSpeed

        particleEl.style.left = `${newX}%`
        particleEl.style.top = `${newY}%`

        // Check if particle is over a card and adjust opacity
        if (isParticleOverCard(newX, newY)) {
          particleEl.style.opacity = "0.3"
        } else {
          particleEl.style.opacity = "0"
        }
      })

      animationFrameId = requestAnimationFrame(updateParticles)
    }

    // Add mouse event listeners
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', () => {
      mousePosition = { x: -1000, y: -1000 } // Reset when mouse leaves
    })

    for (let i = 0; i < density; i++) {
      createParticle(i)
    }

    updateParticles()

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', () => {
        mousePosition = { x: -1000, y: -1000 }
      })
      cancelAnimationFrame(animationFrameId)
      particles.forEach((particleEl) => {
        particleEl.remove()
        particleTargets.delete(particleEl)
      })
    }
  }, [flippedCards]) // Add flippedCards dependency so particles update when cards flip

  // Add theme change detection to recreate particles with correct colors
  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Force particle recreation by toggling a state
      const container = hobbySectionRef.current
      if (container) {
        // Clear existing particles
        const existingParticles = container.querySelectorAll('div[style*="border-radius: 50%"]')
        existingParticles.forEach(p => p.remove())
        
        // The main particle system useEffect will recreate them with correct colors
        // due to the flippedCards dependency
        setFlippedCards(prev => ({ ...prev }))
      }
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
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
              {/* Portrait Photo */}
              <div className="relative">
                <motion.div
                  className="w-80 h-80 mx-auto mb-6 relative overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ 
                    scale: 1.02
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/images/portraint.jpg"
                    alt="Nicolás Carranza Portrait"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl opacity-30 animate-pulse" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              <span className="text-gray-900 dark:text-white">Hi there! I&apos;m </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nicolás
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
                { icon: Mail, href: "mailto:Nicolás.carranza.work@gmail.com", label: "Email", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600" },
                { icon: Github, href: "https://github.com/Nicolás-Carranza", label: "GitHub", color: "hover:bg-gray-50 dark:hover:bg-gray-700/20 hover:border-gray-400 dark:hover:border-gray-500" },
                { icon: Linkedin, href: "https://linkedin.com/in/Nicolás-carranza-arauna-4029a7252", label: "LinkedIn", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600" }
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
                  
                  // Calculate logical positions
                  const nextIndex = (currentJourneyIndex + 1) % journeySteps.length
                  const prevIndex = (currentJourneyIndex - 1 + journeySteps.length) % journeySteps.length
                  
                  let xPosition = 0
                  let scale = 0.85
                  let opacity = 0 // Default to hidden
                  let zIndex = 0 // Default behind everything
                  let blur = 5
                  
                  if (index === currentJourneyIndex) {
                    // Center active card
                    xPosition = 0
                    scale = 1
                    opacity = 1
                    zIndex = 10
                    blur = 0
                  } else if (index === nextIndex) {
                    // Right side card (NEXT item)
                    xPosition = 320
                    scale = 0.85
                    opacity = 0.4
                    zIndex = 5
                    blur = 3
                  } else if (index === prevIndex) {
                    // Left side card (PREVIOUS item)
                    xPosition = -320
                    scale = 0.85
                    opacity = 0.4
                    zIndex = 5
                    blur = 3
                  }
                  // All other positions remain completely hidden with default values
                  
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
                    onClick={() => goToJourneyIndex(index)}
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
          
          <div 
            ref={hobbySectionRef}
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="group h-64 hobby-card"
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
                    className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-black dark:text-white overflow-hidden backface-hidden`}
                  >

                    <motion.div 
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm relative z-10"
                      whileHover={{ 
                        rotate: 360,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <interest.icon className="w-8 h-8 text-black dark:text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-center relative z-10">
                      {interest.name}
                    </h3>
                    
                    <p className="text-black/80 dark:text-white/80 text-center text-sm leading-relaxed relative z-10">
                      {interest.desc}
                    </p>

                    <div className="mt-4 text-black/60 dark:text-white/60 text-xs relative z-10">
                      Click to flip
                    </div>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 bg-stone-50/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 backface-hidden rotate-y-180"
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
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200/50 dark:border-gray-600/30 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Highland Cow Background */}
            <div className="absolute inset-0 opacity-15 dark:opacity-10">
              <Image
                src="/images/highland_cow.png"
                alt="Highland Cows Background"
                fill
                className="object-cover object-center"
                quality={85}
              />
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
