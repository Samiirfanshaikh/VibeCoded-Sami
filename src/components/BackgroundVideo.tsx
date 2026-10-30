import React, { useEffect, useRef, useState } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4'
const SENSITIVITY = 0.8

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const isSeekingRef = useRef(false)
  const targetTimeRef = useRef(0)
  const prevXRef = useRef<number | null>(null)
  const prevTouchXRef = useRef<number | null>(null)
  const [videoError, setVideoError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Handle seeking updates safely
  const queueSeek = (newTarget: number) => {
    const video = videoRef.current
    if (!video || !video.duration || isNaN(video.duration)) return

    // Clamp target between 0 and video.duration
    targetTimeRef.current = Math.min(Math.max(newTarget, 0), video.duration)

    if (!isSeekingRef.current) {
      isSeekingRef.current = true
      try {
        video.currentTime = targetTimeRef.current
      } catch (err) {
        console.error('Error setting video.currentTime:', err)
        isSeekingRef.current = false
      }
    }
  }

  // onSeeked callback prevents seek-flooding
  const handleSeeked = () => {
    const video = videoRef.current
    if (!video || !video.duration) {
      isSeekingRef.current = false
      return
    }

    // If target has drifted while previous seek was ongoing, seek to latest target
    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.04) {
      try {
        video.currentTime = targetTimeRef.current
      } catch {
        isSeekingRef.current = false
      }
    } else {
      isSeekingRef.current = false
    }
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (video) {
      video.pause()
      targetTimeRef.current = video.currentTime || 0
      setIsLoaded(true)
    }
  }

  const handleError = () => {
    setVideoError(true)
  }

  // Mouse scrub handler on window
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX
        return
      }

      const delta = e.clientX - prevXRef.current
      prevXRef.current = e.clientX

      const video = videoRef.current
      if (!video || !video.duration || isNaN(video.duration)) return

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration
      queueSeek(targetTimeRef.current + timeOffset)
    }

    const handleMouseLeave = () => {
      prevXRef.current = null
    }

    // Touch scrub handler for mobile and tablets
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        prevTouchXRef.current = e.touches[0].clientX
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return
      const currentX = e.touches[0].clientX
      if (prevTouchXRef.current === null) {
        prevTouchXRef.current = currentX
        return
      }

      const delta = currentX - prevTouchXRef.current
      prevTouchXRef.current = currentX

      const video = videoRef.current
      if (!video || !video.duration || isNaN(video.duration)) return

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration
      queueSeek(targetTimeRef.current + timeOffset)
    }

    const handleTouchEnd = () => {
      prevTouchXRef.current = null
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('touchcancel', handleTouchEnd)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [])

  return (
    <>
      {/* Dark fallback background if video fails to load or during initial fetch */}
      <div
        className="fixed inset-0 z-0 bg-[#070709] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 40%, rgba(30, 27, 46, 0.6) 0%, rgba(7, 7, 9, 0.95) 75%)',
        }}
        aria-hidden="true"
      />

      {/* Cinematic Mouse-Scrub Video */}
      {!videoError && (
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onSeeked={handleSeeked}
          onError={handleError}
          className={`fixed inset-0 z-0 object-cover pointer-events-none transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectPosition: '70% center',
            width: '100vw',
            height: '100vh',
          }}
        />
      )}

      {/* Subtle cinematic overlays for enhanced contrast and readability */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/35 to-black/50"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-radial from-transparent via-black/20 to-black/60"
        aria-hidden="true"
      />
    </>
  )
}
