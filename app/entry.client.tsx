import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrate } from 'react-dom'

const hydrateRoot = () => {
  startTransition(() => {
    hydrate(
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
      document
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrateRoot)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrateRoot, 1)
}
