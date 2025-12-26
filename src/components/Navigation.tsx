'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, User, Trophy, BookOpen, Mail } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/achievements', label: 'Achievements', icon: Trophy },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#faf8f5]/90 dark:bg-gray-900/5 backdrop-blur-md border-b border-[#e8dfd0]/80 dark:border-gray-700/10 shadow-sm' 
        : 'bg-[#faf8f5]/70 dark:bg-gray-900/15 backdrop-blur-lg border-b border-[#e8dfd0]/60 dark:border-gray-700/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold transition-colors duration-200 cursor-pointer hover:text-cyan-600 dark:hover:text-blue-400 ${
              scrolled
                ? 'text-[#2c251c] dark:text-gray-200'
                : 'text-[#2c251c] dark:text-white'
            }`}>
              Nicolás Carranza
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#f0ebe3] dark:bg-gray-800/30 text-[#2c251c] dark:text-white border border-[#e8dfd0] dark:border-gray-700/30 shadow-sm'
                          : 'text-[#5a4d3d] dark:text-gray-400 hover:bg-[#f5f0e9] dark:hover:bg-gray-800/20 hover:text-[#2c251c] dark:hover:text-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-800/20 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-300 dark:focus:ring-white/30 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/20 backdrop-blur-md border-t border-slate-200 dark:border-gray-700/20 mt-2 rounded-b-lg shadow-lg">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-slate-100 dark:bg-gray-800/30 text-slate-900 dark:text-white border border-slate-200 dark:border-gray-700/30'
                        : 'text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-800/20 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
