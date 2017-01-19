
$(document).ready(function(){
  //
    $('.menu li').hover(
      function() {
        $(this).addClass("active");
        $(this).find('ul').stop(true, true);
        $(this).find('ul').slideDown('slow');
      },
      function() {
          $(this).find('ul').slideUp('slow');
          $(this).removeClass("active");
        });

      $('.submenu li a').hover(
        function() {
           $(this).addClass("color");
         });
});
