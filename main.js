const btn = document.querySelector('#button');
const btn2 = document.querySelector('#button_');
const audio = new Audio("Aly_song.mp3");
const btn_login = document.querySelector('.submit');
const text = document.querySelector('#input');
const surprise = document.querySelector('.surprise');
const _switch = document.querySelector('#switch');
const _surprise_title = document.querySelector('.surprise_title');
btn.addEventListener('click', ()=>{
    audio.play();
    
});

btn2.addEventListener('click', ()=>{
    audio.pause();
});

btn_login.addEventListener('click', ()=>{
   if (text.value = 0202){
    surprise.classList.remove('__hidden');
   } 
});

_switch.addEventListener('click', ()=>{
    if(_switch.checked == true){
        _surprise_title.innerHTML = "Yeii gracias por ser mi novia :D";
        _surprise_title.style.color = "#2ae3b7";
    }else{
        _surprise_title.innerHTML = "Tiste :(";
        _surprise_title.style.color = "tomato";
    }
});