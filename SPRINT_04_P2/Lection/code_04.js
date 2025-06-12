let out = '';
let p = 1;
let s = 16;
for (let i = 0 ; i < 4; i++){
    // out += i + '';
    for (let k = 0; k < 18; k++){
        if (k <= p || k >= s) out += '* ';
        else out += '_ ';
    }
    p = p + 2;
    s = s - 2;
    out += '<br>';
}
//console.log(out);
document.querySelector('.out-1').innerHTML = out;

let out1 = '';

for (let i = 0; i < 10; i++) {
    out1 += i + '_';
}

console.log(out1)
console.log('---------------------------------');

let out2 = '';

for (let i = 0; i <= 5; i++) {
    out2 += ('i = ' + i + '; ' + '--->  ');
    for (let k = 0; k < 5; k++) {
        out2 += 'k= ' + k + ' ';
    }
    out2 += '<br>';
}
document.querySelector('.out-2').innerHTML = out2;

let out3 = '';

for (let i = 5; i >=0; i--) {
    for (let k = i; k >=0; k--) {
        out3 += '*';
    }
    out3 += '<br>';
}
document.querySelector('.out-3').innerHTML = out3;

let out4 = '';

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 8; k++ ) {
        if (k <= i) out4 += '* '
        else out4 += '_ ';
    }
    out4 += '<br>';
}
document.querySelector('.out-4').innerHTML = out4;

let out5 = '';

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 8; k++ ) {
        if (k >= i) out5 += '* '
        else out5 += '_ ';
    }
    out5 += '<br>';
}
document.querySelector('.out-5').innerHTML = out5;

let out6 = '';

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 8; k++ ) {
        if (k <= (6 -i)) out6 += '* ';
        else out6 += '_ ';
    }
    out6 += '<br>';
}
document.querySelector('.out-6').innerHTML = out6;























