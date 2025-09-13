'use client'

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
  Zap
} from 'lucide-react'
import PageBackground from '@/components/PageBackground'

export default function AboutPage() {
  const skills = [
    { name: "Frontend Development", level: 90, color: "bg-blue-500" },
    { name: "Backend Development", level: 85, color: "bg-green-500" },
    { name: "UI/UX Design", level: 75, color: "bg-purple-500" },
    { name: "Project Management", level: 80, color: "bg-orange-500" }
  ]

  const interests = [
    { icon: Code, name: "Coding", desc: "Building innovative solutions" },
    { icon: GraduationCap, name: "Learning", desc: "Continuous skill development" },
    { icon: Heart, name: "Community", desc: "Helping others grow" },
    { icon: Sparkles, name: "Innovation", desc: "Exploring new technologies" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
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
          <div className="text-center mb-20">
            <motion.div 
              className="relative inline-block mb-8"
              variants={itemVariants}
            >
              {/* Profile Picture with Glow */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl mx-auto">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    ?
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="text-gray-900 dark:text-white">Hello, I&apos;m </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nicolas Carranza
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A passionate Computer Science student with a focus on AI and full-stack development.
            </motion.p>

            <motion.div
              className="flex justify-center gap-4 mb-12"
              variants={itemVariants}
            >
              {[
                { icon: Mail, href: "mailto:nicolas.carranza.work@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold cursor-pointer group"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              Scroll to learn more 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="relative py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Story */}
              <div className="lg:col-span-2">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  variants={itemVariants}
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Story</h2>
                </motion.div>
                
                <motion.div 
                  className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                    <p>
                        I was born and raised in Madrid, surrounded by family and friends who made the city feel like home. 
                        From a young age, I was drawn to the scientific side of life — first dreaming of becoming a veterinarian, then an astrophysicist, an aerospace engineer, and eventually finding my passion in software engineering. 
                        This curiosity about how things work has shaped my journey ever since.
                    </p>

                    <p>
                        I am currently in my final year at the University of St Andrews, pursuing a degree in Computer Science and Management. 
                        My studies have allowed me to explore a wide range of subjects, from operating systems and networks to the fundamentals of logic, complexity, and best coding practices. 
                        Along the way, I have gained hands-on experience with all the core programming languages, building a strong and versatile technical foundation.
                    </p>

                    <p>
                        This foundation has enabled me to complete three internships, each offering unique challenges and opportunities to apply my skills in real-world settings — experiences I have truly enjoyed and learned from.
                    </p>

                    <p>
                        Looking ahead, I am eager to start my career as a graduate software engineer, while remaining open to emerging opportunities in technology and innovation. 
                        I am passionate about using my skills to solve meaningful problems and contribute to projects that make a positive impact.
                    </p>

                </motion.div>
              </div>

              {/* Quick Info */}
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Based in", value: "United Kingdom" },
                    { icon: GraduationCap, label: "Education", value: "Computer Science and Management \n University of St Andrews" },
                    { icon: Zap, label: "Experience", value: "4 years" },
                    { icon: Heart, label: "Passion", value: "Technology and Innovation" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <item.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="relative py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
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
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
            variants={itemVariants}
          >
            What I Love Doing
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <interest.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {interest.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {interest.desc}
                </p>
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
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden border border-slate-700/50"
            variants={itemVariants}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-white/5 bg-repeat bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.3)_1px,transparent_0)] bg-[length:30px_30px]" />
            </div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Let&apos;s Work Together
              </motion.h2>
              
              <motion.p 
                className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
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
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm"
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
