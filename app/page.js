'use client'

import { useEffect, useState } from 'react'
import './styles.css'

// ═══════════════════════════════════════
// НАСТРОЙКИ
// ═══════════════════════════════════════
const TARGET_URL = https://tone.affomelody.com/pRQbyl  // ← КУДА РЕДИРЕКТИТЬ
const AUTO_REDIRECT_DELAY = 5            // ← секунд до авто-редиректа (0 = выключить)
// ═══════════════════════════════════════

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
          window.location.href = TARGET_URL
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRedirect = () => {
    setRedirecting(true)
    window.location.href = TARGET_URL
  }

  return (
    <main className="container">
      <div className="card">
        <div className="spinner" />
        
        <h1>Почти готово</h1>
        <p>
          Вы будете перенаправлены через{' '}
          <span className="timer">{seconds}</span> сек
        </p>

        <button 
          onClick={handleRedirect} 
          disabled={redirecting}
          className="btn"
        >
          {redirecting ? 'Переход...' : 'Перейти сейчас →'}
        </button>

        <p className="footer">
          Если ничего не происходит, <a href={TARGET_URL}>нажмите здесь</a>
        </p>
      </div>
    </main>
  )
}
