//Task 1 JS

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("testForm");
  const submitBtn = document.getElementById("submitBtn");
  const responseDiv = document.getElementById("response");
  const loaderBox = document.getElementById("gradientLoader");
  const bars = loaderBox.querySelectorAll(".loader-bar");

  const fields = ["name", "email", "phone", "address", "password"];

  function showError(id, message) {
    const input = document.getElementById(id);
    const errorDiv = document.getElementById(id + "Error");
    input.classList.add("invalid");
    errorDiv.textContent = message;
  }

  function clearError(id) {
    const input = document.getElementById(id);
    const errorDiv = document.getElementById(id + "Error");
    input.classList.remove("invalid");
    errorDiv.textContent = "";
  }

  function isAlpha(str) {
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (!(c >= "A" && c <= "Z") && !(c >= "a" && c <= "z") && c !== " ")
        return false;
    }
    return true;
  }

  function isEmail(str) {
    let at = str.indexOf("@");
    let dot = str.lastIndexOf(".");
    return at > 0 && dot > at + 1 && dot < str.length - 1;
  }

  function isNumeric(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] < "0" || str[i] > "9") return false;
    }
    return true;
  }

  function isAlphaNumericAddress(str) {
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (
        !(c >= "A" && c <= "Z") &&
        !(c >= "a" && c <= "z") &&
        !(c >= "0" && c <= "9") &&
        c !== " " &&
        c !== ","
      ) {
        return false;
      }
    }
    return true;
  }

  function isStrongPassword(str) {
    let hasUpper = false,
      hasNumber = false,
      hasSpecial = false;
    let specials = "!@#$%^&*()_-+=[]{}|:;\"'<>,.?/~`";
    for (let i = 0; i < str.length; i++) {
      let c = str[i];
      if (c >= "A" && c <= "Z") hasUpper = true;
      else if (c >= "0" && c <= "9") hasNumber = true;
      else if (specials.includes(c)) hasSpecial = true;
    }
    return hasUpper && hasNumber && hasSpecial;
  }

  const validators = {
    name: (v) => v !== "" && isAlpha(v),
    email: (v) => v !== "" && isEmail(v),
    phone: (v) => v !== "" && isNumeric(v),
    address: (v) => v !== "" && isAlphaNumericAddress(v),
    password: (v) => v !== "" && isStrongPassword(v),
  };

  function validateField(id) {
    let value = document.getElementById(id).value.trim();
    if (!validators[id](value)) {
      showError(id, "Invalid " + id);
      return false;
    }
    clearError(id);
    return true;
  }

  fields.forEach((id) => {
    document
      .getElementById(id)
      .addEventListener("blur", () => validateField(id));
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let allValid = true;
    for (let i = 0; i < fields.length; i++) {
      if (!validateField(fields[i])) allValid = false;
    }
    if (!allValid) return;

    submitBtn.style.display = "none";
    responseDiv.textContent = "";
    loaderBox.style.display = "block";

    let current = 0;
    const interval = setInterval(() => {
      if (current >= bars.length) {
        clearInterval(interval);

        setTimeout(() => {
          loaderBox.style.display = "none";
          bars.forEach((bar) => (bar.innerHTML = ""));
          responseDiv.textContent = "Form submitted successfully!";
          form.reset();
          submitBtn.style.display = "inline-block";
        }, 500);
      } else {
        const bar = bars[current];
        const fill = document.createElement("div");
        fill.style.position = "absolute";
        fill.style.bottom = "0";
        fill.style.left = "0";
        fill.style.width = "100%";
        fill.style.height = "100%";
        fill.style.background =
          "linear-gradient(45deg,rgb(152, 113, 196),rgb(133, 57, 210),rgb(19, 155, 228))";
        fill.style.transition = "height 0.3s";
        bar.appendChild(fill);
        current++;
      }
    }, 150);
  });
});
