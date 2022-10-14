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
            {
                id: "Coming Soon", //Movie row name
                title: "Cobra Kai", //Title
                genre: "Action, Drama", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.", //Description of the movie
                image: "https://www.imdb.com/title/tt7221388/mediaviewer/rm2559052801/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=sUR9PYwlNaA",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Bridgerton", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When it is available to watch
                description: "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.", //Description of the movie
                image: "https://www.imdb.com/title/tt8740790/mediaviewer/rm4165081601/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Bs9r1UbmFAI",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Fate the winx saga", //Title
                genre: "Action, Drama, Romance, Fantasy", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "A live-action adaptation of Nickelodeon's Winx Club (2004). It follows Bloom as she adjusts to life in the Otherworld, where she must learn to control her dangerous magical powers.", //Description of the movie
                image: "https://www.imdb.com/title/tt8179402/mediaviewer/rm68015617/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=YlNEvyjEWLQ",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Elektra", //Title
                genre: "Romance, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2005, //When it is available to watch
                description: "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.", //Description of the movie
                image: "https://www.imdb.com/title/tt0357277/mediaviewer/rm839355392/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=XGnADb5e0mc",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Mr & Mrs Smith", //Title
                genre: "Romance, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2005, //When it is available to watch
                description: "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.", //Description of the movie
                image: "https://www.imdb.com/title/tt0356910/mediaviewer/rm2549451776/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=CZ0B22z22pI",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Good girls", //Title
                genre: "Romance, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When it is available to watch
                description: "Three suburban mothers suddenly find themselves in desperate circumstances and decide to stop playing it safe and risk everything to take back their power.", //Description of the movie
                image: "https://www.imdb.com/title/tt6474378/mediaviewer/rm255903745/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=kbjIaPzODs0",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Good girls", //Title
                genre: "Romance, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When it is available to watch
                description: "Three suburban mothers suddenly find themselves in desperate circumstances and decide to stop playing it safe and risk everything to take back their power.", //Description of the movie
                image: "https://www.imdb.com/title/tt6474378/mediaviewer/rm255903745/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=kbjIaPzODs0",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "He's all that", //Title
                genre: "Romance, Drama, Comedy", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2021, //When it is available to watch
                description: "A teenage girl sets out to give a nebbish classmate the ultimate high school makeover. An updated remake of the 1999 film, 'She's All That'.", //Description of the movie
                image: "https://www.imdb.com/title/tt4590256/mediaviewer/rm3629383425/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=XqTPaRz8Nx8",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Riverdale", //Title
                genre: "Romance, Drama, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2017, //When it is available to watch
                description: "While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.", //Description of the movie
                image: "https://www.imdb.com/title/tt5420376/mediaviewer/rm3364035073/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=HxtLlByaYTc",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Blood & Water", //Title
                genre: "Romance, Drama, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When it is available to watch
                description: "A local teen uncovers her family's secret past and navigates the complicated world of a South African high school.", //Description of the movie
                image: "https://www.imdb.com/title/tt9839146/mediaviewer/rm2013050369/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=2m0Cm2kMOBU",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "The Sandman", //Title
                genre: "Drama, Suspense, Action, Fantasy", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about to reclaim his lost equipment.", //Description of the movie
                image: "https://www.imdb.com/title/tt1751634/mediaviewer/rm1255999489/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=83ClbRPRDXU",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Dynasty", //Title
                genre: "Drama, Romance, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2017, //When it is available to watch
                description: "Follows two of America's wealthiest families as they feud for control over their fortune and their children.", //Description of the movie
                image: "https://www.imdb.com/title/tt6128300/mediaviewer/rm3760394753/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Uq0soWMpkv8",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Blood & Water", //Title
                genre: "Romance, Drama, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When it is available to watch
                description: "A local teen uncovers her family's secret past and navigates the complicated world of a South African high school.", //Description of the movie
                image: "https://www.imdb.com/title/tt9839146/mediaviewer/rm2013050369/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=2m0Cm2kMOBU",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "The Sandman", //Title
                genre: "Drama, Suspense, Action, Fantasy", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about to reclaim his lost equipment.", //Description of the movie
                image: "https://www.imdb.com/title/tt1751634/mediaviewer/rm1255999489/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=83ClbRPRDXU",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Dynasty", //Title
                genre: "Drama, Romance, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2017, //When it is available to watch
                description: "Follows two of America's wealthiest families as they feud for control over their fortune and their children.", //Description of the movie
                image: "https://www.imdb.com/title/tt6128300/mediaviewer/rm3760394753/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Uq0soWMpkv8",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Fifty Shades Freed", //Title
                genre: "Drama, Romance, Suspense", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2018, //When it is available to watch
                description: "Anastasia and Christian get married, but Jack Hyde continues to threaten their relationship.", //Description of the movie
                image: "https://www.imdb.com/title/tt4477536/mediaviewer/rm1012160512/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=av4zbG8dAhk",  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Me Time", //Title
                genre: "Comedy, Adventure", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Follows a dad who finds time for himself for the first time in years while his wife and kids are away. He reconnects with a friend for a wild weekend.", //Description of the movie
                image: "https://www.imdb.com/title/tt14309446/mediaviewer/rm2206861313/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=Mmq_NVwLN_g"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Halftime", //Title
                genre: "Documentary", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "Global superstar Jennifer Lopez reflects on her multifaceted career and the pressure of life in the spotlight in this intimate documentary.", //Description of the movie
                image: "https://www.imdb.com/title/tt19637852/mediaviewer/rm3760725761/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=-voLo_TIWf4"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "The Gray Man", //Title
                genre: "Suspense, Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "When the CIA's most skilled operative-whose true identity is known to none-accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a global manhunt by international assassins.", //Description of the movie
                image: "https://www.imdb.com/title/tt1649418/mediaviewer/rm2121338881/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=BmllggGO4pM"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Interceptor", //Title
                genre: "Drama, Action", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "One Army captain must use her years of tactical training and military expertise when a simultaneous coordinated attack threatens the remote missile interceptor station she is in command of.", //Description of the movie
                image: "https://www.imdb.com/title/tt14174940/mediaviewer/rm3821146625/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=OQSoII4Bj1o"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Outer Banks", //Title
                genre: "Adventure, Drama, Action, Romance", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2020, //When it is available to watch
                description: "A group of teenagers from the wrong side of the tracks stumble upon a treasure map that unearths a long-buried secret.", //Description of the movie
                image: "https://www.imdb.com/title/tt10293938/mediaviewer/rm1244920065/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=uk_hFfUFXh4"  //Trailer URL's
            },
            {
                id: "Coming Soon", //Movie row name
                title: "Peaky Blinders", //Title
                genre: "Drama, Action, Romance", //Genre
                comingSoon: true, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When it is available to watch
                description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.", //Description of the movie
                image: "https://www.imdb.com/title/tt2442560/mediaviewer/rm1060899073/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=oVzVdvGIC7U"  //Trailer URL's
            }
