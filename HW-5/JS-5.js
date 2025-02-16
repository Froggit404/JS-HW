// {
//     let square = (a, b) => a * b
//     console.log(square(12, 34))
// }
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// {
//     let square = (r) => Math.PI * r * r
//     console.log(square(12))
// }
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r

// {
//     let square = (r, h) => 2 * Math.PI * r * h
//     console.log(square(12,21))
// }
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// {
//     let items = (arr) => {
//         for (let item of arr) {
//             console.log(item)
//         }
//     }
//     items ([139, "Raarr", true])
// }

// - створити функцію яка приймає масив та виводить кожен його елемент

// {
//     let paragraph = (text) => document.write(`<p>${text}</p>`)
//     paragraph('Raarr')
// }


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// {
//     let list = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li>`)
//     list('Raarr')
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// {
//     let list = (text, q) => {
//     document.write('<ul>')
//     for (let i = 0; i < q; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')}
//     list('Raarr', 7)
// }

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// {
//     let list = (arr) => {
//         document.write('<ul>')
//         for (const arrElement of arr) {
//             document.write(`<li>${arrElement}</li>`)
//         }
//         document.write('</ul>')
//     }
//
//     list([139, "Raarr", true])
// }


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// {
//     let blockUsers = (arr) =>{
//         for (const user of arr) {
//             document.write(`<div><ul><li>${user.id}</li><li>${user.name}</li><li>${user.age}</li></ul></div>`)
//         }
//     }
//
//         blockUsers ([
//             {id: 7, name: 'Bailey', age: 23},
//                 {id: 139, name: 'Brooke', age: 12},
//                 {id: 1, name: 'Brandon', age: 32},
//                 {id: 15, name: 'Benjamin', age: 21}
//             ])
// }


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// {
//     let minNumber = (numbers) =>{
//         min = numbers[0]
//         for (let i=1; i<numbers.length; i++) {
//             let number = numbers[i]
//             if (number <min){
//                 min = number
//             }
//         }
//         return min
//     }
//     console.log(minNumber([12,1,34,51,0.5]))
// }

// - створити функцію яка повертає найменьше число з масиву

// {
//     let sum = (arr) => {
//         let basket = 0
//         for (const number of arr) {
//             basket = basket + number
//         }
//         return basket
//     }
//
//         console.log(sum ([1,2,3,4,5]))
// }

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13


// {
//     let swap = (arr,index1,index2) =>{
//         block1 = arr[index1]
//     arr[index1]=arr[index2]
//     arr[index2]=block1
//     return arr}
//     console.log(swap([11,22,33,44],0,1))
// }

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

// {
//     let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
//         for (const item of currencyValues) {
//             if (item.currency === exchangeCurrency){
//                 return sumUAH / item.value
//             }
//
//         }
//         console.log('error!!')
//     }
//         console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
// }

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250