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



// - створити функцію яка повертає найменьше число з масиву
