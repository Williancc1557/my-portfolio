const navList = document.querySelector('.nav-list')
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click', () => {
    if (navList.style.display == '') {
        navList.style.display = 'grid'
    } else {
        navList.style.display = ''
    }
    
})

