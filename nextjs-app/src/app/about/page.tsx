
// This page fetches data on every request

async function getAuthorData() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  
  return {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    website: 'https://johndoe.com',
    company: {
      name: 'Tech Solutions Inc.'
    },
    bio: 'Passionate full-stack developer with 5+ years of experience building web applications. Specialized in React, Next.js, and modern JavaScript frameworks.'
  }
}

export default async function About() {

  // Fetch author data on the server (SSR)
  const author = await getAuthorData()

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Learn more about our author and mission.
        </p>
      </div>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-blue-800 dark:text-blue-300 text-sm">
          <strong>SSR (Server-Side Rendering):</strong> This page is rendered on the server on each request, ensuring fresh data every time.
        </p>
      </div>

    
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {author.name}
            </h2>
            <p className="text-emerald-600 dark:text-emerald-400">
              {author.company.name}
            </p>
          </div>

      
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Email:</strong> {author.email}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Website:</strong> {author.website}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Rendering Technique</h3>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>SSR:</strong> Server-Side Rendering
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This page is rendered on the server on each request
              </p>
            </div>
          </div>

         
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Biography</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {author.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}