// Task 1
// Напишите функцию t01, которая добавляет .out-1 класс CSS (далее просто класс) 'bg-orange'.

function t01 () {
    let out1 = document.querySelector('.out-1');
    out1.classList.add('bg-orange');
   //console.log(out1.classList.contains('bg-orange'));
}

document.querySelector('.b-1').onclick = t01;

// Task 2
// Напишите функцию t02, которая удаляет у .out-2 класс CSS (далее просто класс) 'bg-orange'.

function t02 () {
    let out2 = document.querySelector('.out-2');
    out2.classList.remove('bg-orange');
   //console.log(out2.classList.contains('bg-orange'));
}

document.querySelector('.b-2').onclick = t02;

// Task 3
// Напишите функцию t03, которая проверяет наличие класса 'bg-orange' у .block-3. Результат проверки - выводит в .out-3.

function t03 () {
    let block3 = document.querySelector('.block-3');
    block3.classList.toggle('bg-orange');
   //console.log(out3.classList.contains('bg-orange'));
}

document.querySelector('.b-3').onclick = t03;


// Task 4
// Напишите функцию t04, которая переключает (toggle) класс 'bg-orange' у элемента .out-4.

function t04 () {
    let out4 = document.querySelector('.out-4');
    out4.classList.toggle('bg-orange');
   //console.log(out4.classList.contains('bg-orange'));
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Напишите функцию t05, которая заменяет класс 'bg-orange' на класс 'bg-bisque'.

function t05 () {
    let out5 = document.querySelector('.out-5');
    out5.classList.replace('bg-orange', 'bg-bisque');
   //console.log(out5.classList.contains('bg-bisque'));
}

document.querySelector('.b-5').onclick = t05;


// Task 6
// Напишите функцию t06, которая делает toggle класса 'round-img' для изображения .img-6.

function t06 () {
    let img6 = document.querySelector('.img-6');
    img6.classList.toggle('round-img');
   //console.log(img6.classList.contains('round-img'));
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Напишите функцию t07, которая добавляет класс 'bold' в .out-7.

function t07 () {
    let out7 = document.querySelector('.out-7');
    out7.classList.add('bold');
   //console.log(out7.classList.contains('bold'));
}

document.querySelector('.b-7').onclick = t07;


// Task 8
// Напишите функцию t08, которая переключает (toggle) класс 'hide' для блока .out-8.

function t08 () {
    let out8 = document.querySelector('.out-8');
    out8.classList.toggle('hide');
   //console.log(out8.classList.contains('hide'));
}

document.querySelector('.b-8').onclick = t08;


// Task 9
// Напишите функцию t09, которая при нажатии кнопки проверяет input.ch-91 и если он выбран, то добавляет класс 'bold' для .out-9. Если input.ch-92 выбран - то добавляет класс 'uppercase' для .out-9. Если checkbox не выбраны, то удаляет данные классы у .out-9.

function t09 () {
    let ch91 = document.querySelector('.ch-91');
    let ch92 = document.querySelector('.ch-92');
    let out9 = document.querySelector('.out-9');

    if (ch91.checked && ch92.checked) {
        out9.classList.add('bold', 'uppercase');
    }
    else if (ch91.checked && !ch92.checked) {
        out9.classList.add('bold');
        out9.classList.remove('uppercase');
    }
    else if (ch92.checked && !ch91.checked) {
        out9.classList.add('uppercase');
        out9.classList.remove('bold');
    }
    else if (!ch91.checked &&!ch92.checked) {
        out9.classList.remove('bold', 'uppercase');
    }

    //console.log(out9.classList.contains('bold'), out9.classList.contains('uppercase'));
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Напишите функцию t10, которая при нажатии кнопки делает toggle класса 'clip' для .out-10.

function t10 () {
    let out10 = document.querySelector('.out-10');
    out10.classList.toggle('clip');
   //console.log(out10.classList.contains('clip'));
}

document.querySelector('.b-10').onclick = t10;