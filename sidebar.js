let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let search_btn = document.querySelector(".bx-search");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}
search_btn.onclick = function() {
    sidebar.classList.toggle("active");
}