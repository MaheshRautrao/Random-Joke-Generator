const generate_btn = document.querySelector(".generate_btn");
const joke_container = document.querySelector(".joke");

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single";

generate_btn.addEventListener("click", generateJoke);

function generateJoke() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      var joke = data.joke;
      setJoke(joke);
    });
}

function setJoke(joke) {
  joke_container.textContent = `${joke}`;
}
