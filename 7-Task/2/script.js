/* 
Завдання 2.

Необхідно реалізувати наступний функціонал як на відео keyboard, а саме:

потрібно створити вигляд клавіатури за допомогою html та css
за допомогою js та події клавіатури(keyboard event) необхідно добавляти текст який ми вводимо а також підсвічути клавіші які натискаємо
мова клавіатури тільки одна – англійська
клавіша tab – має робити табуляцію
клавіша caps lock – має робити текст в верхньому регістрі
клавіша enter – має переносити текст на новий рядок
клавіша backspace – має видаляти текст по одній букві
клавіші shift – мають робити текст у верхньому регістрі при утриманні даної клавіші
*/

let text = document.querySelector('.text');
let counter;
const array = [];

const btn = document.querySelectorAll('.key');
const btnTab = document.querySelector('.key_tab');
const btnBack = document.querySelector('.key_backspace');
const btnEnter = document.querySelector('.key_enter');
const btnCaps = document.querySelector('.key_caps');
const btnShiftL = document.querySelector('.key_shiftLeft');
const btnShiftR = document.querySelector('.key_shiftRight');
const btnSpace = document.querySelector('.key_space');

window.addEventListener('keydown', function (event) {
  console.log(event.keyCode);
  switch (event.keyCode) {
    // row-1
    case 192: // `
      array.push(event.key);
      btn[0].classList.add('active')
    break;
    case 49: // 1
      array.push(event.key);
      btn[1].classList.add('active')
      break;
    case 50: // 2
      array.push(event.key);
      btn[2].classList.add('active')
      break;
    case 51: // 3
      array.push(event.key);
      btn[3].classList.add('active')
      break;
    case 52: // 4
      array.push(event.key);
      btn[4].classList.add('active')
      break;
    case 53: // 5
      array.push(event.key);
      btn[5].classList.add('active')
      break;
    case 54: // 6
      array.push(event.key);
      btn[6].classList.add('active')
      break;
    case 55: // 7
      array.push(event.key);
      btn[7].classList.add('active')
      break;
    case 56: // 8
      array.push(event.key);
      btn[8].classList.add('active')
      break;
    case 57: // 9
      array.push(event.key);
      btn[9].classList.add('active')
      break;
    case 48: // 0
      array.push(event.key);
      btn[10].classList.add('active')
      break;
    case 189: // -
      array.push(event.key);
      btn[11].classList.add('active')
      break;
    case 187: // =
      array.push(event.key);
      btn[12].classList.add('active')
      break;
    case 8: // Backspace
      array.splice(array.length - 1);
      btn[13].classList.add('active')
      break;
// row-2
    case 9: // Tab
      event.preventDefault();
      array.push('&nbsp; &nbsp; &nbsp; &nbsp;');
      btn[14].classList.add('active')
      break;
    case 81: // q
      array.push(event.key);
      btn[15].classList.add('active')
      break;
    case 87: // w
      array.push(event.key);
      btn[16].classList.add('active')
      break;
    case 69: // e
      array.push(event.key);
      btn[17].classList.add('active')
      break;
    case 82: // r
      array.push(event.key);
      btn[18].classList.add('active')
      break;
    case 84: // t
      array.push(event.key);
      btn[19].classList.add('active')
      break;
    case 89: // y
      array.push(event.key);
      btn[20].classList.add('active')
      break;
    case 85: // u
      array.push(event.key);
      btn[21].classList.add('active')
      break;
    case 73: // i
      array.push(event.key);
      btn[22].classList.add('active')
      break;
    case 79: // o
      array.push(event.key);
      btn[23].classList.add('active')
      break;
    case 80: // p
      array.push(event.key);
      btn[24].classList.add('active')
      break;
    case 219: // [
      array.push(event.key);
      btn[25].classList.add('active')
      break;
    case 221: // ]
      array.push(event.key);
      btn[26].classList.add('active')
      break;
    case 13: // Enter
      array.push('<br>');
      btn[40].classList.add('active')
      break;
  // row-3
    case 20: // CapsLock
      btn[28].classList.toggle('active')
      break;
    case 65: // a
      array.push(event.key);
      btn[29].classList.add('active')
      break;
    case 83: // s
      array.push(event.key);
      btn[30].classList.add('active')
      break;
    case 68: // d
      array.push(event.key);
      btn[31].classList.add('active')
      break;
    case 70: // f
      array.push(event.key);
      btn[32].classList.add('active')
      break;
    case 71: // g
      array.push(event.key);
      btn[33].classList.add('active')
      break;
    case 72: // h
      array.push(event.key);
      btn[34].classList.add('active')
      break;
    case 74: // j
      array.push(event.key);
      btn[35].classList.add('active')
      break;
    case 75: // k
      array.push(event.key);
      btn[36].classList.add('active')
      break;
    case 76: // l
      array.push(event.key);
      btn[37].classList.add('active')
      break;
    case 186: // ;
      array.push(event.key);
      btn[38].classList.add('active')
      break;
    case 222: // '
      array.push(event.key);
      btn[39].classList.add('active')
      break;
    case 220: // \
      array.push(event.key);
      btn[27].classList.add('active')
      break;
  // row-4
    // case 16: // shiftL
    //   btn[41].classList.add('active')
    //   break;
    case 90: // z
      array.push(event.key);
      btn[42].classList.add('active')
      break;
    case 88: // x
      array.push(event.key);
      btn[43].classList.add('active')
      break;
    case 67: // c
      array.push(event.key);
      btn[44].classList.add('active')
      break;
    case 86: // v
      array.push(event.key);
      btn[45].classList.add('active')
      break;
    case 66: // b
      array.push(event.key);
      btn[46].classList.add('active')
      break;
    case 78: // n
      array.push(event.key);
      btn[47].classList.add('active')
      break;
    case 77: // m
      array.push(event.key);
      btn[48].classList.add('active')
      break;
    case 188: // ,
      array.push(event.key);
      btn[49].classList.add('active')
      break;
    case 190: // .
      array.push(event.key);
      btn[50].classList.add('active')
      break;
    case 191: // /
      array.push(event.key);
      btn[51].classList.add('active')
      break;
    // case 16: // shiftR
    //   btn[52].classList.add('active')
    //   break;
  // row-5
    case 32: // space
      array.push('&nbsp;');
      btn[53].classList.add('active')
      break;
  default:
    break;
}
  
if (event.code === 'ShiftLeft') {
  btn[41].classList.add('active')
} else if (event.code === 'ShiftRight') {
  btn[52].classList.add('active')
} 



  text.innerHTML = array.join('');
});




