//     - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

document.getElementById('btn1').addEventListener('click', () => {
    document.getElementById('text').style.display = 'none';
})


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    btn2.style.display = 'none'
})


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    let input1 = document.getElementById('input1');
    if (!input1.value) {
        alert('Ви не ввели ваш вік!!!')
    } else if (input1.value < 18) {
        alert('Нажаль ваш вік менший за 18! Доступ закритий...')
    } else {
        alert('Все ок, ви вже дорослий')
    }

})


// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementById('menu');

menu.addEventListener('click', func);


function func() {
    let menuInnerElems = document.getElementsByClassName('menu-inner')
    for (let i = 0; i < menuInnerElems.length; i++) {
        menuInnerElems[i].style.display = 'block'
    }
    this.removeEventListener('click', func)
    this.addEventListener('click', backFunc)
}

function backFunc() {
    let menuInnerElems = document.getElementsByClassName('menu-inner')
    for (let i = 0; i < menuInnerElems.length; i++) {
        menuInnerElems[i].style.display = 'none'
    }
    this.removeEventListener('click', backFunc);
    this.addEventListener('click', func)
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let userComments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
]


let commentsElem = document.getElementById('comments');

for (let comment of userComments) {
    let div = document.createElement('div');
    let btn = document.createElement('button')
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerHTML = comment.title
    p.innerHTML = comment.body;
    btn.innerHTML = 'Hide';

    btn.addEventListener('click', () => {
        btn.parentElement.style.display = 'none'
    })
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(btn)
    commentsElem.appendChild(div)

}


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


document.getElementById('btn4').addEventListener('click', () => {


    console.log(document.forms.formOne.someTextOne.value);
    console.log(document.forms.formOne.someTextTwo.value);
    console.log(document.forms.formTwo.someTextOne.value);
    console.log(document.forms.formTwo.someTextTwo.value);

})


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.


function table(colums, rows, elem) {
    let element = document.getElementById(elem)
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < colums; j++) {
            let colum = document.createElement('td');
            row.appendChild(colum)
        }
        element.appendChild(row)
    }

}

table(5, 3, 'elem')


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.;


document.getElementById('btn5').addEventListener('click', funcCreate)

function funcCreate() {
    let elem = document.getElementById('table');
    elem.innerHTML = '';
    let colums = document.getElementById('cols')
    let rows = document.getElementById('rows')
    let text = document.getElementById('text-table');


    for (let i = 0; i < rows.value; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < colums.value; j++) {
            let colum = document.createElement('td');
            colum.innerHTML = text.value;
            row.appendChild(colum)
        }
        elem.appendChild(row)
    }


}

// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.;


let i = 1

function plus(n) {
    i = i + n
    let img = document.querySelector('img');
    if (i === 4) {
        i = 1
    }
    if (i === 0) {
        i = 3;
    }
    img.src = `${i}.jpg`
}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


let arrOfBadWords = ['shit', 'fuck', 'pussy', 'retard', 'f@ck'];

function checkWords() {
    let inp = document.getElementById('check-bad-words');
    for (let word of arrOfBadWords) {
        if (inp.value.toLowerCase().includes(word)) {
            alert('Oh! How dare are you?')
        }
    }

}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//


function checkWordsTwo() {
    let text = document.getElementById('check-bad-words-two');
    let result = false;
    for (let word of arrOfBadWords) {
        result = text.value.toLowerCase().includes(word)
        if (result) {
            break
        }
    }

    if (result) {
        alert('Oh!No, this id bad word!')
    }

}

//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
//
//!!!!!Ця задача реалізованна мною  в  файлі rules.html!!!!!



// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


function createDocument(arr, id) {
    let elem = document.getElementById('chekboxes');
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement('div')
        div.innerHTML = `<p id="${i}">${JSON.stringify(arr[i])}</p>`;
        elem.appendChild(div)
    }
}
createDocument(usersWithAddress);

let div = document.getElementById('check')
let pHu = div.getElementsByTagName('input');

for (let input of pHu) {
    input.addEventListener('click',checkIFChecked )
}

function checkIFChecked() {
    let checkFalse = document.getElementById('filter-false')
    let checkAge = document.getElementById('age-false')
    let checkCity = document.getElementById('filter-city');

    for (let j = 0; j < usersWithAddress.length; j++) {
        document.getElementById(`${j}`).style.display = 'block'
    }
    check(checkFalse)
    check(checkAge)
    check(checkCity)

}

function check(elem) {
if(elem.checked){
    for (let j = 0; j < usersWithAddress.length; j++) {
        if (eval(elem.value)) {
            document.getElementById(`${j}`).style.display = 'none'
        }
    }
}
}









// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// //     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан