import 'normalize.css/normalize.css'
import '../sass/style.sass'
import createAlbums from './albums'
import menuActions from './menu'
import {
  smoothScroll,
  animateBgColorOnScroll,
  scrollTriggerAnimations,
  albumAnimations,
  ghostAnimation
} from './animations'
import { importAll, onDocumentReady, smoothAnchorScroll } from './functions'
import { createImageInteraction } from './canvas-image-interaction'

// Import all media from public
importAll(
  require.context(
    '../../public',
    true,
    /\.(png|svg|jpg|jpe?g|jfif|gif|mov|mp4|ico|webmanifest|xml)$/
  )
)

// preloader
const { body } = document
const isLoadingClassName = 'is-loading'

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    body.classList.remove(isLoadingClassName)
    // smooth scroll for laptop screens up
    if (screen.width >= 1024) {
      smoothScroll('.scroller')
    } else {
      // add functionality otherwise handled by smooth scroll library
      smoothAnchorScroll()
    }

    animateBgColorOnScroll()
    scrollTriggerAnimations()
    ghostAnimation()
    createAlbums()
    albumAnimations()
  }
}

onDocumentReady(function () {
  menuActions()

  // Firefox and Safari fixes
  const userAgentString = navigator.userAgent.toLowerCase()
  const isFirefoxOrSafari = ['firefox', 'Safari'].some(
    (browser) => userAgentString.indexOf(browser) > -1
  )
  if (isFirefoxOrSafari) {
    document.body.classList.add('compatibility-mode')
  }

  // Canvas profile image interaction
  if (screen.width >= 1280 && !isFirefoxOrSafari) {
    createImageInteraction([
      {
        imageURL: {
          default: './images/profile-bw.jpg',
          hovered: './images/profile-rgba.jpg'
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
    ])
  }

  // copyright
  const copy = document.querySelector('.footer__copy')
  copy.innerHTML = `© ${new Date().getFullYear()}`
})
