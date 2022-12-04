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
  const formInputs = document.querySelectorAll(".form-input");

  formInputs.forEach((formInput) => {
    const input = formInput.querySelector(".input-tag");

    input.addEventListener("change", (e) => {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const wrapForm = formInput.querySelector(".wrap-form");
      const errorMess = formInput.querySelector(".input-error");

      if (e.target.value.trim() != "") {
        input.classList.add("has-txt");
        if (regexEmail.test(e.target.value) == false) {
          errorMess.style.display = "block";
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
  });
};

// Login Email - Phone

window.onload = () => {
  faqQuestions();
  formEmail();
};
