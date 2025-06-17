// Validation rules
const validators = {
  name: (value) =>
    /^[A-Za-z ]+$/.test(value.trim())
      ? ""
      : "Only alphabets and spaces allowed.",
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? ""
      : "Invalid email address.",
  phone: (value) =>
    /^[0-9]+$/.test(value.trim()) ? "" : "Only numeric values allowed.",
  address: (value) =>
    /^[A-Za-z0-9 ,]+$/.test(value.trim())
      ? ""
      : "Only alphanumeric, comma, and space allowed.",
  password: (value) => {
    if (!value) return "Password is required.";
    if (!/[A-Z]/.test(value)) return "Must include a capital letter.";
    if (!/[0-9]/.test(value)) return "Must include a number.";
    if (!/[^A-Za-z0-9]/.test(value)) return "Must include a special character.";
    return "";
  },
};

// Attach onblur validation
document
  .querySelectorAll("#regForm input, #regForm textarea")
  .forEach((field) => {
    field.addEventListener("blur", function () {
      validateField(field);
    });
  });

function validateField(field) {
  const name = field.name;
  const value = field.value;
  const errorMsg = validators[name](value);
  const errorSpan = field.parentElement.querySelector(".error-message");
  if (errorMsg) {
    field.classList.add("error");
    errorSpan.textContent = errorMsg;
    return false;
  } else {
    field.classList.remove("error");
    errorSpan.textContent = "";
    return true;
  }
}

function validateForm() {
  let valid = true;
  document
    .querySelectorAll("#regForm input, #regForm textarea")
    .forEach((field) => {
      if (!validateField(field)) valid = false;
    });
  return valid;
}

// Progress bar animation
function animateProgressBar() {
  const bar = document.getElementById("progressBar");
  bar.style.width = "0%";
  let width = 0;
  return new Promise((resolve) => {
    document.getElementById("progressBarContainer").style.display = "block";
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        resolve();
      } else {
        width += 5 + Math.random() * 10;
        if (width > 100) width = 100;
        bar.style.width = width + "%";
      }
    }, 80);
  });
}

document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const submitBtn = document.getElementById("submitBtn");
  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = "";
  if (!validateForm()) return;

  submitBtn.disabled = true;
  animateProgressBar().then(() => {
    setTimeout(() => {
      document.getElementById("progressBarContainer").style.display = "none";
      document.getElementById("progressBar").style.width = "0%";

      const success = Math.random() > 0.3;
      if (success) {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.className = "message success";
        document.getElementById("regForm").reset();
      } else {
        formMessage.textContent = "Submission failed. Please try again.";
        formMessage.className = "message error";
      }
      submitBtn.disabled = false;
    }, 1200);
  });
});

function NameValidation() {
  var name = document.getElementById("name").value.trim();
  var nameError = document.getElementById("nameError");
  var nameInput = document.getElementById("name");

  if (name === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("error");
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
      nameInput.classList.add("error");
      return false;
    }
  }
  nameError.textContent = "";
  nameInput.classList.remove("error");
  return true;
}

function EmailValidation() {
  var email = document.getElementById("email").value.trim();
  var emailError = document.getElementById("emailError");
  var emailInput = document.getElementById("email");

  if (email === "") {
    emailError.textContent = "Please enter your email.";
    emailInput.classList.add("error");
    return false;
  }
  // Simple email regex
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("error");
    return false;
  }
  emailError.textContent = "";
  emailInput.classList.remove("error");
  return true;
}

function PhoneValidation() {
  var phone = document.getElementById("phone").value.trim();
  var phoneError = document.getElementById("phoneError");
  var phoneInput = document.getElementById("phone");

  if (phone === "") {
    phoneError.textContent = "Please enter your phone number.";
    phoneInput.classList.add("error");
    return false;
  }
  for (var i = 0; i < phone.length; i++) {
    var char = phone[i];
    if (!(char >= "0" && char <= "9")) {
      phoneError.textContent = "Phone number can only contain digits.";
      phoneInput.classList.add("error");
      return false;
    }
  }
  phoneError.textContent = "";
  phoneInput.classList.remove("error");
  return true;
}

