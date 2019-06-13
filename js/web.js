$(document).ready(function() {
    $('.showmenu').on('click', function(event) {
        event.preventDefault();
        $('#nav .menu').toggleClass('menu-show');
    });

});