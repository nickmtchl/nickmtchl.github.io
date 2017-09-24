$(document).ready(function(){
	
  // Smooth Scroll
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
  
  // Overlay Menu Functionality
	$("#overlay-menu").click(function() {
    $(".overlay").addClass("overlay-open");
    $('body').addClass("noScroll");
  });

	$(".overlay-close").click(function() {
    $(".overlay").removeClass("overlay-open");
    $('body').removeClass("noScroll");
  });

	// Slick Slider
	$('.nt_slider').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 900,
    dots: true,
    cssEase: 'linear',
    prevArrow: $('#mypreviousbutton'),
    nextArrow: $('#mynextbutton')
	});


  // This adds a next button to the first slide on home page
  // $('.slick-play').on('click',function() {
  //   $('.nt_slider').slick('slickNext');
  // });


  // Content Slider
  $('.content_slider').slick({
    autoplay: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 500,
    dots: false,
    cssEase: 'linear'
  });

  // site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

	/* Slow Reveal -- Every time the window is scrolled, since we are also using the Reveal Footer, this might not actually be activated ... */
  $(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.hideme').each( function(i){     
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
            
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){  
        $(this).animate({'opacity':'1'},700);
      }     
    }); 
  });

   // Reveal Back to top icon after certain scroll height
  $('#js-backtop').hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#js-backtop').fadeIn("slow");
    }
    else {
      $('#js-backtop').fadeOut("fast");
    }
  });

  // Reveal Footer
  $('footer').footerReveal({ shadow: false, zIndex: -101 });

  // View Work Hover Feature
  $(".js-background-trigger").hover(function(){
   $(".js-background-receiver", this).addClass('hover');
  }
  , 
  function(){
     $(".js-background-receiver", this).removeClass('hover');
  });

  var options = {
  "animate": true,
  "patternWidth": 350.4,
  "patternHeight": 500,
  "grainOpacity": 0.17,
  "grainDensity": 1.5,
  "grainWidth": 1,
  "grainHeight": 1
  }
  grained("#noise-filter", options);


}); // Close of jQuery