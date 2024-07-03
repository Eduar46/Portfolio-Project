let exploreButton = document.querySelector(".explore");
let ss = document.querySelector(".SS");
let container = document.querySelector(".container");
exploreButton.addEventListener("click", function () {
    ss.style.display="block";
    container.style.display="none";
    console.log("test")
});

$(document).ready(function(){
    var preLoderLi = $('.preload li'),
        pageDiv = $('.page-transition .div'),
        slideDown = new TimelineMax({paused : true}),
        loading = new TimelineMax({paused : true , repeat : 2}),
        slideUp = new TimelineMax({paused : true}),
        loadAnimation = new TimelineMax({repeat : -1});
    
    slideDown.staggerTo(pageDiv , 0.5 ,{
      bottom : "0%" ,
      ease : Power2.easeIn
    }, 0.2);
    
    loading.staggerFrom(preLoderLi, 0.5 ,{
      y : -15,
      autoAlpha : 0,
      ease : Power1.easeIn
    },0.2)
    .staggerTo(preLoderLi , 0.5,{
      y : 35,
      autoAlpha : 0,
      ease : Power1.easeIn
    },0.1);
    
     slideUp.staggerTo(pageDiv , 0.5 ,{
      bottom : "100%" ,
      ease : Power2.easeOut
    }, 0.2);
    
    
    loadAnimation.add(slideDown.play(), 0.5)
                 .add(loading.play())
                 .add(slideUp.play());
    
    
  });