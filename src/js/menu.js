import { isInViewport } from './functions'

export default function mobileActions() {
  const { body } = document

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
}
