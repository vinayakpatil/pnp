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
    'use strict';

    // Hack to force navigation. Need to clean this up
    $('.flyout>a').on('click', function(e) {
        window.location = $(this).attr('href');
    });


    $('.slide-out-div.feedback').tabSlideOut({
        tabHandle: '.handleFeedback', //class of the element that will become your tab
        pathToTabImage: 'imgs/feedback-vtab-right.png', //path to the image for the tab //Optionally can be set using css
        imageHeight: '131px', //height of tab image           //Optionally can be set using css
        imageWidth: '45px', //width of tab image            //Optionally can be set using css
        tabLocation: 'right', //side of screen where tab lives, top, right, bottom, or left
        speed: 300, //speed of animation
        action: 'click', //options: 'click' or 'hover', action to trigger animation
        topPos: '250px', //position from the top/ use if tabLocation is left or right
        leftPos: '0px', //position from left/ use if tabLocation is bottom or top
        fixedPosition: true //options: true makes it stick(fixed position) on scroll
    });
    $('.slide-out-div.blog').tabSlideOut({
        tabHandle: '.handleBlog', //class of the element that will become your tab
        pathToTabImage: 'imgs/blog-vtab-right.png', //path to the image for the tab //Optionally can be set using css
        imageHeight: '93px', //height of tab image           //Optionally can be set using css
        imageWidth: '45px', //width of tab image            //Optionally can be set using css
        tabLocation: 'right', //side of screen where tab lives, top, right, bottom, or left
        speed: 300, //speed of animation
        action: 'click', //options: 'click' or 'hover', action to trigger animation
        topPos: '380px', //position from the top/ use if tabLocation is left or right
        leftPos: '20px', //position from left/ use if tabLocation is bottom or top
        fixedPosition: true //options: true makes it stick(fixed position) on scroll
    });

    // Feedback cancel action
    $('.feedback .cancel').on('click', function() {
        $(document).trigger('click');
    });

    // Flyout menu
    (function($) {
        var isActivePage = false;
        $('.flyout').hover(function(e) {
            isActivePage = $(this).hasClass('active');
            if (!isActivePage) {
                $(this).addClass('active');
            }
        }, function(e) {
            if (!isActivePage) {
                $(this).toggleClass('active');
            }
        });
    })($);


    // Accordion in checkout page
    // TODO: Remove timeout
    (function() {
        var accordion$ = $('.checkout .accordion');
        var cartSummary$ = accordion$.next('.cart-summary');

        // Initial states for accordion
        accordion$.children('dd').first().addClass('open').end().addClass('disabled');

        //Initial height
        setTimeout(function() {
            // Update height
            cartSummary$.css('height', accordion$.height() + 'px');
        }, 50);

        // ON TAB CLICK
        accordion$.children('dd').on('click', function(e) {
            var dd$ = $(e.target).closest('dd');

            // if (!dd$.hasClass('active')) {
            //     // prevent default action
            //     e.stopPropagation();
            // }

            setTimeout(function() {
                // Update height
                cartSummary$.css('height', accordion$.height() + 'px');
            }, 50);
        });

        // ON FORM SUBMIT
        accordion$.find('form').on('submit', function(e){
            e.preventDefault();
            var target$ = $(e.target);
            target$.closest('dd').removeClass('disabled open').next('dd').addClass('open').trigger($.Event('click'));
        });
    })();
});