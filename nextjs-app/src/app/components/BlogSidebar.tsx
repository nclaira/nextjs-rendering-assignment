// Client component for blog sidebar with search and categories
'use client'

import { useState } from 'react'

// Mock categories data
const categories = [
  { id: 1, name: 'Technology', count: 12 },
  { id: 2, name: 'Lifestyle', count: 8 },
  { id: 3, name: 'Education', count: 5 },
  { id: 4, name: 'Travel', count: 7 },
  { id: 5, name: 'Food', count: 6 },
]

export default function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter categories based on search (CSR)
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Search Categories
        </h3>
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Client-side search using CSR
        </p>
      </div>

      {/* Categories List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Categories
        </h3>
        <div className="space-y-2">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-gray-700 dark:text-gray-300">
                {category.name}
              </span>
              <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
        <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
          Blog Features
        </h4>
        <ul className="text-sm text-emerald-700 dark:text-emerald-400 space-y-1">
          <li>• SSG for blog list</li>
          <li>• ISR for blog details</li>
          <li>• CSR for search</li>
        </ul>
      </div>
    </div>
  )
}