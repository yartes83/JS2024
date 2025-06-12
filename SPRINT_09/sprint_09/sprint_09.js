// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, который создает c помощью цикла while строку, где шаблон '_*' повторяется 10 раз. Функция выводит в .out-1 созданную строку. Обращаю внимание - функция должна гарантировать один и тот же результат в не зависимости от количества запусков. Данное требование справедливо для всех функций далее.
// т.е. результат _*_*_*_*_*_*_*_*_*_*

function t01 () {
    const out1 = document.querySelector('.out-1');
    let p1 = 0;
    let outStr1 = '';

    while (p1 < 10) {
        outStr1 += '_*';
        p1++;
    }

    out1.innerHTML = outStr1;
}

document.querySelector('.b-1').onclick = t01;


// Task 2
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, который создает c помощью цикла while строку, где шаблон '_*' повторяется число раз указанное в .input-2. Функция выводит в .out-2 созданную строку.
function t02 () {
    const out2 = document.querySelector('.out-2');
    const inp2 = +document.querySelector('.i-2').value;
    let p2 = 0;
    let outStr2 = '';

    while (p2 < inp2) {
        outStr2 += '_*';
        p2++;
    }

    out2.innerHTML = outStr2;
}

document.querySelector('.b-2').onclick = t02;

// Task 3
// Создана функция t03. Функция запускается при нажатии .b-3. Напишите код внутри функции, который получает число из input и с помощью цикла while создает строку от 0 до указанного числа с разделителем - подчеркивание. Выводит созданную строку в .out-3.
// Введено число 5, получаем строку 0_1_2_3_4_5_

function t03 () {
    const out3 = document.querySelector('.out-3');
    const inp3 = +document.querySelector('.i-3').value;
    let p3 = 0;
    let outStr3 = '';

    while (p3 <= inp3) {
        outStr3 += p3 + '_';
        p3++;
    }

    out3.innerHTML = outStr3;
}

document.querySelector('.b-3').onclick = t03;


// Task 4
// Создана функция t04. Функция запускается при нажатии .b-4. Напишите код внутри функции, который получает число из input и с помощью цикла while создает строку от полученного числа до нуля, с разделителем - подчеркивание. Выводит созданную строку в .out-4.
// Введено число 5, получаем строку 5_4_3_2_1_0_

