const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('btn-turnOn')
const turnOff = document.getElementById('btn-turnOff')

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn  () {
    if(!isLampBroken()){
        lamp.src = './images/ligada.jpg';
    }
}

function lampOff (){
    if(!isLampBroken()){
        lamp.src = './images/desligada.jpg'
    }
}

function lampBreak (){
    lamp.src = './images/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBreak);

