if (screen.width <= 800) {
    console.log('Mobile Device');
    window.location = "http://www.era.media";
} else {
    $(document).ready(function() {
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            controlArrows: false,
            onLeave: function (index, nextIndex, direction) {

                //fading out the txt of the leaving section
                $('.section').eq(index - 1).find('h1, h2, h3, h4, h5, h6, p, a, ul, li, img').fadeOut(700, 'easeInQuart');

                //fading in the text of the destination (in case it was fadedOut)
                $('.section').eq(nextIndex - 1).find('h1, h2, h3, h4, h5, h6, p, a, ul, li, img').fadeIn(700, 'easeInQuart');
            },
        });
    });
}
