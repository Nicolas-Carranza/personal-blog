import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nicolas Carranza</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Computer Science & Management student passionate about AI, fintech, 
              and building innovative solutions through technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Nicolas-Carranza" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/nicolas-carranza-arauna-4029a7252" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:nicolas.carranza.work@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Posts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Latest Posts</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/1" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Madrid to St Andrews
                </Link>
              </li>
              <li>
                <Link href="/blog/2" className="text-gray-400 hover:text-white transition-colors duration-200">
                  BlackRock Experience
                </Link>
              </li>
              <li>
                <Link href="/blog/3" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Highland Adventures
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  View All Posts →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> by Nicolas Carranza © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