function t04 () {
    const out4 = document.querySelector('.out-4');
    let inp4 = +document.querySelector('.i-4').value;
    let outStr4 = '';

    while (inp4 >= 0) {
        outStr4 += inp4 + '_';
        inp4--;
    }

    out4.innerHTML = outStr4;
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает ЧИСЛО из input.i-5 и создает строку от 0 до введенного числа с шагом 2. Разделитель - подчеркивание. 
// Введено число 6, получаем строку 0_2_4_6_
// Введено число 4, получаем строку 0_2_4_
// При проверке в input будут вводиться только четные числа.
// Строка выводится в .out-5. Для решения используйте цикл while.

function t05 () {
    const out5 = document.querySelector('.out-5');
    const inp5 = +document.querySelector('.i-5').value;
    let p5 = 0;
    let outStr5 = '';

    while (p5 <= inp5) {
        if (p5 % 2 === 0) {
            outStr5 += p5 + '_';
        }
        p5 += 2;
    }

    out5.innerHTML = outStr5;
}

document.querySelector('.b-5').onclick = t05;


// Task 6
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции. Код должен выводить в .out-6 количество чисел, которые делятся на 7 с остатком нуль, в диапазоне от 0 (включительно) до 100 (включительно). Решите задачу циклом while.

function t06 () {
    let out6 = document.querySelector('.out-6');
    let p6 = 0;
    let counter6 = 0;

    while (p6 <= 100) {
        if (p6 % 7 === 0) {
            counter6++;
        }
        p6++;
    }

    out6.innerHTML = counter6;
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Создана функция t07. Функция запускается при нажатии .b-7. Напишите код внутри функции. Код содержит цикл while от 10 (включительно) до 99 (включительно) и создает строку, куда выводит числа в которых сумма цифр десятков и единиц равна 8. Разделитель подчеркивание.
// т.е. выводятся 17_26_ и далее

function t07 () {
    const out7 = document.querySelector('.out-7');
    let p7 = 10;
    let outStr7 = '';

    while (p7 <= 99) {
        let first = Math.floor(p7 / 10);
        let second = p7 % 10;

        if (first + second === 8) {
            outStr7 += p7 + '_';
        }

        p7++;
    }
        out7.innerHTML = outStr7;
}

document.querySelector('.b-7').onclick = t07;


// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Функция получает число из input.i-8 и создает строку вида 0_**_1_**_ до введенного числа включительно. Строку выводит в .out-8.
// Например ввели 3, получаем строку 0_**_1_**_2_**_3_**_

function t08 () {
    const inp8 = +document.querySelector('.i-8').value;
    let out8 = document.querySelector('.out-8');
    let p8 = 0;
    let outStr8 = '';

    while (p8 <= inp8) {
        outStr8 += p8 + '_**_';
        p8++;
    }

    out8.innerHTML = outStr8;


}

document.querySelector('.b-8').onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции. Код получает число из input.i-9 и формирует строку, которая при выводе на страницу рисует прямоугольник. Ширина прямоугольника - 6 звездочек, а высота определяется введенным числом. Выведите строку в .out-9.
// Например ввели число 3. Необходимо сформировать строку '******<br>******<br>******<br>'


function t09 () {
    const inp9 = +document.querySelector('.i-9').value;
    let out9 = document.querySelector('.out-9');
    let p9 = 0;
    let outStr9 = '';

    while (p9 < inp9) {
        outStr9 += '******<br>';
        p9++;
    }

    out9.innerHTML = outStr9;
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Создана функция t10. Функция запускается при нажатии .b-10. Напишите код внутри функции. Код получает число из input.i-10 и создает строку от 0 до введенного числа включительно, где разделитель после четных чисел знак =, а после не четных знак минус. Строка выводится в .out-10. Применяйте цикл while.
// Например введено число 5, необходимо сформировать строку '0=1-2=3-4=5-'

function t10 () {
    const inp10 = +document.querySelector('.i-10').value;
    let out10 = document.querySelector('.out-10');
    let p10 = 0;
    let outStr10 = '';

    while (p10 <= inp10) {
        if (p10 % 2 === 0) {
            outStr10 += p10 + '=';
        } else {
            outStr10 += p10 + '-';
        }
        p10++;
    }

    out10.innerHTML = outStr10;
    
}

document.querySelector('.b-10').onclick = t10;


// Task 11
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код, который формирует строку вида 11_21_ до 91_ включительно, с помощью цикла do while. Выведите строку в .out-11.

function t11 () {
    let out11 = document.querySelector('.out-11');
    let p11 = 11;
    let outStr9 = '';

    do {
        outStr9 += p11 + '_';
        p11 += 10;
    } while (p11 <= 91);

    out11.innerHTML = outStr9;
}

document.querySelector('.b-11').onclick = t11;


// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который формирует строку с 77_74_71_ до 35_. Т.е. от 77 до 35 с шагом 3. Разделитель - подчеркивание. Решите задачу с помощью do while. Строку выведите в .out-12.

function t12 () {
    let out12 = document.querySelector('.out-12');
    let p12 = 77;
    let outStr12 = '';

    do {
        outStr12 += p12 + '_';
        p12 -= 3;
    } while (p12 >= 35);

    out12.innerHTML = outStr12;
}

document.querySelector('.b-12').onclick = t12;


// Task 13
//  Создана функция t13. Функция запускается при нажатии .b-13. Напишите код внутри функции, который получает разделитель из select.s-13 и создает строку от 0 до 10 с выбранным разделителем. Выведите строку в .out-13. Применяйте цикл do while.
// Например выбран разделитель =, получим строку 0=1=2=3=4=5=6=7=8=9=10=


function t13 () {
    const inp13 = document.querySelector('.s-13').value;
    let out13 = document.querySelector('.out-13');
    let p13 = 0;
    let outStr13 = '';

    do {
        outStr13 += p13 + inp13;
        p13++;
    } while (p13 <= 10);

    out13.innerHTML = outStr13;
}

document.querySelector('.b-13').onclick = t13;


// Task 14
// Создана функция t14. Функция запускается при изменении input.range-14, код в функции должен получать value из input и создавать строку от 0 до полученного числа, шаг 1 и разделитель пробел. Строка должна выводиться в .out-14. Применяйте цикл do while.


function t14 () {
    const inp14 = document.querySelector('.range-14').value;
    let out14 = document.querySelector('.out-14');
    let p14 = 0;
    let outStr14 = '';

    do {
        outStr14 += p14 + ' ';
        p14++;
    }while (p14 <= inp14);

    out14.innerHTML = outStr14;
}

document.querySelector('.range-14').oninput = t14;


// Тask 15
// Создана функция t15. Функция запускается при нажатии .b-15. Напишите код внутри функции, который записывает в каждый div.d-15 число 0 (очищая предыдущее содержимое). Применяйте цикл do while.

function t15() {
    let d15 = document.querySelectorAll('.d-15');
    let p15 = 0;

    do {
        d15[p15].textContent = 0;
        p15++;
    }while (p15 < d15.length);

}

document.querySelector('.b-15').onclick = t15;


// Task 16
// Создана функция t16. Функция запускается при нажатии .b-16. Напишите код внутри функции, который записывает в каждый div.d-16 число (очищая предыдущее содержимое). Применяйте цикл do while. Т.е. в первом div.d-16 выведите  число 1, во второй - число 2 и т.д.


function t16 () {
    let d16 = document.querySelectorAll('.d-16');
    let p16 = 0;

    do {
        d16[p16].textContent = p16 + 1;
        p16++;
    }while (p16 < d16.length);


}

document.querySelector('.b-16').onclick = t16;

// Task 17
// Создана функция t17. Функция запускается при нажатии .b-17. Напишите код внутри функции, который записывает в каждый div.d-17 число в начало текста. Применяйте do while.
// т.е. был <div>one</div> после выполнения цикла должно быть <div>1. one</div>
// т.е. был <div>two</div> после выполнения цикла должно быть <div>2. two</div>
// т.е. был <div>three</div> после выполнения цикла должно быть <div>3. three</div>



function t17 () {
    let d17 = document.querySelectorAll('.d-17');
    let p17 = 0;

    do {
        d17[p17].textContent = `${p17 + 1}. ${d17[p17].textContent}`
        p17++;
    }while (p17 < d17.length);
}

document.querySelector('.b-17').onclick = t17;


// Task 18
// Напишите в функции t18 код, который с помощью цикла do while формирует строку 1 10 2 20 3 30 и так далее до 10 100 . Выведите строку в .out-18.

function t18 () {
   let out18 = document.querySelector('.out-18');
   let p18 = 1;
   let outStr18 = '';

   do {
       outStr18 += `${p18} ${p18 * 10} `;
       p18++;
   }while (p18 <= 10);

   out18.innerHTML = outStr18;
}

document.querySelector('.b-18').onclick = t18;

// Task 19
// Напишите в функции t19 код, который с помощью цикла do while формирует строку 0 10 1 9 2 8 3 7 4 6 5 5 6 4 7 3 8 2 9 1 10 0 . Выведите строку в .out-19.


function t19() {
    let out19 = document.querySelector('.out-19');
    let p19 = 0;
    let d19 = 10;
    let outStr19 = '';

    do {
        outStr19 += `${p19} ${d19} `;
        p19++;
        d19--;
    } while (p19 <= 10);

    out19.innerHTML = outStr19;

}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Получите все td с классом .price, c помощью querySelectorAll(). В функции посчитайте сумму товаров в данных ячейках и выведите в ячейку .total. Примените цикл do while.

function t20() {
    let price = document.querySelectorAll('.price');
    let total = document.querySelector('.total')
    let p20 = 0;
    let sum = 0;

    do {
        sum += parseFloat(price[p20].textContent);
        p20++;
    }while (p20 < price.length);

    total.innerHTML = sum;
}

document.querySelector('.b-20').onclick= t20;