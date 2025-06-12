// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, который создает с помощью цикла строку, где шаблон _* повторяется 10 раз. Функция выводит в .out-1 созданную строку. Обращаю внимание - функция должна гарантировать один и тот же результат в не зависимости от количества запусков. Данное требование справедливо для всех функций далее.

function t01 () {
    let out = document.querySelector('.out-1');
    let res = '';

    for (let i = 0; i <=10; i++) {
        res += '_*';
    }

    out.innerHTML = res;
}

document.querySelector('.b-1').onclick = t01;


// Task 2
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, который создает с помощью цикла строку, где шаблон _* повторяется число раз указанное в .i-2. Функция выводит в .out-2 созданную строку.
function t02 () {
    let num = +document.querySelector('.i-2').value;
    let out = document.querySelector('.out-2');
    let res = '';

    for (let i = 0; i < num; i++) {
        res += '_*';
    }

    out.innerHTML = res;
}

document.querySelector('.b-2').onclick = t02;

// Task 3
// Создана функция t03. Функция запускается при нажатии .b-3. Напишите код внутри функции, который получает число из input и с помощью цикла создает строку от 0 до указанного числа с разделителем - подчеркивание. Выводит созданную строку в .out-3.
// Введено число 5, получаем строку 0_1_2_3_4_5_

function t03 () {
    let inp = +document.querySelector('.i-3').value;
    let out = document.querySelector('.out-3');
    let res = '';

    for (let i = 0; i <= inp; i++) {
        res += i + '_';
    }

    out.innerHTML = res;
}

document.querySelector('.b-3').onclick = t03;


// Task 4
// Создана функция t04. Функция запускается при нажатии .b-4. Напишите код внутри функции, который получает число из input и с помощью цикла создает строку от полученного числа до нуля, с разделителем - подчеркивание. Выводит созданную строку в .out-4.
// Введено число 5, получаем строку 5_4_3_2_1_0_

