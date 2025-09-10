import Link from 'next/link'
import { Trophy, Award, Star, Target } from 'lucide-react'

const AchievementsPreview = () => {
  const achievements = [
    {
      id: 1,
      title: "BlackRock Summer Internship",
      description: "Aladdin Client Business team, leading AI implementation project with global engineering teams",
      date: "2025",
      icon: Trophy,
      category: "Professional"
    },
    {
      id: 2,
      title: "Founded Unhatched.ai",
      description: "Built AI-powered virtual co-founder platform, leading product development and design",
      date: "2024",
      icon: Star,
      category: "Entrepreneurship"
    },
    {
      id: 3,
      title: "Dean's List Recognition",
      description: "Three consecutive years of academic excellence at University of St Andrews",
      date: "2022-2025",
      icon: Award,
      category: "Academic"
    },
    {
      id: 4,
      title: "Spanish Society President",
      description: "Elected president, raised €2,500 for Valencia DANA disaster relief in partnership with World Central Kitchen",
      date: "2024",
      icon: Target,
      category: "Leadership"
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Milestones and accomplishments that I&apos;m proud to share
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div 
                key={achievement.id}
                className="card p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium">
                        {achievement.category}
                      </span>
                      <span className="text-primary-600 font-medium text-sm">
                        {achievement.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/achievements"
            className="btn-primary"
          >
            View All Achievements
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AchievementsPreview
