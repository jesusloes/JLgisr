 $(document).ready(function(){
 	$('.parallax').parallax();
 	$( '#cbp-qtrotator' ).cbpQTRotator();
 	$( '#cbp-qtrotator2' ).cbpQTRotator();
 	$('.button-collapse').sideNav({menuWidth: 240, activationWidth: 70});
 	$('#jsCarousel').jsCarousel({ autoscroll: true });
 	$('.modal-trigger').leanModal();
            $('a[rel="external"]').click(function() {
          window.open($(this).attr('href'));
          return false;
    });
 	new WOW().init();
 	            // Prevent console.log from generating errors in IE for the purposes of the demo
 	            if ( ! window.console ) console = { log: function(){} };

        });
