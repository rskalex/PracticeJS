"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        } else if(personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyBD: function (hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 0; i < 3; i++){
            let yourGenres = prompt(`Ваш любимый жанр под номером ${i + 1}` , '');
            if(yourGenres == '' || yourGenres == null){
                i--;
            } else {    
                personalMovieDB.genres[i] = yourGenres; 
            }
        }

        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Favorite genre ${i + 1} is ${element}`);
        });
    }, 
    toggleVisibleMyBD: function () {
        if(personalMovieDB.privat === false){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyBD();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyBD();

