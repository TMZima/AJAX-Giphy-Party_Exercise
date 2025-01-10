// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "Z4xt2m0XuWmMRab5Ii0TuxqSqlPDlD9E";

const input = document.getElementById("searchBar");
const createGif = document.getElementById("searchBtn");
const removeGifs = document.getElementById("deleteBtn");
const displayGif = document.getElementById("displayDiv");

let contentSet = false;

createGif.addEventListener("click", function () {
  generateGif(input.value);
  divCleared();
});

removeGifs.addEventListener("click", function () {
  displayDiv.innerHTML = "";
  displayDiv.innerHTML = "... Your GIFs here ...";
});

async function generateGif(query) {
  let img = document.createElement("img");

  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}&limit=10`
  );
  img.src = response.data.data[3].images.downsized.url;
  img.classList.add("gifImg");
  displayGif.appendChild(img);
  //   console.log(response.data.data[0].images);
}

function divCleared() {
  if (!contentSet) {
    displayGif.innerHTML = "";
    contentSet = true;
  }
}
