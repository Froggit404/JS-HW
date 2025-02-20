// {
//     function User(id, name, surname, email, phone) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//     }
//
//     let users = [
//         new User(6, 'Andrew', 'none', 'qwe@qwe', '+380'),
//         new User(7, 'Axel', 'none', 'qwe@qwe', '+380'),
//         new User(8, 'Adam', 'none', 'qwe@qwe', '+380'),
//         new User(9, 'Addison', 'none', 'qwe@qwe', '+380'),
//         new User(10, 'Adrian', 'none', 'qwe@qwe', '+380'),
//         new User(1, 'Ava', 'none', 'qwe@qwe', '+380'),
//         new User(2, 'Amelia', 'none', 'qwe@qwe', '+380'),
//         new User(3, 'Anthony', 'none', 'qwe@qwe', '+380'),
//         new User(4, 'Aurora', 'none', 'qwe@qwe', '+380'),
//         new User(5, 'Abigail', 'none', 'qwe@qwe', '+380')
//     ]
//     console.log(users)
//
//     const evenNumbers = users.filter((User) => User.id % 2 === 0)
//     console.log(evenNumbers)
//
//     console.log(users.sort((user1, user2) => user1.id - user2.id));
//
// }

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// {
//     function Client(id, name, surname, email, phone, order) {
//         this.id = id
//         this.name = name
//         this.suname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
//
//     function Order(title, price) {
//         this.title = title
//         this.price = price
//     }
//
//     let clients = [
//         new Client(1, 'Andrew', 'qwerty', 'qwe@qwe', '+380', [new Order('TV', 300)]),
//         new Client(2, 'Axel', 'qwerty', 'qwe@qwe', '+380', [new Order('bock', 123), new Order('TV', 300), new Order('phone', 777)]),
//         new Client(3, 'Adam', 'qazwsx', 'qwe@qwe', '+380', [new Order('phone', 777)]),
//         new Client(4, 'Addison', 'tyuioo', 'qwe@qwe', '+380', [new Order('apple', 10), new Order('TV', 300)]),
//         new Client(5, 'Adrian', 'ujhy', 'qwe@QWE', '+380', [new Order('laptop', 84848)]),
//         new Client(6, 'Ava', 'nbhgjfk', 'QWE@qwe', '+38000', [new Order('bon', 4321)]),
//         new Client(7, 'Amelia', 'fjnvmc', 'rty@rty', "+380090", [new Order('booboo', 4444), new Order('TV', 300)]),
//         new Client(8, 'Anthony', 'nnnnn', 'poiu@poiu', '+3000999', [new Order('nioh', 4321)]),
//         new Client(9, 'Aurora', 'uuuuu', 'nnn@nnn', '+3800999333', [new Order('hock', 888), new Order('phone', 777), new Order('apple', 10), new Order('laptop', 84848)]),
//         new Client(10, 'Abigail', 'rfvtgb', 'lkj@jkl', '+38012345', [new Order('fff', 444)])
//     ]
//
//     console.log(clients.sort((oder1, oder2) => oder1.order.length - oder2.order.length));
// }

// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// {
//     function Car(model, manufacturer, year, maximumSpeed, engine) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.year = year
//         this.maximumSpeed = maximumSpeed
//         this.engine = engine
//         this.dive = function () {
//             console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//         }
//         this.info = function () {
//             for (let key in this) {
//                 console.log(key, this[key])
//             }
//         }
//         this.increaseMaxSeed = function (newSpeed) {
//             this.maximumSpeed = this.maximumSpeed + newSpeed
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver
//         }
//
//     }
//
//     const car = new Car('911', 'Porsche', 2022, 260, 3.8)
//     car.info()
//     car.dive()
//     car.changeYear(2025)
//     car.increaseMaxSeed(100)
//     car.addDriver({name: 'kolya'})
//     console.log(car)
// }


// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// {
//     class Car {
//         constructor(model, manufacturer, year, maximumSpeed, engine) {
//             this.model = model
//             this.manufacturer = manufacturer
//             this.year = year
//             this.maximumSpeed = maximumSpeed
//             this.engine = engine
//         }
//
//         drive() {
//             console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//         }
//
//         info() {
//             for (const key in this) {
//                 console.log(key, '-', this[key])
//             }
//         }
//
//         increaseMaxSpeed(newSpeed) {
//             this.maximumSpeed = this.maximumSpeed + newSpeed
//         }
//
//         changeYear(newValue) {
//             this.year = newValue
//         }
//
//         addDriver(driver) {
//             this.driver = driver
//         }
//     }
//
//     let car = new Car('911', 'Porsche', 2022, 260, 3.8)
//     car.drive()
//     car.info()
//     car.increaseMaxSpeed(40)
//     car.changeYear(2019)
//     car.addDriver({name: 'Helga', surname: 'qqq'})
//     console.log(car)
// }

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// {
//     class Cinderella {
//         constructor(name, age, footSize) {
//             this.name = name
//             this.age = age
//             this.footSize = footSize
//         }
//     }
//
//     class Prince {
//         constructor(name, age, shoeSize) {
//             this.name = name
//             this.age = age
//             this.shoeSize = shoeSize
//         }
//     }
//
//     let cinderellas = [
//         new Cinderella('Abigail', 45, 44),
//         new Cinderella('Amelia', 44, 43),
//         new Cinderella('Aurora', 43, 42),
//         new Cinderella('Abigail', 41, 41),
//         new Cinderella('Aurora', 40, 40),
//         new Cinderella('Amelia', 30, 39),
//         new Cinderella('Abigail', 20, 38),
//         new Cinderella('Amelia', 25, 37),
//         new Cinderella('Aurora', 35, 36),
//         new Cinderella('Abigail', 37, 35)
//     ]
//     let prince = new Prince('Prince', 99, 38)
//
//
//     for (const cinderella of cinderellas) {
//         if (cinderella.footSize === prince.shoeSize) {
//             console.log("we find wife")
//         }
//     }
//     let wife = cinderellas.find((cinderella) => cinderella.footSize === prince.shoeSize)
//     console.log(wife)
// }


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.' +
// 'Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// {
//     Array.prototype.myForeach = function (callback) {
//         for (const item of this) {
//             callback(item)
//         }
//     }
//
//     let myArr = [12, 32, 13]
//     myArr.myForeach((p) => console.log(p))
//
//
//     Array.prototype.myFilter = function (callback) {
//        const myArr2 = []
//         for (const item of this) {
//             if (callback(item)) {
//                 myArr2.push(item)
//             }
//
//         }
//         return myArr2
//     }
//
//     let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
//     console.log(users.myFilter((user) => user.status));
//
// }

// *Через Array.prototype. створити власний foreach, filter
