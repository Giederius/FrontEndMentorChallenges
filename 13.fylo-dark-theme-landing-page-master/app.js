var emailAddr = document.querySelector("#cta-input");
var btn = document.querySelector(".mygtukas");
var errorMsg = document.querySelector("#errorMsg");

btn.addEventListener("click", ValidateEmail);

// Stops the default popup
document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
      document.getElementById("name").focus();
    };
  })(),
  true
);

function ValidateEmail(emailAddr) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailAddr.value
    )
  ) {
    return true;
  }
  errorMsg.classList.remove("hidden");
  return false;
}
