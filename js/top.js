var top_show = 1000;
var delay = 1000;
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

