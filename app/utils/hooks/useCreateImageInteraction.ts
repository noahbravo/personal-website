import { useCallback } from 'react'
import { createImageInteraction } from '../canvas-image-interaction'
import { useIsMounted } from './useIsMounted'
import { useWindowSize } from './useWindowSize'
import { useUserAgent } from './useUserAgent'
import profileBw from '~/assets/img/profile-bw.jpg'
import profileRgba from '~/assets/img/profile-rgba.jpg'

const imageInteractionSettings = {
  imageURL: {
    default: profileBw,
    hovered: profileRgba
  },
  totalParticles: 1500,
  mouseRange: 100,
  particlesConfig: {
    jumpToRandomPosition: true,
    fill: true,
    shape: 'square',
    radius: 2
  }
}

function checkIfFirefoxOrSafari(userAgent: string) {
  const formattedUserAgent = userAgent.toLowerCase()
  const isFirefoxOrSafari = ['firefox', 'Safari'].some(
    (browser) => formattedUserAgent.indexOf(browser) > -1
  )
  return isFirefoxOrSafari
}

export function useCreateImageInteraction() {
  const isMounted = useIsMounted()
  const { width } = useWindowSize()
  const userAgent = useUserAgent()
  const isFirefoxOrSafari = checkIfFirefoxOrSafari(userAgent)

  const createImageInteractionCb = useCallback(() => {
    if (isMounted && width >= 1280 && !isFirefoxOrSafari) {
      createImageInteraction([imageInteractionSettings])
    }
  }, [isFirefoxOrSafari, width, isMounted])

  return { createImageInteraction: createImageInteractionCb }
}
