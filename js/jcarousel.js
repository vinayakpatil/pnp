$(function() {
    'use strict';

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
});
