import { useCallback, useEffect, useRef, useState } from 'react'
import GradientText from '../components/GradientText'

const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_UNIQUE_ID'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | progress | done | error
  const [progress, setProgress] = useState(0)
  const progressIntervalRef = useRef(null)
  const resetTimeoutRef = useRef(null)
  const formRef = useRef(null)

  const clearTimers = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
      progressIntervalRef.current = null
    }
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current)
      resetTimeoutRef.current = null
    }
  }, [])

  useEffect(() => () => clearTimers(), [clearTimers])

  const relayToLiquidEther = useCallback((type, nativeEvent) => {
    if (typeof document === 'undefined') return
    const etherContainer = document.querySelector('.liquid-ether-container')
    if (!etherContainer) return

    const point = nativeEvent?.touches?.[0] || nativeEvent?.changedTouches?.[0] || nativeEvent
    if (!point) return

    const eventInit = {
      bubbles: true,
      cancelable: false,
      clientX: point.clientX,
      clientY: point.clientY,
      screenX: point.screenX,
      screenY: point.screenY,
      ctrlKey: nativeEvent.ctrlKey,
      shiftKey: nativeEvent.shiftKey,
      altKey: nativeEvent.altKey,
      metaKey: nativeEvent.metaKey,
      view: typeof window !== 'undefined' ? window : undefined,
    }

    etherContainer.dispatchEvent(new MouseEvent(type, eventInit))
  }, [])

  const handleMouseMove = useCallback(
    event => {
      relayToLiquidEther('mousemove', event)
    },
    [relayToLiquidEther],
  )

  const handleMouseEnter = useCallback(
    event => {
      relayToLiquidEther('mouseenter', event)
    },
    [relayToLiquidEther],
  )

  const handleMouseLeave = useCallback(
    event => {
      relayToLiquidEther('mouseleave', event)
    },
    [relayToLiquidEther],
  )

  const handleTouchStart = useCallback(
    event => {
      relayToLiquidEther('mouseenter', event)
    },
    [relayToLiquidEther],
  )

  const handleTouchMove = useCallback(
    event => {
      relayToLiquidEther('mousemove', event)
    },
    [relayToLiquidEther],
  )

  const handleTouchEnd = useCallback(
    event => {
      relayToLiquidEther('mouseleave', event)
    },
    [relayToLiquidEther],
  )

  const startProgress = useCallback(() => {
    clearTimers()
    setProgress(0)
    progressIntervalRef.current = window.setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          return prev
        }
        const increment = 5 + Math.random() * 12
        return Math.min(prev + increment, 95)
      })
    }, 160)
  }, [clearTimers])

  const finalizeSuccess = useCallback(() => {
    clearTimers()
    setProgress(100)
    setStatus('done')
    resetTimeoutRef.current = window.setTimeout(() => {
      setStatus('idle')
      setProgress(0)
    }, 2600)
  }, [clearTimers])

  const finalizeError = useCallback(() => {
    clearTimers()
    setStatus('error')
    setProgress(0)
    resetTimeoutRef.current = window.setTimeout(() => {
      setStatus('idle')
    }, 2200)
  }, [clearTimers])

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()
      if (status === 'progress') return

      setStatus('progress')
      startProgress()

      const form = event.currentTarget
      const formData = new FormData(form)

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        form.reset()
        finalizeSuccess()
      } catch (error) {
        console.error('Contact form submission failed', error)
        finalizeError()
      }
    },
    [finalizeError, finalizeSuccess, startProgress, status],
  )

  const buttonLabel = (() => {
    if (status === 'progress') {
      return `Connecting ${Math.round(progress)}%`
    }
    if (status === 'done') {
      return 'Connected!'
    }
    if (status === 'error') {
      return 'Retry'
    }
    return 'Click to Connect...'
  })()

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16 text-white sm:py-20">
      <div
        className="relative pointer-events-auto w-full max-w-3xl space-y-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_28px_70px_rgba(53,32,91,0.5)] backdrop-blur-2xl sm:px-10 sm:py-12"
        onMouseMoveCapture={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStartCapture={handleTouchStart}
        onTouchMoveCapture={handleTouchMove}
        onTouchEndCapture={handleTouchEnd}
      >
        <div className="absolute right-6 top-6 flex items-center gap-2 text-xs text-white/60 sm:right-8 sm:top-7 sm:text-sm">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
          </span>
          <span className="font-medium">目前状态: 沉迷折腾</span>
        </div>

        <div className="space-y-4 text-left">
          <GradientText className="block text-3xl font-semibold sm:text-4xl" showBorder={false}>
            Hey Bro 👋
          </GradientText>
          <p className="max-w-2xl text-sm text-white/70 sm:text-base">
            Glad you found your way here. Whether it's about code, life, or a new spark of inspiration, feel free to start a chat.
          </p>
        </div>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="space-y-5 text-left"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name / handle"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white/90 placeholder:text-white/50 transition focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Email
            </label>
            <input
              id="email"
              name="_replyto"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white/90 placeholder:text-white/50 transition focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              placeholder="Got a cool idea? A new hiking trail? Or just want to grab coffee?"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90 placeholder:text-white/50 transition focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            />
          </div>

          <button
            type="submit"
            className="relative w-full overflow-hidden rounded-full border border-violet-500 bg-violet-500/20 px-5 py-3 text-base font-semibold text-violet-100 shadow-[0_0_26px_rgba(139,92,246,0.5)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:cursor-not-allowed disabled:opacity-75"
            disabled={status === 'progress'}
          >
            <span
              className="absolute inset-0 -z-10 overflow-hidden rounded-full"
              aria-hidden="true"
            >
              <span
                className="absolute inset-y-0 left-0 bg-violet-500/40 transition-[width] duration-150 ease-out"
                style={{ width: status === 'progress' || status === 'done' ? `${progress}%` : '0%' }}
              />
            </span>
            <span className="relative flex items-center justify-center gap-2">
              <span aria-live="polite" aria-atomic="true">
                {buttonLabel}
              </span>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
