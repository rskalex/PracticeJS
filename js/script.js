// "use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// console.log(typeof(numberOfFilms));

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a, b;

// // Cycle FOR
// for (let i = 0; i < 2; i++){
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('Ok!');
//     } else {
//         console.log('Try again');
//         i--;
//     }
// }

// //Cycle WHILE
// // let i = 0;
// // while(i < 2){
// //     a = prompt('Один из последних просмотренных фильмов?', '');
// //     b = prompt('На сколько оцените его?', '');

// //     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//     // personalMovieDB.movies[a] = b;
//     // console.log('Ok!');
//     // } else {
//     //     console.log('Try again');
//     //     i--;
//     // }
    
// //     i++;
// // }

// //Cycle DO WHILE
// // let i = 0;
// // do{
// //     a = prompt('Один из последних просмотренных фильмов?', '');
// //     b = prompt('На сколько оцените его?', '');

// //     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//     //     personalMovieDB.movies[a] = b;
//     //     console.log('Ok!');
//     // } else {
//     //     console.log('Try again');
//     //     i--;
//     // }
    
// //     i++;
// // }
// // while(i < 2);

// if(personalMovieDB.count < 10){
//     console.log('Просмотрено довольно мало фильмов');
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Вы классический зритель');
// } else if(personalMovieDB.count >= 30){
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);


//Далее идет практика не имеющая отношения к основному заданию
//=========================================


const calc = (a, b) => {
    console.log('1');
    return a + b;
};

console.log(calc(3, 3));

console.log(calc(1, 3) + 4);

//===============================

const name = prompt('Enter your name please', '');

if(name === 'Alex'){
    console.log('Hello, Alex!')
} else {
    console.log('Hello, unknown!')
}

//===============================

for(let i = 3; i < 10000; i = i * 3){
    console.log(i);
}

let x = 3;
while(x < 10000){
    console.log(x);
    x *= 3;
}

//=============================

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for(let i = 0; i < animals.length; i++){
    console.log(animals[i] + ' - perfect animal');
}

//=============================

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomSymbol = '';
let randomStr = '';

let i = 0;
while(i <= 6){
    randomSymbol = Math.floor(Math.random() * alphabet.length);
    // console.log(randomSymbol);
    console.log(randomStr = randomStr + alphabet[randomSymbol]);
    i++;
}

//=============================

var input = "javascript is awesome";
var output = "";

for(let i = 0; i < input.length; i++){
    if(input[i] === 'a'){
        output += '4';
    } else if(input[i] === 'e'){
        output += '3';
    } else if(input[i] === 'i'){
        output += '1';
    } else if (input[i] === 'o'){
        output += '0';
    } else {
        output += input[i];
    }
    
}
console.log(output);