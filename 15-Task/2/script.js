'use strict';
/* 
Завдання 2.

Потрібно скопіювати в документ html в тег body нижче вказаний код. З допомогою команд jquery потрібно отримати текстове вмістиме кожного з елементів, які вказані в списку нижче. Отримані текстові значення потрібно об’єднати в стрічку і вивести командою alert().

Список елементів:

Тег span з id ”s1”;
Тег b з класом ”s2”;
Тег i, вкладений в блок “second”
Тег q з вспливаючою підказкою
Ссилка, яка відкривається в новій вкладці
Тег span з класом extra, який є другий по послідовності на сторінці.
Код сторінки:

<div id="first"><p>JavaScript, also known as ECMAScript (the untrademarked name used for the standard), is a dynamic programming language. It is most <span>c</span>ommonly used as part of web browsers, whose implementations allow client-side scripts to interact with the user, control the browser, communicate asynchronously, and alter <q>t</q>he document <span class="extra">c</span>ontent that is displayed.</p></div>

<div id="second">

<span id="s1">J</span>avaScript (at least the strict subset asm.js) is also considered an "assembly language of the web"(<b class="s2">quote) – a compile target of source-to-source compilers – for making client side web applications, using other programming languag<q title="hello">e</q>s, supported by all the major browsers without plug-ins. It is also used in server-side network programming with runtime environments such as Node.js, game development and the creation of desktop and mobile applications. It is most commonl<span class="extra">y</span> used as part of web browsers, whose implementations allow client-side scripts to interact with the user</div> 
*/


$(document).ready(function() {
  let str = '';

  let str1 = $('#s1').text();
  let str2 = $('.s2').text();
  let str3 = $('#second i').text();
  let str4 = $('[title="quote"]').text();
  let str5 = $('[target="_blank"]').text();
  let str6 = $('span.extra').eq(1).text();

  let sum = str.concat(str1, str2, str3, str4, str5, str6)

  alert(sum);





// var 2
/* 
  let str = '';
  let str1 = $('#s1').text();
  str += str1 + ''

  let str2 = $('.s2').text();
  str += str2 + ''

  let str3 = $('#second i').text();
  str += str3 + ''

  let str4 = $('[title="quote"]').text();
  str += str4 + ''

  let str5 = $('[target="_blank"]').text();
  str += str5 + ''

  let str6 = $('span.extra').eq(1).text();
  str += str6 + ''

  alert(str);
*/
});