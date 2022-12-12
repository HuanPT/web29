// Toggle questions
const faqQuestions = () => {
  const toggles = document.querySelectorAll(".faq-question");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const child = toggle.querySelector("i");
      const parse = toggle.closest("li");
      const answer = parse.querySelector(".answers");

      // check icon & answers
      const isRotateIcon = child.classList.contains("rotate-icon");
      const isOpenAnswers = answer.classList.contains("open-answers");

      // loop remove classList
      toggles.forEach((toggle) => {
        const child = toggle.querySelector("i");
        const parse = toggle.closest("li");
        const answer = parse.querySelector(".answers");
        child.classList.remove("rotate-icon");
        answer.classList.remove("open-answers");
      });

      // toggle if !check
      child.classList.toggle("rotate-icon", !isRotateIcon);
      answer.classList.toggle("open-answers", !isOpenAnswers);
    });
  });
};

const formEmail = () => {
  const formInputs = document.querySelectorAll(".email-form");

  formInputs.forEach((formInput) => {
    const input = formInput.querySelector(".input-tag");
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const submit = formInput.querySelector("button");
    const errorMess = formInput.querySelector(".input-error");
    const registerForm = document.querySelector(".register-form");
    const body = document.querySelector("body");
    console.log(submit);
    submit.addEventListener("click", () => {
      if (regexEmail.test(input.value) == true) {
        alert("chuyển sang form đăng ký");
        registerForm.style.display = "flex";
        body.style.overflow = "hidden";
      } else {
        input.focus();
        input.style.borderBottom = "2px solid #ffa00a";
        errorMess.style.display = "block";
        errorMess.innerHTML = "Bạn cần nhập email.";
      }
    });

    input.addEventListener("input", (e) => {
      if (e.target.value.trim() != "") {
        input.classList.add("has-txt");
        if (regexEmail.test(e.target.value) == false) {
          errorMess.style.display = "block";
          errorMess.innerHTML = "Vui lòng nhập địa chỉ email hợp lệ.";
          input.style.border = "0";
          input.style.borderBottom = "2px solid #ffa00a";
        } else {
          errorMess.style.display = "none";
          input.style.border = "1px solid #8c8c8c";
        }
      } else {
        e.target.value = "";
        input.classList.remove("has-txt");
        errorMess.style.display = "none";
        input.style.border = "1px solid #8c8c8c";
      }
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit.click();
      }
    });
  });
};

// Register Form
const register = () => {
  const body = document.querySelector("body");
  const registerForm = document.querySelector(".register-form");
  const btnLogo = registerForm.querySelector(".header-top-logo");

  btnLogo.addEventListener("click", () => {
    registerForm.style.display = "none";
    body.style.overflow = "auto";
  });
};

window.onload = () => {
  faqQuestions();
  formEmail();
  register();
};
