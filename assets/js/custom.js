 $(document).ready(function(){
 	$('.parallax').parallax();
 	$( '#cbp-qtrotator' ).cbpQTRotator();
 	$( '#cbp-qtrotator2' ).cbpQTRotator();
 	$('.button-collapse').sideNav({menuWidth: 240, activationWidth: 70});
 	$('#jsCarousel').jsCarousel({ autoscroll: true });
 	$('.modal-trigger').leanModal();
 	new WOW().init();
 	            // Prevent console.log from generating errors in IE for the purposes of the demo
 	            if ( ! window.console ) console = { log: function(){} };

            // The actual plugin
            $('.single-page-nav').singlePageNav({
            	offset: $('.single-page-nav').outerHeight(),
            	filter: ':not(.external)',
            	updateHash: true,
            	beforeStart: function() {
            		console.log('begin scrolling');
            	},
            	onComplete: function() {
            		console.log('done scrolling');
            	}
            });
        });
