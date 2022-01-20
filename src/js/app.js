import 'normalize.css/normalize.css'
import '../sass/style.sass'
import createAlbums from './albums'
import menuActions from './menu'
import {
  animatePreloader,
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
    animatePreloader()

    setTimeout(() => {
      body.classList.remove(isLoadingClassName)
      animateBgColorOnScroll()
      scrollTriggerAnimations()
      ghostAnimation()
      createAlbums()
      albumAnimations()
    }, 800)
  }
}

onDocumentReady(function () {
  smoothAnchorScroll()
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
