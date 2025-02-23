{
function cloner(obj) {
    if (obj){
        let functions = []
        for (const key in obj) {
            if (typeof obj[key] === 'function'){
                const fuctionClone = obj[key].bind({})
                functions.push({fuctionClone, key})
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj))
        for (const func of functions) {
        cloneObj[func.key] = func.fuctionClone
        }
        return cloneObj
    }
    throw new Error("Error!")
}

const origin = {id:333, name:'qwe', fufu (){console.log('fufu')}, booboo (){document.write('booboo')}}
let clon = cloner(origin)
    clon.booboo()
    clon.fufu()
}

// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


{
    let coursesAndDurationArray =
        [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
        ]

    console.log(coursesAndDurationArray.map((course, index) => ({id: index+1, ...course})));
}


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції