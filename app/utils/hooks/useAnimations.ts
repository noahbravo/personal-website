import { useEffect, useCallback, useRef } from 'react'
import gsap from 'gsap'
import {
  animateBgColorOnScroll,
  animateAbout,
  animateStack,
  animateInspiration,
  animateContact,
  animateSmoothScroll,
  animateMobileMenu
} from '~/utils/animations'
import { useIsMounted } from './useIsMounted'
import { useWindowSize } from './useWindowSize'
import { useScreenWidths } from './useScreenWidths'

type SmoothScrollReturnType = {
  openMenu: () => void
  closeMenu: () => void
}

export function useAnimations() {
  const ScrollTrigger = useRef(null)
  const ScrollToPlugin = useRef(null)
  const Draggable = useRef(null)

  const isMounted = useIsMounted()
  const { width } = useWindowSize()
  const screenWidths = useScreenWidths()

  useEffect(() => {
    ScrollTrigger.current = require('gsap/ScrollTrigger').ScrollTrigger
    ScrollToPlugin.current = require('gsap/ScrollToPlugin').ScrollToPlugin
    Draggable.current = require('gsap/Draggable').Draggable

    const plugins = [ScrollTrigger, ScrollToPlugin, Draggable]

    plugins.forEach((plugin) => {
      if (plugin?.current) {
        gsap.registerPlugin(plugin.current)
      }
    })
  }, [isMounted])

  const animations = {
    animateSmoothScroll: useCallback(() => {
      if (isMounted) {
        animateSmoothScroll(gsap)
      }
    }, [isMounted]),
    animateMobileMenu: useCallback((): SmoothScrollReturnType | undefined => {
      if (isMounted) {
        return animateMobileMenu(gsap)
      }
    }, [isMounted]),
    animateBgColorOnScroll: useCallback(
      (container: HTMLElement) => {
        if (isMounted) {
          animateBgColorOnScroll(gsap, container)
        }
      },
      [isMounted]
    ),
    animateAbout: useCallback(() => {
      if (isMounted) {
        animateAbout(gsap, screenWidths)
      }
    }, [isMounted, screenWidths]),
    animateStack: useCallback(() => {
      if (isMounted) {
        animateStack(gsap)
      }
    }, [isMounted]),
    animateInspiration: useCallback(
      (container: HTMLElement) => {
        if (isMounted && Draggable.current) {
          animateInspiration(gsap, container, width, screenWidths, Draggable.current)
        }
      },
      [isMounted, width, screenWidths]
    ),
    animateContact: useCallback(() => {
      if (isMounted) {
        animateContact(gsap)
      }
    }, [isMounted])
  }

  return animations
}
