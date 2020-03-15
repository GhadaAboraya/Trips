$(document).ready(function () {
    /*for data toggel*/
    $("#show").click(function(){
        $("#hide").css({
            transform: "scale(1)",
            transition: "all .8s",
        });
    })
    .dblclick(function() {
        $("#hide").css({
            transform: "scale(0)"
        });
    })


    /*wow for text*/
    new WOW().init();



    var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 2, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
})