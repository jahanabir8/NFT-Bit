$(".mobile__icon__bar").click(function(){
    $(".mobile__menu").addClass("open");
  })
$(".cross__button").click(function(){
    $(".mobile__menu").removeClass("open");
  })


  // $(".mobile__icon__bar").click(function(){
  //   $(".mobile__menu").toggleClass("open");
  // })

  // $(window).on('click',function(e){
  //   if(e.target.className != 'fa-solid fa-bars'){
  //       $(".mobile__menu").removeClass('open');
  //     }
  // })



// sticy nabvar
$(window).scroll(function(){
  // sticky navbar on scroll script
  if(this.scrollY > 50){
      $('.header').addClass("sticky");
  }else{
      $('.header').removeClass("sticky");
  }
});


// slider section start here
$('.nft-owl-carousel').owlCarousel({
  loop:true,
  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },
  autoplayTimeout:2000,
  speed: 1000,
  autoplaySpeed : 1000,
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
    delay: 100,
    disableOnInteraction: false,
  },
  autoplayTimeout:2000,
  speed: 1000,
  autoplaySpeed : 1000,
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
 
 