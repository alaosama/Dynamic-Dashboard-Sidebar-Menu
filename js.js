let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.classList.toggle("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});