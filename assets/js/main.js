$(document).ready(function() {
    $('.folder').on('click', function() {
        $(this).toggleClass('active');
        $(this).next('.nested').slideToggle();
    });
});
