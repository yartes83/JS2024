// iTGid.info - курс JS24/2

// Внимание! При проверке содержимое массивов будет изменено!

// Task 01
// Создайте массив arr_01, который содержит три элемента - число, строку и boolean. Выведите в консоль. 
let arr_01 = [3, 'something', true];

console.log(arr_01);

// for (let i = 0; i < arr_01.length; i++) {
//     console.log(typeof arr_01[i]);
// }

// Task 02
// Создайте массив arr_02, который содержит два элемента - true, false. Выведите в консоль. 
let arr_02 = [true, false];

console.log(arr_02);   

// Task 03
// Создайте массив arr_03 содержащий элементы  "Debian", 10, "Buster". Выведите в консоль. 
let arr_03 = ['Debian', 10, 'Buster'];

console.log(arr_03);

// Task 04
// Создан массив arr_04. Напишите функцию t04, которая выводит длину массива в .out-4. 

let arr_04 = ["Linux Mint", 19.1, "Tessa"];

const t04 = () => {
    document.querySelector('.out-4').textContent = arr_04.length;
}

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Создан массив arr_05. Напишите функцию t05. Функция принимает массив, как аргумент и возвращает его длину. 

let arr_05 = ["elementary", "OS", 5.0, "Hera"];

const t05 = (arr) => {
    return arr.length;
}

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').textContent = t05(arr_05);
});


// Task 06
// Создан массив arr_06. Напишите функцию, которая добавляет в массив значение 90 и 60. Для проверки выведите массив в консоль.
// Далее в курсе - если говорим о "добавлении" в массив имеется ввиду добавление в конец массива. 

const arr_06 = [];

const t06 = () => {
    arr_06.push(90, 60);
    console.log(arr_06);
}

document.querySelector('.b-6').addEventListener('click', t06);


// Task 07
// Создан массив arr_07. Напишите функцию, которая добавляет в массив значение "Arch" под индексом 1. И значение "Linux" под индексом 2. Для проверки выведите массив в консоль.

const arr_07 = ["OS", "Windows"];

const t07 = () => {
    arr_07[1] = "Arch";
    arr_07[2] = "Linux"

    console.log(arr_07);
}

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Создан массив arr_08. Напишите функцию, которая добавляет в массив значение "Open" под индексом 1. И значение "Linux" под индексом 20. Для проверки выведите массив в консоль. Функция должна выводить длину массива после добавления элементов в .out-8.

const arr_08 = ["OS", "Windows"];

const t08 = () => {
    arr_08[1] = "Open";
    arr_08[20] = "Linux";

    console.log(arr_08);
    document.querySelector('.out-8').innerHTML = arr_08.length;
}

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Создан массив arr_09. Напишите функцию t09. Функция выполняется по клику на кнопку. Функция получает ЧИСЛО!!! из input.i-9 и добавляет в массив через push. Выводит массив в консоль для контроля. 
// Подсказка. Если в консоли много текста, и сложно разобраться, то можно применить console.clear() для очистки консоли. Поставьте в начале функции.

const arr_09 = [1111, 2222];

const t09 = () => {
    console.clear();

    let inp = +document.querySelector('.i-9').value;
    arr_09.push(inp);
    console.log(arr_09);
}

document.querySelector('.b-9').addEventListener('click', t09);


// Task 10
// Создан массив arr_10. Напишите функцию t10. Функция выполняется по клику на кнопку. Функция применяет метод pop() к массиву arr_10. Выводит массив в консоль для проверки.

const arr_10 = ["CentOS", "Mandriva Linux", "EduLinux", "Fedora", "Mageia"];

const t10 = () => {
    arr_10.pop();
    console.log(arr_10);
}

document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// Создан массив arr_11. Напишите функцию t11. Функция выполняется по клику на кнопку. Функция применяет метод unshift() к массиву arr_11. Значения для добавления в массив берет из input.i-11. Выводит массив в консоль для проверки.

const arr_11 = ["SUSE", "Unbreakable Linux", "Yellow Dog", "Slackware"];

