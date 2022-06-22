let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?", "");
  let b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMoviesDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("err");
    i--;
  }
}

console.log(personalMoviesDB);
