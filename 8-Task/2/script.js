/* 
Завдання 2.

Необхідно реалізувати наступний функціонал як на відео signUp, а саме:

заповнити всі поля форми: first name, second name, email
вибрати стать: man, woman
вибрати position: Fronted, Backend, QC/QA
поставити галочку навпроти пункту: I agree…
після чого клікаємо на кнопку Sign Up і переходимо до блоку профайлу користувача (примітка: без галочки напроти I agree… кнопка має бути не активна)
на блоці профайлу має бути вся інформація яку ми заповнювали, а також картинка чоловіча чи жіноча відносно статі яку ми обирали
при кліку на Sign Out ми повертаємося на блок створення акаунту, поля в блоці мають бути зачищені
*/
'use strict';

let createForm = document.forms.createForm;

let userCard = document.querySelector('.user-card');
let userFirstName = document.querySelector('.user-first-name');
let userSecondName = document.querySelector('.user-second-name');
let userEmail = document.querySelector('.user-email');
let userPosition = document.querySelector('.user-position');
let singOut = document.querySelector('.sing-out');
let userIcon = document.querySelector('.user-icon');

  createForm.addEventListener('submit', function () {
    event.preventDefault();
    createForm.classList.toggle('hidden');
    userCard.classList.toggle('hidden');


    userFirstName.textContent = createForm.firstName.value;
    userSecondName.textContent = createForm.secondName.value;
    userEmail.textContent = createForm.email.value;

    for (let i = 0; i < createForm.gender.length; i++) {
      if (createForm.gender[0].checked) {
        userIcon.src = './man.svg';
      } else if (createForm.gender[1].checked) {
        userIcon.src = './woman.svg';
      }
    }

    /* 
    for (let i = 0; i < createForm.positionSel.length; i++) {
      if (createForm.positionSel[i].selected) {
        userPosition.textContent = createForm.positionSel[i].value;
      } 
    }
    */

    createForm.positionSel.addEventListener("change", function () {
      userPosition.textContent = createForm.positionSel.value;
    });
  })

  singOut.addEventListener('click', function () {
    createForm.classList.toggle('hidden');
    userCard.classList.toggle('hidden');
    createForm.reset();
  })