const t11 = () => {
    let inp = document.querySelector('.i-11').value;

    if (inp) {
        arr_11.unshift(inp);
    }

    console.log(arr_11);
}

document.querySelector('.b-11').addEventListener('click', t11);


// Task 12
// Создан массив arr_12. Напишите функцию t12. Функция выполняется по клику на кнопку. Функция применяет метод shift() к массиву arr_12. Выводит массив в консоль для проверки.

const arr_12 = ["Slackware", "Почему", "Патрик", "Бог"];

const t12 = () => {
    arr_12.shift();
    console.log(arr_12);
}

document.querySelector('.b-12').addEventListener('click', t12);


// Task 13
// Создан массив arr_13. Напишите функцию t13. Функция выполняется по клику на кнопку. Функция выводит значения массива arr_13 в .out-13 с помощью метода join. Разделитель значений - знак подчеркивания.

const arr_13 = ["Slackware", "Slax", "Porteus", "Alpine Linux"];

const t13 = () => {
    let out = arr_13.join('_');
    document.querySelector('.out-13').innerHTML = out;
}

document.querySelector('.b-13').addEventListener('click', t13);


// Task 14
// Создан массив arr_14. Напишите функцию t14. Функция выполняется по клику на кнопку. Функция выводит значения массива arr_14 в .out-14 с помощью цикла. Разделитель значений - знак подчеркивания.

const arr_14 = [19.1, 20.04, 20.1, 21.04];

const t14 = () => {
    let out14 = document.querySelector('.out-14');
    let res = '';

    for (let i = 0; i < arr_14.length; i++) {
        res += arr_14[i] + '_';
    }

    out14.innerHTML = res;
}

document.querySelector('.b-14').addEventListener('click', t14);


// Task 15
// Создан массив arr_15. Напишите функцию t15. Функция выполняется по клику на кнопку. Функция выводит только четные значения массива arr_15 в .out-15 с помощью цикла. Разделитель значений - знак подчеркивания.

const arr_15 = [22, 33, 44, 55, 65, 66, 67, 68];

const t15 = () => {
    let out15 = document.querySelector('.out-15');
    let res = '';

    for(let i = 0; i < arr_15.length; i++) {
        if (arr_15[i] % 2 ===0) {
            res += arr_15[i] + '_';
        }
    }

    out15.innerHTML = res;
}

document.querySelector('.b-15').addEventListener('click', t15);



// Task 16
// Создан массив arr_16. Напишите функцию t16. Функция выполняется по клику на кнопку. Функция выводит значения с четными индексом из массива arr_16 в .out-16 с помощью цикла. Разделитель значений - знак подчеркивания.

const arr_16 = ["Warty Warthog", "Hoary Hedgehog", "Breezy Badger", "Dapper Drake"];

const t16 = () => {
    let out16 = document.querySelector('.out-16');
    let res = '';

    for (let i = 0; i < arr_16.length; i++) {
        if (i % 2 === 0) {
            res += arr_16[i] + '_';
        }
    }

    out16.innerHTML = res;
}

document.querySelector('.b-16').addEventListener('click', t16);


// Task 17
// Создан массив arr_17. Напишите функцию t17. Функция выполняется по клику на кнопку. Функция выводит значения из массива в обратном порядке. Разделитель значений - знак подчеркивания. Важно! В ходе выполнения задания arr_17 изменяться не должен.
// Ожидаю вывода на страницу Gutsy Gibbon_Feisty Fawn_Edgy Eft_
// или Gutsy Gibbon_Feisty Fawn_Edgy Eft

const arr_17 = ["Edgy Eft", "Feisty Fawn", "Gutsy Gibbon"];

const t17 = () => {
    let out17 = document.querySelector('.out-17');
    let res = '';

    for (let i = arr_17.length - 1; i >= 0; i--) {
        res += arr_17[i] + '_';
    }

    out17.innerHTML = res;
}

document.querySelector('.b-17').addEventListener('click', t17);


// Task 18
// Создан массив arr_18. Функция должна вывести значения из массива с индексом 0, 1, 5, 7 в .out-18. Разделитель  - пробел (под пробелом мы понимаем один пробел получаемый нажатием кнопки Space на клавиатуре).

