window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
});

$(document).ready(function() {
    $('.navigation').css('display', 'none');
    $('.typewriter').css('display', 'none');
    $('.show__content').css('display', 'none');
    $('.drugi').hide();
    $('.drugi1').hide();
    $('.drugi2').hide();
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
        }, 1600);
        setTimeout(function() {
            $('.monster').css('display', 'none');
        }, 2200);

        $('#menuToggle').on('click', function() {
            $('.baba').toggle();
        });
        $('.project1').hover(function() {
            $('.drugi').toggle();
        });
        $('.project2').hover(function() {
            $('.drugi1').toggle();
        });
        $('.project3').hover(function() {
            $('.drugi2').toggle();
        });

        $(document).ready(() => {
            const url = 'http://quotes.stormconsultancy.co.uk/random.json';
            const quote = $('.quote__api');
            $(document).ready(() => {
                $.ajax({ url: url }).done(response => {
                    // response.forEach(function(e) {
                    // console.log(response);

                    $(quote).append(`<h2>" ${response.quote} "</h2>`);
                    $(quote).append(`<h3>${response.author}</h3>`);
                    // });
                });
            });
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
