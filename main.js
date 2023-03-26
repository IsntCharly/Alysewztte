const btn = document.querySelector('#button');
const btn2 = document.querySelector('#button_');
const audio = new Audio("Aly_song.mp3");
btn.addEventListener('click', ()=>{
    audio.play();
    
});
btn2.addEventListener('click', ()=>{
    audio.pause();
});