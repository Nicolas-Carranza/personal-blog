'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Trophy, Award, Star, Target, ArrowRight } from 'lucide-react'

const AchievementsPreview = () => {
  const achievements = [
    {
      id: 1,
      title: "BlackRock Summer Internship",
      description: "Worked with the Aladdin Client Business team, leading an AI implementation project in collaboration with global engineering teams",
      date: "2025",
      icon: Trophy,
      category: "Professional"
    },
    {
      id: 2,
      title: "Founded Unhatched.ai",
      description: "Created an AI-powered virtual co-founder platform, leading both product development and design",
      date: "2024",
      icon: Star,
      category: "Entrepreneurship"
    },
    {
      id: 3,
      title: "Dean's List Recognition",
      description: "Honored for three consecutive years of academic excellence at the University of St Andrews",
      date: "2022–2025",
      icon: Award,
      category: "Academic"
    },
    {
      id: 4,
      title: "President of the Spanish Society",
      description: "Elected president and organized fundraising efforts, raising €2,500 for Valencia DANA disaster relief in partnership with World Central Kitchen",
      date: "2024",
      icon: Target,
      category: "Leadership"
    }
  ]
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Milestones and accomplishments that I&apos;m proud to share
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="bg-white/90 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-8 transition-all duration-500 group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Neon glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-500 rounded-xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                          <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all duration-300">
                            {achievement.category}
                          </span>
                          <span className="text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors duration-300">
                            {achievement.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/achievements"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-medium hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300"
          >
            View All Achievements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsPreview
