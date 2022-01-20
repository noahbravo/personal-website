import Scrollbar from 'smooth-scrollbar'
import gsap, { TweenLite } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'

// GSAP plugins
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable)

const { width } = screen
const screenWidths = {
  phoneOnly: width < 480,
  phoneUp: width >= 480,
  laptopUp: width >= 1024,
  desktopUp: width >= 1280,
  bigDesktopUp: width >= 1536
}

export function smoothScroll(content, viewport, smoothness) {
  const bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
    damping: 0.07
  })
  ScrollTrigger.scrollerProxy('.scroller', {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value
      }
      return bodyScrollBar.scrollTop
    }
  })
  bodyScrollBar.addListener(ScrollTrigger.update)

  // content = gsap.utils.toArray(content)[0]
  // smoothness = smoothness || 1

  // gsap.set(viewport || content.parentNode, {
  //   overflow: 'hidden',
  //   position: 'fixed',
  //   height: '100%',
  //   width: '100%',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0
  // })
  // gsap.set(content, { overflow: 'visible', width: '100%' })

  // const getProp = gsap.getProperty(content)
  // const setProp = gsap.quickSetter(content, 'y', 'px')
  // const setScroll = ScrollTrigger.getScrollFunc(window)
  // const removeScroll = () => (content.style.overflow = 'visible')
  // const killScrub = (trigger) => {
  //   const scrub = trigger.getTween
  //     ? trigger.getTween()
  //     : gsap.getTweensOf(trigger.animation)[0] // getTween() was added in 3.6.2
  //   scrub && scrub.kill()
  //   trigger.animation.progress(trigger.progress)
  // }
  // let height
  // let isProxyScrolling

  // function refreshHeight() {
  //   height = content.clientHeight
  //   content.style.overflow = 'visible'
  //   document.body.style.height = height + 'px'
  //   return height - document.documentElement.clientHeight
  // }

  // ScrollTrigger.addEventListener('refresh', () => {
  //   removeScroll()
  //   requestAnimationFrame(removeScroll)
  // })
  // ScrollTrigger.defaults({ scroller: content })
  // ScrollTrigger.prototype.update = (p) => p // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

  // ScrollTrigger.scrollerProxy(content, {
  //   scrollTop(value) {
  //     if (arguments.length) {
  //       isProxyScrolling = true // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
  //       setProp(-value)
  //       setScroll(value)
  //       return
  //     }
  //     return -getProp('y')
  //   },
  //   scrollHeight: () => document.body.scrollHeight,
  //   getBoundingClientRect() {
  //     return {
  //       top: 0,
  //       left: 0,
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     }
  //   }
  // })

  // return ScrollTrigger.create({
  //   animation: gsap.fromTo(
  //     content,
  //     { y: 0 },
  //     {
  //       y: () => document.documentElement.clientHeight - height,
  //       ease: 'none',
  //       onUpdate: ScrollTrigger.update
  //     }
  //   ),
  //   scroller: window,
  //   invalidateOnRefresh: true,
  //   start: 0,
  //   end: refreshHeight,
  //   refreshPriority: -999,
  //   scrub: smoothness,
  //   onUpdate: (self) => {
  //     if (isProxyScrolling) {
  //       killScrub(self)
  //       isProxyScrolling = false
  //     }
  //   },
  //   onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
  // })
}

export function animatePreloader() {
  gsap
    .timeline({
      defaults: { duration: 0.2 }
    })
    .to('.preloader', { opacity: 0, y: '-100%' })
    .to('.preloader', { width: 0, height: 0, visibility: 'hidden' })
}

export function animateBgColorOnScroll() {
  const container = document.querySelector('.main')

  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      end: () => `+=${container.offsetHeight - 750}`
    }
  })

  tl.to(
    container,
    {
      duration: 1,
      backgroundColor: '#005C65',
      ease: 'none'
    },
    0
  )
    .to(
      container,
      {
        duration: 1,
        backgroundColor: '#FFAD00',
        ease: 'none'
      },
      1
    )
    .to(
      container,
      {
        duration: 1,
        backgroundColor: '#FF0D00',
        ease: 'none'
      },
      2
    )
}