function AddressValidation() {
  var address = document.getElementById("address").value.trim();
  var addressError = document.getElementById("addressError");
  var addressInput = document.getElementById("address");

  if (address === "") {
    addressError.textContent = "Please enter your address.";
    addressInput.classList.add("error");
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
        "Address can only contain letters, numbers, commas, and spaces.";
      addressInput.classList.add("error");
      return false;
    }
  }
  addressError.textContent = "";
  addressInput.classList.remove("error");
  return true;
}

function PasswordValidation() {
  var pass = document.getElementById("password").value.trim();
  var passError = document.getElementById("passError");
  var passInput = document.getElementById("password");

  if (pass === "") {
    passError.textContent = "Please enter your password.";
    passInput.classList.add("error");
    return false;
  }
  if (!/[A-Z]/.test(pass)) {
    passError.textContent = "Password must include a capital letter.";
    passInput.classList.add("error");
    return false;
  }
  if (!/[0-9]/.test(pass)) {
    passError.textContent = "Password must include a number.";
    passInput.classList.add("error");
    return false;
  }
  if (!/[^A-Za-z0-9]/.test(pass)) {
    passError.textContent = "Password must include a special character.";
    passInput.classList.add("error");
    return false;
  }
  passError.textContent = "";
  passInput.classList.remove("error");
  return true;
}

// Attach onblur events
document.getElementById("name").onblur = NameValidation;
document.getElementById("email").onblur = EmailValidation;
document.getElementById("phone").onblur = PhoneValidation;
document.getElementById("address").onblur = AddressValidation;
document.getElementById("password").onblur = PasswordValidation;

// Form submit with AJAX simulation and progress bar
document.getElementById("regForm").onsubmit = function (e) {
  e.preventDefault();
  var valid =
    NameValidation() &&
    EmailValidation() &&
    PhoneValidation() &&
    AddressValidation() &&
    PasswordValidation();

  var submitBtn = document.getElementById("submitBtn");
  var formMessage = document.getElementById("formMessage");
  var progressBarContainer = document.getElementById("progressBarContainer");
  var progressBar = document.getElementById("progressBar");

  if (!valid) return false;

  submitBtn.disabled = true;
  formMessage.textContent = "";
  progressBarContainer.style.display = "block";
  progressBar.style.width = "0%";

  var width = 0;
  var interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(function () {
        progressBarContainer.style.display = "none";
        progressBar.style.width = "0%";

        var success = Math.random() > 0.3;
        if (success) {
          formMessage.textContent = "Form submitted successfully!";
          formMessage.className = "message success";
          document.getElementById("regForm").reset();
        } else {
          formMessage.textContent = "Submission failed. Please try again.";
          formMessage.className = "message error";
        }
        submitBtn.disabled = false;
      }, 600);
    } else {
      width += 10 + Math.random() * 10;
      if (width > 100) width = 100;
      progressBar.style.width = width + "%";
    }
  }, 80);
};

function validateName(value) {
  if (value.trim() === "") {
    return "Please enter your name.";
  }
  for (var i = 0; i < value.length; i++) {
    var char = value[i];
    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "A" && char <= "Z") &&
      char !== " "
    ) {
      return "Only alphabets and spaces allowed.";
    }
  }
  return "";
}

function validateEmail(value) {
  if (value.trim() === "") {
    return "Please enter your email.";
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value.trim())) {
    return "Invalid email address.";
  }
  return "";
}

function validatePhone(value) {
  if (value.trim() === "") {
    return "Please enter your phone number.";
  }
  for (var i = 0; i < value.length; i++) {
    var char = value[i];
    if (!(char >= "0" && char <= "9")) {
      return "Only numeric values allowed.";
    }
  }
  return "";
}

function validateAddress(value) {
  if (value.trim() === "") {
    return "Please enter your address.";
  }
  for (var i = 0; i < value.length; i++) {
    var char = value[i];
    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "A" && char <= "Z") &&
      !(char >= "0" && char <= "9") &&
      char !== "," &&
      char !== " "
    ) {
      return "Only alphanumeric, comma, and space allowed.";
    }
  }
  return "";
}

function validatePassword(value) {
  if (value.trim() === "") {
    return "Please enter your password.";
  }
  if (!/[A-Z]/.test(value)) {
    return "Must include a capital letter.";
  }
  if (!/[0-9]/.test(value)) {
    return "Must include a number.";
  }
  if (!/[^A-Za-z0-9]/.test(value)) {
    return "Must include a special character.";
  }
  return "";
}
