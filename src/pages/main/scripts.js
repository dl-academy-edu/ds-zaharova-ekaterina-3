// /* ДЗ № 1 */
// let firstName = prompt('Введите имя', '')
// let surname = prompt('Введите фамилию', '')
// let patronymic = prompt('Введите отчество', '')
// let user = {
//     'name': firstName,
//     'surname': surname,
//     'patronymic': patronymic
// }
// console.log(user)

// /* ДЗ № 2 */
// /* 1 */
// let num = prompt('Введите число',);
// if (typeof num === 'number') {
//     for (i = 1; i <= num; i++) {
//         if (i === 4 || i % 4 === 0) {
//             continue;
//         } else {
//             console.log(i)
//         }
//     }
// } else {
//     console.log('Ошибка')
// }
// /* 2 */
// function factorial(n) {
//     var result = 1;
//     if (typeof n === 'number') {
//         while (n) {
//             result *= n--;
//         }
//         return result;
//     } else {
//         console.log('Ошибка')
//     }
// }
// console.log(factorial('ww'))
// /* 3 */
// function func(num, power) {
//     if (typeof num === 'number' && typeof power === 'number') {
//         let result = num;
//         for (i = 1; i < power; i++) {
//             result *= num;
//         }
//         return result;
//     } else {
//         console.log('Ошибка')
//     }
// }
// console.log(func('ц', 5))
// /* 5 */
// let rand = Math.floor(1 + Math.random() * 10);
// let userNum;
// while (rand !== userNum) {
//     userNum = prompt('Введите число от 1 до 10:',);
//     userNum = Number(userNum);
//     if (rand === userNum) {
//         console.log('Ура')
//         break;
//     } else {
//         alert('Мимо');
//     }
// }
// /* ДЗ № 3 */
// /* 1 */
// let age;
// function showMessage(age) {
//     age = prompt('Укажите свой возраст?',);
//     age = Number(age)
//     if (age >= 18) {
//         alert('Отлично, тебе есть 18!')
//     } else {
//         showMessage()
//     }
// }
// showMessage()
// /* 2 */
// function add(a, b) {
//     result = a + b;
//     return result;
// }
// add(5, 6)
// function subtract(a, b) {
//     result = a - b;
//     return result;
// }
// subtract(5, 6)
// function divide(a, b) {
//     result = a / b;
//     return result;
// }
// divide(5, 6)
// function multiply(a, b) {
//     result = a * b;
//     return result;
// }
// multiply(5, 6)
// /* Вышеуказанные функции являются чистыми в связи с тем, что выполняют простые действия и небольшой свод правил. 
// Они не пишут и не читают глобальные переменные. */

// /* 3 */
// function addCreator(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// const add = addCreator(5);
// console.log(add(5)); // 10
// console.log(addCreator(1)(3));


// /* ДЗ №4 */

// // developers - авторя ЯП
// // name - имя автора
// // work - род деятельности автора

// const developers = [
//     {
//         index: 0,
//         name: "Брендан Эйх",
//         work: "специалист в области информатики, программист, технический директор"
//     },
//     {
//         index: 2,
//         name: "Джеймс Гослинг",
//         work: "специалист в области информационных технологий"
//     },
//     {
//         index: 3,
//         name: "Бьёрн Страуструп",
//         work: "программист"
//     }
// ]
// // data - ЯП про которые должны быть рассказы
// // name - название ЯП
// // year - год выпуска ЯП
// // filenameExtensions -расширения файлов
// // influencedBy - ЯП оказавшие влияние
// // affectedBy - ЯП испытавшие влияние ЯП
// // developerIndex - уникальный идентификатор автора языка программирования
// const data = [
//     {
//         name: "JavaScript",
//         year: 1995,
//         filenameExtensions: "js, mjs",
//         influencedBy: ["AWK", "C", "HyperTalk", "Java", "Lua", "Perl", "Python", "Scheme", "Self"],
//         affectedBy: ["ActionScript", "AtScript", "CoffeeScript", "Dart", "JScript .NET", "LiveScript", "Objective-J", "Opa", "QML", "Raku", "TypeScript"],
//         developerIndex: 0,
//     },
//     {
//         name: "Java",
//         year: 1995,
//         filenameExtensions: "java, class, jar, jad, jmod",
//         influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
//         affectedBy: ["Ada 2005", "BeanShell", "C#", "Chapel", "Clojure", "ECMAScript", "Fantom", "Gambas", "Groovy", "Hack", "Haxe", "J#", "Kotlin", "PHP", "Python", "Scala", "Seed7", "Vala"],
//         developerIndex: 2,
//     },
//     {
//         name: "C++",
//         year: 1983,
//         filenameExtensions: "cc, cpp, cxx, c, c++, h, hpp, hh, hxx, h++",
//         influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
//         affectedBy: ["Ada", "C", "Modula-2", "Simula"],
//         developerIndex: 3,
//     },
// ];


// function point(index) {
//     let b = data[index].filenameExtensions.split(',')
//     for (i = 0; i < b.length; i++) {
//         b[i] = b[i].trim()
//         b[i] = ' .' + b[i];
//     }
//     b = b.join(',')
//     return b;
// }
// function anotherLanguages(index) {
//     let a;
//     if (data[index].affectedBy.length > 4) {
//         a = data[index].affectedBy.slice(0, 4) + ' и другие языки.'
//     } else {
//         a = data[index].affectedBy + '.';
//     }
//     return a;
// }
// function languagesStory(index) {
//     let text = [
//         data[index].name,
//         '- язык программирования выпущенный в',
//         data[index].year,
//         'году.',
//         'Автором языка стал',
//         developers[index].name,
//         '-',
//         developers[index].work,
//         '.',
//         'Файлы программ, написанных на',
//         data[index].name,
//         ', могут иметь расширения',
//         point(index),
//         '.',
//         data[index].name,
//         'испытал влияние',
//         data[index].influencedBy.length,
//         'языков программирования:',
//         data[index].influencedBy,
//         '.',
//         data[index].name,
//         'повлиял на',
//         anotherLanguages(index)
//     ]
//     let story = text.join(' ')
//     return story;
// }
// function message() {
//     alert('Информация будет доступна через 10 секунд')
// }
// setTimeout(() => console.log(message()), 1000)
// setTimeout(() => console.log(languagesStory(0)), 10000)
// setTimeout(() => console.log(languagesStory(1)), 10000)
// setTimeout(() => console.log(languagesStory(2)), 10000)

let header = document.querySelector('.header');
let headerMobile = document.querySelector('.header-mobile');
let headerOpenBtn = document.querySelector('.slider__menu-btn');
let headerOverlay = document.querySelector('.header-overlay');
let headerCloseBtn = document.querySelector ('.header-mobile__close-button');

headerOpenBtn.addEventListener ('click', function(){
    header.classList.add('header-none');
    headerMobile.classList.add('open');
    headerOverlay.classList.add('open');
    window.addEventListener('keydown', function(evt){
        if (evt.code === "Escape") {
            header.classList.remove('header-none');
            headerMobile.classList.remove('open');
            headerOverlay.classList.remove('open');
        }
    })
})
headerCloseBtn.addEventListener('click', function(){
    header.classList.remove('header-none');
    headerMobile.classList.remove('open');
    headerOverlay.classList.remove('open');
})