window.addEventListener('keyup', function (event){

  switch (event.keyCode) {
    // row-1
    case 192: // `
      btn[0].classList.remove('active')
      break;
    case 49: // 1
      btn[1].classList.remove('active')
      break;
    case 50: // 2
      btn[2].classList.remove('active')
      break;
    case 51: // 3
      btn[3].classList.remove('active')
      break;
    case 52: // 4
      btn[4].classList.remove('active')
      break;
    case 53: // 5
      btn[5].classList.remove('active')
      break;
    case 54: // 6
      btn[6].classList.remove('active')
      break;
    case 55: // 7
      btn[7].classList.remove('active')
      break;
    case 56: // 8
      btn[8].classList.remove('active')
      break;
    case 57: // 9
      btn[9].classList.remove('active')
      break;
    case 48: // 0
      btn[10].classList.remove('active')
      break;
    case 189: // -
      btn[11].classList.remove('active')
      break;
    case 187: // =
      btn[12].classList.remove('active')
      break;
    case 8: // Backspace
      btn[13].classList.remove('active')
      break;
    // row-2
    case 9: // Tab
      btn[14].classList.remove('active')
      break;
    case 81: // q
      btn[15].classList.remove('active')
      break;
    case 87: // w
      btn[16].classList.remove('active')
      break;
    case 69: // e
      btn[17].classList.remove('active')
      break;
    case 82: // r
      btn[18].classList.remove('active')
      break;
    case 84: // t
      btn[19].classList.remove('active')
      break;
    case 89: // y
      btn[20].classList.remove('active')
      break;
    case 85: // u
      btn[21].classList.remove('active')
      break;
    case 73: // i
      btn[22].classList.remove('active')
      break;
    case 79: // o
      btn[23].classList.remove('active')
      break;
    case 80: // p
      btn[24].classList.remove('active')
      break;
    case 219: // [
      btn[25].classList.remove('active')
      break;
    case 221: // ]
      btn[26].classList.remove('active')
      break;
    case 13: // Enter
      btn[40].classList.remove('active')
      break;
    // row-3
    // case 20: // CapsLock
    //   btn[28].classList.toggle('active')
    //   break;
    case 65: // a
      btn[29].classList.remove('active')
      break;
    case 83: // s
      btn[30].classList.remove('active')
      break;
    case 68: // d
      btn[31].classList.remove('active')
      break;
    case 70: // f
      btn[32].classList.remove('active')
      break;
    case 71: // g
      btn[33].classList.remove('active')
      break;
    case 72: // h
      btn[34].classList.remove('active')
      break;
    case 74: // j
      btn[35].classList.remove('active')
      break;
    case 75: // k
      btn[36].classList.remove('active')
      break;
    case 76: // l
      btn[37].classList.remove('active')
      break;
    case 186: // ;
      btn[38].classList.remove('active')
      break;
    case 222: // '
      btn[39].classList.remove('active')
      break;
    case 220: // \
      btn[27].classList.remove('active')
      break;
    // row-4
    // case 16: // shiftL
    //   btn[41].classList.add('active')
    //   break;
    case 90: // z
      btn[42].classList.remove('active')
      break;
    case 88: // x
      btn[43].classList.remove('active')
      break;
    case 67: // c
      btn[44].classList.remove('active')
      break;
    case 86: // v
      btn[45].classList.remove('active')
      break;
    case 66: // b
      btn[46].classList.remove('active')
      break;
    case 78: // n
      btn[47].classList.remove('active')
      break;
    case 77: // m
      btn[48].classList.remove('active')
      break;
    case 188: // ,
      btn[49].classList.remove('active')
      break;
    case 190: // .
      btn[50].classList.remove('active')
      break;
    case 191: // /
      btn[51].classList.remove('active')
      break;
    // case 16: // shiftR
    //   btn[52].classList.add('active')
    //   break;
    // row-5
    case 32: // space
      btn[53].classList.remove('active')
      break;
    default:
      break;
  }



  if (event.code === 'ShiftLeft') {
    btn[41].classList.remove('active')
  } else if (event.code === 'ShiftRight') {
    btn[52].classList.remove('active')
  }
});

























