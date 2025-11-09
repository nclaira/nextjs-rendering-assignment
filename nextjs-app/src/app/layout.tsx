import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import ThemeToggle from './components/ThemeToggle'
import ThemeProvider from './components/ThemeProvider'

// Load Inter font from Google Fonts for better typography
const inter = Inter({ subsets: ['latin'] })

// Metadata for the entire application
export const metadata: Metadata = {
  title: 'Next.js Blog App',
  description: 'A blog application built with Next.js',
}

// Navigation items data
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

// Navigation component (server component)
function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 text-amber-500 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="">
            <Link 
              href="/" 
              className="text-2xl font-bold text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              NextBlog
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle - Client Component */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

// Footer component (server component)
function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 NextBlog. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

// Root layout component - this wraps every page
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ThemeProvider wraps the entire app for dark/light mode */}
        <ThemeProvider>
          {/* Main container with flex column layout */}
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
            {/* Navigation bar at the top - appears on every page */}
            <Navbar />
            
            {/* Main content area that grows to fill available space */}
            {/* This is where individual page content will be injected */}
            <main className="">
              {children}
            </main>
            
            {/* Footer at the bottom - appears on every page */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}






// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'Next.js Rendering Assignment',
//   description: 'Demonstrating CSR, SSR, SSG, and ISR in Next.js',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
//         <div className="flex flex-col min-h-screen">
//           {/* Header with Navigation */}
//           <header className="bg-blue-600 text-white p-4 shadow-lg">
//             <nav className="container mx-auto flex justify-between items-center">
//               <h1 className="text-xl font-bold">Next.js Rendering Demo</h1>
//               <ul className="flex space-x-6">
//                 <li><a href="/" className="hover:underline font-medium">Home</a></li>
//                 <li><a href="/about" className="hover:underline font-medium">About</a></li>
//                 <li><a href="/blog" className="hover:underline font-medium">Blog</a></li>
//               </ul>
//             </nav>
//           </header>

//           {/* Main Content Area */}
//           <main className="flex-grow container mx-auto p-4">
//             {children}
//           </main>

//           {/* Footer */}
//           <footer className="bg-gray-800 text-white p-4 text-center">
//             <p>&copy; 2024 Next.js Rendering Assignment. All rights reserved.</p>
//           </footer>
//         </div>
//       </body>
//     </html>
//   )
// }