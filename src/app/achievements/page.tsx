export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Portfolio
          </h1>
          
          <div className="text-center text-gray-600 dark:text-gray-300 mb-12">
            <p className="text-lg">
              A showcase of my professional journey, projects, and accomplishments
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Professional Achievements */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Milestones
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Full-Stack Developer Role
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Landed my first professional development position
                  </p>
                  <span className="text-primary-600 text-sm">2024</span>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Certification Completion
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Completed comprehensive web development certification
                  </p>
                  <span className="text-primary-600 text-sm">2023</span>
                </div>
              </div>
            </div>

            {/* Technical Projects */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Projects
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Personal Blog Website
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Built with Next.js, TypeScript, and Tailwind CSS
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      Next.js
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      TypeScript
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              This page will be regularly updated with new achievements and projects.
              <br />
              <strong>Tip:</strong> Replace this content with your actual achievements, 
              certifications, projects, and CV highlights!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
