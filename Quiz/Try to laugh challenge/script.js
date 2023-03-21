<<<<<<< HEAD
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

function generateJoke() {
  const fj = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', fj)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
=======
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

function generateJoke() {
  const fj = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', fj)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
>>>>>>> 376f8e675e9597e48ed367b554fa7be5cd7c8362
}