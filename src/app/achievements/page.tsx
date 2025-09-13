'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Rocket, 
  Code, 
  Trophy,
  ExternalLink,
  Calendar,
  Users,
  Building,
  TrendingUp,
  Film,
  Medal,
  TestTube,
  Target
} from 'lucide-react'
import PageBackground from '@/components/PageBackground'

export default function AchievementsPage() {
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
                Achievements & Portfolio
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A showcase of my academic excellence, professional experiences, and innovative projects
              </p>
            </motion.div>
            {/* Academic Excellence & Professional Experience */}
            <motion.section 
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Academic Excellence */}
                <motion.div 
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02
                  }}
                >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Academic Excellence
                  </h2>
                </div>                    <div className="space-y-6">
                      <motion.div 
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                          borderColor: "rgba(59, 130, 246, 0.4)"
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            University of St Andrews - BSc (Hons)
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                          Computer Science & Management Science (On track 1:1)
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          Dean's List 2022/23, 2023/24, 2024/25 for outstanding academic performance
                        </p>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          2022 - 2026
                        </div>
                      </motion.div>

                      <motion.div 
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                          borderColor: "rgba(59, 130, 246, 0.4)"
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Harvard University - CS50Px
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          Certificate in Computer Science and Python Programming
                        </p>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          2023
                        </div>
                      </motion.div>

                      <motion.div 
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                          borderColor: "rgba(59, 130, 246, 0.4)"
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            BiBac Bilingual Baccalaureate
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          9.5/10 Grade, Head Student at British Council School Madrid
                        </p>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          2020 - 2022
                        </div>
                      </motion.div>
                    </div>
                </motion.div>

                {/* Professional Experience */}
                <motion.div 
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Professional Experience
                    </h2>
                    </div>
                    
                    <div className="space-y-6">
                      <motion.div 
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                          borderColor: "rgba(59, 130, 246, 0.4)"
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              BlackRock - Aladdin Client Business
                            </h3>
                          </div>
                          <a 
                            href="https://blackrock.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Visit BlackRock website"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          Summer Intern in Edinburgh, leading AI implementation project
                        </p>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          Jun 2025 - Aug 2025
                        </div>
                      </motion.div>

                      <motion.div 
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              DCycle - Backend Software Engineer
                            </h3>
                          </div>
                          <a 
                            href="https://dcycle.io" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Visit DCycle website"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          Developed Python tools for financial data retrieval and API testing
                        </p>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          May 2024 - Jul 2024
                        </div>
                      </motion.div>

                      <motion.div 
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            University of St Andrews - STARIS Intern
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          Research internship with Oxford University on Ancient Egyptian database
                        </p>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          Sep 2023 - Dec 2023
                        </div>
                      </motion.div>
                    </div>
                </motion.div>
              </div>
            </motion.section>          {/* Leadership & Entrepreneurship */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Entrepreneurship & Leadership */}
              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Entrepreneurship & Leadership
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Founder & CPO - Unhatched
                        </h3>
                      </div>
                      <a 
                        href="https://unhatched.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Visit Unhatched.ai website"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      AI-powered virtual co-founder platform for startup ideas
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        AI/ML
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        Full-Stack
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        Product Design
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        President - Spanish Society St Andrews
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Raised €2,500 for Valencia DANA disaster relief
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Sponsorship & Events Director - Fintech Society
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Leading sponsorship with BlackRock and major industry partnerships
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Technical Projects */}
              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Featured Projects
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.4)"
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Helping Hand - Social Good Platform
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      Web app connecting elderly citizens with local volunteers (25 developers team)
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        Python
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        Next.js
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        ML
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        VR
                      </span>
                    </div>
                  </motion.div>
                
                <motion.div
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                    borderColor: "rgba(59, 130, 246, 0.4)"
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Quantitative Trading Algorithms
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    ML-powered trading strategies with Mercurial Capital Investment
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                      Python
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                      Pandas
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                      QuantConnect
                    </span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                    borderColor: "rgba(59, 130, 246, 0.4)"
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Film className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Movie Queue & Media API
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Dynamic web application with RESTful API for media management
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                      JavaScript
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                      Express.js
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                      REST API
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            </div>
          </motion.section>
          
          {/* Awards & Recognition */}
          <div className="card p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Awards & Recognition
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                className="text-center cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Medal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Dean&apos;s List</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">3 consecutive years</p>
              </motion.div>
              <motion.div 
                className="text-center cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TestTube className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">CERN BL4s Contest</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Antimatter Research Project</p>
              </motion.div>
              <motion.div 
                className="text-center cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Head Student</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">British Council School</p>
              </motion.div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </PageBackground>
  )
}

