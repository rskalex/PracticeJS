"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a1 = prompt('Один из последних просмотренных фильмов?', ''),
    a2 = prompt('На сколько оцените его?', ''),
    a3 = prompt('Один из последних просмотренных фильмов?', ''),
    a4 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a1] = a2;
personalMovieDB.movies[a3] = a4;

console.log(personalMovieDB);

alert(personalMovieDB.count);