import { useState, useEffect } from 'react'

export function useOnPageLoad() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const onPageLoad = () => {
      setLoaded(true)
      document.body.style.setProperty('overflow-y', 'auto')
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

  return loaded
}
