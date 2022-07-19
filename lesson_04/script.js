let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", "").trim();
    let b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMoviesDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("err");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Вы класический зритель");
  } else if (personalMoviesDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, "");
  }
}

writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) console.log(personalMoviesDB);
}

showMyDB(personalMoviesDB.privat);
