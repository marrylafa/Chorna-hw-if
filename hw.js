


//Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburgers = 3;
let potato = 1;

if(hamburgers > 2 && potato > 0){
    console.log("Ми поїли")
} else {
    console.log("Йдемо в інше кафе")
}

//Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.

let price = 1115;

if(price > 1000 && price < 1900){
    console.log("Ціна знаходиться в рамках між 1000 та 1900, становить " + price);
} else {
    console.log ("Ціна не перебуває в рамках між 1000 та 1900, становить " + price);
}

// Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let price1 = 1004;
let result = price1>999 && price1<1901;

//option 1
if(result != true){
    console.log("Ціна не знаходиться в межах 1000 та 1900, становить " + price1);
} else{
    console.log("Ціна знаходиться в межах 1000 та 1900, становить " + price1);
}


//option2
if(result = false){
    console.log("Ціна не знаходиться в межах 1000 та 1900, становить " + price1);
} else{
    console.log("Ціна знаходиться в межах 1000 та 1900, становить " + price1);
}

// За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let season = 3;

if(season == 1){
    console.log("Winter");
} else if(season == 2){
    console.log("Spring");
} else if(season == 3){
    console.log("Summer")
} else if(season == 4){
    console.log("Fall");
} else{
    console.log("Please, use numbers from 1 to 4 to see the season")
}


// Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 15;
let b = 19;
let c = 17; 

if(a > b && a < c){
    console.log ("Average = a, a = " + a, " b = " + b, " c = " + c)
} else if(a < b && a > c){
    console.log ("Average = a,  a = " + a, " b = " + b, " c = " + c)
} else if (b > a && b < c){
    console.log ("Average = b,  a = " + a, " b = " + b, " c = " + c)
} else if (b < a && b > c){
    console.log ("Average = b,  a = " + a, " b = " + b, " c = " + c)
} else{
    console.log("Average = c,  a = " + a, " b = " + b, " c = " + c)
}

// Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let weekday = 13;
switch(weekday){
    case 1: console.log("День тижня - Понеділок");
    break;
    case 2: console.log("День тижня - Вівторок");
    break;
    case 3: console.log("День тижня - Середа");
    break;
    case 4: console.log("День тижня - Четвер");
    break;
    case 5: console.log("День тижня - П'ятниця");
    break;
    case 6: console.log("День тижня - Субота");
    break;
    case 7: console.log("День тижня - Неділя");
    break;
}

// За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.


const calc = (x, y, operator) => {
    switch (operator) {
        case "+":
            console.log(x + y);
            break;
        case "-":
            console.log(x - y);
            break;
        case "*":
            console.log(x * y);
            break;
        case "/":
            console.log(x / y);
            break;
    }
};

calc(1, 15, "*");


//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression), 
//видалити голосні букви зі слова. 

let str = "Революція";
let regexp = /[а\е\є\и\і\о\у\ю\я]/g;
console.log(str.replace(regexp, ""));

// Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

let meters = 1025;
let kilometers = meters/1000;

let regexp1 = meters.toString().match(/.$/);
let regexp2 = kilometers.toString().match(/.$/);

let result1; 
let result2;

switch(regexp1[0]){
        case "1":
            result1="";
            break;
        case "2":
            result1="и";
            break;
        case "3":
            result1="и";
            break; 
        case "4":
            result1="и";
            break; 
        case "5":
            result1="ів";
            break; 
        case "6":
            result1="ів";
            break;
        case "7":
            result1="ів";
            break;
        case "8":
            result1="ів";
            break;
        case "9":
            result1="ів";
            break;
        case "0":
            result1="ів";
            break;
}

switch(regexp2[0]){
    case "1":
        result2="";
        break;
    case "2":
        result2="и";
        break;
    case "3":
        result2="и";
        break; 
    case "4":
        result2="и";
        break; 
    case "5":
        result2="ів";
        break; 
    case "6":
        result2="ів";
        break;
    case "7":
        result2="ів";
        break;
    case "8":
        result2="ів";
        break;
    case "9":
        result2="ів";
        break;
    case "0":
        result2="ів";
        break;
}


console.log(meters + " метр" + result1 + " - це",kilometers + " кілометр" + result2);