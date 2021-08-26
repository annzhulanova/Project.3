$(document).ready(()=>{
    $('.review-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 621,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1219,
                settings: {
                    dots: true
                }
            },

        ]
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth <= 768) {
            $('.examples-container').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            });
            sliderIsLive = true;
        }
        else {
            if (sliderIsLive) {
                $('.examples-container').slick('unslick');
                sliderIsLive = false;
            }
        };
        if (window.innerWidth <= 1220) {
            $('.examples-container').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            });
            sliderIsLive = true;
        }
        else {
            if (sliderIsLive) {
                $('.examples-container').slick('unslick');
                sliderIsLive = false;
            }
        };
    });

    $('.open-image').magnificPopup({
        type: 'image'
    });
    new WOW({
        animateClass: 'animate__animated',
        mobile: true
    }).init();

    $('.callback-action').click(() => {
        $('.callback-container').css('display', 'flex')
    });
    $('.callback-container, .popup-close').click((e) => {
        if (e.target.className === 'callback-container' || e.target.className === 'popup-close')
            $('.callback-container').hide();
    });
    $('.call-me').click(() => {
        let number = $('#callback-phone');
        let hasError = false;
        let input = $('.order-input');
        let error = $('.error-input');

        if (!number.val()) {
            number.siblings('.error-input').show();
            number.css('border-color', '#e94f4f');
            hasError = true;
        } else {
            if (number.val()) {
                $.ajax({
                    type: 'post',
                    url: 'mail.php',
                    data: 'phone=' + number.val(),
                    success: ()=> {
                        $('.callback-sent').show();
                        $('.callback').hide();
                    },
                    error: ()=> {
                        $('.callback').hide();
                        alert('Ошибка отправки запроса. Свяжитесь, пожалуйста, по телефону')
                    }
                });
            };
            ;
        }
    });

    $('.burger').click(() => {
        $('.header-container .header-items, .header-container .logo').toggleClass('menu-open');
    });
    $('.header-items, .header-items a').click(() => {
        $('.header-container .header-items, .header-container .logo').removeClass('menu-open');
    })




















})