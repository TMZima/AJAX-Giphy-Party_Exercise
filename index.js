// look back at the <readme.md> file for some hints //
// working API key //
// const giphyApiKey = "Z4xt2m0XuWmMRab5Ii0TuxqSqlPDlD9E";
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const input = document.getElementById("searchBar");
const createGif = document.getElementById("searchBtn");
const removeGifs = document.getElementById("deleteBtn");
const displayGif = document.getElementById("displayDiv");

let contentSet = false;

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    createGif.click();
  }
});

createGif.addEventListener("click", function (e) {
  e.preventDefault();
  divCleared();
  generateGif(input.value);
});

removeGifs.addEventListener("click", function () {
  displayGif.innerHTML = "... Your GIFs here ...";
  displayGif.classList.remove("hasImg");
  contentSet = false;
});

async function generateGif(query) {
  let img = document.createElement("img");

  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}&limit=10`
  );
  img.src = response.data.data[3].images.fixed_width.url;
  img.classList.add("gifImg");
  displayGif.appendChild(img);
  displayGif.classList.add("hasImg");
  //   console.log(response.data);
}

function divCleared() {
  if (!contentSet) {
    displayGif.innerHTML = "";
    contentSet = true;
  }
}

// ERRORS
// -bad apiKey
// -Too many requests
// -No gifs found
// -
