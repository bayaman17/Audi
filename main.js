
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
  let btn = document.querySelector('.mobile-btn')

  const burgerFunc = (menuClassName, showClassName) =>{
    let menu = document.querySelector(`.${menuClassName}`)

    if (menu.className.includes(showClassName)){
      menu.className = menuClassName;
    }else {
      menu.className += ` ${showClassName}`;
    }
  };

  btn.addEventListener('click', ()=>{
    burgerFunc('header__menu', 'header__menu-show');
  });