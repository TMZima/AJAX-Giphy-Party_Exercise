// Working API keys
const giphyApiKey1 = "Z4xt2m0XuWmMRab5Ii0TuxqSqlPDlD9E";
const giphyApiKey2 = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const input = document.getElementById("searchBar");
const createGif = document.getElementById("searchBtn");
const removeGifs = document.getElementById("deleteBtn");
const displayGif = document.getElementById("displayDiv");

let contentSet = false;

// Handle Enter key press in the input field
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    createGif.click();
  }
});

// Handle search button click
createGif.addEventListener("click", (e) => {
  e.preventDefault();
  clearDisplay();
  generateGif(input.value);
});

//Handle delete button click
removeGifs.addEventListener("click", () => {
  resetDisplay();
});

// Fetch and display GIF based on the query
async function generateGif(query) {
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey2}`
    );
    const gifs = response.data.data;
    if (gifs.length === 0) {
      displayGif.innerHTML = "No GIFs found.";
      return;
    }
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const img = createGifElement(gifs[randomIndex].images.fixed_width.url);
    displayGif.appendChild(img);
    displayGif.classList.add("hasImg");
  } catch (error) {
    console.error("Error fetching GIF:", error);
    displayGif.innerHTML = "Error fetching GIF. Please try again.";
  }
}

// Clear display div
function clearDisplay() {
  if (!contentSet) {
    displayGif.innerHTML = "";
    contentSet = true;
  }
}

// Reset display div
function resetDisplay() {
  displayGif.innerHTML = "... Your GIFs here ...";
  displayGif.classList.remove("hasImg");
  contentSet = false;
}

// Create GIF element
function createGifElement(src) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("gifImg");
  return img;
}
