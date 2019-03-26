window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
});

$(document).ready(function() {
    $('.navigation').css('display', 'none');
    $('.typewriter').css('display', 'none');
    $('.show__content').css('display', 'none');

    $('.toggle__button').on('click', function() {
        $('#main').toggleClass('container2');

        $('#main').removeClass('container');

        $('.navigation').css('display', 'flex');
        $('.navigation').addClass('navigation');
        $('.toggle__button').css('display', 'none');
        $('.show__content').toggle();
        setTimeout(function() {
            $('.typewriter').css('display', 'block');
            $('.baba').css('visibility', 'visible');
        }, 2000);
        $('#menuToggle').on('click', function() {
            $('.baba').toggle();
        });

        // $('#menuToggle').toggle(".baba").css('visibility', 'hidden');
        // $('.baba').css('visibility', 'visible');
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
