/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    const interArr =  arr1.filter(elemArr1 => arr2.some(elemArr2 => elemArr2 === elemArr1));
    return interArr.filter((elemInterArr,pos) => interArr.lastIndexOf(elemInterArr) === pos);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 5, 5, 1, 2, 2, 4, 2], [7, 2, 2, 2, 1, 5, 5, 4, 12])); // []