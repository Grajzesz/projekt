window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
});

$(document).ready(function() {
    $('.toggle__button').on('click', function() {
        $('#main').toggleClass('main_background2');
        $('#main').removeClass('main_background');
        $('.toggle__button').css('display', 'none');
    });
    // $(document).keyup(function(e) {
    //     $('#kot').removeClass('minicircle');
    // });
    // var initX = 0;
    // var initY = 0;
    // $(document).keydown(function(e) {
    //     if (e.keyCode == 38) {
    //         //up
    //         $('#kot').addClass('minicircle');
    //     } else if (e.keyCode == 37) {
    //         //left
    //         initX += 10;
    //         document.getElementsByTagName('body')[0].style.backgroundPositionX =
    //             initX + 'px';
    //     } else if (e.keyCode == 39) {
    //         //right
    //         initX -= 10;
    //         document.getElementsByTagName('body')[0].style.backgroundPositionX =
    //             initX + 'px';
    //     }
    // });
});
