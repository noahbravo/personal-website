import 'normalize.css/normalize.css'
import '../sass/style.sass'
import tracksData from './data/tracks.json'
import artistsData from './data/artists.json'
import {
  animatePreloader,
  animateBgColorOnScroll,
  scrollTriggerAnimations,
  albumAnimations,
  ghostAnimation
} from './animations'
import { importAll, onDocumentReady, isInViewport } from './functions'
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
      albumAnimations()
    }, 500)
  }
}

onDocumentReady(function () {
  const { width } = screen
  const desktopUp = width >= 1280
  const userAgentString = navigator.userAgent.toLowerCase()
  const isFirefoxOrSafari = ['firefox', 'Safari'].some(
    (browser) => userAgentString.indexOf(browser) > -1
  )

  // Firefox and Safari fixes
  if (isFirefoxOrSafari) {
    document.body.classList.add('compatibility-mode')
  }

  // smooth scroll to anchor section
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })

  // mobile menu
  const mobileMenuBtn = document.querySelector('.mobile-menu__button')
  const mobileMenuBtnLabel = document.querySelector(
    '.mobile-menu__button--label'
  )
  const labels = ['Close', 'Menu']
  const openClassName = 'menu-is-open'

  mobileMenuBtn.addEventListener('click', function () {
    // toggle button label
    const mobileMenuBtnLabelText = mobileMenuBtnLabel.textContent
    mobileMenuBtnLabel.textContent = labels.find(
      (label) => label !== mobileMenuBtnLabelText
    )

    // toggle body className
    const isActive = body.classList.contains(openClassName)
    const classListAction = isActive ? 'remove' : 'add'
    body.classList[classListAction](openClassName)
  })

  // remove open class from body when menu item is clicked
  const mobileMenuItems = document.querySelectorAll(
    '.mobile-menu__nav__item__link'
  )
  mobileMenuItems.forEach((mobileMenuItem) => {
    mobileMenuItem.addEventListener('click', () => {
      body.classList.remove(openClassName)
    })
  })

  // handle menu active class name
  const menuItems = document.querySelectorAll('.menu__item__link')
  document.addEventListener(
    'scroll',
    function () {
      menuItems.forEach((item) => {
        const section = item.getAttribute('href')
        const elementIsInViewPort = isInViewport(
          document.querySelector(section)
        )
        const activeItem = document.querySelector('.menu__item__link.active')
        if (window.scrollY === 0 && activeItem) {
          activeItem.classList.remove('active')
        }
        if (elementIsInViewPort && !item.classList.contains('active')) {
          if (activeItem) activeItem.classList.remove('active')
          item.classList.add('active')
        }
      })
    },
    {
      passive: true
    }
  )

  // Canvas profile image interaction
  if (desktopUp && !isFirefoxOrSafari) {
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

  // Albums
  const screenWidths = {
    phoneOnly: width < 480,
    phoneUp: width >= 480,
    laptopUp: width >= 1024,
    desktopUp: width >= 1280,
    bigDesktopUp: width >= 1536
  }
  const albumnLimit = 8
  const albumnSection = document.querySelector('.inspiration__album__list')
  tracksData.tracks.forEach(({ album, artists }, index) => {
    if (
      (screenWidths.phoneOnly && index + 1 >= albumnLimit) ||
      !screenWidths.phoneOnly
    ) {
      const { url: albumImgUrl } = album.images[1]
      const { id: artistId, name: artistName } = artists[0]
      const currentArtist = artistsData.artists.find(
        ({ id }) => id === artistId
      )
      const { url: artistImgUrl } = currentArtist.images[2]

      const albumElement = document.createElement('div')
      albumElement.classList.add('inspiration__album')
      const albumImg = document.createElement('img')
      albumImg.src = albumImgUrl
      albumElement.append(albumImg)

      const overlayElement = document.createElement('div')
      overlayElement.classList.add('inspiration__album__overlay')
      albumElement.append(overlayElement)

      const artistElement = document.createElement('div')
      artistElement.classList.add('inspiration__album__artist')

      const artistImg = document.createElement('img')
      artistImg.src = artistImgUrl
      artistImg.classList.add('inspiration__album__artist--img')
      artistElement.append(artistImg)

      const artistText = document.createElement('span')
      artistText.innerText = artistName
      artistText.classList.add('inspiration__album__artist--text')
      artistElement.append(artistText)

      albumElement.append(artistElement)
      albumnSection.append(albumElement)
    }
  })

  // copyright
  const copy = document.querySelector('.footer__copy')
  copy.innerHTML = `© ${new Date().getFullYear()}`
})
