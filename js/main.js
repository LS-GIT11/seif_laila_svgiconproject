console.log("Connected JS for Dr.Nut SVG page")

const allIcons = document.querySelectorAll('svg')
const almondIcon = document.querySelector('#almond-icon')
const hazelIcon = document.querySelector('#hazel-icon')
const pistaIcon = document.querySelector('#pista-icon')
const macaIcon = document.querySelector('#maca-icon')
const almondVIcon = document.querySelector('#almond-v-icon')
const cocoVIcon = document.querySelector('#coco-v-icon')

function LogIt () {
    console.log(this.id);
};


almondIcon.addEventListener('click', almondIcon