/* 
if (
   event.key !== btnTab.textContent &&
   event.key !== btnBack.textContent &&
   event.key !== btnEnter.textContent &&
   event.key !== btnSpace.textContent &&
   event.code !== 'ShiftLeft' &&
   event.code !== 'ShiftRight' &&
   event.code !== 'CapsLock'
 ) {
   for (let i = 0; i < btn.length; i++) {
     if (event.key === btn[i].textContent) {
      btn[i].classList.add('active');
    }
    if (
      event.key === btn[i].textContent 
      ) {
      array.push(event.key);
    }
  }
  //  array.push(event.key);
 }

  if (event.key === btnTab.textContent) {
    event.preventDefault();
    btnTab.classList.add('active');
    array.push('&nbsp; &nbsp; &nbsp; &nbsp;');
  }
  if (event.key === btnBack.textContent) {
    btnBack.classList.add('active');
    array.splice(array.length - 1);
  }
  if (event.key === btnEnter.textContent) {
    btnEnter.classList.add('active');
    array.push('<br>');
  }
  if (event.key === btnSpace.textContent) {
    btnSpace.classList.add('active');
    array.push('&nbsp');
  }
  if (event.code === 'ShiftLeft') {
    btnShiftL.classList.add('active');

  }
  if (event.code === 'ShiftRight') {
    btnShiftR.classList.add('active');
  }
  if (event.code === 'CapsLock') {
    btnCaps.classList.toggle('active');
  }
  text.innerHTML = array.join('');


*/