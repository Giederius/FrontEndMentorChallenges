const email = document.getElementById("mail");
const fname = document.getElementById("firstname");

console.log(fname.validity.valueMissing);

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Looks like this is not an email");
  } else {
    email.setCustomValidity("");
  }
});

fname.addEventListener("input", function (event) {
  if (fname.validity.valueMissing) {
    fname.setCustomValidity("this field cannot be empty");
    alert(fname);
  } else {
    fname.setCustomValidity("");
  }
});
