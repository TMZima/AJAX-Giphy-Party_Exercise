# **AJAX Giphy Party**

## **APIs Introduction Review**

We have had an introduction to web APIs. Time for a mini project to put some key concepts together. This will be an application of concepts you learned in this unit and all the previous units, especially

- **Javascript**
- **Intermediate Javascript (especially Promises)**
- **Javascript and the Web**

APIs are part of everyday life. When you use YouTube or Netflix or Gmail you are constantly accessing their web APIs. We will build something similar in this section. (Alright alright maybe nothing that complicated just yet 🙂 )

### **Concept 1: Exploring web APIs using a browser**

We can explore some free web APIs using just our browser, play around with requests and see what responses we get.

Head over to this link here:

[**https://apipheny.io/free-api/**](https://apipheny.io/free-api/)

Many web APIs require an API key. Think of it as a “gatekeeper” for a specific web API. These API keys  are a way to protect the provider of a specific API  from malicious users or attacks. However we can start playing around with small, free resources which don’t require an API key and see what we get in our browser responses.

Navigate to **Top 15 Free APIs Without Key or Authentication** and play around with requests.

[\*\*Use this video for your reference](https://youtu.be/aPhG1Vt1Egc?si=JU6wTC7rRawl_fBV)\*\* and a more detailed explanation.

### **Concept 2: Exploring web APIs using CURL requests**

Remember that “CURL requests video” and how to use CURL in general? Well we can expand on that and what is this ‘weird’ CURL program anyways:

The developers of CURL define it as so:

**cURL** (Client URL) is a command-line tool and library used to transfer data to or from a server, typically via common internet protocols such as HTTP, HTTPS, FTP, and many others. It allows you to make network requests directly from the terminal or within programs, making it a versatile tool for interacting with APIs, downloading files, or testing web applications.

Mkay… great, lot’s of word salad there. But in simplified terms, we don’t necessarily need a web browser to interact with the web and web APIs. We can use a simple small program which is part of Mac, Linux, or Windows WSL (if you have installed it correctly)

That previous link:

[**https://apipheny.io/free-api/**](https://apipheny.io/free-api/)

Well: We can explore some of these links with CURL commands and see what we get.

Take a look at [\*\*this video going in depth as well](https://youtu.be/z3xMXg9MV_4?si=zvLS5dWuxN68Hi_W).\*\*

### **Concept 3: Exploring web APIs using Javascript**

Well alright you might say, I can access an API in a browser, I can send in a CURL request and get back some data from a web API, but how can I access an API with Javascript?

Javascript has its own functions for working with web APIs mainly:

- **fetch** which is part of its Web Platform
- **axios** which is an external Javascript library (like an add on)

Head back to:

[**https://apipheny.io/free-api/**](https://apipheny.io/free-api/)

And [\*\*follow along with this video](https://youtu.be/2wGKKAFEogw?si=KRsobk4y-P9ZhlHZ),\*\* to explore how to access APIs with Javascript

For reference, starter code is here:

[**_simple-api-example-starter.zip_**](https://drive.google.com/file/d/1tR-VWmlCSDf03pvprY1g0TQI4j_VQQsz/view?usp=sharing)

### **Concept 4: Putting Them All Together - Using an API Key, Passing in Custom Params**

So far we hit these free APIs without an API key. But how about if we want to pass in an API key or use custom parameters to get custom responses?

Firstly register for a free account at Spoonacular API:

[**https://spoonacular.com/food-api**](https://spoonacular.com/food-api)

This is a free API. There is a paid plan of course, but for all of our purposes, the free plan will be just fine.

Once you create an account and log in, navigate to the Dashboard section. Find the “Show/Hide API Key” button and copy your API key. You will need it for the starter code.

[**Follow along with the following video**](https://youtu.be/nVSmZ5mYKPo?si=wTjtwWk26lA5l4_X) and let’s explore this particular web API in depth.

Starter code is here as well:

[**spoonacular-example-starter.zip**](https://drive.google.com/file/d/1fKM0o283fFKSWeOKXNnq7oFMl3tZUOen/view?usp=sharing)

### **Concept 5: An example app using the Spoonacular API and ALL of the Concepts**

Alright, HTML, CSS, Javascript, DOM manipulation, Promises,  web APIs and all. Let’s review it all and put it together in a code-along to create an app which will just give us a random recipe from the Spoonacular API. (You registered and made that API key right? 🙂

The task is simple

- Click a button
- Get a random recipe
- Display that random recipe

[Follow **along in this video here**](https://youtu.be/RUu2jHPQm6I?si=Tt8V0OxWo0v6yslJ), and the starter code is below:

[**food-generator-starter.zip**](https://drive.google.com/file/d/12HiF6KklzcSflQDdKuRVQ-9WTVm05wwo/view?usp=sharing)

### **Concept 6: A Review on Error Handling**

Error handling is tedious and difficult, yet so important. We need to anticipate some errors to show a potential user where things may be going wrong. This will build on the previous material, no starter code needed.

Do **[follow along in the wrap up video here](https://youtu.be/uVvFqTKz7u8?si=KV-uvdYHGiAriddX)**

And some examples of the final code here:

[**finished-random-recipe.zip**](https://drive.google.com/file/d/1SSzR009HlIgRFusHRxFeGxzUx7vYQ0nN/view?usp=sharing)

## **Back to the Giphy Party**

Take a look at the linked starter file. When you open it up, take a close look at the provided <readme.md> file. Within it you will find hints on how to work with the GIPHY API with some examples. If you're unsure about the API endpoints, explore the <readme.md> for more hints.

[**giphy-party-starter.zip**](https://drive.google.com/file/d/1WdQWhvhwVRz3bkNKylsFuLl3tPRBZzR-/view?usp=drive_link)

It’s time to build something fun with your knowledge of <axios> and AJAX! For this exercise we will be using the Giphy API! This will require you to use an API key and understand some of the documentation about the API.

## **The Application**

Your application should do the following:

- Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
- Once the Giphy API has responded with data, append the GIF to the page
- Allow the user to search for as many GIFs as they would like and keep appending them to the page
- Allow the user to remove all of the GIFs by clicking a button
- Here is an example of what the application might look like

![long gif size… could take few seconds to load on your page](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7cfaa680-8b92-4885-bdba-d022d033a054/app.gif)

long gif size… could take few seconds to load on your page

## **Part 1: Building the Form**

Start by building a simple form with an input for a search term and a submit button. When the user submits the form, use <axios> to make a request to GIPHY for information based on that term.

After receiving the response you can <**_console.log>_** the response data to make sure you’re getting back what you expect.

For example, here is what the AJAX request URL would look like for search term of “hilarious”: [\*\*http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym](http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym).\*\* You can click on this URL and see the JSON you will get back. To view this in a nicer format, we highly recommend using the JSON Viewer chrome extension. This is also the data you should console.log when the form is submitted.

**Hint:** Look back on how to select an <input> element and get the value of the text in it

## **Part 2: Appending GIFs**

Now that you’re communicating properly with the API, you should do something more interesting with the response data. Instead of logging it, grab a GIF from the response data and append the GIF to the page. Ensure that if you submit the form multiple times, you’ll get multiple GIFs showing up.

**Hint:** Look back at Event Listeners and DOM manipulation

## **Part 3: Removing GIFs**

Add a button next to the form which, when clicked, will remove all GIFs from the page.

**Hint:** Look back at Event Listeners and DOM manipulation as well
