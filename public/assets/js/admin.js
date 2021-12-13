window.addEventListener("load", function() {
    var addProduct = document.querySelector(".btn-admin");
    var formAddProduct = document.querySelector(".container-form");
    var opacity = this.document.querySelector(".container-opacity");
    var exit = this.document.querySelector(".btn-exit");

    function showForms() {
        formAddProduct.classList.add("show");
        opacity.classList.add("show");
    }

    function exitForms() {
        formAddProduct.classList.add("hide");
        opacity.classList.add("hide");
    }

    addProduct.addEventListener("click", showForms);
    exit.addEventListener("click", exitForms);
});