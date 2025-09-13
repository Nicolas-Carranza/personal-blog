'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, PenTool, FileText, Target, Mail } from 'lucide-react'
import PageBackground from '@/components/PageBackground'

interface ComingSoonPageProps {
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
}

export default function ComingSoonPage({ 
  title, 
  category, 
  date, 
  readTime, 
  excerpt 
}: ComingSoonPageProps) {
  return (
    <PageBackground variant="dotgrid" className="min-h-screen">
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Button */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/blog"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Main Content Card */}
            <motion.article
              className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                background: "linear-gradient(135deg, rgba(31, 41, 55, 0.7) 0%, rgba(17, 24, 39, 0.9) 100%)"
              }}
            >
              {/* Header */}
              <div className="p-8 border-b border-gray-700/50">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="bg-gray-700/70 text-gray-300 px-3 py-1 rounded-full font-medium">
                    {category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {readTime}
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {title}
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {excerpt}
                </p>
              </div>

              {/* Coming Soon Content */}
              <div className="p-8 text-center">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <PenTool className="w-10 h-10 text-purple-400" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Coming Soon
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto">
                    This story is currently being written. Check back soon for the full article about this experience!
                  </p>
                  
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Article in progress</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>Will be available soon</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>Subscribe to the newsletter to get notified</span>
                    </div>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Link 
                    href="/blog"
                    className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Browse Other Stories
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center bg-gray-700/70 hover:bg-gray-600/70 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </PageBackground>
  )
}