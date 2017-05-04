/* global $*/
$(document).ready(function() {
    var arrow = $('.arrow');
    //parallaxBg
    var parallaxBg = $('.parallax-bg');
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        parallaxBg.css({
            'background-position': 'center calc(50% - ' + Math.floor(st * .5) + 'px)',
        });
        $('.scrollDown').css({
            'bottom': Math.floor(-st * .05)+'px'
        });
    });

    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    // menu
    var menu = $('.menu');
    menu.click(function() {
        console.log("Handler for .click() called.");
    });
    // navigation
    //scroll animation
    arrow.on('click', function() {
        $('html, body').animate({
            scrollTop: $('.section-alpha').offset().top
        }, 1200);
        return false;
    });
});
