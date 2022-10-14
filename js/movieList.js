 /* Play functionailty for the movie banner that plays the teaser trailer for the movie */
 player = document.getElementById('video');
 btnPlayPause = document.getElementById('btnPlayPause');
 
 player.addEventListener('play', function(){
     changeButtonType(btnPlayPause, 'Pause');
 }, false);
 
 player.addEventListener('pause', function(){
     changeButtonType(btnPlayPause, 'Play');
 }, false);
 
 function playPauseVideo(){
     if (player.paused || player.ended) {
         changeButtonType (btnPlayPause, 'Pause');
         player.play();
     } else{
         changeButtonType(btnPlayPause, 'Play');
         player.pause();
     }
 }

 /* Function allows you to pause said video on the "play" */
function changeButtonType(btn,value){
    btn.title - value;
    btn.innerHTML - value;
}

/* Functionailty for the media scrollers */
const nav = document.getElementById('nav');
window.addEventListener('scroll' , () => {
    if(window.scrollY>=100){
        nav.classList.add('nav_black');
    } else{
        nav.classList.remove('nav_black');
    }
})