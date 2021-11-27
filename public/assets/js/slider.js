const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
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