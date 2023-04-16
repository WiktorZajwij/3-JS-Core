/* 
Завдання 1.

Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:

1. Створіть порожній об'єкт person.
2. Додайте властивість firstName зі значенням Ivan.
3. Додайте властивість secondName зі значенням Ivanov.
4. Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
5. Скопіюйте об'єкт person в об'єкт newPerson.
6. Поміняйте в newPerson властивість firstName на Petro.
7. Поміняйте в newPerson властивість secondName на Petriv.
8. Запустіть метод showData з person і newPerson, результат має бути наступним:

person.showData() – має повернути Ivan Ivanov
newPerson.showData() – має повернути Petro Petriv
*/

'use strict';
let person = new Object();
person['firstName'] = 'Ivan';
person['secondName'] = 'Ivanov';
person['showData'] = function () { console.log(this.firstName, this.secondName); }
let newPerson = Object.assign({}, person);
newPerson['firstName'] = 'Petro';
newPerson['secondName'] = 'Petriv';
person.showData();
newPerson.showData(); 









/* 
let person = {};
person.firstName = 'Ivan';
person.secondName = 'Ivanov';
person.showData = function() {
  console.log(`firstName: ${this.firstName}, secondName: ${this.secondName}`);
}
let newPerson = Object.assign({}, person);

newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData(); 
*/


/* 
let person = {
  firstName: 'Ivan',
  secondName: 'Ivanov',
  showData: function() {
    console.log(this.firstName, this.secondName);
  }
};
let newPerson = Object.assign({}, person);

newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData();
*/





