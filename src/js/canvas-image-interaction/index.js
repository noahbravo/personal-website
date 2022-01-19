// ALL THE CARD OPTIONS LISTED BELOW -->

// 1. jumpToRandomPosition: If `true` the particles on every frame will jump to random position. Else the particles will move randomly without jumping. Defaults to `false`
// 2. growAndShrink: If `true` the particles will grow & shrink, it will grow .8 times larger than the radius. Defaults to `false`
// 3. fill: If `true` the particles are filled with the current pixel color that they are on, else they will be stroked for that same color. Defaults to `true`
// 4. bounceFromEdges: If `true` the particles will bounce back when they hit the (specified) edges, or else thay will continue their path from the opposite edges/walls. Defaults to `true`.
// 5. shape: You can specify what shape of the particles. Currently you can specify any one from the following, i.e. "circle", "square", "hexagon". If not specified then it defaults to "circle"
// 6. radius: You can specity the radius of the particles, defaults to "5" if not specified.
// 7. randomRadius: If `true` then the particles will have random radius, else defaults to `false`
// 8. maxRadius: You can specify the minimum radius of the particles, else defaults to "2"
// 9. minRadius: You can specify the maximum radius of the particles, else defaults to "5"
// 10. maxVelocity: You can specify the maximum velocity of the particles, else defaults to "8"

import gsap from 'gsap'
import Canvas from './canvas'
import { loadImages, splitArray } from './utils'

export const createImageInteraction = (cardOptions) => {
  const cards = Array.from(document.querySelectorAll('.card'))

  const imageURLS = cardOptions
    .map((option) => Object.values(option.imageURL))
    .flat()
  // after all images are loaded remove loader
  // (this is not the best way to do so but it gets the job done)
  loadImages(imageURLS, (images) => {
    // this array holds the images in a sub array
    // i.e [img, img, img, img, img, img] ==> [[img, img], [img, img], [img, img]]
    const splitedImagesArray = splitArray(images, 2)

    cards.forEach((card, index) => {
      // eslint-disable-next-line no-new
      new Canvas({
        parent: card.querySelector('.card__image--inner'),
        dimensions: {
          width: card.getBoundingClientRect().width,
          height: card.getBoundingClientRect().height
        },
        ...cardOptions[index],
        images: {
          default: splitedImagesArray[index][0],
          hovered: splitedImagesArray[index][1]
        }
      })
    })

    // hide the loading wrapper
    setTimeout(() => {
      const loading = document.querySelector('.loading')
      if (loading) loading.classList.add('hide')
    }, 2000)

    // let the gsap animation begin
    gsap
      .timeline({
        delay: 0.8,
        defaults: {
          duration: 1.5,
          stagger: 0.1,
          ease: 'expo.out'
        }
      })
      .fromTo(
        cards.map((card) => card.querySelector('.card__image')),
        {
          translateY: '-100%'
        },
        {
          translateY: '0%'
        }
      )
      .fromTo(
        cards.map((card) => card.querySelector('.card__image--inner')),
        {
          translateY: '100%'
        },
        {
          translateY: '0%'
        },
        0
      )
  })
}
