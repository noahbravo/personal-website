import { useState, useEffect } from 'react'

export function useUserAgent() {
  const [userAgent, setUserAgent] = useState('')

  useEffect(() => {
    if (navigator) {
      setUserAgent(navigator.userAgent)
    }
  }, [userAgent])

  return userAgent
}
