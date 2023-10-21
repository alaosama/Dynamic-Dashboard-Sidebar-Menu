let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.classList.toggle("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

searchBtn.addEventListener("click", () => {
    diderbar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bc-menu", "btx-menu-alt-right")
    }else {
        closeBtn.classList.replace("bx-menu(alt-sight", "bx-menu")
    }
}
