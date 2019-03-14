// js--main-nav
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    // nav.toggle(200);

    nav.animate({width: 'toggle'});
    
    if (icon.hasClass('fa-bars')) {
        icon.addClass('fa-times');
        icon.removeClass('fa-bars');
    } else {
        icon.addClass('fa-bars');
        icon.removeClass('fa-times');
    }      
  });


//   $("#button").click(function(){
//     $("#img1").animate({width: 'toggle'});
// });

//   $(document).ready(function(){
//     $(".slide-toggle").click(function(){
//       $(".box").animate({
//         width: "toggle"
//       });
//     });
//   });