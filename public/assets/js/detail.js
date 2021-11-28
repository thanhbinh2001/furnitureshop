const tabs = $$(".detail-product-tab");
const panes = $$(".detail-tab-pane");
tabs.forEach((tab, index) => {
  tab.onclick = function () {
    $(".detail-product-tab.active").classList.remove("active");

    this.classList.add("active");
    $(".detail-tab-pane.active").classList.remove("active");
    panes[index].classList.add("active");
  };
});

const decrement = $(".detail-product-text__cart-count-decrement");
const increment = $(".detail-product-text__cart-count-increment");
const input = $(".detail-product-text__cart-count-input");

var count = 1;
decrement.onclick = function () {
  count--;
  if (count < 1) {
    count = 1;
  }
  input.value = count;
};

increment.onclick = function () {
  count++;
  if (count > 10) {
    count = 10;
  }
  input.value = count;
};
