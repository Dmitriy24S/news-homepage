const navMenu = document.querySelector('.nav-menu')
const navMenuBackdrop = document.querySelector('.nav-menu--backdrop')
const navMenuToggles = document.querySelectorAll('.nav-menu--toggle')

navMenuToggles.forEach((toggle) => toggle.addEventListener('click', toggleNavMenu))
navMenuBackdrop.addEventListener('click', toggleNavMenu)

function toggleNavMenu() {
  console.log('toggle nav menu')
  navMenuBackdrop.classList.toggle('active')
  navMenu.classList.toggle('active')
}
