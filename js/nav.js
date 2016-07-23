$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.intro');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-default').css('background-color', 'rgba(44, 89, 44, 1)');
          $('.navbar-default .navbar-nav>li>a.active').css('color', '#FFA500');
          $('.navbar-default').css('min-height', '50px');
          $('.navbar-default .navbar-nav>li>a').css('padding', '15px 15px');
       } else {
          $('.navbar-default').css('background-color', 'rgba(44, 89, 44, 0.7)');
          $('.navbar-default .navbar-nav>li>a.active').css('color', '#FFA500');
          $('.navbar-default').css('min-height', '60px');
          $('.navbar-default .navbar-nav>li>a').css('padding', '25px 15px');
      }
   });
});

