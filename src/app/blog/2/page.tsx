'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Lightbulb, Rocket, Code, Brain, Zap, Target } from 'lucide-react'

export default function BlogPost2() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  const sections = [
    "The Spark of an Idea",
    "Market Research & Validation", 
    "Building the MVP",
    "AI Integration Challenges",
    "Launch & Early Feedback",
    "What's Next"
  ]

  useEffect(() => {
    const updateSection = () => {
      const progress = scrollYProgress.get()
      const newSection = Math.floor(progress * sections.length)
      setCurrentSection(Math.min(newSection, sections.length - 1))
    }
    
    return scrollYProgress.on('change', updateSection)
  }, [scrollYProgress, sections.length])

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Floating Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full p-4 shadow-xl">
          <div className="space-y-2">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index <= currentSection ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
        style={{ y: backgroundY }}
      >
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-400/30 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 border border-blue-400/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-8">
              <motion.div
                className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm mb-6"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                    "0 0 40px rgba(168, 85, 247, 0.6)",
                    "0 0 20px rgba(168, 85, 247, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-12 h-12 text-purple-300" />
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Building
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Unhatched.ai
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-purple-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The story of how a simple idea became an AI-powered platform that helps entrepreneurs 
              validate and develop their startup ideas with a virtual co-founder
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center space-x-6 text-sm text-purple-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span>November 28, 2024</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Entrepreneurship</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="relative bg-white dark:bg-gray-900">
        
        {/* The Spark */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center mb-12">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-6"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Lightbulb className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                The Spark of an Idea
              </h2>
            </div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.div
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    💡 The &quot;Aha!&quot; Moment
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    It was 2 AM in St Andrews when the idea hit me. I was procrastinating on an assignment, 
                    brainstorming random startup ideas, when I realized: <strong>What if every entrepreneur 
                    could have an AI co-founder to validate, develop, and guide their ideas?</strong>
                  </p>
                  <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600 dark:text-gray-400">
                    &quot;The best ideas often come when you&apos;re not looking for them—they find you.&quot;
                  </blockquote>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: "🎯", text: "Validate business ideas with AI analysis" },
                  { icon: "🤖", text: "Get a virtual co-founder that never sleeps" },
                  { icon: "📊", text: "Market research automated and intelligent" },
                  { icon: "🚀", text: "From idea to execution roadmap" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Market Research */}
        <motion.section 
          className="py-20 bg-gray-50 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center mb-12">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6"
                whileHover={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Validation & Research
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { stat: "127", label: "Entrepreneurs Surveyed", color: "from-blue-500 to-blue-600" },
                { stat: "89%", label: "Struggle with Validation", color: "from-purple-500 to-purple-600" },
                { stat: "73%", label: "Want AI Assistance", color: "from-pink-500 to-pink-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${item.color} rounded-xl p-6 text-white text-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold mb-2">{item.stat}</div>
                  <div className="text-sm opacity-90">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Key Insights Discovered
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  The research phase revealed something fascinating: entrepreneurs weren&apos;t just looking for 
                  tools—they were looking for <strong>partnership</strong>. They wanted someone (or something) 
                  that could challenge their assumptions, ask the right questions, and help them navigate 
                  the uncertain waters of startup building.
                </p>
                <p>
                  This insight shaped Unhatched&apos;s core philosophy: we&apos;re not just building a validation tool, 
                  we&apos;re creating an AI partner that thinks like a seasoned entrepreneur.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Building the MVP */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center mb-12">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Building the MVP
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Week 1-2",
                  title: "Architecture & Planning",
                  description: "Designed the system architecture, chose tech stack (Next.js, Python, OpenAI API), and created wireframes.",
                  color: "border-green-400",
                  bgColor: "bg-green-50 dark:bg-green-900/20"
                },
                {
                  phase: "Week 3-4",
                  title: "Frontend Development",
                  description: "Built responsive UI with TypeScript and Tailwind, focusing on user experience and accessibility.",
                  color: "border-blue-400",
                  bgColor: "bg-blue-50 dark:bg-blue-900/20"
                },
                {
                  phase: "Week 5-6",
                  title: "Backend & AI Integration",
                  description: "Developed API endpoints, integrated OpenAI for intelligent responses, implemented security measures.",
                  color: "border-purple-400",
                  bgColor: "bg-purple-50 dark:bg-purple-900/20"
                },
                {
                  phase: "Week 7-8",
                  title: "Testing & Refinement",
                  description: "Extensive testing, user feedback integration, performance optimization, and final polishing.",
                  color: "border-pink-400",
                  bgColor: "bg-pink-50 dark:bg-pink-900/20"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`border-l-4 ${item.color} ${item.bgColor} rounded-r-xl p-6 ml-8`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center mb-3">
                    <span className="bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 mr-4">
                      {item.phase}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* AI Challenges */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <motion.div
                className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm mb-6"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Brain className="w-12 h-12" />
              </motion.div>
              <h2 className="text-4xl font-bold mb-6">AI Integration Challenges</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Building an AI that thinks like an entrepreneur wasn&apos;t just a technical challenge—
                it was a philosophical one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-red-300">🔥 The Challenges</h3>
                <ul className="space-y-3">
                  <li>• Making AI responses contextual and relevant</li>
                  <li>• Avoiding generic startup advice</li>
                  <li>• Handling complex business logic</li>
                  <li>• Ensuring consistent personality</li>
                  <li>• Managing API costs and rate limits</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-green-300">✅ The Solutions</h3>
                <ul className="space-y-3">
                  <li>• Custom prompt engineering</li>
                  <li>• Industry-specific knowledge bases</li>
                  <li>• Multi-step reasoning chains</li>
                  <li>• Personality consistency algorithms</li>
                  <li>• Smart caching and optimization</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Launch & Results */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <motion.div
                className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Launch & Early Results
              </h2>
            </div>

            <motion.div
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-12 text-center"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                The Numbers Don&apos;t Lie
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { number: "50+", label: "Beta Users", icon: "👥" },
                  { number: "200+", label: "Ideas Validated", icon: "💡" },
                  { number: "4.8/5", label: "Average Rating", icon: "⭐" },
                  { number: "78%", label: "Would Recommend", icon: "❤️" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                &quot;Unhatched didn&apos;t just validate my idea—it helped me see possibilities I never considered. 
                It&apos;s like having a wise mentor who&apos;s available 24/7.&quot;
              </blockquote>
              <cite className="text-gray-500 dark:text-gray-400">— Sarah M., Beta User</cite>
            </motion.div>
          </div>
        </motion.section>

        {/* What's Next */}
        <motion.section 
          className="py-20 bg-gray-900 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">What&apos;s Next for Unhatched?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { title: "Advanced AI Models", desc: "Integrating GPT-4 and custom models for even smarter insights" },
                  { title: "Community Features", desc: "Connect entrepreneurs and enable peer-to-peer validation" },
                  { title: "Market Expansion", desc: "Scaling globally and adding multi-language support" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p 
                className="text-2xl mb-8"
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1 }}
              >
                From a 2 AM idea to a working platform—this is just the beginning. 
                <br />
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold">
                  The future of entrepreneurship is AI-powered.
                </span>
              </motion.p>

              <motion.div
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Ready to hatch your idea? 🚀
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
