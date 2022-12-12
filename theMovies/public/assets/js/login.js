// Login Email - Phone
const inputEmail = () => {
  const formEmail = document.querySelectorAll(".form-input")[0];
  const input = formEmail.querySelector(".input-tag");

  input.addEventListener("focus", (e) => {
    if (e.target.value != "") input.classList.add("has-txt");
    else if (e.target.value == "") input.classList.remove("has-txt");
  });

  input.addEventListener("change", (e) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const wrapForm = formEmail.querySelector(".wrap-form");
    const errorMess = formEmail.querySelector(".input-error");

    if (e.target.value.trim() != "") {
      input.classList.add("has-txt");
      if (
        regexEmail.test(e.target.value) == false &&
        regexPhoneNumber.test(e.target.value) == false
      ) {
        errorMess.style.display = "block";
        errorMess.innerHTML = "Vui lòng nhập email hoặc số điện thoại hợp lệ.";
        wrapForm.style.setProperty("--afterNone", "block");
      } else {
        errorMess.style.display = "none";
        wrapForm.style.setProperty("--afterNone", "none");
      }
    } else {
      e.target.value = "";
      input.classList.remove("has-txt");
      errorMess.style.display = "none";
      wrapForm.style.setProperty("--afterNone", "none");
    }
  });
};

// Login Password
const inputPass = () => {
  const formPass = document.querySelectorAll(".form-input")[1];
  const input = formPass.querySelector(".input-tag");
  const btnToggle = formPass.querySelector(".btn-toggle");
  const wrapForm = formPass.querySelector(".wrap-form");
  const errorMess = formPass.querySelector(".input-error");

  input.addEventListener("focus", (e) => {
    wrapForm.classList.add("password-toggle");
    if (e.target.value != "") input.classList.add("has-txt");
    else if (e.target.value == "") input.classList.remove("has-txt");
  });

  input.addEventListener("change", (e) => {
    if (e.target.value.trim() != "") {
      input.classList.add("has-txt");
      if (e.target.value.length < 4 || e.target.value.length > 10) {
        wrapForm.style.setProperty("--afterNone", "block");
        errorMess.style.display = "block";
        errorMess.innerHTML = "Mật khẩu của bạn phải chứa từ 4 đến 10 ký tự.";
      } else {
        wrapForm.style.setProperty("--afterNone", "none");
        errorMess.style.display = "none";
      }
    } else if (e.target.value == "") {
      input.classList.remove("has-txt");
      errorMess.style.display = "none";
      wrapForm.style.setProperty("--afterNone", "none");
    }
  });

  // Toggle btn show / hide
  btnToggle.innerHTML = "HIỆN";
  btnToggle.addEventListener("mousedown", () => {
    if (btnToggle.innerText == "HIỆN") {
      setTimeout(() => {
        btnToggle.innerText = "ẨN";
        input.type = "text";
        input.focus();
      }, 100);
    } else if (btnToggle.innerText == "ẨN") {
      setTimeout(() => {
        btnToggle.innerText = "HIỆN";
        input.type = "password";
        input.focus();
      }, 100);
    }
  });

  // blur remove toggle show password
  input.addEventListener("blur", () => {
    wrapForm.classList.remove("password-toggle");
  });
};

// Remember password
const remember = () => {
  const email = document.querySelector("#email");
  const pass = document.querySelector("#password");
  const rememberInput = document.querySelector("#remember");
  const btnLogin = document.querySelector("#btn-login");

  if (localStorage.checkbox && localStorage.checkbox != "") {
    rememberInput.setAttribute("checked", "checked");
    email.value = localStorage.username;
    pass.value = localStorage.password;
    email.classList.add("has-txt");
    pass.classList.add("has-txt");
  } else {
    rememberInput.removeAttribute("checked");
    email.value = "";
    pass.value = "";
  }

  const isRemember = () => {
    if (rememberInput.checked && email.value != "" && pass.value != "") {
      localStorage.username = email.value;
      localStorage.password = pass.value;
      localStorage.checkbox = rememberInput.checked;
    } else {
      localStorage.username = "";
      localStorage.password = "";
      localStorage.checkbox = "";
    }
  };

  btnLogin.addEventListener("click", () => {
    alert("cảm ơn bạn đã đăng nhập!");
    isRemember();
  });
};

window.onload = () => {
  inputEmail();
  inputPass();
  remember();
};
