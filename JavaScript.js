const sideBar = document.querySelector('aside');
const menuBTN = document.querySelector('#menu-btn');
const closeMenuBtn = document.querySelector('#close-btn');
const lightDark = document.querySelector('#light-dark')
const LightDarkMenu = document.querySelector('#dark-menu-icon')


//------------- Open Menu ---------------//
menuBTN.addEventListener('click', () => {
    sideBar.style.display = 'block';
})


//------------- Close Menu ---------------//
closeMenuBtn.addEventListener('click', () => {
    sideBar.style.display = 'none';
})


//------------- Width Auto Close Menu ---------------//
var y = window.matchMedia("(max-width: 768px)")

function myFunction(y) {
    if (y.matches) {
        sideBar.style.display = 'none';
    } else {
        sideBar.style.display = 'block';
    }
}
y.addListener(myFunction);


//------------- Light & Dark Theme ---------------//

lightDark.addEventListener('click', () => {

    document.body.classList.toggle('theme')

    lightDark.querySelector('span').classList.toggle('active')
    LightDarkMenu.classList.toggle('active')
})

