const iconMenu = document.querySelector('.menu__icon');

const scrollCards = document.getElementById('scrollCards');
const scrollFunctional = document.getElementById('scrollFunctional');
const scrollFeedback = document.getElementById('scrollFeedback');
const scrollScreensaver = document.getElementById('scrollScreensaver');
const scrolMainScreen = document.getElementById('scrolMainScreen');

const cardsPage = document.querySelector('.cards__page');
const functionalPage = document.querySelector('.functional__page');
const feedbackPage = document.querySelector('.feedback__page');
const screensaverPage = document.querySelector('.screensaver__page');
const mainScreenPage = document.querySelector('.main-screen__page');
const menuLink = document.querySelectorAll('a.nav-bar-menu__paragraph-link');

let currentIndex = 0;
 
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('active__menu');
        menuBody.classList.toggle('active__menu');
    })
}

window.addEventListener('scroll', function() {
    const animatedPage = document.querySelectorAll('.animated__page');

    for(let i = 0; i < animatedPage.length; i++) {
        let block = animatedPage[i];
        let offset = block.getBoundingClientRect().top + this.window.pageYOffset;
        let windowHeight = this.window.innerHeight;

        if (window.pageYOffset > offset - windowHeight + 200) {
            block.style.transform = 'translateX(0)';
        }
    }
});

function addActiveClassToLink(index) {
    menuLink.forEach(item => item.classList.remove('active'));
    menuLink[index].classList.add('active');
};

menuLink.forEach((dot, index) => {
    dot.addEventListener('click', () => {
       currentIndex = index;
 
       addActiveClassToLink(currentIndex);
    });
 });

scrolMainScreen.addEventListener('click', (event) => {
    event.preventDefault();
    mainScreenPage.scrollIntoView({ behavior: 'smooth', block: 'end' });
    addActiveClassToLink()
});
scrollCards.addEventListener('click', (event) => {
    event.preventDefault();
    cardsPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollFunctional.addEventListener('click', (event) => {
    event.preventDefault();
    functionalPage.scrollIntoView({ behavior: 'smooth', block: 'end' });
});
scrollFeedback.addEventListener('click', (event) => {
    event.preventDefault();
    feedbackPage.scrollIntoView({ behavior: 'smooth', block: 'end' });
});
scrollScreensaver.addEventListener('click', (event) => {
    event.preventDefault();
    screensaverPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

