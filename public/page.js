$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        controlArrows: false,
        responsiveWidth: 1026,
        touchSensitivity: 50,
    });

    $.fn.fullpage.setScrollingSpeed(1100);
});
