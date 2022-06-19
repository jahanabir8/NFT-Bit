$(".mobile__icon__bar").click(function(){
    $(".mobile__menu").addClass("open");
  })
$(".cross__button").click(function(){
    $(".mobile__menu").removeClass("open");
  })

// sticy nabvar
$(window).scroll(function(){
  // sticky navbar on scroll script
  if(this.scrollY > 100){
      $('.header').addClass("sticky");
  }else{
      $('.header').removeClass("sticky");
  }

  // scroll-up button show/hide script
//   if(this.scrollY > 500){
//       $('.scroll-up-btn').addClass("show");
//   }else{
//       $('.scroll-up-btn').removeClass("show");
//   }
});


// slider section start here
$('.nft-owl-carousel').owlCarousel({
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


// road map section start here
$('.road__map__slide').owlCarousel({
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
          items:2
      },
      1000:{
          items:3
      },
      1300:{
        items:5
      }
  }
})