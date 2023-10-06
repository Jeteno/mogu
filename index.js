const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

const anchorLinks = document.querySelectorAll('a[href^="#"]');

const menuLink = document.querySelectorAll('a.nav-bar-menu__paragraph-link');

const functionalNav = document.querySelector('.functional__card-content-list');
const functionLink = document.querySelectorAll('.functional-card-contant-paragraph-link');
const presentationTitle = document.querySelector('.card-content-text__title-h');
const presentationSubTitle = document.querySelector('.card-content-text__subtitle-p');
const functionalContent = [
    {
       title: 'Создание лендинга',
       subtitle: 'Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям',
    },
    {
       title: 'Lorem ipsum dolor sit amet',
       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim repellat aperiam molestias tenetur necessitatibus!'
    },
    {
       title: 'Lorem ipsum dolor',
       subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    },
];

const sendItile = document.getElementById('content__send-title');
const sendContent = document.querySelector('.feedback__form-content-send');
const formContent = document.querySelector('.feedback__form-content');
const btnSendForm = document.querySelector('.feedback__form-btn');
const inputEmail = document.getElementById('input__email');
const inputMassage = document.getElementById('input__massage');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

let currentIndexFunctional = 0;

let currentIndex = 0;

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('active__menu');
        menuBody.classList.toggle('active__menu');
    })
}

function removeMenu() {
    iconMenu.classList.remove('active__menu');
    menuBody.classList.remove('active__menu');
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

window.addEventListener('scroll', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    for(let i = 0; i < anchorLinks.length; i++) {
        let link = anchorLinks[i];
        let target = document.querySelector(link.getAttribute('href'));

        if (target) {
            let offset = target.getBoundingClientRect().top + window.pageYOffset;
            let windowHeight = window.innerHeight;

            if (window.pageYOffset > offset - windowHeight + 200) {
                block.style.transform = 'translateX(0)';
            } 
        }
    }
});

function smoothScroll(target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let target = document.querySelector(link.getAttribute('href'));
        if (target) {
            smoothScroll(target);
            removeMenu();
            addActiveClassToLink()
        }
    });
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

function setFirstCategoryActive() {
    if (functionLink.length > 0) {
       const firstCategory = functionLink[currentIndexFunctional];
       
       firstCategory.classList.remove('notActive');
       firstCategory.classList.add('functional__active');
    }
};

setFirstCategoryActive();

function updateSliderClasses(index) {
    functionLink.forEach(item => {
        if(currentIndexFunctional <= functionalContent.length-1) {
            item.classList.remove('functional__active');
            for (let i = 0; i < functionalContent.length; i++) {
                 if (functionLink[i]) {
                     functionLink[i].classList.add('notActive')
                 }
            }     
        }
    });
    
    if(currentIndexFunctional <= functionalContent.length-1) {
        functionLink[index].classList.toggle('functional__active');
        functionLink[index].classList.toggle('notActive');    
    }
}

functionLink.forEach((dot, index) => {
    dot.addEventListener('click', (event) => {
       event.preventDefault();
       currentIndexFunctional = index;
       
       updateSliderClasses(currentIndexFunctional);
    });
 })

for (let i = 1; i < functionalContent.length; i++) {
    if (functionLink[i]) {
        functionLink[i].classList.toggle('notActive')
    }
}

function updateTitleSubtitle(index) {
    presentationTitle.innerText = functionalContent[index].title !== undefined ? functionalContent[index].title : '';
    presentationSubTitle.innerText = functionalContent[index].subtitle !== undefined ? functionalContent[index].subtitle : '';
}

function handleClick(event) {
    const target = event.target;
    if (target.classList.contains('functional-card-contant-paragraph-link')) {
      const index = Array.from(target.parentNode.parentNode.children).indexOf(target.parentNode);
      currentIndexFunctional = index;
      if(currentIndexFunctional <= functionalContent.length-1) {
        updateTitleSubtitle(index);
        event.preventDefault();  
      }
   }
}

functionalNav.addEventListener('click', handleClick);

updateTitleSubtitle(currentIndexFunctional);

function classCheckingForm() {
    if (sendContent.classList.contains('feedback__form-content-not-active')) {
        sendContent.classList.remove('feedback__form-content-not-active');
        sendContent.classList.add('feedback__form-content-active');

        formContent.classList.add('feedback__form-content-not-active');
    }
}

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function sendForm() {
    classCheckingForm();
    sendItile.textContent = 'Спасибо за обратную связь! Мы стараемся стать лучше именно для Вас';
}

function sendFormError() {
    classCheckingForm();
    sendItile.textContent = 'Пожалуйста, проверьте данные, произошла ошибка ввода данных';
}

btnSendForm.addEventListener('click', function(event) {
    if (isEmailValid(inputEmail.value) && inputMassage.value !== '') {
        event.preventDefault();
        sendForm();
    } else {
        event.preventDefault();
        sendFormError();
    }
});