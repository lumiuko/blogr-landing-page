const navBtn = document.getElementById('nav-btn')
const mobileNav = document.getElementById('mobile-nav')
const navHamburger = document.getElementById('nav-hamburger')
const navClose = document.getElementById('nav-close')
const menuBtns = document.querySelectorAll('[data-btn]')

let isNavOpen = false

function toggleClass(element, className, condition) {
  if (condition) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}

function toggleMenu() {
  isNavOpen = !isNavOpen
  navBtn.setAttribute('aria-expanded', isNavOpen)

  toggleClass(mobileNav, 'nav-hidden', !isNavOpen)
  toggleClass(navHamburger, 'hidden', isNavOpen)
  toggleClass(navClose, 'hidden', !isNavOpen)
}

function toggleExpand(event) {
  const btn = event.currentTarget
  const parentElement = btn.parentElement
  const nextSibling = btn.nextElementSibling
  const isExpanded = parentElement.classList.contains('active')

  toggleClass(parentElement, 'active', !isExpanded)
  nextSibling.style.maxHeight = isExpanded ? '0px' : `${nextSibling.scrollHeight}px`
  nextSibling.style.visibility = isExpanded ? 'hidden' : `visible`
  btn.setAttribute('aria-expanded', !isExpanded)
}

navBtn.addEventListener('click', toggleMenu)
menuBtns.forEach(item => item.addEventListener('click', toggleExpand))
