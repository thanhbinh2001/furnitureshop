const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerSearch = $(".header-tool__item-search");
const headerInput = $(".header-tool__item-input");
const headerClose = $(".header-tool__item-input-close");
headerSearch.onclick = () => {
  headerInput.classList.toggle("active");
};
headerClose.onclick = (e) => {
  e.stopPropagation();
  headerInput.classList.add("active");
};

const sidebarItems = $$(".sidebar-item");
const sidebarList = $(".sidebar-item__sublist");

sidebarItems.forEach((sidebarItem) => {
  sidebarItem.onclick = () => {
    sidebarList.classList.toggle("active");
  };
});

// slider start
var sliderNumber = $$(".slider-item").length;
var sliderCounter = 0;
// var sliderWidth = $(".slider-item").clientWidth;
var sliderWidth = 1200;
var sliderList = $(".slider-list");

// slider auto
setInterval(() => {
  if (sliderCounter == sliderNumber - 1) {
    sliderList.style.transform = `translateX(0)`;
    sliderCounter = 0;
  } else {
    sliderCounter++;
    sliderList.style.transform = `translateX(calc(${sliderCounter}*-${sliderWidth}px))`;
  }
}, 3000);

// next btn
$(".slider-control__next-btn").onclick = function () {
  if (sliderCounter == sliderNumber - 1) {
    sliderList.style.transform = `translateX(0)`;
    sliderCounter = 0;
  } else {
    sliderCounter++;
    sliderList.style.transform = `translateX(calc(${sliderCounter}*-${sliderWidth}px))`;
  }
};

// right btn
$(".slider-control__previous-btn").onclick = function () {
  if (sliderCounter == 0) {
    sliderCounter = sliderNumber - 1;
    sliderList.style.transform = `translateX(calc(${sliderCounter}*-${sliderWidth}px))`;
  } else {
    sliderCounter--;
    sliderList.style.transform = `translateX(calc(${sliderCounter}*-${sliderWidth}px))`;
  }
};
// slider end

// seller start
var sellerNumber = $$(".product-item").length;
var sellerCounter = 0;
// var sliderWidth = $(".slider-item").clientWidth;
var sellerWidth = $(".product-item").clientWidth;
var sellerList = $(".seller-list");
var sellerCurrent = Math.round(sellerList.clientWidth / sellerWidth);

// seller auto
setInterval(() => {
  if (sellerCounter == sellerNumber - sellerCurrent) {
    sellerList.style.transform = `translateX(0)`;
    sellerCounter = 0;
  } else {
    sellerCounter++;
    sellerList.style.transform = `translateX(calc(${sellerCounter}*-${sellerWidth}px))`;
  }
}, 5000);

// next btn
$(".seller-control__next-btn").onclick = function () {
  if (sellerCounter == sellerNumber - sellerCurrent) {
    sellerList.style.transform = `translateX(0)`;
    sellerCounter = 0;
  } else {
    sellerCounter++;
    sellerList.style.transform = `translateX(calc(${sellerCounter}*-${sellerWidth}px))`;
  }
};

// right btn
$(".seller-control__previous-btn").onclick = function () {
  if (sellerCounter == 0) {
    sellerCounter = sellerNumber - sellerCurrent;
    sellerList.style.transform = `translateX(calc(${sellerCounter}*-${sellerWidth}px))`;
  } else {
    sellerCounter--;
    sellerList.style.transform = `translateX(calc(${sellerCounter}*-${sellerWidth}px))`;
  }
};

// seller end
