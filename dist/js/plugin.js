var shortLang = $('.current-lang');

function disableOverflow() {
    $('body').toggleClass('disOverflow');
}

$('.show_popup').click(function () {
    // show_popup();
    $('.popup_bg').css({
        'width': '100%'
    });
    $('.popup_bg').fadeIn(500);
    $('header, main, footer').css("filter", "blur(5px)");

    var cardAtribute = $(this).data('card');
    $('div[data-popup="' + cardAtribute + '"]').fadeIn(500);

    var scrollTop = $(window).scrollTop();

    $('.div_popup').css({
        'top': scrollTop
    });
    disableOverflow();
    console.log($(window).scrollTop());

});

$('.hide_popup').click(function () {
    hide_popup();
    disableOverflow();
});


//Show popup function


//Hide popup function
function hide_popup() {
    $('.popup_bg').fadeOut(500);

    $('.div_popup').fadeOut(500);

    $('header, main, footer').css({
        "filter": "blur(0)"
    });
}

$(document).ready(function() {
    var currLang = $('.lang-holder .active a').data('lang');    
    shortLang.html(currLang);
});

shortLang.on('click', function() {
    $('.lang-block').toggleClass('opened');
})