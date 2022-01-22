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
    body.classList.toggle(openClassName)
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
