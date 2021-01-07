"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(typeof(numberOfFilms));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a, b;
    
for (let i = 0; i < 2; i++){
    a = prompt('Один из последних просмотренных фильмов?', '');
    b = prompt('На сколько оцените его?', '');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 5){
        console.log('Ok!');
        personalMovieDB.movies[a] = b;
    } else {
        console.log('Try again');
        i--;
    }
}

if(personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert('Вы классический зритель');
} else if(personalMovieDB.count > 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);






