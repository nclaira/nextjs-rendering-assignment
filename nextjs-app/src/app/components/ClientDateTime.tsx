// CSR (Client-Side Rendering) Component
// This component shows current date and time that updates every second
// It MUST be a client component because it uses useState and useEffect

'use client'

import { useState, useEffect } from 'react'

export default function ClientDateTime() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="text-center">
      <div className="text-4xl font-mono font-bold mb-2 text-primary-600 dark:text-primary-400">
        {formatTime(currentTime)}
      </div>
      <div className="text-lg text-gray-600 dark:text-gray-400">
        {formatDate(currentTime)}
      </div>
    </div>
  )
}