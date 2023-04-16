'use strict';
/* 
1. Decloration
function getSel(selector) {
  return document.querySelector(selector);
}

2. Expression
const getSel = function (selector) {
  return document.querySelector(selector);
} 
*/

// 3. Arrow
const getSel = selector => document.querySelector(selector);
const editForm = document.forms.editForm;
const colors = [
  'rgba(255, 0, 0, 0.466)',
  'rgba(0, 26, 255, 0.863)',
  'rgba(0, 128, 0, 0.548)',
  'rgba(0, 0, 0, 0.685)',
  'rgba(255, 166, 0, 0.699)',
  'rgba(255, 110, 219, 0.719)',
  'white',
  'rgba(89, 21, 153, 0.644)',
  'rgba(6, 114, 255, 0.733)'
]
const backgrounds = [
  'rgba(255, 0, 0, 0.466)',
  'rgba(0, 26, 255, 0.863)',
  'rgba(0, 128, 0, 0.548)',
  'rgba(0, 0, 0, 0.685)',
  'rgba(255, 166, 0, 0.699)',
  'rgba(255, 110, 219, 0.719)',
  'white',
  'rgba(89, 21, 153, 0.644)',
  'rgba(6, 114, 255, 0.733)'
]

// edit
getSel('.btn-edit').addEventListener('click', () => {
  getSel('.edit-block').classList.toggle('hide-block');
  getSel('.style-block').classList.add('hide-block');
  getSel('.textarea').value = getSel('.block-top').innerHTML;
});

// save
getSel('.btn-save').addEventListener('click', () => {
  getSel('.block-top').innerHTML = getSel('.textarea').value;
  getSel('.edit-block').classList.add('hide-block');

});

// style
getSel('.btn-style').addEventListener('click', () => {
  getSel('.style-block').classList.toggle('hide-block');
  getSel('.edit-block').classList.add('hide-block');
});

// color
getSel('.btn-color').addEventListener('click', () => {
  getSel('.color-block').classList.toggle('hide-block');
  getSel('.background-block').classList.add('hide-block');

});

// background
getSel('.btn-background').addEventListener('click', () => {
  getSel('.background-block').classList.toggle('hide-block');
  getSel('.color-block').classList.add('hide-block');
});

// font-size
for (let i = 0; i < editForm.fSize.length; i++) {
  editForm.fSize[i].addEventListener('click', function () {
  getSel('.block-top').style.fontSize = event.target.value;
  })
}

//  font-family 
for (let i = 0; i <= editForm.fFamily.options.length; i++) {
  editForm.fFamily.options[0].setAttribute('disabled', 'disabled');
  editForm.fFamily.addEventListener("change", function () {
    getSel('.block-top').style.fontFamily = editForm.fFamily.value;
  });
}

// color
for (let i = 0; i < getSel('.color-block').children.length; i++) {
  const colorsElem = getSel('.color-block').children[i];
  colorsElem.style.backgroundColor = colors[i];
  colorsElem.addEventListener('click', function() {
    getSel('.block-top').style.color = colorsElem.style.backgroundColor;
  });
}

// background
for (let i = 0; i < getSel('.background-block').children.length; i++) {
  const backgroundsElem = getSel('.background-block').children[i];
  backgroundsElem.style.backgroundColor = backgrounds[i];
  backgroundsElem.addEventListener('click', function () {
    getSel('.block-top').style.backgroundColor = backgroundsElem.style.backgroundColor;
  });
}

// font-weight
editForm.checkBold.addEventListener('click', () => {
  if (event.target.checked) {
    getSel('.block-top').classList.add('bold');
  } else {
    getSel('.block-top').classList.remove('bold');
  }
})

// font-style
editForm.checkCursive.addEventListener('click', () => {
  if (event.target.checked) {
    getSel('.block-top').classList.add('italic');
  } else {
    getSel('.block-top').classList.remove('italic');
  }
})

// Кнопка add
getSel('.btn-add').addEventListener('click', function () {
  getSel('.first-blocks').classList.add('hide-block');
  getSel('.add-block').classList.remove('hide-block');
});

// Кнопки table і list
getSel('.list-check').addEventListener('click', function () {
  getSel('.create-list').classList.remove('hide-block');
  getSel('.create-table').classList.add('hide-block');
})
getSel('.table-check').addEventListener('click', function () {
  getSel('.create-table').classList.remove('hide-block');
  getSel('.create-list').classList.add('hide-block');
})

// create list 
const listForm = document.forms['list-form'];
listForm.btnCreateList.addEventListener('click', function () {
  let newList = document.createElement('ul');
  let newLi;
  let countLi = listForm.createLi.value;
  let typeLi = listForm.typeMarks.value;

  newList.style.listStyle = listForm.typeMarks.value;
  for (let i = 1; i <= countLi; i++) {
    newLi = document.createElement('li');
    newLi.textContent = `item ${i}`;
    newList.append(newLi);
  }

  getSel('.textarea').value += newList.outerHTML;

  getSel('.first-blocks').classList.remove('hide-block');
  getSel('.add-block').classList.add('hide-block');

  getSel('.create-list').classList.add('hide-block');
  getSel('.list-check').checked = false;
})

// create table
const tableForm = document.forms['table-form'];
tableForm.btnCreateTable.addEventListener('click', function () {
  let countTr = tableForm.createTr.value;
  let countTd = tableForm.createTd.value;
  let tdWidth = tableForm.widthTd.value;
  let tdHeight = tableForm.heightTd.value;
  let tdBorder = tableForm.borderTd.value;
  let typeBorder = tableForm.typeBorder.value;
  let colorBorder = tableForm.colorBorder.value;
 

  getSel('.textarea').value += `<table style="border-collapse: collapse;">`;
  for(let i = 0; i < countTr; i++) {
    getSel('.textarea').value += `<tr>`;
    for (let j = 0; j < countTd; j++) {
      getSel('.textarea').value += `<td style="width: ${tdWidth}px; height: ${tdHeight}px; border: ${tdBorder}px ${typeBorder} ${colorBorder}">TD</td>`;
    }
    getSel('.textarea').value += `</tr>`;
  }

  getSel('.textarea').value += `</table`;

  tableForm.reset();
  getSel('.first-blocks').classList.remove('hide-block');
  getSel('.add-block').classList.add('hide-block');

  getSel('.create-table').classList.add('hide-block');
  getSel('.table-check').checked = false;
})
