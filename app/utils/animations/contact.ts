const target = '.ghost'

export function animateContact(gsap: GSAP) {
  const randomX = random(10, 40)
  const randomY = random(20, 60)
  // const randomDelay = random(0, 1)
  const randomTime = random(1, 3)
  const randomTime2 = random(3, 5)
  const randomAngle = random(5, 8)

  gsap.set(target, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  })

  moveX(target, 1)
  moveY(target, -1)
  rotate(target, 1)

  function rotate(target: string, direction: number) {
    gsap.to(target, {
      duration: randomTime2(),
      rotation: randomAngle(direction),
      // delay: randomDelay(),
      ease: 'Sine.easeInOut',
      onComplete: rotate,
      onCompleteParams: [target, direction * -1]
    })
  }

  function moveX(target: string, direction: number) {
    gsap.to(target, {
      duration: randomTime(),
      x: randomX(direction),
      ease: 'Sine.easeInOut',
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    })
  }

  function moveY(target: string, direction: number) {
    gsap.to(target, {
      duration: randomTime(),
      y: randomY(direction),
      ease: 'Sine.easeInOut',
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    })
  }

  function random(min: number, max: number) {
    const delta = max - min
    return (direction = 1) => (min + delta * Math.random()) * direction
  }
}
