// Get movie id from location.pathname
let movieId = location.pathname;

// Fetching detail movie
fetch(
  `${base_url}${movieId}?` +
    new URLSearchParams({
      api_key: api_key,
    })
)
  .then((res) => res.json())
  .then((data) => {
    setupMovieInfo(data);
  });

const setupMovieInfo = (data) => {
  // Get title trang web
  const title = document.querySelector("title");

  const movieName = document.querySelector(".movie-name");
  const genres = document.querySelector(".genres");
  const desc = document.querySelector(".desc");
  const backdrop = document.querySelector(".movie-info");

  title.innerHTML = movieName.innerHTML = data.title;
  genres.innerHTML = `${data.release_date.split("-")[0]} | `;

  for (let i = 0; i < data.genres.length; i++) {
    genres.innerHTML +=
      data.genres[i].name + formatString(i, data.genres.length);
  }

  if (data.adult == true) {
    genres.innerHTML += " | +18";
  }

  if (data.backdrop_path == null) {
    data.backdrop_path = data.poster_path;
  }

  desc.innerHTML = data.overview.substring(0, 200) + "...";

  backdrop.style.backgroundImage = `url(${imgOriginalUrl}${data.backdrop_path})`;
};

const formatString = (currentIndex, maxIndex) => {
  return currentIndex == maxIndex - 1 ? "" : ", ";
};

// Fletch cast info
fetch(
  `${base_url}${movieId}/credits?` +
    new URLSearchParams({
      api_key: api_key,
    })
)
  .then((res) => res.json())
  .then((data) => {
    const cast = document.querySelector(".starring");

    for (let i = 0; i < 5; i++) {
      cast.innerHTML += data.cast[i].name + formatString(i, 5);
    }
  });

//   fetch video clips

fetch(
  `${base_url}${movieId}/videos?` +
    new URLSearchParams({
      api_key: api_key,
    })
)
  .then((res) => res.json())
  .then((data) => {
    let wrapIframe = document.querySelector(".wrap-iframes");

    let maxClips = data.results.length > 4 ? 4 : data.results.length;

    for (let i = 0; i < maxClips; i++) {
      wrapIframe.innerHTML += `
        <iframe src="http://youtube.com/embed/${data.results[i].key}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        `;
    }
  });

//   fetch recommendations
fetch(
  `${base_url}${movieId}/recommendations?` +
    new URLSearchParams({
      api_key: api_key,
    })
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let container = document.querySelector(".recommendations-container");

    for (let i = 0; i < 16; i++) {
      if (data.results[i].backdrop_path !== null) {
        container.innerHTML += `
        <div class="movie">
                <a href="/${data.results[i].id}">
                    <img src="${imgUrl}${data.results[i].backdrop_path}" alt="${data.results[i].title}">
                    <p class="movie-title">${data.results[i].title}</p>
                </a>
            </div>
        `;
      }
    }
  });
