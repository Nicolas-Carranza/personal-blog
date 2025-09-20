'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Option 1: Animated Dot Grid (Fixed for hydration)
export const DotGridBackground = () => {
  const [particles, setParticles] = useState<Array<{left: string, top: string}>>([])
  
  useEffect(() => {
    // Generate particle positions only on client side
    const particlePositions = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setParticles(particlePositions)
  }, [])

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-purple-100/30 to-pink-100/35 dark:from-gray-950 dark:via-blue-950/20 dark:to-indigo-950/30">
      {/* Light theme: Subtle pastel pattern with white dominance */}
      <div className="absolute inset-0 opacity-15 dark:opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(147,51,234,0.2)_1px,transparent_0)] bg-[length:60px_60px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)]" />
      <div className="absolute inset-0 opacity-8 dark:opacity-10 bg-[linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:60px_60px]" />
      
      {/* Light theme: Soft pastel orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-200/25 to-rose-200/25 dark:from-purple-400/15 dark:to-pink-400/15 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lavender-200/20 to-purple-200/20 dark:from-indigo-400/10 dark:to-blue-400/10 rounded-full blur-3xl animate-pulse [animation-delay:500ms]" />
      
      {/* Floating particles with theme-aware colors */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-300/50 dark:bg-blue-400/60 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Subtle texture overlay for light theme */}
      <div className="absolute inset-0 opacity-20 dark:opacity-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
    </div>
  )
}

// Option 2: Geometric Mesh
export const GeometricMeshBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50/30 to-purple-50/40 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-900">
    {/* Geometric Shapes */}
    <div className="absolute inset-0 opacity-20 dark:opacity-20">
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border border-purple-200/40 dark:border-blue-400/20 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-24 h-24 border border-pink-200/40 dark:border-purple-400/20 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-40 h-40 border border-rose-200/40 dark:border-pink-400/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>

    {/* Gradient Overlays */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-300/8 via-transparent to-pink-300/8 dark:from-blue-400/5 dark:via-transparent dark:to-purple-400/5" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/20 to-transparent dark:via-indigo-950/20" />
  </div>
)

// Option 3: Organic Blobs
export const OrganicBlobBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50/50 to-blue-50 dark:from-slate-950 dark:via-violet-950/30 dark:to-slate-900">
    {/* Animated Blobs */}
    <motion.div
      className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-purple-300/30 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl"
      animate={{
        x: [0, 50, 0],
        y: [0, 30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-br from-pink-300/25 to-orange-300/25 dark:from-pink-600/15 dark:to-orange-600/15 rounded-full blur-3xl"
      animate={{
        x: [0, -30, 0],
        y: [0, 50, 0],
        scale: [1, 0.9, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute -bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 dark:from-cyan-600/20 dark:to-blue-600/20 rounded-full blur-3xl"
      animate={{
        x: [0, 40, 0],
        y: [0, -20, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Subtle Pattern Overlay */}
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20px_20px,rgba(99,102,241,0.1)_2px,transparent_0)] bg-[length:100px_100px]" />
  </div>
)

// Option 4: Minimalist Grid Glow
export const GridGlowBackground = () => {
  // Use fixed positions instead of random for hydration safety
  const glowPoints = [
    { left: '20%', top: '30%' },
    { left: '50%', top: '30%' },
    { left: '80%', top: '30%' },
    { left: '20%', top: '70%' },
    { left: '50%', top: '70%' },
    { left: '80%', top: '70%' }
  ]

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/30 dark:from-gray-950 dark:to-slate-900">
      {/* Grid with Glow */}
      <div className="absolute inset-0 opacity-25 dark:opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[length:60px_60px]" />
        
        {/* Glowing Intersection Points */}
        {glowPoints.map((point, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/50 dark:bg-blue-400/60 rounded-full shadow-lg shadow-purple-400/30 dark:shadow-blue-400/50"
            style={{
              left: point.left,
              top: point.top,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Option 5: Particles Field
export const ParticlesFieldBackground = () => {
  const [particles, setParticles] = useState<Array<{width: number, height: number, left: string, top: string, duration: number, delay: number}>>([])
  
  useEffect(() => {
    // Generate particle data only on client side
    const particleData = [...Array(50)].map((_, i) => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
    setParticles(particleData)
  }, [])

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50/50 to-pink-50 dark:from-slate-950 dark:via-indigo-950/40 dark:to-slate-900">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.1),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Option 6: Neural Network
export const NeuralNetworkBackground = () => {
  // Use fixed positions for hydration safety
  const nodes = [
    { id: 0, x: 15, y: 20 },
    { id: 1, x: 85, y: 25 },
    { id: 2, x: 45, y: 10 },
    { id: 3, x: 25, y: 45 },
    { id: 4, x: 75, y: 60 },
    { id: 5, x: 60, y: 35 },
    { id: 6, x: 10, y: 70 },
    { id: 7, x: 90, y: 80 },
    { id: 8, x: 35, y: 75 },
    { id: 9, x: 65, y: 15 },
    { id: 10, x: 20, y: 90 },
    { id: 11, x: 80, y: 40 }
  ]

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-900">
      {/* Neural Network Nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20">
        {/* Connections */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            )
            if (distance < 30) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (i + j) * 0.1,
                  }}
                />
              )
            }
            return null
          })
        )}
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="rgba(59, 130, 246, 0.6)"
            animate={{
              r: [3, 5, 3],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
