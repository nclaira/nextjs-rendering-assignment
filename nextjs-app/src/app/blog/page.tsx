async function getBlogPosts() {

  await new Promise(resolve => setTimeout(resolve, 500))
  
  return [
    {
      id: 1,
      title: 'Understanding Next.js Rendering Techniques',
      body: 'A comprehensive guide to SSR, SSG, ISR, and CSR in Next.js...',
      userId: 1,
    },
    {
      id: 2,
      title: 'Mastering React Hooks',
      body: 'Deep dive into useState, useEffect, and custom hooks...',
      userId: 1,
    },
    {
      id: 3,
      title: 'Tailwind CSS Best Practices',
      body: 'Learn how to use Tailwind CSS effectively in your projects...',
      userId: 1,
    },
    {
      id: 4,
      title: 'TypeScript for React Developers',
      body: 'Type-safe development with React and TypeScript...',
      userId: 1,
    },
    {
      id: 5,
      title: 'Building Accessible Web Applications',
      body: 'Creating inclusive web experiences for all users...',
      userId: 1,
    },
  ]
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog Posts
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explore our latest articles and tutorials
        </p>
      </div>

      {/* Blog Posts List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {post.body}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Post ID: {post.id}
                </span>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No blog posts found.
          </p>
        </div>
      )}
    </div>
  )
}