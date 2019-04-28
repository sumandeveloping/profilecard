$(document).ready(function () {

    $('.about').click(function (e) {
        // var linkHref = $(this).attr('href');
        // console.log(linkHref);
        $('.rightColumn').animate({
            scrollTop: 0
        }, 1000);

        $('.wrapper').animate({
            scrollTop: $('.leftColumn').outerHeight()
        }, 1000);

        e.preventDefault();
    });


    $('.resume').click(function (e) {

        $('.wrapper').animate({
            scrollTop: $('.leftColumn').outerHeight()
        }, 1000);

        // console.log($('#about').outerHeight());
        // console.log($('#resume').outerHeight());
        $('.rightColumn').animate({
            scrollTop: $('#about').outerHeight()
        }, 1000);


        e.preventDefault();
    });

    $('.works').click(function (e) {

        $('.wrapper').animate({
            scrollTop: $('.leftColumn').outerHeight()
        }, 1000);

        // console.log($('#about').outerHeight() + $('#resume').outerHeight());
        $('.rightColumn').animate({
            scrollTop: $('#about').outerHeight() + $('#resume').outerHeight()
        }, 1000);


        e.preventDefault();
    });

    $('.blogs').click(function (e) {

        $('.wrapper').animate({
            scrollTop: $('.leftColumn').outerHeight()
        }, 1000);

        // console.log($('#about').outerHeight() + $('#resume').outerHeight());
        $('.rightColumn').animate({
            scrollTop: $('#about').outerHeight() + $('#resume').outerHeight() + $('#works').outerHeight()
        }, 1000);

        e.preventDefault();
    });

    $('.contact').click(function (e) {

        // console.log($('#about').outerHeight() + $('#resume').outerHeight());
        $('.rightColumn').animate({
            scrollTop: $('#about').outerHeight() + $('#resume').outerHeight() + $('#works').outerHeight() + $('#blog').outerHeight()
        }, 1000);

        $('.wrapper').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);

        e.preventDefault();
    });

});



