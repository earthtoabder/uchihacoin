const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger")
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul")
const header = document.querySelector(".header.container")

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}    


menu_item.forEach((item) => {
    item.addEventListener("click", () => { 
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });    


});