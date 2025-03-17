{
    const div = document.createElement('div');
    div.classList.add('wrap');
    div.classList.add('collapse')
    div.classList.add('alpha');
    div.classList.add('beta');

    const h1 = document.createElement('h1');
    h1.innerText = 'lorem'
    div.append(h1)

    document.body.append(div, div.cloneNode(true))
}


// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.




{
    let arr = ['Main', 'Products', 'About us', 'Contacts']
    const ul = document.createElement("ul");
    for (const title of arr) {
        const li = document.createElement("li");
        li.innerText = title
        ul.append(li)
    }
    document.body.append(ul)
}


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)




{
    const courses = document.createElement("div");
    courses.classList.add('courses')

    let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
    for (const course of coursesAndDurationArray) {
        const divOfCourse = document.createElement("div");
        const p = document.createElement('p');
        p.innerText = `${course.title}-${course.monthDuration}`
        divOfCourse.append(p)
        courses.append(divOfCourse)
    }

    document.body.append(courses)

}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.




{
    const courses = document.createElement("div");

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ]
    for (const course of coursesAndDurationArray) {

        const div = document.createElement("div");
        div.classList.add('item')

        const h1 = document.createElement("h1");
        h1.classList.add('hading')
        h1.innerText = (course.title)

        const p = document.createElement("p");
        p.classList.add('description')
        p.innerText = (course.monthDuration)

        div.append(h1, p)
        courses.append(div)
    }
    document.body.append(courses)
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.