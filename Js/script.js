function NameValidation() {
  var name = document.getElementById("name").value.trim();
  var nameError = document.getElementById("nameError");
  if (name === "") {
    nameError.textContent = "Please enter your name.";
    return false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = "Name can only contain letters and spaces.";
    return false;
  }
  nameError.textContent = "";
  return true;
}
function EmailValidation() {
  var email = document.getElementById("email").value.trim();
  var emailError = document.getElementById("emailError");
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    return false;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  }
  emailError.textContent = "";
  return true;
}
function PhoneValidation() {
  var phone = document.getElementById("phone").value.trim();
  var phoneError = document.getElementById("phoneError");
  if (phone === "") {
    phoneError.textContent = "Please enter your phone number.";
    return false;
  } else if (!/^\d{11}$/.test(phone)) {
    phoneError.textContent = "Phone number must be 11 digits.";
    return false;
  }
  phoneError.textContent = "";
  return true;
}
function AddressValidation() {
  var address = document.getElementById("address").value.trim();
  var addressError = document.getElementById("addressError");
  if (address === "") {
    addressError.textContent = "Please enter your address.";
    return false;
  }
  addressError.textContent = "";
  return true;
}
function PasswordValidation() {
  var pass = document.getElementById("pass").value.trim();
  var passError = document.getElementById("passError");
  if (pass === "") {
    passError.textContent = "Please enter your password.";
    return false;
  } else if (pass.length < 8) {
    passError.textContent = "Password must be at least 8 characters.";
    return false;
  }
  passError.textContent = "";
  return true;
}
// function test() {
//   var nameInput = document.getElementById("name1");
//   var count = 0;
//   for (var i = 0; i < nameInput.value.length; i++) {
//     count++;
//   }
//   document.getElementById("result").innerHTML = count;
//   return false;
// }
