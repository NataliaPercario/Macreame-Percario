let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
    menu_bar.addEventListener ('click', function () {

        menu.classlist.toggle('menu-toggle');
    })