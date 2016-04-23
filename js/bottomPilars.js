// INIT DETECT SCROLL BOTTOM
	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
        	setTimeout(function(){
        		leavePilares();
	        },700);

	        setTimeout(function(){
	        	window.location.assign("../portafolio/");
	        },2800);
	   }
	});


	function leavePilares(){

		$('#leavePilares11').toggleClass('pullRing');

		setTimeout(function(){
			$('#leavePilares10').toggleClass('pullRing');
		}, 200);
		setTimeout(function(){
			$('#leavePilares9').toggleClass('pullRing');
		}, 400);
		setTimeout(function(){
			$('#leavePilares8').toggleClass('pullRing');
		}, 600);
		setTimeout(function(){
			$('#leavePilares7').toggleClass('pullRing');
		}, 800);
		setTimeout(function(){
			$('#leavePilares6').toggleClass('pullRing');
		}, 1000);
		setTimeout(function(){
			$('#leavePilares5').toggleClass('pullRing');
		}, 1200);
		setTimeout(function(){
			$('#leavePilares4').toggleClass('pullRing');
		}, 1400);
		setTimeout(function(){
			$('#leavePilares3').toggleClass('pullRing');
		}, 1600);
		setTimeout(function(){
			$('#leavePilares2').toggleClass('pullRing');
		}, 1800);
		setTimeout(function(){
			$('#leavePilares1').toggleClass('pullRing');
		}, 2000);

	}
// END DETECT SCROLL BOTTOM