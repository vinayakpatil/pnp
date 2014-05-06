// Accordion in checkout page
// TODO: Remove timeout
$(function() {
    var accordion$ = $('.checkout .accordion');
    var cartSummary$ = accordion$.next('.cart-summary').find('.summaryBox:first-child');

    // Initial states for accordion
    accordion$.children('dd').first().addClass('active').end().addClass('disabled');

    //Initial height
    setTimeout(function() {
        // Update height
        cartSummary$.css('height', accordion$.height() + 'px');
    }, 50);

    // ON TAB CLICK
    accordion$.children('dd').on('click', 'a', function(e) {
        var dd$ = $(e.target).closest('dd');
        var preventToggle = false;

        if(dd$.parent('dl').hasClass('tabs')){
            return;
        }

        preventToggle = (
            dd$.siblings('dd.invalid').length !== 0
        );

        if (
            preventToggle || !(dd$.hasClass('active') || dd$.hasClass('complete'))
        ) {
            // prevent default action
            e.stopPropagation();
        } else {

            // Add active class to current editing tab
            dd$.addClass('active').siblings().removeClass('active');

            setTimeout(function() {
                // Update height
                cartSummary$.css('height', accordion$.height() + 'px');
            }, 50);

        }
    });

    // ON FORM SUBMIT (ACCORDIAN)
    accordion$.find('form[data-abide]').on('valid', onValid).on('invalid', onInvalid).on('submit', function(e) {
        // Prevent form submit
        e.preventDefault();
    });

    // PAYMENT
    $('footer.payment .button').on('click', function(e) {
        // TODO - Add extra check just to confirm rest tabs are complete

        var activeContent$ = $('.tabs-content.vertical .active');

        // Manually submit the form
        activeContent$.find('form[data-abide]').submit();
    });


    // Form callback functions
    function onValid(e) {
        var dd$ = $(e.target).closest('dd.active');
        dd$.removeClass('disabled active invalid').addClass('complete');

        if ($(this).hasClass('payment')) {
            // Payment form valid
            window.location = 'order-confirmation.html';
            return;
        }

        // Next tab in workflow
        dd$.next('dd').addClass('active').children('a').click();
    }

    function onInvalid(e) {
        if ($(this).hasClass('shippingAddress')) {
            if (
                $(this).find('[name=existingAddress]').is(':checked') &&
                $(this).find('[name=shippingAddress]').is(':checked')
            ) {
                var invalid_labels = $(this).find('label.error');

                // Make it valid

                // Remove focus on first error element
                invalid_labels.first().find(':input').blur();

                $(this).closest('dd.active').removeClass('invalid');

                // Styling clean up
                invalid_labels.removeClass('error');

                onValid(e);
                return;
            }
        }

        $(this).closest('dd.active').addClass('invalid');
    }
});