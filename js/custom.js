(function ($) {

    "use strict";
  
    
      // COLOR MODE
      $('.dark-color-mode').click(function(){
        
          $('.change-icon').removeClass('fa-moon-o').addClass('fa-sun-o')
          
        //   $(this).text("Switch to Light Mode").removeClass('dark-color-mode').addClass('light-color-mode');
        
          $('body').toggleClass('dark-mode')
      })

    
  
      // HEADER
      $(".navbar").headroom();
  
      // PROJECT CAROUSEL
      $('.owl-carousel').owlCarousel({
          items: 1,
          loop:true,
          margin:10,
          nav:true
      });
  
      // SMOOTHSCROLL
      $(function() {
        $('.nav-link, .custom-btn-link').on('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
          event.preventDefault();
        });
      });  
  
      // TOOLTIP
      $('.social-links a').tooltip();
  
  })(jQuery);