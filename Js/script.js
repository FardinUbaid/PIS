function NameValidation() {
  var name = document.getElementById("name").value.trim();
  var nameError = document.getElementById("nameError");

  if (name === "") {
    nameError.textContent = "Please enter your name.";
    return false;
  }

  for (var i = 0; i < name.length; i++) {
    var char = name[i];
    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "A" && char <= "Z") &&
      char !== " "
    ) {
      nameError.textContent = "Name can only contain letters and spaces.";
      return false;
    }
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
  }

  for (var i = 0; i < email.length; i++) {
    var char = email[i];
    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "A" && char <= "Z") &&
      !(char >= "0" && char <= "9") &&
      !["@", "-", "_", "."].includes(char)
    ) {
      emailError.textContent =
        "Email can only contain letters, numbers, and special characters (., _, -, @).";
      return false;
    }
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
  }

  if (phone.length < 11) {
    phoneError.textContent = "Phone number must be at least 11 digits.";
    return false;
  }

  for (var i = 0; i < phone.length; i++) {
    var char = phone[i];
    if (!(char >= "0" && char <= "9")) {
      phoneError.textContent = "Phone number can only contain digits.";
      return false;
    }
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

  for (var i = 0; i < address.length; i++) {
    var char = address[i];
    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "A" && char <= "Z") &&
      !(char >= "0" && char <= "9") &&
      char !== "," &&
      char !== " "
    ) {
      addressError.textContent =
        "Address can only contain letters, numbers, and commas.";
      return false;
    }
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
  }

  if (pass.length < 8) {
    passError.textContent = "Password must be at least 8 characters.";
    return false;
  }

  for (var i = 0; i < pass.length; i++) {
    var char = pass[i];
    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "A" && char <= "Z") &&
      !(char >= "0" && char <= "9") &&
      !["@", "#", "$", "%", "&"].includes(char)
    ) {
      passError.textContent =
        "Password can only contain letters, numbers, and (@, #, $, %, &).";
      return false;
    }
  }

  passError.textContent = "";
  return true;
}