export function scrollTriggerAnimations() {
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: '.about__profile__container',
      start: 'top center',
      toggleActions: 'play none none reverse'
    }
  })
  aboutTl
    .to(
      '.about--bolt',
      {
        y: screenWidths.phoneOnly ? 20 : 100,
        ease: 'power1.inOut'
      },
      0
    )
    .to(
      '.about__profile__container',
      {
        y: -1,
        ease: 'power1.inOut'
      },
      0
    )

  gsap.to('.about--skull', {
    rotation: 360 * 2.98,
    scale: 1,
    ease: 'power1.inOut',
    duration: 1,
    scrollTrigger: '.about--skull'
  })

  aboutTl.to(
    '.about--skull',
    {
      y: -140,
      ease: 'power1.inOut'
    },
    0
  )

  const stackTl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: '#stack',
      start: 'top center'
      // toggleActions: 'play none none reverse'
    }
  })
  stackTl.to(
    '.stack--skelly',
    {
      y: -180,
      ease: 'power1.inOut'
    },
    0
  )
}

export function albumAnimations() {
  const sectionHeight = document.getElementById('inspiration').offsetHeight
  const handleGetPosition = (value) => `random(-15, ${value})`

  const getAlbumSectionSize = () => {
    if (screenWidths.phoneOnly) {
      return {
        x: handleGetPosition(width / 2),
        y: handleGetPosition(sectionHeight - 150)
      }
    }
    if (screenWidths.bigDesktopUp) {
      return {
        x: handleGetPosition(1280 / 1.4),
        y: handleGetPosition(sectionHeight - 300)
      }
    }
    if (screenWidths.desktopUp) {
      return {
        x: handleGetPosition(width / 1.65),
        y: handleGetPosition(sectionHeight - 300)
      }
    }
    if (screenWidths.laptopUp) {
      return {
        x: handleGetPosition(width / 1.5),
        y: handleGetPosition(sectionHeight - 250)
      }
    }
    if (screenWidths.phoneUp) {
      return {
        x: handleGetPosition(width / 1.75),
        y: handleGetPosition(sectionHeight - 250)
      }
    }
  }

  gsap.to('.inspiration__album', {
    ...getAlbumSectionSize(),
    ease: 'power1.inOut',
    duration: 1,
    // start: 'top',
    repeatRefresh: true,
    scrollTrigger: '.inspiration__album__list'
  })

  Draggable.create('.inspiration__album', {
    type: 'x,y',
    edgeResistance: 0.65,
    bounds: '.main',
    inertia: true
  })
}

export function ghostAnimation() {
  const ghost = document.querySelector('.contact__img')

  const randomX = random(10, 40)
  const randomY = random(20, 60)
  // const randomDelay = random(0, 1)
  const randomTime = random(1, 3)
  const randomTime2 = random(3, 5)
  const randomAngle = random(5, 8)

  TweenLite.set(ghost, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  })

  moveX(ghost, 1)
  moveY(ghost, -1)
  rotate(ghost, 1)

  function rotate(target, direction) {
    TweenLite.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      // delay: randomDelay(),
      ease: 'Sine.easeInOut',
      onComplete: rotate,
      onCompleteParams: [target, direction * -1]
    })
  }

  function moveX(target, direction) {
    TweenLite.to(target, randomTime(), {
      x: randomX(direction),
      ease: 'Sine.easeInOut',
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    })
  }

  function moveY(target, direction) {
    TweenLite.to(target, randomTime(), {
      y: randomY(direction),
      ease: 'Sine.easeInOut',
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    })
  }

  function random(min, max) {
    const delta = max - min
    return (direction = 1) => (min + delta * Math.random()) * direction
  }
}
