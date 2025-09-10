const AboutSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Welcome to my corner of the internet! I&apos;m a passionate developer who loves creating
            meaningful digital experiences and sharing my journey through code, writing, and continuous learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                💻 Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building modern web applications with cutting-edge technologies
                and best practices.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                ✍️ Writer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sharing insights, experiences, and knowledge through 
                thoughtful blog posts and articles.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                🎯 Achiever
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously pushing boundaries and celebrating milestones
                in both personal and professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
