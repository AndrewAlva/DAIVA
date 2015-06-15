$(document).ready(function() {

//MENU NAV INTERACTIONS INIT
	//HOVER MENU ANIMATIONS INIT
	$('#menu-portafolio').on( "mouseenter", (function() {
		$('.menu-ring1').toggleClass('menu-ring1-lvl1');
		
		$(this).toggleClass('menu-portafolio-lvl1');

		$('.menu-ring2').toggleClass('menu-ring2-lvl1');

		$('#menu-pilares').toggleClass('menu-pilares-lvl1');
		
		$('.menu-ring3').toggleClass('menu-ring3-lvl1');

		$('#menu-comienzo').toggleClass('menu-comienzo-lvl1');

		$('.menu-ring4').toggleClass('menu-ring4-lvl1');

	}));

	$('#menu-portafolio').on( "mouseleave", (function() {
		$('.menu-ring1').toggleClass('menu-ring1-lvl1');
		
		$(this).toggleClass('menu-portafolio-lvl1');

		$('.menu-ring2').toggleClass('menu-ring2-lvl1');

		$('#menu-pilares').toggleClass('menu-pilares-lvl1');
		
		$('.menu-ring3').toggleClass('menu-ring3-lvl1');

		$('#menu-comienzo').toggleClass('menu-comienzo-lvl1');

		$('.menu-ring4').toggleClass('menu-ring4-lvl1');

	}));




	$('#menu-pilares').on( "mouseenter", (function() {		
		$('.menu-ring1').toggleClass('menu-ring1-lvl2');
		
		$('#menu-portafolio').toggleClass('menu-portafolio-lvl2');

		$('.menu-ring2').toggleClass('menu-ring2-lvl2');

		$(this).toggleClass('menu-pilares-lvl2');

		$('.menu-ring3').toggleClass('menu-ring3-lvl2');

		$('#menu-comienzo').toggleClass('menu-comienzo-lvl2');

		$('.menu-ring4').toggleClass('menu-ring4-lvl2');

	}));

	$('#menu-pilares').on( "mouseleave", (function() {		
		$('.menu-ring1').toggleClass('menu-ring1-lvl2');
		
		$('#menu-portafolio').toggleClass('menu-portafolio-lvl2');

		$('.menu-ring2').toggleClass('menu-ring2-lvl2');

		$(this).toggleClass('menu-pilares-lvl2');

		$('.menu-ring3').toggleClass('menu-ring3-lvl2');

		$('#menu-comienzo').toggleClass('menu-comienzo-lvl2');

		$('.menu-ring4').toggleClass('menu-ring4-lvl2');

	}));




	$('#menu-comienzo').on( "mouseenter", (function() {		
		$('.menu-ring1').toggleClass('menu-ring1-lvl3');
		
		$('#menu-portafolio').toggleClass('menu-portafolio-lvl3');

		$('.menu-ring2').toggleClass('menu-ring2-lvl3');

		$('#menu-pilares').toggleClass('menu-pilares-lvl3');

		$('.menu-ring3').toggleClass('menu-ring3-lvl3');

		$(this).toggleClass('menu-comienzo-lvl3');
		
		$('.menu-ring4').toggleClass('menu-ring4-lvl3');

	}));

	$('#menu-comienzo').on( "mouseleave", (function() {		
		$('.menu-ring1').toggleClass('menu-ring1-lvl3');
		
		$('#menu-portafolio').toggleClass('menu-portafolio-lvl3');

		$('.menu-ring2').toggleClass('menu-ring2-lvl3');

		$('#menu-pilares').toggleClass('menu-pilares-lvl3');

		$('.menu-ring3').toggleClass('menu-ring3-lvl3');

		$(this).toggleClass('menu-comienzo-lvl3');
		
		$('.menu-ring4').toggleClass('menu-ring4-lvl3');

	}));

	//HOVER MENU ANIMATIONS END






	//CLICK MENU ANIMATIONS INIT
	function goPortfolio(){
		$('#menu-mandala').addClass('bye-menu-portafolio');
	}

	$('#menu-portafolio').on('click', function() {
		$('body').prepend('<div class="glass-menu"></div>');
		$('#menu-portafolio').addClass('click-menu-portafolio');
		setTimeout(goPortfolio,2000);
	
	});


	//CLICK MENU ANIMATIONS END

//MENU NAV INTERACTIONS END
});
