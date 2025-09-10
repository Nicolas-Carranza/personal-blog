'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Atom, Cpu, TrendingUp, Zap, Brain, Target, ChevronDown } from 'lucide-react'

export default function BlogPost3() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      mouseX.set(clientX - window.innerWidth / 2)
      mouseY.set(clientY - window.innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Animated cursor follower */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: springX, 
          top: springY,
          x: -12,
          y: -12
        }}
      />

      {/* Dynamic background grid */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, cyan 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Animated atom icon */}
            <motion.div
              className="mb-12 flex justify-center"
              style={{ rotateX, scale }}
            >
              <div className="relative">
                <motion.div
                  className="w-32 h-32 border-2 border-cyan-400 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Atom className="w-16 h-16 text-cyan-400" />
                </motion.div>
                
                {/* Orbiting elements */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: { duration: 3 + i, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, delay: i * 0.5 }
                    }}
                    initial={{
                      x: Math.cos((angle * Math.PI) / 180) * 60 - 8,
                      y: Math.sin((angle * Math.PI) / 180) * 60 - 8,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold mb-8">
              <span className="block text-white mb-2">From</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                CERN to QuantConnect
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-cyan-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              My journey through artificial intelligence, machine learning, and quantitative trading—
              from antimatter research to algorithmic fortune-making
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center space-x-6 text-sm text-cyan-200 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span>October 10, 2024</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>AI & Tech</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </div>
      </section>

      {/* Content sections with parallax and interactions */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black text-white">
        
        {/* CERN Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-16"
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Atom className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-5xl font-bold">The CERN Experience</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Diving into the mysteries of antimatter at the world&apos;s most famous physics laboratory
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <motion.div
                    className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30"
                    whileHover={{ scale: 1.02, borderColor: "rgb(251 146 60)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-orange-400">
                      🔬 The BL4s Contest Challenge
                    </h3>
                    <p className="text-lg mb-6 text-gray-300">
                      Being selected for the CERN BL4s Contest was like winning a golden ticket to the 
                      future of physics. Our antimatter research project wasn&apos;t just an academic exercise—
                      it was a glimpse into the fundamental building blocks of reality.
                    </p>
                    
                    <div className="space-y-3">
                      {[
                        "Studied antimatter containment techniques",
                        "Analyzed particle collision data",
                        "Collaborated with international researchers",
                        "Presented findings to CERN scientists"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-70"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
              >
                {[
                  {
                    title: "Mind = Blown 🤯",
                    description: "Witnessing the Large Hadron Collider in person changed my perspective on what's possible with technology.",
                    icon: Brain,
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "Data Overload 📊",
                    description: "Processing terabytes of particle collision data taught me the power of computational analysis.",
                    icon: Cpu,
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Future Vision 🚀",
                    description: "Seeing cutting-edge research sparked my passion for applying AI to solve complex problems.",
                    icon: Zap,
                    color: "from-yellow-500 to-orange-500"
                  }
                ].map((insight, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-r ${insight.color} rounded-xl p-6 text-white`}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileInView={{ x: [50, 0], opacity: [0, 1] }}
                    transition={{ 
                      hover: { duration: 0.3 },
                      inView: { delay: index * 0.2, duration: 0.6 }
                    }}
                  >
                    <div className="flex items-center mb-3">
                      <insight.icon className="w-6 h-6 mr-3" />
                      <h4 className="text-lg font-bold">{insight.title}</h4>
                    </div>
                    <p className="text-white/90">{insight.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Transition Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">The AI Awakening</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                CERN showed me the power of data and computation. But it was at St Andrews where 
                I discovered how to harness that power through artificial intelligence and machine learning.
              </p>
              
              <motion.div
                className="relative mx-auto w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
                whileInView={{ width: ["0%", "100%"] }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </motion.div>
              <div className="flex justify-between mt-4 text-sm text-gray-400 max-w-64 mx-auto">
                <span>Physics Research</span>
                <span>AI & ML Mastery</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* AI/ML Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-16"
              whileInView={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(147, 51, 234, 0.8)",
                      "0 0 20px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-5xl font-bold">AI & Machine Learning</h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Neural Networks",
                  description: "Deep learning architectures for pattern recognition and prediction",
                  progress: 85,
                  color: "from-blue-400 to-blue-600",
                  icon: "🧠"
                },
                {
                  title: "Computer Vision",
                  description: "Image processing and object detection algorithms",
                  progress: 75,
                  color: "from-green-400 to-green-600",
                  icon: "👁️"
                },
                {
                  title: "NLP & LLMs",
                  description: "Language models and text processing systems",
                  progress: 90,
                  color: "from-purple-400 to-purple-600",
                  icon: "💬"
                },
                {
                  title: "Reinforcement Learning",
                  description: "Agent-based learning and decision making",
                  progress: 70,
                  color: "from-orange-400 to-orange-600",
                  icon: "🎮"
                },
                {
                  title: "Time Series Analysis",
                  description: "Financial data prediction and forecasting",
                  progress: 88,
                  color: "from-cyan-400 to-cyan-600",
                  icon: "📈"
                },
                {
                  title: "MLOps & Deployment",
                  description: "Production ML systems and monitoring",
                  progress: 80,
                  color: "from-pink-400 to-pink-600",
                  icon: "⚙️"
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                  whileHover={{ 
                    y: -10, 
                    borderColor: "rgb(59 130 246)",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  whileInView={{ y: [50, 0], opacity: [0, 1] }}
                  transition={{ 
                    hover: { duration: 0.3 },
                    inView: { delay: index * 0.1, duration: 0.6 }
                  }}
                >
                  <div className="text-3xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-2">
                    {skill.progress}%
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* QuantConnect Section */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-green-900/30 via-blue-900/30 to-purple-900/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="text-center mb-16"
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-6"
                  whileHover={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 1 }}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-5xl font-bold">QuantConnect Adventures</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Where AI meets Wall Street—building algorithmic trading strategies 
                that compete against the world&apos;s best universities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Strategy Details */}
              <motion.div
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    Moving-Average Crossover Strategy
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-black/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold mb-3 text-white">📊 Strategy Overview</h4>
                      <p className="text-gray-300 mb-4">
                        Developed a sophisticated options strategy that uses moving average crossovers 
                        to identify entry and exit points across tech, energy, and retail sectors.
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-green-500/20 rounded-lg p-3">
                          <div className="text-2xl font-bold text-green-400">+12.8%</div>
                          <div className="text-xs text-gray-300">Annualized Return</div>
                        </div>
                        <div className="bg-blue-500/20 rounded-lg p-3">
                          <div className="text-2xl font-bold text-blue-400">0.67</div>
                          <div className="text-xs text-gray-300">Sharpe Ratio</div>
                        </div>
                        <div className="bg-purple-500/20 rounded-lg p-3">
                          <div className="text-2xl font-bold text-purple-400">-8.2%</div>
                          <div className="text-xs text-gray-300">Max Drawdown</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold mb-3 text-white">⚙️ Technical Implementation</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Python-based algorithm with Pandas/NumPy</li>
                        <li>• Real-time market data processing</li>
                        <li>• Risk management with position sizing</li>
                        <li>• Multi-asset portfolio optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Competition Results */}
              <motion.div
                whileInView={{ x: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <h4 className="text-xl font-bold mb-4 text-purple-400">🏆 Competition Results</h4>
                  <div className="space-y-4">
                    {[
                      { university: "University of Oxford", rank: "2nd", performance: "+18.2%" },
                      { university: "Cambridge University", rank: "3rd", performance: "+15.7%" },
                      { university: "St Andrews (Us!)", rank: "5th", performance: "+12.8%" },
                      { university: "Imperial College", rank: "7th", performance: "+9.4%" }
                    ].map((result, index) => (
                      <motion.div
                        key={index}
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          result.university.includes('St Andrews') 
                            ? 'bg-green-500/20 border border-green-500/50' 
                            : 'bg-gray-800/50'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div>
                          <div className="font-semibold text-white">{result.university}</div>
                          <div className="text-sm text-gray-400">#{result.rank} Place</div>
                        </div>
                        <div className="text-green-400 font-bold">{result.performance}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <h4 className="text-xl font-bold mb-4 text-blue-400">🧮 Mathematical Puzzles</h4>
                  <p className="text-gray-300 mb-4">
                    Beyond trading algorithms, QuantConnect challenged us with complex mathematical 
                    puzzles that tested our problem-solving abilities and quantitative reasoning.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Stochastic Calculus",
                      "Monte Carlo Simulations", 
                      "Portfolio Optimization",
                      "Risk Parity Models"
                    ].map((topic, index) => (
                      <motion.div
                        key={index}
                        className="bg-blue-500/20 rounded-lg p-2 text-center text-sm"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {topic}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-bold mb-3 text-yellow-400">💡 Key Learnings</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Markets are chaotic but patterns exist</li>
                    <li>• Risk management {'>'}profit optimization</li>
                    <li>• Backtesting ≠ real-world performance</li>
                    <li>• Psychology matters as much as math</li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Future Vision */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl font-bold mb-8">The Future is AI-Powered</h2>
              
              <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  From studying the smallest particles at CERN to predicting market movements 
                  with AI—this journey has taught me that the most powerful technologies emerge 
                  when we combine scientific rigor with creative problem-solving.
                </p>
                
                <motion.div
                  className="flex flex-wrap justify-center gap-4 mb-8"
                  whileInView={{ y: [20, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {[
                    "Quantum Computing",
                    "AGI Development", 
                    "Sustainable AI",
                    "Fintech Innovation",
                    "Space Technology"
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 rounded-full text-white font-semibold"
                      whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text"
                  whileInView={{ scale: [0.9, 1.1, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  The next chapter is being written in code, algorithms, and imagination. 🚀
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
