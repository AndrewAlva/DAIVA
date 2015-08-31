$(document).ready(function() {
	//// INIT LOADER FUNCTION
		$('#homeWrapper').removeClass('limitByLoader');
		$('#pilarsWrapper').removeClass('limitByLoader');
		$('#portfolioWrapper').removeClass('limitByLoader');
		$('#homeLoader').addClass('hideLoader');
		setTimeout(function(){
			$('#homeLoader').hide();
		},800);

		setTimeout(function(){
			$('#bgSection1').removeClass('animateBgSect1');
		}, 1500);

		setTimeout(function(){
			$('#landingBorderChanger').removeClass('landingBorderInit');
		},2500);
	//// END LOADER FUNCTION


	//// INIT MENU MANDALA INTERACTION
		var openedMenu = false;

		//// INIT OPEN MENU MANDALA
			$('#burguerBox').click(function(e){
				e.preventDefault();

				// BURGUER ANIMATION
				$('.burguerLines').toggleClass('burguerNoWidth');
				setTimeout(function(){
					$('#burguerLine1').toggleClass('rotateMenuLeft');
					$('#burguerLine2').toggleClass('hidden');
					$('#burguerLine3').toggleClass('rotateMenuRight');
				},500);
				setTimeout(function(){
					$('.burguerLines').toggleClass('burguerNoWidth');
				},1000);



				// RINGS ANIMATION TO OPEN
				if(openedMenu == false){
					$('#windowMenuWrapper').toggleClass('hidden');
					setTimeout(function(){
						$('#windowMenuWrapper').toggleClass('hideMenuWrapper');
					},100);

					setTimeout(function(){
						leaveMenu('pushRing',1000,'pushRing',600,'pushRing',300);
					},1000);

					openedMenu = true;



				// RINGS ANIMATION TO CLOSE
				} else {
					leaveMenu('pushRing',1000,'pushRing',600,'pushRing',300);

					setTimeout(function(){
						$('#windowMenuWrapper').toggleClass('hideMenuWrapper');
					},1300);

					setTimeout(function(){
						$('#windowMenuWrapper').toggleClass('hidden');
					},2000);

					openedMenu = false;
				}
				
			});
		//// END OPEN MENU MANDALA

		//// INIT MANDALA MENU CLICK ANIMATION, GO TO NEXT LOCATION

			$('#portafolioStage').click(function () {
				leaveMenu('pullRing',2000,'pushRing',800,'pushRing',400);
				// setTimeout(function(){
				// 	window.location.assign("http://www.w3schools.com");
				// },2000);
			});

			$('#pilaresStage').click(function () {
				leaveMenu('pushRing',800,'pullRing',2000,'pushRing',400);
				// setTimeout(function(){
				// 	window.location.assign("http://www.w3schools.com");
				// },2000);
			});

			$('#comienzoStage').click(function () {
				leaveMenu('pushRing',800,'pushRing',400,'pullRing',2000);
				// setTimeout(function(){
				// 	window.location.assign("http://www.w3schools.com");
				// },2000);
			});



			function leaveMenu(portafolioPushPull, portafolioRingDelay, pilaresPushPull, pilaresRingDelay, comienzoPushPull, comienzoRingDelay, voidPushPull, voidRingDelay){
				setTimeout(function(){
					$('#portafolioStage').toggleClass(portafolioPushPull);
				}, portafolioRingDelay);

				setTimeout(function(){
					$('#pilaresStage').toggleClass(pilaresPushPull);
				}, pilaresRingDelay);

				setTimeout(function(){
					$('#comienzoStage').toggleClass(comienzoPushPull);
				}, comienzoRingDelay);

				setTimeout(function(){
					$('#voidStage').toggleClass('pushRing');
				}, 0);
			}
		//// END MANDALA MENU CLICK ANIMATION, GO TO NEXT LOCATION
	//// END MENU MANDALA INTERACTION


	//// INIT HOME CHANGE QUOTES
		$('#quotesScroll-1').click(function(){
			$('#homeQuoteWrapper1').animate({top: '-100vh',opacity: '0'}, 1600);
			$('#homeQuoteWrapper2').removeClass('hidden');
			setTimeout(function(){
				$('#homeQuoteWrapper2').animate({opacity: '1'}, 800);
			},1000);
		});

		$('#quotesScroll-2').click(function(){
			$('#homeQuoteWrapper2').animate({top: '-100vh',opacity: '0'}, 1600);
			$('#homeQuoteWrapper3').removeClass('hidden');
			setTimeout(function(){
				$('#homeQuoteWrapper3').animate({opacity: '1'}, 800);
			},1000);
		});
	//// END HOME CHANGE QUOTES
		// PENDIENTE



	//// INIT PORTFOLIO INTERACTION
		$('#project1').click(function(){
			$('#menuNavWrapper').addClass('pushMenuNavWrapper');
			
			$('.daivaProjectsFlow').addClass('daivaProjectsStatic');
			$('.daivaProjectsFlow').removeClass('daivaProjectsFlow');

			setTimeout(function(){
				$('.project1Arrows').removeClass('hiddenArrowProjects');
				
			},900);

			setTimeout(function(){
				$('.project1Arrows').removeClass('crystalArrowProjects');
				$('#portfolioProjectsWrapper').addClass('zoomInProjectsWrapper');
			},1000);


		});

		$('#backZoom').click(function(){
			$('#menuNavWrapper').removeClass('pushMenuNavWrapper');
			$('#portfolioProjectsWrapper').removeClass('zoomInProjectsWrapper');
			

			setTimeout(function(){
				$('.daivaProjectsStatic').addClass('daivaProjectsFlow');
				$('.daivaProjectsStatic').removeClass('daivaProjectsStatic');
			},1000);

			// INIT REMOVE CHANGE ARROWS
				$('.project1Arrows').addClass('crystalArrowProjects');
				
				setTimeout(function(){
					$('.project1Arrows').addClass('hiddenArrowProjects');
				},400);
			// END REMOVE CHANGE ARROWS
		});
	//// END PORTFOLIO INTERACTION
	
});