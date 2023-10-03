const iconMenu = document.querySelector('.menu__icon');
 
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('active__menu');
        menuBody.classList.toggle('active__menu');
    })
}
 