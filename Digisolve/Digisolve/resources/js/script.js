// Adding Sticky Nav
$(document).ready(function() {

  $(".js--about-section").waypoint(function(direction){
    if(direction=="down") {
      $("nav").addClass('sticky-nav');
    }
    else {
      $("nav").removeClass('sticky-nav');
    }
  });


  $(".js--scroll").click(function() {
      $("html, body").animate({scrollTop:$('.js--contact').offset().top},1000);
  })

});


// Scrolling to contact section

// $(".js-about-section ").waypoint(function(direction) {
//   $("js-about-box").addClass('animate__animated  animate__fadeIn');
//    });
// });
