const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerSearch = $(".header-tool__item-search");
const headerInput = $(".header-tool__item-input");
const headerClose = $(".header-tool__item-input-close");
headerSearch.onclick = () => {
    headerInput.classList.remove("active");
};
headerClose.onclick = (e) => {
    e.stopPropagation();
    headerInput.classList.add("active");
};