function t04 () {
    let inp = +document.querySelector('.i-4').value;
    let out = document.querySelector('.out-4');
    let res = '';

    for (let i = inp; i >= 0; i--) {
        res += i + '_';
    }

    out.innerHTML = res;
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает ЧИСЛО из input.i-5 и создает строку от 0 до введенного числа с шагом 2. Разделитель - подчеркивание. 
// Введено число 6, получаем строку 0_2_4_6_
// Введено число 4, получаем строку 0_2_4_
// При проверке в input будут вводиться только четные числа.
// Строка выводится в .out-5.

function t05 () {
    let inp = +document.querySelector('.i-5').value;
    let out = document.querySelector('.out-5');
    let res = '';
    
    for(let i = 0; i <= inp; i = i + 2) {
        res += i + '_';
    }

    out.innerHTML = res;
}

document.querySelector('.b-5').onclick = t05;


// Task 6
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции, который читает ЧИСЛО из input.i-6 и создает строку от 0 с шагом 3 пока не будет превышено введенное число.
// Например введено число 7 получим строку 0_3_6_9_
// Например введено число 12 получим 0_3_6_9_12_
// Например введено число 13 получим 0_3_6_9_12_15
// Функция выводит строку в .out-6.

function t06 () {
    let inp = +document.querySelector('.i-6').value;
    let out = document.querySelector('.out-6');
    let res = '';

    for(let i = 0; i <= inp || i < inp + 3; i += 3) {
        res += i + '_';
    }

    out.innerHTML = res;
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Создана функция t07. Функция запускается при нажатии .b-7. Функция создает строку от 1 до 30 с шагом 1 и разделителем подчеркивание. В строке должны быть пропущены числа, которые делятся на 4 с остатком 0. Для пропуска примените continue. Выведите строку в .out-7.
// Ожидается строка вида 1_2_3_5_6_7_9_10_11_13_14_15_17_18_19_21_22_23_25_26_27_29_30_

function t07 () {
    let out = document.querySelector('.out-7');
    let res = '';

    for (let i = 0; i <=30; i++) {
        if (i % 4 === 0) continue;
        res += i + '_';
    }

    out.innerHTML = res;
}

document.querySelector('.b-7').onclick = t07;


// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Функция считает сумму чисел от 0 до 10 с помощью цикла. Выводит сумму в .out-8.
// Т.е. нужно найти сумму 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

function t08 () {
    let out = document.querySelector('.out-8');
    let sum = 0;

    for (let i = 0; i <= 10; i++) {
        sum += i;
    }

    out.innerHTML = sum;
}

document.querySelector('.b-8').onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции, который считает сумму чисел от 0 до введенного в input.i-9 числа включительно. Выводит сумму в .out-9.

function t09 () {
    let inp = +document.querySelector('.i-9').value;
    let out = document.querySelector('.out-9');
    let sum = 0;

    for (let i = 0; i <= inp; i++) {
        sum += i;
    }

    out.innerHTML = sum;
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Создана функция t10. Функция запускается при нажатии .b-10. Напишите код внутри функции, который считает сумму чисел от 0 до введенного в input.i-10 числа включительно. Выводит сумму в .out-10. Если сумма становится больше 50, то цикл останавливается и выводится текущая сумма.

function t10 () {
    let inp = +document.querySelector('.i-10').value;
    let out = document.querySelector('.out-10');
    let sum = 0;

    for (let i = 0; i <= inp; i++) {
        sum += i;
        if (sum > 50) break;
    }

    out.innerHTML = sum;
    
}

document.querySelector('.b-10').onclick = t10;


// Task 11
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код внутри функции, который получает 2 числа из input.i-111 и input-112 и создает строку от меньшего числа к большему с шагом 1. Разделитель подчеркивание. Выведите строку в .out-11.
// Например введено 4 и 7 получаем строку 4_5_6_7_
// Например введено 12 и 9 и получаем строку 9_10_11_12_

function t11 () {
    let inp111 = +document.querySelector('.i-111').value;
    let inp112 = +document.querySelector('.i-112').value;
    let out = document.querySelector('.out-11');
    let res = '';

    if (inp111 > inp112) {
        for(let i = inp112; i <= inp111; i++) {
            res += i + '_';
        }
    } else {
        for(let i = inp111; i <= inp112; i++) {
            res += i + '_';
        }
    }

    out.innerHTML = res;
}

document.querySelector('.b-11').onclick = t11;

// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который считает произведение чисел от 1 до введенного в input.i-12. Результат выводится в .out-12. 

function t12 () {
   let inp = +document.querySelector('.i-12').value;
   let out = document.querySelector('.out-12');
   let res = 1;

   for (let i = 1; i <= inp; i++) {
       res *= i;
   }

   out.innerHTML = res;
}

document.querySelector('.b-12').onclick = t12;


// Task 13
// Метод querySelectorAll() получает NodeList, который можно перебирать с помощью цикла. Давайте научимся работать с NodeList с помощью цикла. Изучите пример ниже.

const p13 = document.querySelectorAll('.p-13'); // получаем NodeList

function t13 () {
   // перебираем NodeList с помощью цикла
   for (let i = 0; i < p13.length; i++) {
    p13[i].textContent += 5;
   }
}

document.querySelector('.b-13').onclick = t13;


// Task 14
// Создана функция t14. Функция запускается при нажатии .b-14. Напишите код внутри функции, который получает все параграфы .p-14 в NodeList и каждому прописывает фон backgroundColor равный 'lightsalmon'.


function t14 () {
    const p14 = document.querySelectorAll('.p-14');

    for (let i = 0; i < p14.length; i++) {
        p14[i].style.backgroundColor = 'lightsalmon'
    }
}

document.querySelector('.b-14').onclick = t14;


// Тask 15
// Создана функция t15. Функция запускается при нажатии .b-15. Напишите код внутри функции, который получает все div.d-15 в NodeList и четным элементам NodeList присваивает свойство background равное 'paleturquoise'.

function t15() {
    const p15 = document.querySelectorAll('.d-15');

    for (let i = 0; i < p15.length; i++) {
        if (i % 2 === 0) {
            p15[i].style.backgroundColor = 'paleturquoise';
        }
    }
}

document.querySelector('.b-15').onclick = t15;


// Task 16
// В первом спринте мы учили два способа получения элементов - querySelector() и getElementById(). Сегодня выше изучили метод querySelectorAll(). В JavaScript существуют и другие методы получения групп элементов. Например, getElementsByClassName() получает коллекцию HTML элементов, однако, синтаксис работы полностью аналогичный с NodeList в примере выше. Давайте попрактикуемся в работе с ними.
// Создана функция t16. Функция запускается при нажатии .b-16. Функция должна перебрать HTML коллекцию spans16 и найти сумму чисел прописанных в данных span. Вывести сумму в .out-16.

const spans16 = document.getElementsByClassName('sp-16');

function t16 () {
    let res = document.querySelector('.out-16');
    let sum = 0;

    for (let i = 0; i < spans16.length; i++) {
        sum += Number(spans16[i].textContent);
    }

    res.innerHTML = sum;
}

document.querySelector('.b-16').onclick = t16;

// Task 17
// Теперь применим знания для получения значения из radiobutton. Изучите код ниже.

const radio17 = document.getElementsByName('radio-17');

function t17 () {
    for (let i = 0; i < radio17.length; i++) {
        if (radio17[i].checked) {
            document.querySelector('.out-17').textContent = radio17[i].value;
            break;
        }
    }
   
}

document.querySelector('.b-17').onclick = t17;


// Task 18
// Напишите в функции t18 код, который выводит в .out-18 значение value выбранного radiobutton r-18.

function t18 () {
    const radio18 = document.getElementsByName('r-18');
    let out18 = document.querySelector('.out-18');
    let res = '';

    for (let i = 0; i < radio18.length; i++) {

        if (radio18[i].checked) {
            res = radio18[i].value;
        }
        out18.innerHTML = res;
    }
}

document.querySelector('.b-18').onclick = t18;

// Task 19
// CSS позволяет написать селектор, селектор выбираем checked radiobutton, т.е. нет нужды получать несколько элементов, и перебирать их циклом. Изучите как работает функция. Не забывайте, что html, css очень сильно влияют на JavaScript, и при правильной организации HTML, CSS можно очень сильно упростить код JS.


function t19() {
    document.querySelector('.out-19').textContent = document.querySelector('[name="r-19"]:checked').value;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создана функция t20. Напишите код, который получает value выбранного radiobutton r-20 и если:
// value равен 100, то в .out-20 вывести строку 'admin'
// value равен 200, то в .out-20 вывести строку 'moderator'
// value равен 300, то в .out-20 вывести строку 'user'

function t20() {
    let radio20 = +document.querySelector('[name="r-20"]:checked').value;
    let out20 = document.querySelector('.out-20');

    if (radio20 === 100) {
        out20.innerHTML = 'admin';
    }
    else if (radio20 === 200) {
        out20.innerHTML = 'moderator';
    }
    else {
        out20.innerHTML = 'user';
    }
}

document.querySelector('.b-20').onclick= t20;