// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "Z4xt2m0XuWmMRab5Ii0TuxqSqlPDlD9E";

// axios
//   .get(
//     `http://api.giphy.com/v1/gifs/search?q=ice&api_key=${giphyApiKey}&limit=10`
//   )
//   .then((result) => {
//     console.log(result);
//   });
const img = document.getElementById("img");

async function giphyRequest() {
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/trending?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  console.log(response.data.data[0].images.downsized);
}
giphyRequest();
