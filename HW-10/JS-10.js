{
    const h1 = document.createElement("h1");
    h1.id = 'text'
    h1.innerText = ('Lorem')

    const button = document.createElement("button");
    button.innerText = ('hide')
    document.body.append(h1, button)

    button.onclick = function () {
    document.getElementById('text').remove()
    }
}


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


{
    const form = document.createElement("form");
    form.id = 'f1'

    const input = document.createElement("input");
    input.type = ('number')

    const button = document.createElement("button");
    button.innerText = ('check')

    form.append(input, button)
    document.body.appendChild(form)

    form.onsubmit = function (ev) {
        ev.preventDefault()
        let age = input.value
        if (age >= 18) {
            console.log('Adult')
        } else if (age < 18) {
            console.log('Young')
        }
    }
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

{
    const form = document.createElement("form");

    const name = document.createElement("input");
    name.placeholder = ('Name')

    const surname = document.createElement("input");
    surname.placeholder = ('Surname')

    const age = document.createElement("input");
    age.placeholder = ('Age')
    age.type = ('number')

    const button = document.createElement("button");
    button.innerText = ('add')

    form.append(name, surname, age, button)
    document.body.appendChild(form)

    form.onsubmit = function (ev){
        ev.preventDefault()
        const div = document.createElement("div");
        div.innerText = (`Your name - ${name.value} Your age - ${surname.value} Your age - ${age.value}`)
        document.body.appendChild(div)
    }
}

// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


{
    let number = +localStorage.getItem('number');
    number += 1
    localStorage.setItem('number', number)
    let div = document.createElement("div")
    document.body.appendChild(div)
    div.innerText = number
}


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1


{
    let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || []
    sessionsList.push(new Date())
    localStorage.setItem('sessionsList', JSON.stringify(sessionsList))
}


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM


{
    const input = document.createElement("input");
    input.type = "number"
    const div = document.createElement("div");
    input.oninput = function () {
        div.innerText = +input.value * 2.2
    }
    document.body.append(input, div)
}


// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


{
    function addToLocalStorage(arrayName, objToAdd) {
        let lsItem = localStorage.getItem(arrayName);
        if (!lsItem) {
            throw new Error('Error')
        }
        let arr = JSON.parse(lsItem);
        if (typeof objToAdd === "object"){
        arr.push(objToAdd)}
        localStorage.setItem(arrayName, JSON.stringify(arr))
    }
}


// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


{
    const form = document.createElement("form");
    document.body.appendChild(form)
    form.name = 'form'

    const inputLines = document.createElement("input");
    inputLines.type = 'number'
    inputLines.name = 'inputLines'

    const inputCells = document.createElement("input");
    inputCells.type = 'number'
    inputCells.name = 'inputCells'

    const inputText = document.createElement("input");
    inputText.name = 'inputText'

    const button = document.createElement("button");
    button.innerText = 'Generate'
    form.append(inputLines, inputCells, inputText, button)

    const table = document.createElement("table");
    document.body.appendChild(table)

    form.onsubmit = function (ev) {
        table.innerText = ""
        ev.preventDefault()
        const linesValue = +form.inputLines.value;
        const cellsValue = +form.inputCells.value;
        const textValue = form.inputText.value;

        for (let i = 0; i < linesValue; i++) {
            const tr = document.createElement('tr');

            for (let j = 0; j < cellsValue; j++) {
                const td = document.createElement('td');
                td.innerText = textValue
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
    }
}


// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.