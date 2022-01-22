export default function mobileActions() {
  const { body } = document

  // mobile menu
  const mobileMenuBtns = document.querySelectorAll('.mobile-menu__button')
  const openClassName = 'menu-is-open'

  mobileMenuBtns.forEach((mobileMenuBtn) => {
    mobileMenuBtn.addEventListener('click', function () {
      // toggle body className
      body.classList.toggle(openClassName)
    })
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
}
