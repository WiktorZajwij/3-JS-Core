/* 
Домашнє завдання:
Потрібно реалізувати функціонал як на відео UserList, а саме:

1. При кліку на кнопку Add user запускаєте функцію addUser() яка робить наступне:

Стягуєте дані з полів і формує об’єкт.
Цей об’єкт пушитю в масив.
Поля зачищає.
Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.
2. При кліку на кнопку Delete запускаєте функцію deleteUser() яка робить наступне:

Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
По цьому індексу видаляємо елемент з масиву.
Запускаєм заново функцію render().


3. При кліку на кнопку Edit запускаєте функцію editUser() яка робить наступне:

Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
По цьому індексу витягуємо конкретрний елемент(тобто об’єкт) з масиву.
З об’єкт достаємо дані і передаємо в форму(тобто у value інпутів).
Запам’ятовуємо даний індекс в змінну userIndex.
Показуємо кнопку Edit user і приховуємо Add user.


4. При кліку на кнопку Edit запускаєте функцію editUser() яка робить наступне:

Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
По цьому індексу витягуємо конкретрний елемент(тобто об’єкт) з масиву.
З об’єкт достаємо дані і передаємо в форму(тобто у value інпутів).
Запам’ятовуємо даний індекс в змінну userIndex.


5. При кліку на кнопку Edit User запускаєте функцію saveEditUser() яка робить наступне:

Стягуєте дані з полів і формує об’єкт через клас.
Цей об’єкт додається на місце старого об’єкту через userIndex.
Поля зачищає.
Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.


6. Всі поля форми потрібно валідувати перед добавленням, а саме:

Login: може бути слово англійською з великої або маленької букви від 4 до 16 символів.
Password: можуть бути букви, цифри, символ нижнього підкреслювання(_), тире(-) та символ крапки(.) від 4 до 16 символів
Email: обов'язково @. Усі букви повинні бути англійською. Загальні вимоги наступні(будь-яка кількість букв, цифр, тире і крапок@будьяка кількість букв.( net.ua, org.ua, gmail.com. і т.д.)).

*/

'use strict';
let getS = sel => document.querySelector(sel);
let loginRegExp = /^[a-zA-Z]{3,20}$/;
let passwordRegExp = /^\w{4,16}$/;
let emailRegExp = /^[a-zA-Z0-9-_\.]+@[a-z]+\.[a-z]{3,10}$/;

let testLogin;
let testPassword;
let testEmail;
let user = {};
let userMass = [];
let check;
let edit;
let userIndex;


/* regExp form */
/* input */
getS('.login').addEventListener('input', function() {
  testLogin = loginRegExp.test(this.value);
  if (testLogin) {
    this.style.borderColor = 'green';
  } else {
    this.style.borderColor = 'red';
  }
});
getS('.password').addEventListener('input', function () {
  testPassword = passwordRegExp.test(this.value);
  if (testPassword) {
    this.style.borderColor = 'green';
  } else {
    this.style.borderColor = 'red';
  }
});
getS('.email').addEventListener('input', function () {
  testEmail = emailRegExp.test(this.value);
  if (testEmail) {
    this.style.borderColor = 'green';
  } else {
    this.style.borderColor = 'red';
  }
});


/* blur */
getS(".login").addEventListener('blur', function () {
  if (this.value == '') {
    this.style.borderColor = '#e5e5e5';
  }
});
getS(".password").addEventListener('blur', function () {
  if (this.value == '') {
    this.style.borderColor = '#e5e5e5';
  }
}); 
getS(".email").addEventListener('blur', function () {
  if (this.value == '') {
    this.style.borderColor = '#e5e5e5';
  }
});


/* form btn */
getS('.form__btn').addEventListener('click', function () {
  if (testLogin && testEmail && testPassword) {
    user = {
      login: getS('.login').value,
      password: getS('.password').value,
      email: getS('.email').value,
    }

    userMass.push(user);
    document.forms.user.reset();
    testLogin, testPassword, testEmail = false;

    getS('.login').style.borderColor = '#e5e5e5';
    getS('.password').style.borderColor = '#e5e5e5';
    getS('.email').style.borderColor = '#e5e5e5';
    createRow();
  } 
});


/* create table__row */
function createRow() {
  getS('tbody').innerHTML = '';
  for (let i = 0; i < userMass.length; i++) {
    let row = document.createElement('tr');
    row.style.borderBottom = '1px solid lightgray';
    row.innerHTML = `
        <td>${i + 1}</td>
        <td>${userMass[i].login}</td>
        <td>${userMass[i].password}</td>
        <td>${userMass[i].email}</td>
        <td><button class="btn btn--edit" name="edit" type="button">Edit</button></td>
        <td><button class="btn btn--delete" name="delete" type="button">Delete</button></td>
    `;
    getS('tbody').append(row);
  }
}


/* check btn */
getS("tbody").onclick = function(event) {
  if (event.target.classList.contains('btn--edit')) {
    editUser(event);
  } else if (event.target.classList.contains('btn--delete')) {
    deleteUser(event);
  } 
}


/* edit btn */
function editUser(event) {
  userIndex = event.target.parentElement.parentElement.firstElementChild.textContent - 1;
  edit = userMass[userIndex];
  
  getS('.login').value = edit.login;
  getS('.password').value = edit.password;
  getS('.email').value = edit.email;
  getS('.form__btn').classList.add('hide');
  getS('.edit__btn').classList.remove('hide');

  testLogin, testPassword, testEmail = true;
  console.log(testLogin, testPassword, testEmail);
}


// save edit__btn
getS('.edit__btn').addEventListener('click', function (){
  if (testLogin && testEmail && testPassword) {
    getS('.form__btn').classList.remove('hide');
    getS('.edit__btn').classList.add('hide');

    testLogin, testPassword, testEmail = false;
    edit.login = getS('.login').value;
    edit.password = getS('.password').value;
    edit.email = getS('.email').value;
    createRow();
    document.forms.user.reset();

    getS('.login').style.borderColor = '#e5e5e5';
    getS('.password').style.borderColor = '#e5e5e5';
    getS('.email').style.borderColor = '#e5e5e5';
  }
});


// delete btn
function deleteUser(event) {
  let i = event.target.parentElement.parentElement.firstElementChild.textContent - 1;
  userMass.splice(i, 1);
  createRow();
}
