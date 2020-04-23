'use strict' //директива ES6

/* LESSON 4
//всплывающее окно на странице
alert(1)

var leftBorderWight = 1;
//let and const - переменные стандарта ES6
{
    let second = 2; //создается только когда до нее доходит, 
                    //может назначается в фигурных скобках, чтобы создавать ее только когда будем заходить в блок
}

const pi = 3.14;

//вывод в консоль браузера
console.log(leftBorderWight);
*/
/*
//LESSON 5
//console.log(4/0);

// console.log(something);

let persone = { //how object is created
    name: "Andrii",
    age: 31,
    isMaried: true
};

console.log(persone.name);
console.log(persone["age"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp']; //массив
console.log(arr[2]);
*/
/*
// LESSON 6
// alert("hello world!")
// confirm("Are you here?");

// let answer = confirm("Are you here?");
// console.log(answer); //will return true or false depends on the answer - ok or cancel

let answer = prompt("Есть ли вам 18?", "Да"); //окно с вводом информации
console.log(answer);
console.log(typeof(answer)); //от пользователя получаем тип string; typeof - проверка на тип
*/

// LESSON 7
// let answer = +prompt("Есть ли вам 18?", "Да");
// console.log(answer); //окно с вводом информации, + перед prompt вернет от пользователя тип number
// console.log(typeof(answer)); // + переводит значение в number
//инкрементальные операторы
let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);
//вернет измененное значение - префиксная форма
console.log(++incr); 
console.log(--decr);
//вернет первое значение и только после этого применит инкремент - постфиксная форма
console.log(incr++); 
console.log(decr--);

console.log("2" == 2); //true - сравнивает значения
console.log("2" === 2); //falce - сравнение на тип данных