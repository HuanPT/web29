const main = document.querySelector(".heading");

fetch(
  // thực hiện yêu cầu và nối với params
  genresList +
    // phân tích truy xuất chuỗi cú pháp trong params
    new URLSearchParams({
      api_key: api_key,
    })
  //  Phương thức fetch() trả về một promise có
  // trạng thái resolves với giá trị là response cho request đó.
)
  // response with json
  // trả về một promise resolves(data) dạng JSON.
  .then((res) => res.json())
  .then((data) => {
    // xử lý data trong json
    data.genres.forEach((item) => {
      fetchMoviesListByGenres(item.id, item.name);
    });
  });

const fetchMoviesListByGenres = (id, genres) => {
  fetch(
    // thực hiện yêu cầu và nối với với params
    movieGenresLink +
      new URLSearchParams({
        // phân tích truy xuất chuỗi cú pháp trong params
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1,
      })
  )
    // response with json
    // trả về một promise resolves(data) dạng JSON.
    .then((res) => res.json())
    .then((data) => {
      makeCategoryElement(`${genres}_movies`, data.results);
    })
    .catch((err) => console.log("err"));
};

const makeCategoryElement = (category, data) => {
  main.innerHTML += `
            <div class="movie-list">
                <button class="pre-btn">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <div class="h1 movie-category">
                    ${category.split("_").join(" ")}
                </div>
                <div class="movie-container" id ="${category}">
                    
                </div>
                <button class="nxt-btn">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
  `;
  makeCards(category, data);
};

const makeCards = (id, data) => {
  const movieContainer = document.getElementById(id);
  data.forEach((item, i) => {
    if (item.backdrop_path == null) {
      item.backdrop_path = item.poster_path;
      if (item.backdrop_path == null) {
        return;
      }
    }

    movieContainer.innerHTML += `
                    <div class="movie">
                        <a href="/${item.id}">
                          <img src="${imgUrl}${item.backdrop_path}" alt="">
                          <p class="movie-title">${item.title}</p>
                        </a>
                    </div>
    `;

    // Button slide
    if (i == data.length - 1) {
      setTimeout(() => {
        setupScrolling();
      }, 100);
    }
  });
};
