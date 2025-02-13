// {
//     function rectangle(length, height) {
//         return length * height
//     }
//
//     let square = rectangle(3, 8)
//     console.log(square)
//
// }

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// {
//     function circle(radius) {
// return Math.PI * radius * radius
//     }
//     let square = circle(14)
//     console.log(square)
// }


// - створити функцію яка обчислює та повертає площу кола з радіусом r


// {
//
//     // Формула для обрахунку площі повної поверхні циліндра
//     //
//     // S = 2 π R h + 2 π R 2   =    2 π R(R + h)
//
//     function cylinder(height, radius) {
//         let radiusHeight= radius + height
//         return 2*Math.PI*radius*radiusHeight
//     }
//     let square = cylinder(22, 13)
//     console.log(square)
//
// }


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// {
//
//     function f(array) {
//         for (const item of array) {
//             console.log(item)
//         }
//     }
//     let  numbers=[12, 23, 34, 45, 56, 67]
//     f(numbers)
// }

// - створити функцію яка приймає масив та виводить кожен його елемент

// {
//     function f(text) {
//         document.write(`<p>${text}</p>`)
//     }
//     f('aaaaaa')
// }

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// {
//     function f(text) {
//         document.write(`
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>
// `)
//     }
//     f('qwerty')
// }


// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

// {
//     function f(text,quantity) {
//         document.write(`<ul>`)
//         for (let i = 0; i < quantity; i++) {
//             document.write(`<li>${text}</li>`)
//         }
//         document.write(`</ul>`)
//
//     }
//     f('qwerty',10)
// }


// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//

// function f(array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//         document.write(`</ul>`)
//
//             }
// f([12, 'qwerty', true, 543])

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
// {
//     function f(usersBlock) {
//         for (const block of usersBlock) {
//             document.write(`<ul><li>${block.id}-${block.name}-${block.age}</li></ul>`)
//         }
//
//     }
//
//
//     let users = [
//         {name: 'vasya', age: 31, id: 1},
//         {name: 'petya', age: 30, id: 2},
//         {name: 'kolya', age: 29, id: 3},
//         {name: 'olya', age: 28, id: 4},
//         {name: 'max', age: 30, id: 5},
//         {name: 'anya', age: 31, id: 6},
//         {name: 'oleg', age: 28, id: 7},
//         {name: 'andrey', age: 29, id: 8},
//         {name: 'masha', age: 30, id: 9},
//         {name: 'olya', age: 31, id: 10},
//         {name: 'max', age: 31, id: 11}
//     ]
//     f(users)
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// {
//
//     function arr(numbers) {
//         let minNumber = numbers[0]
//         for (let number of numbers) {
//             if (number < minNumber) {
//                 minNumber = number
//             }
//         }
//         return minNumber
//     }
//
//     let result = arr([43, 645, 21, 35, 756, 87, 9,])
//     console.log(result)
// }


// - створити функцію яка повертає найменьше число з масиву


// {
//     function sum(arr) {
//         let result = 0
//         for (const number of arr) {
//             result = result + number
//
//         }
//         return result
//     }
//
//     console.log(sum([1, 2, 10]))
// }


// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13


// {
//     function swap(arr, index1, index2) {
//         let temp = arr[index1]
//         arr[index1] = arr[index2]
//         arr[index2] = temp
//         return arr
//     }
//     console.log(swap([11,22,33,44],0,1))
// }


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// {
//     function exchange(sumUAH,currencyValues,exchangeCurrency){
//         let chosenCurrency
//         for (const item of currencyValues) {
//             if (item.currency === exchangeCurrency){
//                 chosenCurrency = item
//             }
//         }
//         return sumUAH / chosenCurrency.value
//     }
//     console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))
//
// }




// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400