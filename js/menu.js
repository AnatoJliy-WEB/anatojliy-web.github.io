var btn_gum_menu = document.getElementById('gum_menu');
var btn_gum_menu_close = document.getElementById('gum_menu_close');
var gum_menu = document.getElementById('gumburger_menu');

btn_gum_menu.addEventListener('mouseup', function() {
    btn_gum_menu.style.opacity = '0';
    setTimeout(function() {
        gum_menu.style.right = '0px';
    }, 100);
});

gum_menu_close.addEventListener('mouseup', function() {
    gum_menu.style.right = '-400px';
    setTimeout(function() {
        btn_gum_menu.style.opacity = '1';
    }, 100);
});