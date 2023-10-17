var search_page = document.getElementsByClassName("search-page");
var main = document.getElementsByClassName("main");

function search() {
    if(search_page[0].style.display == "none") {
        search_page[0].style.display = "block";
        main[0].style.display = "none";
    }else{
        search_page[0].style.display = "none";
        main[0].style.display = "block";
    }
};