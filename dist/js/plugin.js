var shortLang = $('.current-lang');

function disableOverflow() {
    if($(window).width() < 769){
       $('body').toggleClass('disOverflow');
    } else {
        $('body').removeClass('disOverflow')
    }
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
    // console.log($(window).scrollTop());

});

$('.hide_popup').click(function () {
    hide_popup();
    disableOverflow();
});

$(document).keydown(function(e) {
    if (e.key === "Escape") {
        hide_popup();
        disableOverflow();
    }
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

    var cardsNumber = $('.card .number');
    var i = 1;
    for(var item of cardsNumber) {
        if(i<10){
            $(item).html('0'+i);
        } else {
            $(item).html(i);
        }
        i++;
    }; 

    var cards = $('.card');
    for (var card of cards) {
        var dataCards = $(card).data('card')
        var popupNumber = $(card).find('.number').html();
        
        $('div[data-popup="' + dataCards + '"]').find('.number').html(popupNumber);
    }
});

shortLang.on('click', function() {
    $('.lang-block').toggleClass('opened');
})