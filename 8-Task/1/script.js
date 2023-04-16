/* 
Завдання 1.

Необхідно реалізувати наступний функціонал як на відео input, а саме:

при кліку кнопку Move текст з лівого інпута переноситься в правий, причому якщо в лівому інпуті нічого немає, текст в правому не змінюється
при втраті фокусу в нижньому інпуті текст має переноситися в його ж placeholder, причому якщо в інпуті нічого немає, текст в placeholder не змінюється
*/

let taskMove = document.forms.taskMove;
let taskPlch = document.forms.taskPlch;

taskMove.taskButton.addEventListener('click', function() {
  if (taskMove.taskText.value) {
    taskMove.taskCopy.value = taskMove.taskText.value
    taskMove.taskText.value = '';
  }
})


taskPlch.placeholderText.addEventListener('blur', function() {
  if (taskPlch.placeholderText.value) {
    this.placeholder = taskPlch.placeholderText.value;
    taskPlch.placeholderText.value = '';
  }
})
