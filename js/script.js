$(document).ready(function() {

    $('.select-menu-2 ul').hide();
    $('#mob-menu').click(function() {
        $('.select-menu-2 ul').slideToggle();
    });

    $('.bxslider').bxSlider({
        mode: 'fade',
        controls: false,
        pause: 3000,
        infiniteLoop: !0,
        auto: true,
        speed: 3000
    });

    $('.bxslider2').bxSlider({
        wrapperClass: 'bx-wrapper2',
        mode: 'horizontal',
        controls: false,
        pause: 3000,
        infiniteLoop: !0,
        auto: true,
        speed: 500
    });

    $('.bxslider3').bxSlider({
        wrapperClass: 'bx-wrapper3',
        mode: 'fade',
        controls: false,
        pause: 3000,
        infiniteLoop: !0,
        auto: true,
        speed: 2000
    });

    $('.bxslider4').bxSlider({
        wrapperClass: 'bx-wrapper4',
        mode: 'fade',
        controls: false,
        pause: 5000,
        infiniteLoop: !0,
        auto: true,
        speed: 3000
    });

    $('.bxslider5').bxSlider({
        wrapperClass: 'bx-wrapper5',
        mode: 'fade',
        controls: false,
        pause: 5000,
        infiniteLoop: !0,
        auto: true,
        speed: 3000
    });

    $('.case-1').hover(
        function(){
            $('.fon-hover', this).delay().stop( true, true).animate({
                height: '200'
            },500)
         },
        function(){
            $('.fon-hover', this).animate({
                height: '0'
            },500)
        }
    );

});

    $('.extra-post').not(':first').css('margin-left', '4%');

    $('.gallery-post').not(':first').css('margin-left', '1%');
