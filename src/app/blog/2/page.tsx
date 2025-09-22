'use client'


import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen } from 'lucide-react'
import { useState, useEffect } from 'react'
import PageBackground from '@/components/PageBackground'

export default function BlackRockExperience() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [shareMessage, setShareMessage] = useState('')

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()
    
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  const handleShare = async () => {
      try {
        if (navigator.share) {
          // Use native share if available (mobile)
          await navigator.share({
            title: postData.title,
            text: postData.excerpt,
            url: window.location.href,
          })
        } else {
          // Fallback to copying URL to clipboard
          await navigator.clipboard.writeText(window.location.href)
          setShareMessage('Link copied to clipboard!')
          setTimeout(() => setShareMessage(''), 3000)
        }
      } catch (error) {
        console.error('Share failed:', error)
        // Final fallback - try to copy URL
        try {
          await navigator.clipboard.writeText(window.location.href)
          setShareMessage('Link copied to clipboard!')
          setTimeout(() => setShareMessage(''), 3000)
        } catch (clipboardError) {
          setShareMessage('Unable to share - please copy URL manually')
          setTimeout(() => setShareMessage(''), 3000)
        }
      }
    }


  const postData = {
    title: "My Experience at BlackRock: Breaking into the Market",
    category: "Career",
    date: "22nd September 2025",
    readTime: "12 min read",
    excerpt: "Landing a summer internship at BlackRock and what I learned about the financial industry. From application process to real-world experience in one of the world's largest asset managers.",
    publishDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <PageBackground variant="dotgrid">
      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Back Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/blog" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-8 md:p-12"
          >
            
            {/* Category & Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                <Tag className="w-4 h-4 mr-1" />
                {postData.category}
              </span>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {postData.publishDate}
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {postData.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent mb-6 leading-tight">
              {postData.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {postData.excerpt}
            </p>

            {/* Share Button */}
            <div className="flex justify-end mb-12 relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                className="flex items-center px-4 py-2 rounded-lg bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 hover:bg-purple-100/30 dark:hover:bg-purple-900/30 text-gray-700 dark:text-gray-300 transition-colors duration-300"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </motion.button>
              
              {/* Share confirmation message */}
              {shareMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-12 right-0 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-2 rounded-lg text-sm font-medium shadow-lg backdrop-blur-lg border border-green-200 dark:border-green-700/30"
                >
                  {shareMessage}
                </motion.div>
              )}
            </div>

            {/* Content Placeholder */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              {/* Opening Paragraphs */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                A lot of people have asked me about my experience at BlackRock, so I thought it would be the perfect topic for my first blog post.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                For those unfamiliar, BlackRock is the largest asset manager in the world, with around 12.5 trillion dollars in assets under management. Beyond that, their technology platform Aladdin supports clients representing about 23.5 trillion dollars. Aladdin is an end-to-end fintech solution used for everything from risk analysis, portfolio management and trade execution to post-trade operations, accounting, and even climate risk assessments.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Getting the chance to work with a company of this scale gave me valuable insights, skills, and connections within the industry. But before diving into what I learned, let's go back to how it all began.
              </p>

              {/* First Image - Right Aligned */}
              <div className="float-right ml-8 mb-6 w-80 max-w-sm">
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 border border-white/20 dark:border-gray-700/20 backdrop-blur-lg flex items-center justify-center shadow-lg">
                  <Image
                    src="/images/blackrock_food.jpg"
                    alt="BlackRock team lunch or food event"
                    fill
                    className="object-cover object-center"
                    quality={85}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center italic">
                  Team lunch at BlackRock Edinburgh
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                It started with a spring week. I applied to the Aladdin spring week in November 2023 and made it through the process step by step. There were online assessments, HireVue interviews, and a final two-hour interview with two team members testing my skills, knowledge, and way of thinking. From my experience, spring weeks look less for polished expertise and more for curiosity, willingness to learn, and the ability to tackle challenges with the right mindset.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                In my case, I believe behaviour mattered just as much as technical ability. Being approachable, sociable, and respectful can really set you apart. Shortly after my final interview, I received the news that I had been accepted.
              </p>

              <div className="clear-both"></div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The spring week took place in April 2024, and it was a wonderful experience. I was based in the Edinburgh office, which I must say has one of the best cultures I have ever seen. Everyone was welcoming, kind and eager to share their knowledge. The team put an incredible amount of time and resources into training us, and you end up learning so much in such a short time.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Throughout the week, we explored Aladdin and its role within the industry. The programme ended with an assessment, which in my case was an elevator pitch where I had to sell Aladdin to a group. It was a great way to test how much we had absorbed, while also pushing us to develop our communication and presentation skills.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                Coming from a non-finance background, I found this particularly valuable. Not only did I deepen my understanding of fintech, but I also realised that you do not need to have studied finance to break into the sector. These firms give you the tools to learn quickly, and they truly invest in helping you grow.
              </p>

              {/* Second Image - Full Width Center */}
              <div className="mb-12">
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border border-white/20 dark:border-gray-700/20 backdrop-blur-lg shadow-lg">
                  <Image
                    src="/images/logo_blackrock.png"
                    alt="BlackRock Logo"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-bottom rounded-xl"
                    quality={85}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center italic">
                  BlackRock - The world's largest asset manager
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                After completing my spring week, I was contacted two months later with an offer to return for a summer internship in the same team. I joined the Aladdin Client Business team, which focuses on supporting clients as they navigate the platform. Given how complex Aladdin is, the business teams play a crucial role. The group is led by Tarek Chouman, former CEO of eFront, which is now part of BlackRock serving private markets. During my internship I had the chance to speak with him, and his perspective was incredibly insightful.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The internship lasted two months, and I was placed in the Experience team, which provides tailored attention and solutions for clients. I rotated through five different sections, each focused on a distinct aspect of the platform, and learned about the tools and workflows used in each. While I cannot go into detail due to privacy and NDAs, I can say that the learning curve was enormous. It felt like taking a CFA exam every day, and I loved it. Pushing myself to absorb so much knowledge in such a short time was challenging but rewarding.
              </p>

              {/* Third Image - Left Aligned */}
              <div className="float-left mr-8 mb-6 w-80 max-w-sm">
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 border border-white/20 dark:border-gray-700/20 backdrop-blur-lg flex items-center justify-center shadow-lg">
                  <Image
                    src="/images/lib_blackrock.jpg"
                    alt="BlackRock library or office interior"
                    fill
                    className="object-cover object-center"
                    quality={85}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center italic">
                  BlackRock Edinburgh office library
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Beyond the technical side, the cultural experience in the Edinburgh office stood out the most. While London and New York are seen as the competitive headquarters, Edinburgh has been growing rapidly in recent years and is now very competitive in its own right. Yet what impressed me most is that this growth has not changed the culture. People remain approachable, kind, and generous with their time. You could easily schedule a coffee chat with senior managing directors, I even had the chance to meet the CFO of Europe, which was fascinating. Networking is strongly encouraged at BlackRock, and by meeting new people every day I discovered new opportunities, projects, and roles.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                One of the highlights of my internship was starting an AI project on the business side, aimed at improving the work of project managers. This project connected me with engineering teams not only in Edinburgh but also in San Francisco, Atlanta, India, and Budapest. It taught me the importance of being open, humble, and willing to approach others to learn from their experience.
              </p>

              <div className="clear-both"></div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My daily life followed a structured rhythm. I usually arrived at the office around 8am, even though the official start was 9, to review messages, emails, and plan my day. From there, the pace was intense. I often had five to seven meetings a day, ranging from trainings to coffee chats, and in between I joined talks from senior leaders like Larry Fink and Rachel Lord. By 5pm I stayed a little longer to wrap up my notes and finish deliverables, making sure I used working hours for learning and networking. Social life was also a big part of the experience, with after-work drinks and events hosted by different societies within the company.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Overall, the internship was a success. I gained practical knowledge of the Aladdin platform and financial concepts such as equities, derivatives, fixed income, FX, alternatives, and private markets. Just as importantly, I strengthened my skills in communication, presentation, and collaboration. More than anything, I came out of the experience inspired by the people and culture at BlackRock.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">

                This experience has been one of the most formative in shaping my career direction. Before joining, I was curious about how finance and technology intersect, but I left with a much clearer sense of purpose. Working so closely with clients, engineers, and project managers showed me how powerful it can be to bridge the technical and business sides of an organization. It confirmed my interest in pursuing a career where I can sit at that intersection, combining analytical skills with strategic thinking, and technology with client impact. More broadly, it gave me the confidence to keep pushing myself into environments that are challenging, fast-moving, and collaborative.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For anyone considering a similar opportunity, my advice is simple: stay curious, stay open, and don’t be afraid to reach out. The most rewarding moments of my internship came from conversations I wasn’t required to have, coffee chats, informal check-ins, or just asking questions that sparked deeper discussions. Large firms can feel overwhelming at first, but if you take the initiative to connect with people, you’ll find that most are generous with their time and eager to share their knowledge. Beyond technical learning, it’s these human connections that will shape your experience the most.
              </p>

            </div>

          </motion.article>

        </div>
      </div>
    </PageBackground>
  )
}
