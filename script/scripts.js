new WOW({
    animateClass: 'animate__animated',
    }
).init();
/*Бургер меню*/
$('.burger').click(function () {
    $('#menu').css('display', 'block');
});

$('.close').click(function () {
    $('#menu').css('display', 'none');
});

$('.modal_close_one').click(function () {
    $('.modal').css('display', 'none');
});

$('.close_two').click(function () {
    $('#pop-up').css('display', 'none');
});

$('.view-projects').click(function () {
    $('#block').css('display', 'flex');
});

$('.view-projects').click(function () {
    $('#block2').css('display', 'flex');
});

$('.view-projects').click(function () {
    $('#block3').css('display', 'flex');
});

$('.view-projects').click(function () {
    $('#none').css('display', 'none');
});
$('.record-button').click(function () {
    $('#pop-up').css('display', 'flex');
});

$(".view-projects").click(function () { // ID откуда кликаем
    $('html, body').animate({
        scrollTop: $("#block").offset().top  // класс объекта к которому приезжаем
    }, 800); // Скорость прокрутки
});

/*Слик*/
$('.multiple-items').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 1230,
            settings: {
                arrows : false
            }
            },
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows : false
            }
            }
            ]
});


$('.home-frame-circle-1').click(function () {
    $('#one__block').css('display', 'block');
    $('#two__block').css('display', 'none');
    $('#free__block').css('display', 'none');
    $('#for__block').css('display', 'none');
    $('#five__block').css('display', 'none');

    $('.active-one').css('background', '#fcedcb');
    $('.active-two').css('background', '#ECC66BFF');
    $('.active-three').css('background', '#ECC66BFF');
    $('.active-for').css('background', '#ECC66BFF');
    $('.active-five').css('background', '#ECC66BFF');
})

$('.home-frame-circle-2').click(function () {
    $('#one__block').css('display', 'none');
    $('#two__block').css('display', 'block');
    $('#free__block').css('display', 'none');
    $('#for__block').css('display', 'none');
    $('#five__block').css('display', 'none');

    $('.active-one').css('background', '#ECC66BFF');
    $('.active-two').css('background', '#fcedcb');
    $('.active-three').css('background', '#ECC66BFF');
    $('.active-for').css('background', '#ECC66BFF');
    $('.active-five').css('background', '#ECC66BFF');
})
$('.home-frame-circle-3').click(function () {
    $('#one__block').css('display', 'none');
    $('#two__block').css('display', 'none');
    $('#free__block').css('display', 'block');
    $('#for__block').css('display', 'none');
    $('#five__block').css('display', 'none');
    $('.active-one').css('background', '#ECC66BFF');
    $('.active-two').css('background', '#ECC66BFF');
    $('.active-three').css('background', '#fcedcb');
    $('.active-for').css('background', '#ECC66BFF');
    $('.active-five').css('background', '#ECC66BFF');
})
$('.home-frame-circle-4').click(function () {
    $('#one__block').css('display', 'none');
    $('#two__block').css('display', 'none');
    $('#free__block').css('display', 'none');
    $('#for__block').css('display', 'block');
    $('#five__block').css('display', 'none');
    $('.active-one').css('background', '#ECC66BFF');
    $('.active-two').css('background', '#ECC66BFF');
    $('.active-three').css('background', '#ECC66BFF');
    $('.active-for').css('background', '#fcedcb');
    $('.active-five').css('background', '#ECC66BFF');
})
$('.home-frame-circle-5').click(function () {
    $('#one__block').css('display', 'none');
    $('#two__block').css('display', 'none');
    $('#free__block').css('display', 'none');
    $('#for__block').css('display', 'none');
    $('#five__block').css('display', 'block');
    $('.active-one').css('background', '#ECC66BFF');
    $('.active-two').css('background', '#ECC66BFF');
    $('.active-three').css('background', '#ECC66BFF');
    $('.active-for').css('background', '#ECC66BFF');
    $('.active-five').css('background', '#fcedcb');
})

/*Валидация формы Получите индивидуальную консультацию*/
$('#submit').click(function () {
    let name = $('#name');
    let phone = $('#phone');
    let checkbox = $('#check');
    let hasError = false;

    $('.error-input').hide();
    $('input').css('border-color','white');

    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
    }

    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red');
        hasError = true;
    }

    if ($(checkbox).is(':checked')){
        $('.three-error').css('display','none');
    } else {
        $('.three-error').css('display','block');
    }


    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phone.val(),checkbox:checkbox.val()}
        })
            .done(function (msg) {
                if (msg.success) {
                    $('.individual-consultation-block').hide();
                    $('.modal').css('display', 'block');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }
})

/*Валидация всплываюзей формы*/
$('#submit_two').click(function () {
    let name = $('#name_two');
    let phone = $('#phone_two');
    let check_two = $('#check-two');
    let hasError_two = false;

    $('.error-input_two').hide();
    $('input').css('border-color','white');

    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError_two = true;
    }

    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red');
        hasError_two = true;
    }

    if ($(check_two).is(':checked')){
        $('.three__error').css('display','none');
    } else {
        $('.three__error').css('display','block');
    }

    if (!hasError_two) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phone.val(),check_two: check_two.val()}
        })
            .done(function (msg) {
                if (msg.success) {
                    $('.pop-up-menu-footer-block-common').hide();
                    $('.modal_two').css('display', 'flex');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }
})
/*Увеличение картинок при нажатии*/
$('.main-images').magnificPopup({
    type: 'image',
});
$('.increase').magnificPopup({
    type: 'image',
});

/*Прокрутка*/
$(".link").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".individual-consultation").offset().top  // класс объекта к которому приезжаем
    }, 800); // Скорость прокрутки
});
$(".six-steps-to-your-first-home-info-text-1 a").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".individual-consultation").offset().top  // класс объекта к которому приезжаем
    }, 800); // Скорость прокрутки
});
$(".link").click(function () { // ID откуда кликаем
    $('html, body').animate({
        scrollTop: $(".individual-consultation").offset().top  // класс объекта к которому приезжаем
    }, 800); // Скорость прокрутки
});
$(".modern-house-block-two-button-one-btn").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".individual-consultation").offset().top  // класс объекта к которому приезжаем
    }, 800); // Скорость прокрутки
});

$(".construction-of-houses-and-cottages-button").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".individual-consultation").offset().top  // класс объекта к которому приезжаем
    }, 800); // Скорость прокрутки
});
$(".wrapper").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".footer").offset().top  // класс объекта к которому приезжаем
    }, 6000); // Скорость прокрутки
});

$(function(){
    //Использование параметра completed
    $("#phone").mask("8(999) 999-99-99");
});

$(function(){
    //Использование параметра completed
    $("#phone_two").mask("8(999) 999-99-99");
});

