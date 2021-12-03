const inputs = $$(".form-control");
var confirm = $("#confir-password");
var password = $("#password");

$(".form-submit").onclick = function (e) {
  if (password.value.length < 6) {
    password.nextElementSibling.classList.add("active");
    e.preventDefault();
  } else {
    password.nextElementSibling.classList.remove("active");
    if (confirm.value !== password.value) {
      confirm.nextElementSibling.classList.add("active");
      e.preventDefault();
    } else {
      confirm.nextElementSibling.classList.remove("active");
    }
  }
};
