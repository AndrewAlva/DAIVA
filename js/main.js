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

		//CLICK PORTFOLIO INIT
	
	function visitPortfolio(){
		//window.location.href = 'https://www.google.com.mx/';
	}

	function clickPortfolioRing1(){
		$('.menu-ring1').addClass('bye-ring1-portafolio');
	}

	function clickPortfolioPortfolio(){
		$('#menu-portafolio').addClass('bye-menu-portafolio');
	}

	function clickPortfolioRing2(){
		$('.menu-ring2').addClass('bye-ring2-portafolio');
	}

	function clickPortfolioComienzo(){
		$('#menu-comienzo').addClass('bye-comienzo-portafolio');
	}

	function clickPortfolioRing3(){
		$('.menu-ring3').addClass('bye-ring3-portafolio');
	}

	function clickPortfolioPilares(){
		$('#menu-pilares').addClass('bye-pilares-portafolio');
	}

	$('#menu-portafolio').on('click', function() {
		$('body').prepend('<div class="glass-menu"></div>');
		
		$('.menu-ring4').addClass('bye-ring4-portafolio');

		setTimeout(visitPortfolio,2250);

		setTimeout(clickPortfolioRing2,2200);
		setTimeout(clickPortfolioPortfolio,2100);
		setTimeout(clickPortfolioRing1,1900);

		setTimeout(clickPortfolioComienzo,250);
		setTimeout(clickPortfolioRing3,500);
		setTimeout(clickPortfolioPilares,750);


	
	});

		//CLICK PORTFOLIO END






		//CLICK PILARES INIT
	function visitPilares(){
		//window.location.href = 'https://www.facebook.com/';
	}

	function clickPilaresRing1(){
		$('.menu-ring1').addClass('bye-ring1-pilares');
	}

	function clickPilaresPortfolio(){
		$('#menu-portafolio').addClass('bye-menu-pilares');
	}

	function clickPilaresRing2(){
		$('.menu-ring2').addClass('bye-ring2-pilares');
	}

	function clickPilaresPilares(){
		$('#menu-pilares').addClass('bye-pilares-pilares');
	}

	function clickPilaresRing3(){
		$('.menu-ring3').addClass('bye-ring3-pilares');
	}

	function clickPilaresComienzo(){
		$('#menu-comienzo').addClass('bye-comienzo-pilares');
	}


	$('#menu-pilares').on('click', function() {
		$('body').prepend('<div class="glass-menu"></div>');
		
		$('.menu-ring4').addClass('bye-ring4-pilares');

		setTimeout(clickPilaresComienzo,250);
		setTimeout(clickPilaresPortfolio,750);
		setTimeout(clickPilaresRing1,1000);

		setTimeout(clickPilaresRing2,1900);
		setTimeout(clickPilaresPilares,2100);
		setTimeout(clickPilaresRing3,2200);

		setTimeout(visitPilares,2250);
	});

		//CLICK PILARES END


		//CLICK COMIENZO INIT
	function visitComienzo(){
		//window.location.href = 'https://www.youtube.com/';
	}

	function clickComienzoRing1(){
		$('.menu-ring1').addClass('bye-ring1-comienzo');
	}

	function clickComienzoPortfolio(){
		$('#menu-portafolio').addClass('bye-menu-comienzo');
	}

	function clickComienzoRing2(){
		$('.menu-ring2').addClass('bye-ring2-comienzo');
	}

	function clickComienzoPilares(){
		$('#menu-pilares').addClass('bye-pilares-comienzo');
	}

	function clickComienzoRing3(){
		$('.menu-ring3').addClass('bye-ring3-comienzo');
	}

	function clickComienzoComienzo(){
		$('#menu-comienzo').addClass('bye-comienzo-comienzo');
	}

	function clickComienzoRing4(){
		$('.menu-ring4').addClass('bye-ring4-comienzo');
	}


	$('#menu-comienzo').on('click', function() {
		$('body').prepend('<div class="glass-menu"></div>');
		
		$('#menu-pilares').addClass('bye-pilares-comienzo');

		setTimeout(clickComienzoRing2,250);
		setTimeout(clickComienzoPortfolio,500);
		setTimeout(clickComienzoRing1,750);
		setTimeout(clickComienzoRing3,1900);
		setTimeout(clickComienzoComienzo,2100);
		setTimeout(clickComienzoRing4,2200);

		setTimeout(visitComienzo,2250);
	});

		//CLICK COMIENZO END
		


	//CLICK MENU ANIMATIONS END

//MENU NAV INTERACTIONS END
});
