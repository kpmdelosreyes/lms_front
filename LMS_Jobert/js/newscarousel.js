/************************************************************************/// // NEWS ///************************************************************************/

/**
 * We use the initCallback callback
 * to assign functionality to the controls
 */
function mycarousel_initCallback(carousel) {

    jQuery('#notice-next').bind('click', function() {
        carousel.next();
        return false;
    });

    jQuery('#notice-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};

// Ride the carousel...
jQuery(document).ready(function() {
    jQuery(".notice_list").jcarousel({
        scroll: 1,
        initCallback: mycarousel_initCallback,

        buttonNextHTML: null,
        buttonPrevHTML: null,
        vertical: true,
        itemLastOutCallback: {
           onAfterAnimation: disableCustomButtons
        },
        itemLastInCallback: {
           onAfterAnimation: disableCustomButtons
        }
    });
});




function disableCustomButtons(carousel){
    
    var prev_class = 'jcarousel-prev-disabled jcarousel-prev-disabled-vertical';
    if (carousel.first == 1) {
    $('#notice-prev').attr('disabled', 'true').addClass(prev_class);
    } else {
    

$('#notice-prev').removeAttr('disabled').removeClass(prev_class);
    }
  
    var next_class = 'jcarousel-next-disabled jcarousel-next-disabled-vertical';
    if (carousel.last == carousel.size()) {
    $('#notice-next').attr('disabled', 'true').addClass(next_class);
    } else {
   $('#notice-next').removeAttr('disabled').removeClass(next_class);
    }

};