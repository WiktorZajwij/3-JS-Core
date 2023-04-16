'use strict';
let firstNReg = /^[a-zA-Z]{3,20}$/;
let lastNReg = /^[a-zA-Z]{3,20}$/;
let emailReg = /^[a-zA-Z0-9-_\.]+@[a-z]+\.[a-z]{2,6}$/;
let passwordReg = /^\w{8,15}$/;

let getS = sel => document.querySelector(sel);
let formS = document.forms.singForm;
let testFName;
let testLName;
let testEmail;
let testPassword;


getS('.first-name').addEventListener('input', function() {
  testFName = firstNReg.test(this.value);
  getS('.placeholder-first').classList.remove('hidden');
  getS('.placeholder-first').style.fontSize = '10px';
  this.style.paddingTop = '20px';
  if (testFName) {
    this.style.borderColor = 'green';
    getS('.fisrt-valid').classList.remove('hidden');
    getS('.fisrt-invalid').classList.add('hidden');
    getS('.first-invalid-text').classList.add('hidden');
  } else {
    this.style.borderColor = 'red';
    getS('.fisrt-invalid').classList.remove('hidden');
    getS('.fisrt-valid').classList.add('hidden');
    getS('.first-invalid-text').classList.remove('hidden');
  }
});

getS('.last-name').addEventListener('input', function () {
  testLName = lastNReg.test(this.value);
  getS('.placeholder-last').classList.remove('hidden');
  getS('.placeholder-last').style.fontSize = '10px';
  this.style.paddingTop = '20px';
  if (testLName) {
    this.style.borderColor = 'green';
    getS('.last-valid').classList.remove('hidden');
    getS('.last-invalid').classList.add('hidden');
    getS('.last-invalid-text').classList.add('hidden');
  } else {
    this.style.borderColor = 'red';
    getS('.last-invalid').classList.remove('hidden');
    getS('.last-valid').classList.add('hidden');
    getS('.last-invalid-text').classList.remove('hidden');
  }
});

getS('.email').addEventListener('input', function () {
  testEmail = emailReg.test(this.value);
  getS('.placeholder-email').classList.remove('hidden');
  getS('.placeholder-email').style.fontSize = '10px';
  this.style.paddingTop = '20px';
  
  if (testEmail) {
    this.style.borderColor = 'green';
    getS('.email-valid').classList.remove('hidden');
    getS('.email-invalid').classList.add('hidden');
    getS('.email-invalid-text').classList.add('hidden');
  } else {
    this.style.borderColor = 'red';
    getS('.email-invalid').classList.remove('hidden');
    getS('.email-valid').classList.add('hidden');
    getS('.email-invalid-text').classList.remove('hidden');
  }
});

getS('.password').addEventListener('input', function () {
  testPassword = passwordReg.test(this.value);
  getS('.placeholder-password').classList.remove('hidden');
  getS('.placeholder-password').style.fontSize = '10px';
  this.style.paddingTop = '20px';
  if (testPassword) {
    this.style.borderColor = 'green';
    getS('.password-valid').classList.remove('hidden');
    getS('.password-invalid').classList.add('hidden');
    getS('.password-invalid-text').classList.add('hidden');
  } else {
    this.style.borderColor = 'red';
    getS('.password-invalid').classList.remove('hidden');
    getS('.password-valid').classList.add('hidden');
    getS('.password-invalid-text').classList.remove('hidden');
  }
});


getS('.first-name').addEventListener('blur', function () {
  if (this.value == '') {
    this.style.borderColor = 'lightblue';
    this.style.paddingTop = '5px';
    getS('.fisrt-invalid').classList.add('hidden');
    getS('.placeholder-first').classList.add('hidden');
    getS('.placeholder-first').style.fontSize = '16px';
    getS('.first-invalid-text').classList.add('hidden');

  }
})
getS('.last-name').addEventListener('blur', function () {
  if (this.value == '') {
    this.style.borderColor = 'lightblue';
    this.style.paddingTop = '5px';
    getS('.last-invalid').classList.add('hidden');
    getS('.placeholder-last').classList.add('hidden');
    getS('.placeholder-last').style.fontSize = '16px';
    getS('.last-invalid-text').classList.add('hidden');

  }
})
getS('.email').addEventListener('blur', function () {
  if (this.value == '') {
    this.style.borderColor = 'lightblue';
    this.style.paddingTop = '5px';
    getS('.email-invalid').classList.add('hidden');
    getS('.placeholder-email').classList.add('hidden');
    getS('.placeholder-email').style.fontSize = '16px';
    getS('.email-invalid-text').classList.add('hidden');

  }
})
getS('.password').addEventListener('blur', function () {
  if (this.value == '') {
    this.style.borderColor = 'lightblue';
    this.style.paddingTop = '5px';
    getS('.password-invalid').classList.add('hidden');
    getS('.placeholder-password').classList.add('hidden');
    getS('.placeholder-password').style.fontSize = '16px';
    getS('.password-invalid-text').classList.add('hidden');

  }
})





getS('.checkbox').addEventListener('click', function () {
  if (this.checked) {
    if (testFName && testLName && testEmail && testPassword) {
      getS('.btn').disabled = false;
    }
  } else {
    getS('.btn').disabled = true;
  }
});




getS('.btn').addEventListener('click', function () {
  getS('.modal-block').classList.remove('hidden');
  getS('.modal-block').classList.add('show');
})

getS('.modal-btn').addEventListener('click', function () {
  singForm.submit();
});











/* 
getS('.btn').addEventListener('click', function() {
  getS('.modal-block').classList.remove('hidden');
  getS('.modal-block').classList.add('show');
  getS('.first-name').value = '';
  getS('.last-name').value = '';
  getS('.email').value = '';
  getS('.password').value = '';
  getS('.checkbox').checked = false;
  getS('.btn').disabeld = true;
})
*/