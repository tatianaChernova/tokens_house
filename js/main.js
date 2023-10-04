
$(function () {
    // Смена языка на кнопке
    $('.header__btn-lang').on('click', function () {
        $('.header__btn-lang-text').html() == "EN" ? $('.header__btn-lang-text').html('RU') : $('.header__btn-lang-text').html('EN');
    });
    // Открытие и закрытие мобильного меню
    $('.header__burger').on('click', function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('.header__wide-btns').toggleClass('active');
        $('.body').toggleClass('lock');
    });
    // Смена порядка линий из фишек после поворота из вертикали в горизонталь
    if ($(window).width() < 1549) {
        $('.content__tokens-line-three').insertBefore('.content__tokens-line-one');
        $('.content__tokens-line-two').insertBefore('.content__tokens-line-one');
    }
})
