import PageBackground from '@/components/PageBackground'

export default function AchievementsPage() {
  return (
    <PageBackground variant="dotgrid" className="min-h-screen">
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Portfolio
          </h1>
          
          <div className="text-center text-gray-600 dark:text-gray-300 mb-12">
            <p className="text-lg">
              A showcase of my academic excellence, professional experiences, and innovative projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Academic Excellence */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                🎓 Academic Excellence
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    University of St Andrews - BSc (Hons)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Computer Science & Management Science (On track 1:1)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Dean&apos;s List 2022/23, 2023/24, 2024/25 for outstanding academic performance
                  </p>
                  <span className="text-primary-600 text-sm">2022 - 2026</span>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Harvard University - CS50Px
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Certificate in Computer Science and Python Programming
                  </p>
                  <span className="text-primary-600 text-sm">2023</span>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    BiBac Bilingual Baccalaureate
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    9.5/10 Grade, Head Student at British Council School Madrid
                  </p>
                  <span className="text-primary-600 text-sm">2020 - 2022</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                💼 Professional Experience
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      BlackRock - Aladdin Client Business
                    </h3>
                    <a 
                      href="https://blackrock.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Visit BlackRock website"
                      className="text-green-600 hover:text-green-800 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Summer Intern in Edinburgh, leading AI implementation project
                  </p>
                  <span className="text-green-600 text-sm">Jun 2025 - Aug 2025</span>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      DCycle - Backend Software Engineer
                    </h3>
                    <a 
                      href="https://dcycle.io" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Visit DCycle website"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Developed Python tools for financial data retrieval and API testing
                  </p>
                  <span className="text-blue-600 text-sm">May 2024 - Jul 2024</span>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    University of St Andrews - STARIS Intern
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Research internship with Oxford University on Ancient Egyptian database
                  </p>
                  <span className="text-purple-600 text-sm">Sep 2023 - Dec 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership & Entrepreneurship */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                🚀 Entrepreneurship & Leadership
              </h2>
              <div className="space-y-4">
                <div className="border border-orange-200 dark:border-orange-700 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/20">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Founder & CPO - Unhatched
                    </h3>
                    <a 
                      href="https://unhatched.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Visit Unhatched.ai website"
                      className="text-orange-600 hover:text-orange-800 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    AI-powered virtual co-founder platform for startup ideas
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                      AI/ML
                    </span>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                      Full-Stack
                    </span>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                      Product Design
                    </span>
                  </div>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    President - Spanish Society St Andrews
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Raised €2,500 for Valencia DANA disaster relief
                  </p>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Sponsorship & Events Director - Fintech Society
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Leading sponsorship with BlackRock and major industry partnerships
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Projects */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                💻 Featured Projects
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Helping Hand - Social Good Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Web app connecting elderly citizens with local volunteers (25 developers team)
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      Python
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      Next.js
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      ML
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      VR
                    </span>
                  </div>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Quantitative Trading Algorithms
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    ML-powered trading strategies with Mercurial Capital Investment
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      Python
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      Pandas
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      QuantConnect
                    </span>
                  </div>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Movie Queue & Media API
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Dynamic web application with RESTful API for media management
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      JavaScript
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      Express.js
                    </span>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      REST API
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Awards & Recognition */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🏆 Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎖️</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Dean&apos;s List</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">3 consecutive years</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚗️</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">CERN BL4s Contest</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Antimatter Research Project</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Head Student</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">British Council School</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </PageBackground>
  )
}
