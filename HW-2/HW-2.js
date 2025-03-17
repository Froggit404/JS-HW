// {
//     let arr = [10, true, 'cat', 3.14, false, 111, 'dog', 0.5, 10500, "bird"]
//     console.log(arr[0])
//     console.log(arr[1])
//     console.log(arr[2])
//     console.log(arr[3])
//     console.log(arr[4])
//     console.log(arr[5])
//     console.log(arr[6])
//     console.log(arr[7])
//     console.log(arr[8])
//     console.log(arr[9])
//
// }


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль



{
    let bock1 = {title: 'A', pageCount: 100, genre: 'Aa'};
    let bock2 = {title: 'B', pageCount: 100, genre: 'Bb'};
    let bock3 = {title: 'C', pageCount: 100, genre: 'Cc'}

}



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.



{
    let bock1 = {
        title: 'B',
        pageCount: '100',
        genre: 'Aa',
        authors: [{name: 'aA', age: '66'}, {name: 'bB', age: '99'}]
    }
    let bock2 = {
        title: 'C',
        pageCount: '100',
        genre: 'Aa',
        authors: [{name: 'aA', age: '66'}, {name: 'bB', age: '99'}]
    }
    let bock3 = {
        title: 'D',
        pageCount: '100',
        genre: 'Aa',
        authors: [{name: 'aA', age: '66'}, {name: 'bB', age: '99'}]
    }

}



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.



{
    let users = [
        {name: 'AA', username: 'aa', password: 123456},
        {name: 'BB', username: 'bb', password: 789012},
        {name: 'CC', username: 'cc', password: 345678},
        {name: 'DD', username: 'dd', password: 901234},
        {name: 'EE', username: 'ee', password: 567890},
        {name: 'FF', username: 'ff', password: 123456},
        {name: 'GG', username: 'gg', password: 789012},
        {name: 'HH', username: 'hh', password: 345678},
        {name: 'II', username: 'ii', password: 901234},
        {name: 'JJ', username: 'jj', password: 567890}
    ]
    console.log(users[0].password)
    console.log(users[1].password)
    console.log(users[2].password)
    console.log(users[3].password)
    console.log(users[4].password)
    console.log(users[5].password)
    console.log(users[6].password)
    console.log(users[7].password)
    console.log(users[8].password)
    console.log(users[9].password)
}



// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача



{
    let weather = [

        {day: "Monday", morning_temp: 11, day_temp: 14, night_temp: 9},
        {day: "Tuesday", morning_temp: 12, day_temp: 15, night_temp: 10},
        {day: "Wednesday", morning_temp: 13, day_temp: 16, night_temp: 11},
        {day: "Thursday", morning_temp: 14, day_temp: 17, night_temp: 12},
        {day: "Friday", morning_temp: 15, day_temp: 18, night_temp: 13},
        {day: "Saturday", morning_temp: 16, day_temp: 19, night_temp: 14},
        {day: "Sunday", morning_temp: 10, day_temp: 13, night_temp: 8}
    ]
    console.log(weather[0].morning_temp)

}



// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу



{

    let x = +prompt('write the one number: 1, 0, -3')

    if (x !== 0) {
        console.log('Вірно')
    } else console.log('Невірно')

}



// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3



{
    let time = +prompt('Write a number from 0 to 59')
    if (time < 15 && time >=0)
    {console.log('first quarter')}
    else if (time < 30 && time >=15)
    {console.log('second quarter')}
    else if (time < 45 && time >=30)
    {console.log('third quarter')}
    else if (time < 60 && time >=45)
    {console.log('fourth quarter')}


}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).




{
    let day = +prompt('Write a number from 1 to 31')
    if (day >= 1 && day <= 10) {
        console.log('first decade')
    } else if (day >= 11 && day <= 20) {
        console.log('second decade')
    } else if (day >= 21 && day <= 31) {
        console.log('second decade')
    }
}



// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).



{

    let day = +prompt('Choose a day 1-7')
    switch (day) {
        case 1:
            console.log('Monday')
            console.log('Monday')
            console.log('Monday')
            console.log('Monday')
            break
        case 2:
            console.log('Tuesday')
            console.log('Tuesday')
            console.log('Tuesday')
            console.log('Tuesday')
            break
        case 3:
            console.log('Wednesday')
            console.log('Wednesday')
            console.log('Wednesday')
            console.log('Wednesday')
            break
        case 4:
            console.log('Thursday')
            console.log('Thursday')
            console.log('Thursday')
            console.log('Thursday')
            break
        case 5:
            console.log('Friday')
            console.log('Friday')
            console.log('Friday')
            console.log('Friday')
            break
        case 6:
            console.log('Saturday')
            console.log('Saturday')
            console.log('Saturday')
            break
        case 7:
            console.log('Sunday')
            console.log('Sunday')
            break
        default:
            console.log('wrong day')
    }


}



// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).



{
    let a = 139
    let b = 45
    if (a > b) {
        console.log(a)
    } else if (b > a) {
        console.log(b)
    } else if (a === d) {
        console.log('equal')
    } else {
        console.log('wrong input')
    }
}



// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.




{

    let x = ''
    if (x === 0 || x === '' || x === NaN || x === false || x===undefined || x===null) {
        x = 'default'}
    console.log(x)

}



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).



{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    if (coursesAndDurationArray[0].monthDuration >5){console.log("Супер")}
    if (coursesAndDurationArray[1].monthDuration >5){console.log("Супер")}
    if (coursesAndDurationArray[2].monthDuration >5){console.log("Супер")}
    if (coursesAndDurationArray[3].monthDuration >5){console.log("Супер")}
    if (coursesAndDurationArray[4].monthDuration >5){console.log("Супер")}
    if (coursesAndDurationArray[5].monthDuration >5){console.log("Супер")}

}



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".