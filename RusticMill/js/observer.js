const header = document.querySelector("header");
const sectionHero = document.querySelector(".hero");
const sectionHeroOptions = {
    rootMargin: "-500px 0px 0px 0px"
};

const sectionHeroObs = new IntersectionObserver
(function (entries, sectionHeroObs){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
           
           $('header .nav-logo img').addClass('shrink')
           $('header').addClass('scrolled');
        }
        else{
            $('header .nav-logo img').removeClass('shrink'); 
            $('header').removeClass('scrolled');
            
        }
    });
},
sectionHeroOptions);
sectionHeroObs.observe(sectionHero);