[Movies],//This is all the information about the Movies and TV Shows sorted within an array (eg. the id, title, genre, date available, description, image and trailer.)
            {   id: "Movies", //Movie row name
                title: "Turning Red", //Title
                genre: "Annimation", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "A 13-year-old girl named Meilin turns into a giant red panda whenever she gets too excited.", //Description of the movie
                image: "https://www.imdb.com/title/tt8097030/mediaviewer/rm1685446657/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=XdKzUbAiswE",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "John Wick", //Title
                genre: "Action, Suspense, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2019, //When the movie is available to watch
                description: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.", //Description of the movie
                image: "https://www.imdb.com/title/tt6146586/mediaviewer/rm2374853376/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=M7XM597XO94",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Minions", //Title
                genre: "Annimation", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2022, //When the movie is available to watch
                description: "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.", //Description of the movie
                image: "https://www.imdb.com/title/tt5113044/mediaviewer/rm2384730369/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=6DxjJzmYsXo",  //Trailer URL's
            },
            {   id: "Movies", //Movie row name
                title: "Kissing Booth", //Title
                genre: "Romance, Drama", //Genre
                comingSoon: false, //Boolean if the movie is: out=false, coming soon=true
                availDate: 2018, //When the movie is available to watch
                description: "A high school student is forced to confront her secret crush at a kissing booth.", //Description of the movie
                image: "https://www.imdb.com/title/tt3799232/mediaviewer/rm1883393024/?ref_=tt_ov_i", //Image URL's
                preview: "https://www.youtube.com/watch?v=7bfS6seiLhk",  //Trailer URL's
            },