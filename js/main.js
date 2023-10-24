//Смена языка

const allLang = ['en', 'ru'];
var lang = $('.header__btn-lang-text').attr('value');
const btnLang = document.querySelector('.header__btn-lang');

location.href = window.location.pathname + '#' + lang;
//Функция перенаправить на url с указанием языка 
function changeURLLanguage() {
    location.href = window.location.pathname + '#' + lang;
}

// Функция перевода элементов
function changeLanguage() {
    if (!allLang.includes(lang)) {
        location.href = window.location.pathname + '#en';
    }

    document.querySelector('title').innerHTML = langArr["unit"][lang];
    for (let key in langArr) {
        let elem = document.querySelector('.lang-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][lang];
        }
    }
}

$(function () {
    // Смена языка
    $('.header__btn-lang').on('click', function () {
        // смена языка на кнопке
        $('.header__btn-lang-text').html() == "EN" ? $('.header__btn-lang-text').html('RU') : $('.header__btn-lang-text').html('EN');
        // смена языка в переменной
        lang == "en" ? lang = "ru" : lang = "en";
        // вызов функции смены URL 
        changeURLLanguage();
        // вызов функции перевода элементов
        changeLanguage();
    });

    // Открытие и закрытие мобильного меню
    $('.header__burger').on('click', function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('.header__wide-btns').toggleClass('active');
        $('.body').toggleClass('lock');
    });

    // Смена порядка линий из фишек после поворота из вертикали в горизонталь
    if ($(window).width() < 1599) {
        $('.content__tokens-line-three').insertBefore('.content__tokens-line-one');
        $('.content__tokens-line-two').insertBefore('.content__tokens-line-one');
    }
});

