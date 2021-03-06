/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    const numArr = [0, 1];
    if(n <= 0) {
        return 'Введите натуральное число!';
    }
    if(n === 1) {
        return numArr[0];
    }
    for (let i=3; i<=n; i++) {
        numArr.push(numArr[0] + numArr[1]);
        numArr.shift();
    }
    return numArr[1];
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(0)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)