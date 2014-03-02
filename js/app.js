// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
    active_class: 'open',
    orbit: {
        bullets: false,
        slide_number: false,
        timer_speed: 5000,
        pause_on_hover: false
    }
});

// document ready event
$(function() {
    $('.slide-out-div.feedback').tabSlideOut({
        tabHandle: '.handle', //class of the element that will become your tab
        pathToTabImage: 'imgs/feedback-vtab.png', //path to the image for the tab //Optionally can be set using css
        imageHeight: '131px', //height of tab image           //Optionally can be set using css
        imageWidth: '45px', //width of tab image            //Optionally can be set using css
        tabLocation: 'left', //side of screen where tab lives, top, right, bottom, or left
        speed: 300, //speed of animation
        action: 'click', //options: 'click' or 'hover', action to trigger animation
        topPos: '195px', //position from the top/ use if tabLocation is left or right
        leftPos: '20px', //position from left/ use if tabLocation is bottom or top
        fixedPosition: true //options: true makes it stick(fixed position) on scroll
    });
    $('.slide-out-div.blog').tabSlideOut({
        tabHandle: '.handle1', //class of the element that will become your tab
        pathToTabImage: 'imgs/blog-vtab.png', //path to the image for the tab //Optionally can be set using css
        imageHeight: '93px', //height of tab image           //Optionally can be set using css
        imageWidth: '45px', //width of tab image            //Optionally can be set using css
        tabLocation: 'left', //side of screen where tab lives, top, right, bottom, or left
        speed: 300, //speed of animation
        action: 'click', //options: 'click' or 'hover', action to trigger animation
        topPos: '330px', //position from the top/ use if tabLocation is left or right
        leftPos: '20px', //position from left/ use if tabLocation is bottom or top
        fixedPosition: true //options: true makes it stick(fixed position) on scroll
    });

    // Flyout menu
    $('.flyout').hover(function(e) {
        $(this).toggleClass('active');
    }, function(e) {
        $(this).toggleClass('active');
    });


    // JCarousel
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


    $('.jcarousel').each(function() {
        // carousel controls
        var itemLength = $(this).find('li').length;
        var MAX_CAROUSEL_LENGTH = 4;

        // Disable previous control
        $(this).siblings('.jcarousel-prev').addClass('disabled');

        if (itemLength <= MAX_CAROUSEL_LENGTH) {
            $(this).siblings('.jcarousel-next').addClass('disabled');
        }

    });

    $('.jcarousel')
        .on('jcarousel:animateend', function(event, carousel) {
            var currentFirstItem = $(this).jcarousel('first');
            var currentLastItem = $(this).jcarousel('last');
            var length = $(this).find('li').length - 1;

            if (currentFirstItem.index() === 0) {
                $(this).siblings('.jcarousel-prev').addClass('disabled');
            } else {
                $(this).siblings('.jcarousel-prev').removeClass('disabled');
            }

            if (currentLastItem.index() === length) {
                $(this).siblings('.jcarousel-next').addClass('disabled');
            } else {
                $(this).siblings('.jcarousel-next').removeClass('disabled');
            }
        });

    // Hack to force navigation. Need to clean this up
    $('.flyout>a').on('click', function(e) {
        window.location = $(this).attr('href');
    });
});
