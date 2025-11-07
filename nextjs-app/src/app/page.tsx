// import ClientDateTime from './components/ClientDateTime'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12 bg-amber-500 p-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover amazing content about web development and design
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Current Time</h2>
        <ClientDateTime />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Latest Articles</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Explore our collection of articles on modern web development.
          </p>
          <a 
            href="/blog" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            View all articles
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Learn more about our mission and the team behind this blog.
          </p>
          <a 
            href="/about" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            Read about us
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}