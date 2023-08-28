// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['text', 123,0.23,true,'name',999,false,-555,'last',111];
console.log(arr)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Complexity and Space',
    pageCount: 320,
    genre: 'Philosophy'

}
let book2 = {
    title: 'Shadows of the Past',
    pageCount: 450,
    genre: 'Romantic Thriller'

}
let book3 = {
    title: 'Galactic Chronicles',
    pageCount: 600,
    genre: 'Science Fiction'
}
console.log(book1,book2,book3)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Echoes in the Wind',
    pageCount: 280,
    genre: 'Historical Fiction',
    authors: [
        {name: 'Maria', age: 38}
    ]

}
let book5 = {
    title: 'Fireside Arcana',
    pageCount: 120,
    genre: 'Fantasy Short Stories',
    authors: [
        {name: 'Robert', age: 51}
    ]
}
let book6 = {
    title: 'Murder on Birch Street',
    pageCount: 380,
    genre: 'Mystery Detective',
    authors: [
        {name: 'Emma', age: 33}
    ]
}
console.log(book4,book5,book6)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Serhii', username: 'seroga2001', password: 's2001i'},
    {name: 'Dima', username: 'dima2002', password: 'd2002a'},
    {name: 'Vanya', username: 'vanya2003', password: 'v2003a'},
    {name: 'Oleg', username: 'oleg2004', password: 'o2004g'},
    {name: 'Sasha', username: 'sasha2005', password: 's2005a'},
    {name: 'Vika', username: 'vika2006', password: 'v2006a'},
    {name: 'Tanya', username: 'tanya2007', password: 't2007a'},
    {name: 'Andrii', username: 'andrii2008', password: 'a2008i'},
    {name: 'Svyatoslav', username: 'svyatik2009', password: 's2009v'},
    {name: 'Lilia', username: 'lilia2010', password: 'l2010a'}
]
console.log(users[0]['password'])
console.log(users[1]['password'])
console.log(users[2]['password'])
console.log(users[3]['password'])
console.log(users[4]['password'])
console.log(users[5]['password'])
console.log(users[6]['password'])
console.log(users[7]['password'])
console.log(users[8]['password'])
console.log(users[9]['password'])



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0
if (x !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 49
if (time <= 14){
    console.log('першу')
}if (time >= 15 && time < 30){
    console.log('другу')
}if (time >= 30 && time <45){
    console.log('третю')
}if (time >= 45 && time <=59){
    console.log('четверту')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 25
if (day <= 9){
    console.log('перша декада місяця')
}if (day >= 10 && day <20){
    console.log('друга декада місяця')
}if (day >= 20 && day <=31){
    console.log('третя декада місяця')
}
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = 2
switch (week) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Thursday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('Error')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 1
let b = 2
if (a > b) {
    console.log('a: ', a);
} else if (b > a){
    console.log('b: ', b);
} else if (b === a){
    console.log('equal');
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xx = 0
let result1 = xx || 'default';
let result2 = xx ?? 'default';

console.log(result1);
console.log(result2);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
}