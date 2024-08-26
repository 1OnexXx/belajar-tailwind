//mendapatkan tombol dari DOM
const button = document.getElementById('PlayVoice');

//membuat objek Audio dengan file audio
const audio = new Audio('The_Eminence_in_Shadow_Zeta_in_Action_(youconvert (mp3cut.net).mp3');

button.addEventListener('click', function(){

    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }

});
// Event listener untuk cek apakah audio berhasil dimainkan atau mengalami error
audio.addEventListener('play', function() {
    console.log("Audio is playing");
});

audio.addEventListener('pause', function() {
    console.log("Audio is paused");
});

audio.addEventListener('error', function(e) {
    console.error("Audio error:", e);
});


const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click' , function(){

    checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');

});