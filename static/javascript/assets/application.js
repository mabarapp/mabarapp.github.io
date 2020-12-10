$(function() {

  /*-----------------------------------------------------------------------------------*/
  /*  Anchor Link
  /*-----------------------------------------------------------------------------------*/
  // $('a[href*=#]:not([href=#])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
  //     || location.hostname == this.hostname) {

  //     var target = $(this.hash);
  //   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //   if (target.length) {
  //     $('html,body').animate({
  //       scrollTop: target.offset().top
  //     }, 1000);
  //       return false;
  //     }
  //   }
  // });

  // /*-----------------------------------------------------------------------------------*/
  // /*  Tooltips
  // /*-----------------------------------------------------------------------------------*/
  // $('.tooltip-side-nav').tooltip();
  
 //  $('.slider').owlCarousel({
 //            items: 1,
 //            singleItem:true,
 //            nav: true,
 //            dots: false,
 //            loop: true,
 //            autoPlay: 3000
 //        });

 $(document).ready(function(){
 $('.slider').owlCarousel({
            items: 1,
            singleItem:true,
            nav: true,
            dots: false,
            loop: true,
            autoplay: 2000
        });

 $(".owl-carousel").owlCarousel({
            items: 1,
            singleItem:true,
            nav: false,
            dots: false,
            loop: true,
            autoplay: 2000
        });
});

//  $(document).ready(function() {
 
//   $(".owl-carousel").owlCarousel({
//             items: 1,
//             autoplay: 2000
//         });
 
// });

  // $(".slider").owlCarousel({
  //     autoPlay: 3000,
  //     items : 1, // THIS IS IMPORTANT
  //     responsive : {
  //           480 : { items : 1  }, // from zero to 480 screen width 4 items
  //           768 : { items : 2  }, // from 480 screen widthto 768 6 items
  //           1024 : { items : 3   // from 768 screen width to 1024 8 items
  //           }
  //       },
  // });
  
});
