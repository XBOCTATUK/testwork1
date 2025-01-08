navMobileMenu = document.querySelector('ul[class="header-menu__list not-active"]')
navMobileButton = document.querySelector('.nav-button')

navMobileButton.addEventListener('click', () => {
    navMobileClasses = navMobileMenu.classList
    if (navMobileMenu.classList.contains('not-active')) {
        navMobileMenu.classList.remove('not-active')
        navMobileMenu.classList.add('is-active-block')
    }
    else if (navMobileMenu.classList.contains('is-active-block')) {
        navMobileMenu.classList.remove('is-active-block')
        navMobileMenu.classList.add('not-active')
    }
})
