const email = document.getElementById("mail");
const fName = document.getElementById("firstName");
const fNameError = document.getElementById("fname-Error");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Looks like this is not an email");
    document.getElementById("emailerror").style.visibility = "visible";
  } else {
    email.setCustomValidity("");
  }
});

fName.addEventListener("input", function (event) {
  if (fName.value == "") {
    fName.setCustomValidity("");
    fNameError.style.visibility = "visible";
  } else {
    fName.setCustomValidity("");
  }
});
