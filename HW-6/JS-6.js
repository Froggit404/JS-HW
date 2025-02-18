// {
//     let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
//     for (let item of arr) {
//         console.log(item.length)
//     }
// }

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

//
// {
//     let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
//     for (let item of arr) {
//         console.log(item.toUpperCase())
//     }
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// {
//     let arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
//     for (let item of arr) {
//         console.log(item.toLowerCase())
//     }
//
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// {
//     let str = ' dirty string   '
//     console.log(str.trim())
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// {
//     let str = 'Ревуть воли як ясла повні';
//     console.log(str.split(' '))
// }

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// {
// let arr = [10,8,-7,55,987,-1011,0,1050,0]
//     console.log(string = arr.map(item=>item.toString()))
// }


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// {
//
//     function sortNums(array, direction) {
//         if (direction === 'ascending') return array.sort((a,b) => a-b)
//         if (direction === 'descending') return array.sort((a,b) => b-a)
//     }
//     console.log(sortNums([11,21,3], 'descending'))
//
// }


// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// {
//
//     const coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ]
//     const map=coursesAndDurationArray
//         .sort((a, b) => a.monthDuration - b.monthDuration)
//         .filter(duration => duration.monthDuration > 5)
//         .map((value, index) => {
//                 value.id = index + 1;
//                 return value
//             })
//     console.log(map)
//
// }

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


// {
//     const cardSuit = ['spade', 'diamond', 'heart', 'club']
//     const valueList = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
//     cards = []
//     for (const suit of cardSuit) {
//         for (const value of valueList) {
//             let card = {suit: suit, value: value}
//             if (suit === 'heart' || suit === 'diamond') {
//                 card.color = 'rad'
//             } else card.color = 'black'
//             cards.push(card)
//         }
//     }
//     console.log(cards)
//
//
//     console.log(cards.find(card => card.value === 'ace' && card.suit === 'club'))
//     console.log(cards.filter(card => card.value === '6'));
//     console.log(cards.filter(card => card.color === 'read'));
//     console.log(cards.filter(card => card.suit === 'diamond'));
//     console.log(cards.filter(card => card.suit === 'spade' && card.value !== '6' && card.value !== '7' && card.value !== '8'));
// }

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// {
// const cardSuit = ['spade', 'diamond', 'heart', 'club']
// const valueList = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
// cards = []
// for (const suit of cardSuit) {
//     for (const value of valueList) {
//         let card = {suit: suit, value: value}
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'rad'
//         } else card.color = 'black'
//         cards.push(card)
//     }
// }
// const reduce = cards.reduce((accum, card) => {
//     switch (card.suit) {
//         case 'spade':
//             accum.spades.push(card)
//             break
//         case 'diamond':
//             accum.diamonds.push(card)
//             break
//         case 'heart':
//             accum.hearts.push(card)
//             break
//         case 'club':
//             accum.clubs.push(card)
//             break
//     }
//     return accum
//
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
//
// })
//
// console.log(reduce)
// }


//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// {
//     let coursesArray = [
//         {
//             title: 'JavaScript Complex',
//             monthDuration: 5,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//         },
//         {
//             title: 'Java Complex',
//             monthDuration: 6,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'git',
//                 'java core',
//                 'java advanced']
//         },
//         {
//             title: 'Python Complex',
//             monthDuration: 6,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'python core',
//                 'python advanced']
//         },
//         {
//             title: 'QA Complex',
//             monthDuration: 4,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//         },
//         {
//             title: 'FullStack',
//             monthDuration: 7,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'react',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'git',
//                 'node.js',
//                 'python',
//                 'java']
//         },
//         {
//             title: 'Frontend',
//             monthDuration: 4,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//         }
//     ]
//     console.log(coursesArray.filter(item => {
//         return item.modules.includes('sass')
//     }));
//     console.log(coursesArray.filter(item => {return  item.modules.includes('docker')}));
//
// }



// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker