"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
//Cycle FOR
for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('Ok!');
    } else {
        console.log('Try again');
        i--;
    }
}

//Cycle WHILE
// let i = 0;
// while(i < 2){
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
    // personalMovieDB.movies[a] = b;
    // console.log('Ok!');
    // } else {
    //     console.log('Try again');
    //     i--;
    // }
    
//     i++;
// }

//Cycle DO WHILE
// let i = 0;
// do{
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
    //     personalMovieDB.movies[a] = b;
    //     console.log('Ok!');
    // } else {
    //     console.log('Try again');
    //     i--;
    // }
    
//     i++;
// }
// while(i < 2);
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyBD() {
    if(!personalMovieDB.privat){
        console.log(personalMovieDB)
    }
}

showMyBD();

function writeYourGenres() {
    for(let i = 0; i < 3; i++){
        const yourGenres = prompt(`Ваш любимый жанр под номером ${i + 1}` , '');
        personalMovieDB.genres[i] = yourGenres; 
    } 
}

writeYourGenres();
