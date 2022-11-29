// const ul = document.querySelector(".faq-list");
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
