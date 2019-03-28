$(document).ready(() => {
    // const url = 'http://food2fork.com/api/search?key=d270f61c8c9fe2ef89633f4b609966de&count=1&q=chicken';
    // const key = "b37190c8e2c8861d2daa865de3eb25c8"
    const film = $('#response');
    let app_id = '28cc377f';
    let app_key = 'a996bb8b83059f220f55aeff26e261a4';
    let recipe = document.getElementById('recipe').value;
    let pre = document.getElementById('response');

    var url =
        'https://api.edamam.com/api/food-database/parser?app_id=' +
        app_id +
        '&app_key=' +
        app_key +
        '&ingr=' +
        recipe;

    var wyslij = document.getElementsByClassName('wyslij');
    $(wyslij).on('click', function makeCorsRequest() {
    $(document).ready(() => {
        $.ajax({
            url: url
        }).done(response => {
            // response.forEach(function(e) {
            console.log(response);
            console.log(response.parsed[0].food.uri);
            console.log(response.hints[0].measures.uri);

            $(film).before(`<h2>${response.parsed[0].food.uri}</h2>`);
            // $(film).before(
            //     `<a href> ${response.hints[0].measures[0].uri}</a>`
            // );
            // $(film).append(`<h3>${response.author}</h3>`);
            // });
        });
    });
});
});
