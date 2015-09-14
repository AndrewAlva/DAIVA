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

		// INIT PROJECTS CAROUSEL MOUSE POSITION
			var windowWidth;
			var mouseBlock;
			var mouseCurrentBlock;
			var mouseX;
			var displaceXleft;
			var leftProjectsWrapper = 0;

			$('#portfolio2Section2').mousemove(function(event){

				if (windowWidth != $(window).width() ){
					windowWidth = $(window).width();
				}

				mouseBlock = windowWidth / 10;
				
				mouseX = event.pageX;

				if (mouseX < mouseBlock) {
					mouseCurrentBlock = 0;
				} else if (mouseX < mouseBlock * 2) {
					mouseCurrentBlock = 1;
				} else if (mouseX < mouseBlock * 3) {
					mouseCurrentBlock = 2;
				} else if (mouseX < mouseBlock * 4) {
					mouseCurrentBlock = 3;
				} else if (mouseX < mouseBlock * 6) {
					mouseCurrentBlock = 4;
				} else if (mouseX < mouseBlock * 7) {
					mouseCurrentBlock = 3;
				} else if (mouseX < mouseBlock * 8) {
					mouseCurrentBlock = 2;
				} else if (mouseX < mouseBlock * 9) {
					mouseCurrentBlock = 1;
				} else if (mouseX < mouseBlock * 10) {
					mouseCurrentBlock = 0;
				}

				if (mouseX < mouseBlock * 4) {
					displaceXleft = 60/(mouseCurrentBlock + 1);
				}
				
				if (mouseCurrentBlock == 4) {
					displaceXleft = 0;
				}

				if (mouseX >= mouseBlock * 6) {
					displaceXleft = -60/(mouseCurrentBlock + 1);
				}

				leftProjectsWrapper += displaceXleft;

				if(leftProjectsWrapper > 0 ){
					leftProjectsWrapper = 0;

				} else if (leftProjectsWrapper < windowWidth * -4){
					leftProjectsWrapper = windowWidth * -4;
				}


				// $('#p2ProjectsWrapper').css("left", leftProjectsWrapper);
				
				$('#portfolio2Section2').scrollLeft(1000);
			});
		// END PROJECTS CAROUSEL MOUSE POSITION

		// INIT PROJECT 1 CLICK
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
					$('#project1').addClass('currentProject');
				},1000);


			});
		// END PROJECT 1 CLICK

		// INIT PROJECT 2 CLICK
			$('#project2').click(function(){
				$('#menuNavWrapper').addClass('pushMenuNavWrapper');
				$('#project2').addClass('currentProject');
				
				$('.daivaProjectsFlow').addClass('daivaProjectsStatic');
				$('.daivaProjectsFlow').removeClass('daivaProjectsFlow');

				setTimeout(function(){
					$('.project2Arrows').removeClass('hiddenArrowProjects');
					
				},900);

				setTimeout(function(){
					$('.project2Arrows').removeClass('crystalArrowProjects');
					$('#portfolioProjectsWrapper').addClass('zoomInProjectsWrapper');
				},1000);


			});
		// END PROJECT 2 CLICK

		// INIT PROJECT 3 CLICK
			$('#project3').click(function(){
				$('#menuNavWrapper').addClass('pushMenuNavWrapper');
				$('#project3').addClass('currentProject');
				
				$('.daivaProjectsFlow').addClass('daivaProjectsStatic');
				$('.daivaProjectsFlow').removeClass('daivaProjectsFlow');

				setTimeout(function(){
					$('.project3Arrows').removeClass('hiddenArrowProjects');
					
				},900);

				setTimeout(function(){
					$('.project3Arrows').removeClass('crystalArrowProjects');
					$('#portfolioProjectsWrapper').addClass('zoomInProjectsWrapper');
				},1000);


			});
		// END PROJECT 3 CLICK

		// INIT PROJECT 4 CLICK
			$('#project4').click(function(){
				$('#menuNavWrapper').addClass('pushMenuNavWrapper');
				$('#project4').addClass('currentProject');
				
				$('.daivaProjectsFlow').addClass('daivaProjectsStatic');
				$('.daivaProjectsFlow').removeClass('daivaProjectsFlow');

				setTimeout(function(){
					$('.project4Arrows').removeClass('hiddenArrowProjects');
					
				},900);

				setTimeout(function(){
					$('.project4Arrows').removeClass('crystalArrowProjects');
					$('#portfolioProjectsWrapper').addClass('zoomInProjectsWrapper');
				},1000);


			});
		// END PROJECT 4 CLICK

		// INIT PROJECT 5 CLICK
			$('#project5').click(function(){
				$('#menuNavWrapper').addClass('pushMenuNavWrapper');
				
				
				$('.daivaProjectsFlow').addClass('daivaProjectsStatic');
				$('.daivaProjectsFlow').removeClass('daivaProjectsFlow');

				setTimeout(function(){
					$('.project5Arrows').removeClass('hiddenArrowProjects');
					
				},900);

				setTimeout(function(){
					$('.project5Arrows').removeClass('crystalArrowProjects');
					$('#portfolioProjectsWrapper').addClass('zoomInProjectsWrapper');
					$('#project5').addClass('currentProject');
				},1000);


			});
		// END PROJECT 5 CLICK

		// INIT CLOSE PROJECTS
			$('#backZoom').click(function(){
				$('#menuNavWrapper').removeClass('pushMenuNavWrapper');
				$('#portfolioProjectsWrapper').removeClass('zoomInProjectsWrapper');
				

				setTimeout(function(){
					$('.daivaProjectsStatic').addClass('daivaProjectsFlow');
					$('.daivaProjectsStatic').removeClass('daivaProjectsStatic');
				},1000);

				// INIT REMOVE REPEATED CLASSES FROM ALL PROJECTS
					$('.project1Arrows').addClass('crystalArrowProjects');
					$('.project2Arrows').addClass('crystalArrowProjects');
					$('.project3Arrows').addClass('crystalArrowProjects');
					$('.project4Arrows').addClass('crystalArrowProjects');
					$('.project5Arrows').addClass('crystalArrowProjects');
					
					setTimeout(function(){
						$('.project1Arrows').addClass('hiddenArrowProjects');
						$('.project2Arrows').addClass('hiddenArrowProjects');
						$('.project3Arrows').addClass('hiddenArrowProjects');
						$('.project4Arrows').addClass('hiddenArrowProjects');
						$('.project5Arrows').addClass('hiddenArrowProjects');
					},400);


					$('#project1').removeClass('currentProject');
					$('#project2').removeClass('currentProject');
					$('#project3').removeClass('currentProject');
					$('#project4').removeClass('currentProject');
					$('#project5').removeClass('currentProject');
					$('#project6').removeClass('currentProject');
					$('#project7').removeClass('currentProject');
					$('#project8').removeClass('currentProject');
					$('#project9').removeClass('currentProject');
					$('#project10').removeClass('currentProject');
					$('#project11').removeClass('currentProject');
					$('#project12').removeClass('currentProject');
					$('#project13').removeClass('currentProject');
					$('#project14').removeClass('currentProject');
					$('#project15').removeClass('currentProject');
					$('#project16').removeClass('currentProject');
				// END REMOVE REPEATED CLASSES FROM ALL PROJECTS
			});
		// END CLOSE PROJECTS
	//// END PORTFOLIO INTERACTION
	
});