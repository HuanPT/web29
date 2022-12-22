// Slide setupScrolling
const setupScrolling = () => {
  const container = [...document.querySelectorAll(".movie-container")];
  const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
  const preBtn = [...document.querySelectorAll(".pre-btn")];
  container.forEach((item, i) => {
    // Get size & position of element (lấy ra kích thước & vị trí của phần tử)
    let containerDimensions = item.getBoundingClientRect();

    // Get width element (lấy ra chiều dài của phần tử)
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
      console.log(item);
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });
};
