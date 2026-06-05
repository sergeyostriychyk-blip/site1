'use client'

import { useEffect, useState } from 'react'
import './styles.css'

const TARGET_URL = 'https://example.com'
const AUTO_REDIRECT_DELAY = 5

export default function Home() {
  const [seconds, setSeconds] = useState(AUTO_REDIRECT_DELAY)
  const [redirecting, setRedirecting] = useState(false)

  useEffect(() => {
    if (AUTO_REDIRECT_DELAY <= 0) return

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setRedirecting(true)
          if (typeof window !== 'undefined') {
            window.location.href = TARGET_URL
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRedirect = () => {
    setRedirecting(true)
    if (typeof window !== 'undefined') {
      window.location.href = TARGET_URL
    }
  }

  return (
    <>
      {/* ═══ ВИДЕО ФОН ═══ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <main className="container">
        <div className="card">
          <div className="spinner" />

          <h1>Almost there</h1>
          <p>
            Redirecting in{' '}
            <span className="timer">{seconds}</span>s
          </p>

          <button
            onClick={handleRedirect}
            disabled={redirecting}
            className="btn"
          >
            {redirecting ? 'Redirecting...' : 'Go now →'}
          </button>

          <p className="footer">
            If nothing happens, <a href={TARGET_URL}>click here</a>
          </p>
        </div>
      </main>
    </>
  )
}