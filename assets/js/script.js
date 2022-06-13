$(".mobile__icon__bar").click(function(){
    $(".mobile__menu").addClass("open");
  })
$(".cross__button").click(function(){
    $(".mobile__menu").removeClass("open");
  })


// slider section start here
$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
})