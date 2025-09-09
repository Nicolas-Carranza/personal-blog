export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Nicolas Carranza
          </h1>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              ¡Hola! I'm Nicolas Carranza Arauna, a Computer Science & Management Science student 
              at the University of St Andrews in Scotland, originally from Madrid, Spain. I'm 
              passionate about AI, fintech, and building innovative solutions that make a real impact.
            </p>
            
            <h2>My Journey</h2>
            <p>
              Currently pursuing a Bachelor of Science (Honors) degree with a focus on Computer Science 
              and Management Science, I've been recognized on the Dean's List for three consecutive years 
              for outstanding academic performance. My journey in tech started early, and I've since 
              gained valuable experience through internships at prestigious companies like BlackRock, 
              DCycle, and the University of St Andrews.
            </p>
            
            <h2>What I Do</h2>
            <ul>
              <li><strong>Full-Stack Development:</strong> Proficient in JavaScript, Python, Next.js, React, and more</li>
              <li><strong>AI & Machine Learning:</strong> Working on innovative projects including Unhatched.ai</li>
              <li><strong>Quantitative Analysis:</strong> Developing trading algorithms and financial models</li>
              <li><strong>Leadership:</strong> President of Spanish Society, Events Director at Fintech Society</li>
              <li><strong>Entrepreneurship:</strong> Founder and CPO of Unhatched, an AI-powered startup</li>
            </ul>
            
            <h2>Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose">
              <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400">Languages</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Python, JavaScript, Java, SQL, C</p>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400">Frameworks</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Next.js, React, Express.js, Node.js</p>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400">Cloud & Tools</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">AWS, Docker, MongoDB, PostgreSQL</p>
              </div>
            </div>
            
            <h2>Beyond Coding</h2>
            <p>
              When I'm not coding, you'll find me leading student societies, working on quantitative trading 
              strategies, or exploring the beautiful landscapes of Scotland. I'm fluent in Spanish and English, 
              with IGCSE level French and elementary Japanese. I have a particular interest in financial 
              markets, AI research, and sustainable technology solutions.
            </p>
            
            <p>
              I believe in the power of technology to solve real-world problems and am always excited to 
              collaborate on projects that make a meaningful impact. Whether it's through my startup 
              Unhatched, my work in quantitative analysis, or my leadership in student organizations, 
              I strive to bring innovation and excellence to everything I do.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
