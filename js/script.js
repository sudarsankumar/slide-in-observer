function toggleMenu()
{
    var menu = document.querySelector('.toggle')
    var navMenu = document.querySelector('header .main-nav')
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}
var p = document.querySelectorAll('main .home-more-stuff .more-stuff-grid p')
p[5].classList.add('appear')