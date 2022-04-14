/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (!(i % 3) && !(i % 5)) {
            console.log('fizzbuzz');
        }
        else if(!(i % 3)) {
            console.log('fizz');
        }
        else if(!(i % 5)) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
    return 'Функция завершила выполнение';
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(90));
//console.log(fizzBuzz(15));