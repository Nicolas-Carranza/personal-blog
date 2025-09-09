import Link from 'next/link'

const FeaturedPosts = () => {
  // This would typically come from your CMS or markdown files
  const featuredPosts = [
    {
      id: 1,
      title: "My Journey into Full-Stack Development",
      excerpt: "How I transitioned from a different field into software development and the lessons I learned along the way.",
      date: "2024-03-15",
      category: "Career",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building My First Production App",
      excerpt: "The challenges, victories, and key takeaways from deploying my first real-world application.",
      date: "2024-03-10",
      category: "Projects",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "2024: Goals and Aspirations",
      excerpt: "Setting ambitious but achievable goals for the new year and tracking my progress.",
      date: "2024-01-01",
      category: "Life",
      readTime: "3 min read"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Recent thoughts, experiences, and insights from my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article 
              key={post.id} 
              className="card p-6 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <time className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="btn-primary"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
