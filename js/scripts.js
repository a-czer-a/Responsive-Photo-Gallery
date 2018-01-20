$(document).ready(function () {

    $('#menu-button').on('click', function () {
        let nav = $('nav').css('display');
        if (nav === 'none') {
            $('nav').addClass('display-block');
        } else {
            $('nav').removeClass('display-block');
        }
    });
});
