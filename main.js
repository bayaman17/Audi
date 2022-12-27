
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
    });
  });



  Fancybox.bind("#gallery a", {
    groupAll : true,
    on : {
      ready : (fancybox) => {
        console.log(`fancybox #${fancybox.id} is ready!`);
      }
    }
  });