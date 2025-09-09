import Link from 'next/link'
import { Trophy, Award, Star, Target } from 'lucide-react'

const AchievementsPreview = () => {
  const achievements = [
    {
      id: 1,
      title: "Full-Stack Developer Certification",
      description: "Completed comprehensive web development bootcamp",
      date: "2023",
      icon: Award,
      category: "Education"
    },
    {
      id: 2,
      title: "First Open Source Contribution",
      description: "Contributed to a major open source project on GitHub",
      date: "2024",
      icon: Star,
      category: "Development"
    },
    {
      id: 3,
      title: "Personal Blog Launch",
      description: "Successfully launched and deployed this personal website",
      date: "2024",
      icon: Target,
      category: "Personal"
    },
    {
      id: 4,
      title: "Tech Conference Speaker",
      description: "Presented at a local developer meetup",
      date: "2024",
      icon: Trophy,
      category: "Speaking"
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
            Milestones and accomplishments that I'm proud to share
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
