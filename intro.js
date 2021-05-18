// // Таски на переменные:
// // 1) Создайте две переменные a и b. Выведите в консоль результ их умножения.

// const a = prompt('Enter a first number');
// const b = prompt('Enter a second number');
// console.log(a * b);



// // 2) Создайте две переменные c и d. Выведите в консоль результат деления.
// const c = +prompt('Enter a first number');
// const d = +prompt('Enter a second number');
// console.log(c / d);



// // 3) Создайте две переменные e и f. Выведите в консоль результат сложения.

// const e = +prompt('Enter a first number');
// const f = +prompt('Enter a second number');
// console.log(e + f);



// // 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

// const newNumber = 11;
// const newBoolean = true;
// const newString = "java script";
// const myString = "100";
// console.log("newNumber = " + newNumber);
// console.log("newBoolean = " + newBoolean);
// console.log("newString = " + newString);
// console.log("myString = " + myString);



// // 5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
// let num = 1;
// console.log(num += 11);
// console.log( num -= 11);
// console.log(num *= 11);
// console.log(num /= 11);
// console.log(++num);
// console.log(--num);



// // /******************************************************************/
// // Таски на prompt:
// // 1) Запросить число у пользователя, возвести его в квадрат и вывести

// const newNum = +prompt('Enter a number, please');
// sqNum = newNum ** 2;
// alert('the square of ' + newNum + ' is ' + sqNum);




// // 2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.

// const firstNumber = +prompt('Enter a first number');
// const secondNumber = +prompt('Enter a second number');
// const average = (firstNumber + secondNumber) / 2;
// console.log(average);

// // 3) Перевести число минут в секунды. Число спрашивать у пользователя.
// const min = +prompt('Enter the number of minutes');
// const sec = min * 60;
// console.log(sec);


// // 4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.
// const greeting = "Hello, "
// const userName = prompt('Enter your name, please');
// alert(greeting + userName);


// // /******************************************************************/
// // Таски на условия:
// // 1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.
// const userValue = prompt('Enter your number, please');
// if (userValue == 10) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }



// // 2) Напишите две проверки.
// // Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// // Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// // Проверьте работу скрипта при test, равном true, false.
// const test = true;
// if (test === true) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }
// if (test !== true) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }



// // 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

// const userSum = +prompt('Введите Вашу сумму покупки, пожалуйста');
// let discount=0;
// if (userSum <= 500) {
//      alert('К сожалению у Вас нет скидки');

//     }else if(userSum > 800) {
//     discount  = (userSum * 5 / 100);
    
//     } else if(userSum > 500){
//     discount = (userSum * 3 / 100);
//     }
// let totalSum = userSum - discount;
// alert('Ваша сумма с учетом скидки составляет ' + totalSum);


// // // /******************************************************************/
// // // Таски на циклы. Каждую задачу решить всеми тремя циклами!
// // // 1) Вывод чисел от 25 до 0 (порядок уменьшения)
// for (let i = 25; i >= 0; i--){
//     console.log(i);
// }


// let n = 25;
// while (n >= 0) {
//     console.log(n);
//     n--;
// }

// let k = 25;
// do {
//     console.log(k);
//     k--;
// } while (k >= 0);
/****************************************************************************** */
// 2) Вывод чисел от 10 до 50, которые кратны 5
// for (let i = 10; i <= 50; i++){
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }


// let n = 10;
// while (n <= 50) {
//     if (n % 5 == 0) {
//         console.log(n);
//     }
//     n++;
// }

// let k = 10;
// do {
//     console.log(k);
//     k += 5;
// } while (k <= 50);

// // 3) Найти сумму чисел в пределах от 1 до 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);

// // 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит
// let userResult;
// do {
//     userResult = +prompt('Введите результат вычисления (2 + 2 * 2)');
// } while (userResult != 6);


// /******************************************************************/