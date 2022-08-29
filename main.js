console.log('It works')

$(document).ready(function () {
    
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .top-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 40){
            $('#up').fadeIn();
        } else{
            $('#up').fadeOut();
        }
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once:true
    });

    /* Contact form */
    $('.submit').click(function (event){
        console.log('Clicked button')

        var email = $('.email').val()
        var message = $('.message').val()
        var statusElmE = $('.estatus')
        statusElmE.empty()
        var statusElm = $('.status')
        statusElm.empty()
     
        if(email.length > 5 && email.includes('@') && email.includes('.')){
        } else {
            event.preventDefault()
            statusElmE.append('<div>Email is not valid<div/>')
        }

        if(message.length >=10){
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid<div/>')
        }
    })

});