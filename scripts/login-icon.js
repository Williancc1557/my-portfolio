const listIcon = document.querySelector('.user-icon-list')
const iconLogin = document.querySelector('.nav-user-icon')

iconLogin.addEventListener('click', () => {
    if (listIcon.style.display == '') {
        listIcon.style.display = 'grid'
    } else {
        listIcon.style.display = ''
    }
})