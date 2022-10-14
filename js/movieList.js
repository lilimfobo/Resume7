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

/* The movies that are displayed in the homepage, are shown here in the array to access and show the movies */
[comingSoon],//This is all the information about the Movies and TV Shows sorted within an array collected from the imdb api (eg. the id, title, genre, date available, description, image and trailer.)
            {   id: "Coming Soon", //Movie row name
                title: "Love in the villa", //Title
                genre: "Comedy, Romance", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "A young woman takes a trip to romantic Verona, Italy, after a breakup, only to find that the villa she reserved was double-booked, and she'll have to share her vacation with a cynical British man.", //Description of the movie
                image: "https://www.imdb.com/title/tt15463032/mediaviewer/rm3033009665/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=_kRab62q54M",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "After ever happy", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.", //Description of the movie
                image: "https://www.imdb.com/title/tt13070038/mediaviewer/rm1802494977/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=TlAukkPK-dc",  //Trailer URL's
            },