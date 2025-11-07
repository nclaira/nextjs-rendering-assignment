import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Rendering Assignment',
  description: 'Demonstrating CSR, SSR, SSG, and ISR in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <div className="flex flex-col min-h-screen">
          {/* Header with Navigation */}
          <header className="bg-blue-600 text-white p-4 shadow-lg">
            <nav className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">Next.js Rendering Demo</h1>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:underline font-medium">Home</a></li>
                <li><a href="/about" className="hover:underline font-medium">About</a></li>
                <li><a href="/blog" className="hover:underline font-medium">Blog</a></li>
              </ul>
            </nav>
          </header>

          {/* Main Content Area */}
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2024 Next.js Rendering Assignment. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}