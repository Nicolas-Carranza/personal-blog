export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h1>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              Welcome to my personal space on the internet! I'm a passionate developer who loves 
              creating meaningful digital experiences and sharing my journey through technology.
            </p>
            
            <h2>My Story</h2>
            <p>
              Replace this with your actual story - how you got into development, your background, 
              what drives you, and what you're passionate about.
            </p>
            
            <h2>What I Do</h2>
            <ul>
              <li>Full-stack web development</li>
              <li>Writing and sharing knowledge</li>
              <li>Open source contributions</li>
              <li>Continuous learning and growth</li>
            </ul>
            
            <h2>Skills & Technologies</h2>
            <p>
              List your technical skills, programming languages, frameworks, and tools you work with.
            </p>
            
            <h2>When I'm Not Coding</h2>
            <p>
              Share some personal interests and hobbies that make you more relatable and human.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
