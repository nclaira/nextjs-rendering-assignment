import BlogSidebar from '../components/BlogSidebar'

// This layout wraps all pages in the /blog route
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content area - where blog pages will be injected */}
        <div className="flex-grow">
          {children}
        </div>
        

        <div className="lg:w-80 flex-shrink-0">
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}