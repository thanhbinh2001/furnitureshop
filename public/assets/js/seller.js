var sellerNumber = $$("#seller .product-item").length; // đổi tên or thêm tên ưu tiên thêm
var sellerCounter = 0;
// var sliderWidth = $(".slider-item").clientWidth;
var sellerWidth = $("#seller .product-item").clientWidth;
var sellerList = $(".seller-list");
var sellerCurrent = Math.round(sellerList.clientWidth / sellerWidth);
console.log(sellerNumber);
// seller auto
setInterval(() => {
    if (sellerCounter == sellerNumber - sellerCurrent) {
        sellerList.style.transform = `translateX(0)`;
        sellerCounter = 0;
    } else {
        sellerCounter++;
        console.log(sellerCounter);
        sellerList.style.transform = `translateX(calc(${sellerCounter}*-${sellerWidth}px))`;
    }
}, 5000);

// next btn
$(".seller-control__next-btn").onclick = function() {
    if (sellerCounter == sellerNumber - sellerCurrent) {
        sellerList.style.transform = `translateX(0)`;
        sellerCounter = 0;
    } else {
        sellerCounter++;
        sellerList.style.transform = `translateX(calc(${sellerCounter}*-${sellerWidth}px))`;
    }
};

// right btn
$(".seller-control__previous-btn").onclick = function() {
    if (sellerCounter == 0) {
        sellerCounter = sellerNumber - sellerCurrent;
        sellerList.style.transform = `translateX(calc(${sellerCounter}*-${sellerWidth}px))`;
    } else {
        sellerCounter--;
        sellerList.style.transform = `translateX(calc(${sellerCounter}*-${sellerWidth}px))`;
    }
};