const arr_18 = ["Hardy", "Heron", "Intrepid", "Ibex", "Jaunty", "Jackalope", "Lucid", "Lynx", "Maverick"];

const t18 = () => {
    let out18 = document.querySelector('.out-18');
    let res = '';

    for (let i = 0; i < arr_18.length; i++) {
        if (i === 0 || i === 1 || i === 5 || i === 7) {
            res += arr_18[i] + ' ';
        }
    }

    out18.innerHTML = res;
}

document.querySelector('.b-18').addEventListener('click', t18);

// Task 19
// Создан массив arr_19. Функция должна на основе массива сформировать строку вида: '0 : 11<br>1 : 22<br>2 : 33<br>' и вывести в .out-19 с помощью innerHTML. Числа 0, 1, 2 это индекс значения в массиве, а 11, 22, 33 - значения в массиве. Внимание! При проверке значения и индексы будут использованы другие.

const arr_19 = [11, 22, 33];

const t19 = () => {
    let out19 = document.querySelector('.out-19');
    let res = '';

    for(let i = 0; i < arr_19.length; i++) {
        // res += i + ' ' + ':' + ' ' + arr_19[i] + '<br>';
        res += `${i} : ${arr_19[i]}<br>`;
    }

    out19.innerHTML = res;
}

document.querySelector('.b-19').addEventListener('click', t19);


// Task 20
// Создан массив arr_20. Функция должна выводить на страницу значение из массива с индексом 100. Вывод осуществлять через innerHTML.

const arr_20 = [];

const t20 = () => {
    document.querySelector('.out-20').innerHTML = arr_20[100];
}

document.querySelector('.b-20').addEventListener('click', t20);


// Task 21
// Создан массив arr_21. Функция получать значения из input.i-21, проверяет длину масива. Если длина массива arr_21 меньше 10, то добавляет значение в массив. Функция должна выводить массив в .out-21 c помощью join(). Разделитель значений - знак подчеркивания.

const arr_21 = ['aa', 'bb', 'cc'];

const t21 = () => {
    let inp = document.querySelector('.i-21').value;

    if (arr_21.length < 10) {
        arr_21.push(inp);
    }

    document.querySelector('.out-21').textContent = arr_21.join('_');
}

document.querySelector('.b-21').addEventListener('click', t21);


// Task 22
// Создан массив arr_22. Функция получает значение как аргумент и перебирает массив arr_22 сравнивая со значениями из массива. Если введенное значение находится в массиве, то функция выводит 1 в .out-22. Если не находит - выводит 0.

const arr_22 = [101, 201, 301, 401];

const t22 = (n) => {
    let out22 = document.querySelector('.out-22');

    if (arr_22.includes(n)) {
        out22.innerHTML = '1';
    }
    else {
        out22.innerHTML = '0';
    }
}

document.querySelector('.b-22').addEventListener('click', () => {
    t22(201);
});


// Task 23
// Функция получает два массива как аргументы. Сравнивает их длину. Если длины совпадают - возвращает true, если не совпадают - false.

const t23 = (m1, m2) => {
    let out23 = document.querySelector('.out-23');

    if (m1.length === m2.length) {
        return true;
    }
    else {
        return false;
    }
}

document.querySelector('.b-23').addEventListener('click', () => {
   document.querySelector('.out-23').textContent =  t23([44, 55] , [66, 77]);
});


// Task 24
// Изучите работу функции. Разберитесь, что она делает. Разбирайте данную задачу после решения 23 таски.


const t24 = (m1, m2) => {
    if (!t23(m1, m2)) return false;
    for (let i = 0; i < m1.length; i++) {
        if (m1[i] !== m2[i]) return false;
    }
    return true;
}

document.querySelector('.b-24').addEventListener('click', () => {
   document.querySelector('.out-24').textContent =  t24([44, 55] , [44, 55]);
});


// Task 25
// Изучите работу функции. Разберитесь, что она делает.

const t25 = (arr) => {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}

document.querySelector('.b-25').addEventListener('click', () => {
   document.querySelector('.out-25').textContent =  t25([44, 55]);
});
