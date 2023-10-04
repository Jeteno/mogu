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

scrolMainScreen.addEventListener('click', () => {
    mainScreenPage.scrollIntoView({ behavior: 'smooth' });
});
scrollCards.addEventListener('click', () => {
    cardsPage.scrollIntoView({ behavior: 'smooth' });
});
scrollFunctional.addEventListener('click', () => {
    functionalPage.scrollIntoView({ behavior: 'smooth' });
});
scrollFeedback.addEventListener('click', () => {
    feedbackPage.scrollIntoView({ behavior: 'smooth' });
});
scrollScreensaver.addEventListener('click', () => {
    screensaverPage.scrollIntoView({ behavior: 'smooth' });
});

