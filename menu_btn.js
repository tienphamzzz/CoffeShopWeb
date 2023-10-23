var menu_page = document.getElementsByClassName("column-nav-menu");
var menu_open = document.getElementsByClassName("btn-open");
var menu_close = document.getElementsByClassName("btn-close");

function openMenu() {
    menu_page[0].style.top = "110px";
    menu_open[0].style.display = "none";
    menu_close[0].style.display = "block";
};

function closeMenu() {
    menu_page[0].style.top = "-100%";
    menu_open[0].style.display = "block";
    menu_close[0].style.display = "none";
};