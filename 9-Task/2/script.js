/* 
Завдання 2.

Необхідно реалізувати наступний функціонал як на відео taskList, а саме:

при кліку кнопку Додати додававляти нове завдання в список завдань
якщо при добавлянні поле пусте має вивести повідомлення у модальному вікні про попередження: “Пусте поле не можна добавити”
в списку завдань при кліку на чекбокс завдання має видалятися зі списку
якщо залишилося 1не завдання то його не можна видалити
якщо захочемо видалити то має вивести повідомлення у модальному вікні про попередження: “Останній таск зі списку Ви не можете видалити”
 */
'use strict';
let taskForm = document.forms['task__form'];
let addTaskForm = document.forms['add-task__form'];
let taskList = document.querySelector('.task__list');
let addText = addTaskForm.text;
let addBtn = addTaskForm.button;
let modalError = document.querySelector('.modal-error');
let modalClose = document.querySelector('.modal-close');


function newTask() {
  let newInput = document.createElement('input');
  let newElem = addText.value;
  let newText = document.createElement('span');
  let newLabel = document.createElement('label');
  let newLi = document.createElement('li');
  
  newInput.setAttribute('type', 'checkbox');
  newInput.setAttribute('name', `${newElem}`);
  newInput.setAttribute('value', `${newElem}`);
  newLi.setAttribute('class', 'task__item');
  newText.textContent = addText.value;
  newLabel.append(newInput, ' ', newText);
  newLi.append(newLabel);
  taskList.append(newLi);
  taskForm.append(taskList);
}

addTaskForm.btn.addEventListener('click', () => {
  if (addText.value === '') {
    modalError.classList.remove('hidden-block');
    modalError.classList.add('show-block');
    document.querySelector('.modal-text').textContent = 'Пусте поле не можна добавити.';
  } else {
    newTask();
    addTaskForm.text.value = '';
  }
})


modalClose.addEventListener('click', () => {
    modalError.classList.add('hidden-block');
    modalError.classList.remove('show-block');
});


taskForm.addEventListener('click', () => {
  if (event.target.checked) {
    if (taskForm.length > 1) {
      event.target.parentElement.remove();
    } else {
      event.preventDefault();
      modalError.classList.remove('hidden-block');
      modalError.classList.add('show-block');
      document.querySelector('.modal-text').textContent = 'Останній таск зі списку Ви не можете видалити';
    }
  }
});