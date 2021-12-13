const menu = document.querySelectorAll(".menu-item");
const tables = document.querySelectorAll(".table-item");
const btns = document.querySelectorAll(".btn-add");
const forms = document.querySelectorAll(".form-item")
var exit = this.document.querySelector(".btn-exit");
var opacity = this.document.querySelector(".container-opacity");

console.log(forms);
menu.forEach((item, index) => {
    item.onclick = function(e) {
        e.preventDefault();
        document.querySelector(".table-item.active").classList.remove("active");
        tables[index].classList.add("active");
    }
    btns[index].onclick = function(e) {
        forms[index].classList.add("active");
        opacity.classList.add("show");

    }
    exit.onclick = function(e) {
        forms[index].classList.remove("active");
        opacity.classList.add("hide");
    }
});