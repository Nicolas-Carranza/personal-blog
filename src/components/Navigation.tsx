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
        ? 'bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm border-b border-white/10 dark:border-gray-700/10' 
        : 'bg-white/15 dark:bg-gray-900/15 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold transition-colors duration-200 ${
              scrolled
                ? 'text-gray-800 dark:text-gray-200 drop-shadow-sm'
                : 'text-gray-900 dark:text-white drop-shadow-lg'
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
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-white/20 dark:bg-gray-800/30 text-gray-900 dark:text-white backdrop-blur-sm border border-white/30 dark:border-gray-700/30'
                          : scrolled
                          ? 'text-gray-600 dark:text-gray-400 hover:bg-white/10 dark:hover:bg-gray-800/20 hover:text-gray-800 dark:hover:text-gray-200'
                          : 'text-gray-900 dark:text-white hover:bg-white/10 dark:hover:bg-gray-800/20 drop-shadow-lg'
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-800/20 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/30 backdrop-blur-sm transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border-t border-white/20 dark:border-gray-700/20 mt-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 dark:bg-gray-800/30 text-gray-900 dark:text-white backdrop-blur-sm border border-white/30 dark:border-gray-700/30'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-800/20 hover:text-gray-900 dark:hover:text-white'
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
