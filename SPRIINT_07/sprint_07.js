const goods = document.querySelector('.goods');
const square = document.querySelector('.square');
const layer = document.querySelector('.layer');
const out1 = document.querySelector('.out1');
const out2 = document.querySelector('.out2');
const out3 = document.querySelector('.out3');
const goodsImg = document.querySelector('.goods-img');

function t02() {
    const value = goods.value;
    goodsImg.src = './images/' + value + '.jpg';
}

goods.onchange = t02;