`use strict`

const main = document.querySelector('.main');
const introMsg = document.querySelector('.introMsg');
const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');
const msg3 = document.querySelector('.msg3');
const msg4 = document.querySelector('.msg4');
const msg5 = document.querySelector('.msg5');
const yesMsg = document.querySelector('.yesMsg');
const noMsg = document.querySelector('.noMsg');
const coverBg = document.querySelector('.coverBg');

window.onload(introMsg.classList.remove('hidden'));

const firstBtn = document.querySelector("#firstBtn");

function hideFirstMsg() {
    introMsg.classList.add('hidden');
    msg1.classList.remove('hidden');
}

function hideSecMsg() {
    msg1.classList.add('hidden');
    msg2.classList.remove('hidden');
}

function hideThirdMsg() {
    msg2.classList.add('hidden');
    msg3.classList.remove('hidden');
}

function hidefourthMsg() {
    msg3.classList.add('hidden');
    msg4.classList.remove('hidden');
}

function hideFifthMsg() {
    msg4.classList.add('hidden');
    msg5.classList.remove('hidden');
}

function showYes() {
    msg5.classList.add('hidden');
    coverBg.classList.add('hidden');
    yesMsg.classList.remove('hidden');
}

function showNo() {
    msg5.classList.add('hidden');
    noMsg.classList.remove('hidden');
    coverBg.classList.add('hidden');
}