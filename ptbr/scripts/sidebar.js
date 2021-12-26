const navList = document.querySelector('.nav-list')
const mobileMenu = document.querySelector('.mobile-menu')
const iconList = document.querySelector('#icon-img')
mobileMenu.addEventListener('click', () => {
    if (navList.style.display == '') {
        navList.style.display = 'grid'
        iconList.innerHTML = `<a href=''>Login</a>`
        iconList.color = 'white'
        console.log(iconList.innerHTML)
    } else {
        navList.style.display = ''
    }
    
})

