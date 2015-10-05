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

		// INIT PROJECTS PORTFOLIO CAROUSEL MOUSE POSITION
			var windowWidth;
			var limitWidth;
			var widthScrollDisplaceTrigger = 100; // Width in pixels
			var scrollBackArea = widthScrollDisplaceTrigger;
			var scrollNextArea;
			var mouseX;
			var displaceWidth = 5; // Displacement value on mouse position, in pixels
			var displaceXleft;
			var leftProjectsWrapper = 0;

			var lastLeftPush;

			
			$('#portfolioSection2').mousemove(function(){
				mouseX = event.pageX;
			});

			$('#portfolioProjectsWrapper').mouseleave(function(){
				displaceXleft = 0;
				mouseX = widthScrollDisplaceTrigger + 1;
			});

			setInterval(function(event){
				if (windowWidth != $(window).width() ){
					windowWidth = $(window).width();
					scrollNextArea = windowWidth - widthScrollDisplaceTrigger;
					limitWidth = windowWidth * 4;
				}


				if (mouseX <= scrollBackArea) {
					displaceXleft = displaceWidth * -1;
					$('.daivaProjects').removeClass('cPointer');
					$('#portfolioSection2').addClass('scrollingLeft');

				} else if (mouseX >= scrollNextArea) {
					displaceXleft = displaceWidth;
					$('.daivaProjects').removeClass('cPointer');
					$('#portfolioSection2').addClass('scrollingRight');
				}  else {
					displaceXleft = 0;
					$('.daivaProjects').addClass('cPointer');
					$('#portfolioSection2').removeClass('scrollingRight');
					$('#portfolioSection2').removeClass('scrollingLeft');
				}



				leftProjectsWrapper += displaceXleft;

				if(leftProjectsWrapper <= 0 ){
					leftProjectsWrapper = 0;

				} else if (leftProjectsWrapper > limitWidth){
					leftProjectsWrapper = limitWidth;
				}

				$('#portfolioSection2').scrollLeft(leftProjectsWrapper);
				
			},5);


			$('#portfolioSection2').scroll(function(){
				leftProjectsWrapper = $('#portfolioSection2').scrollLeft();
			});
		// END PROJECTS CAROUSEL MOUSE POSITION


		// INIT PORTFOLIO PROJECTS INTERACTION
			$('#portfolioSection2').mouseenter(function(){
				$('.daivaProjects').addClass('otherProjects');
			});

			$('#portfolioSection2').mouseleave(function(){
				$('.daivaProjects').removeClass('otherProjects');
			});

			$('.daivaProjects').mouseenter(function(){
				$(this).addClass('uniqueProject');
			});

			$('.daivaProjects').mouseleave(function(){
				$(this).removeClass('uniqueProject');
			});



		 	$('.daivaProjects').click(function(){
		 		lastLeftPush = leftProjectsWrapper;

		 		$('#menuNavWrapper').addClass('onProjectsMenuNavWrapper');
		 		$('#contactBox').addClass('onProjectsContact');
		 		$('#burguerBox').addClass('onProjectsBurguer');

				$('#portfolioProjectsWrapper').addClass('openProjects');
				$('.daivaProjects').addClass('notCurrentProject');
				$('.daivaProjects').removeClass('opFlow');
				$(this).addClass('currentProject');

				//Projects Type Box and Back Zoom Appear/Disappear
				$('#backZoom').removeClass('notHere');
				$('.projectKnowMore').removeClass('notHere');
				setTimeout(function(){
					$('#backZoom').removeClass('crystal');
					$('.projectKnowMore').removeClass('crystal');
				},100);


				$('#menuNavWrapper').addClass('pushMenuNavWrapper');
				
				// Arrows to change projects
				$('.changeProject').removeClass('hiddenArrowProjects');

				setTimeout(function(){
					$('.changeProject').removeClass('crystalArrowProjects');
				},500);


				
			});


			// INIT CHANGE PROJECTS LEFT/RIGHT CLICK
				
				// PROJECT 1 ARROWS
					$('#backProject16').click(function(){
						setTimeout(function(){
							$('#project1').removeClass('currentProject');
							$('#project16').addClass('currentProject');
						},100);
					});
					$('#nextProject2').click(function(){
						setTimeout(function(){
							$('#project1').removeClass('currentProject');
							$('#project2').addClass('currentProject');
						},100);
					});
				// END PROJECT 1 ARROWS

				// PROJECT 2 ARROWS
					$('#backProject1').click(function(){
						setTimeout(function(){
							$('#project2').removeClass('currentProject');
							$('#project1').addClass('currentProject');
						},100);
					});
					$('#nextProject3').click(function(){
						setTimeout(function(){
							$('#project2').removeClass('currentProject');
							$('#project3').addClass('currentProject');
						},100);
					});
				// END PROJECT 2 ARROWS

				// PROJECT 3 ARROWS
					$('#backProject2').click(function(){
						setTimeout(function(){
							$('#project3').removeClass('currentProject');
							$('#project2').addClass('currentProject');
						},100);
					});
					$('#nextProject4').click(function(){
						setTimeout(function(){
							$('#project3').removeClass('currentProject');
							$('#project4').addClass('currentProject');
						},100);
					});
				// END PROJECT 3 ARROWS

				// PROJECT 4 ARROWS
					$('#backProject3').click(function(){
						setTimeout(function(){
							$('#project4').removeClass('currentProject');
							$('#project3').addClass('currentProject');
						},100);
					});
					$('#nextProject5').click(function(){
						setTimeout(function(){
							$('#project4').removeClass('currentProject');
							$('#project5').addClass('currentProject');
						},100);
					});
				// END PROJECT 4 ARROWS

				// PROJECT 5 ARROWS
					$('#backProject4').click(function(){
						setTimeout(function(){
							$('#project5').removeClass('currentProject');
							$('#project4').addClass('currentProject');
						},100);
					});
					$('#nextProject6').click(function(){
						setTimeout(function(){
							$('#project5').removeClass('currentProject');
							$('#project6').addClass('currentProject');
						},100);
					});
				// END PROJECT 5 ARROWS

				// PROJECT 6 ARROWS
					$('#backProject5').click(function(){
						setTimeout(function(){
							$('#project6').removeClass('currentProject');
							$('#project5').addClass('currentProject');
						},100);
					});
					$('#nextProject7').click(function(){
						setTimeout(function(){
							$('#project6').removeClass('currentProject');
							$('#project7').addClass('currentProject');
						},100);
					});
				// END PROJECT 6 ARROWS

				// PROJECT 7 ARROWS
					$('#backProject6').click(function(){
						setTimeout(function(){
							$('#project7').removeClass('currentProject');
							$('#project6').addClass('currentProject');
						},100);
					});
					$('#nextProject8').click(function(){
						setTimeout(function(){
							$('#project7').removeClass('currentProject');
							$('#project8').addClass('currentProject');
						},100);
					});
				// END PROJECT 7 ARROWS

				// PROJECT 8 ARROWS
					$('#backProject7').click(function(){
						setTimeout(function(){
							$('#project8').removeClass('currentProject');
							$('#project7').addClass('currentProject');
						},100);
					});
					$('#nextProject9').click(function(){
						setTimeout(function(){
							$('#project8').removeClass('currentProject');
							$('#project9').addClass('currentProject');
						},100);
					});
				// END PROJECT 8 ARROWS

				// PROJECT 9 ARROWS
					$('#backProject8').click(function(){
						setTimeout(function(){
							$('#project9').removeClass('currentProject');
							$('#project8').addClass('currentProject');
						},100);
					});
					$('#nextProject10').click(function(){
						setTimeout(function(){
							$('#project9').removeClass('currentProject');
							$('#project10').addClass('currentProject');
						},100);
					});
				// END PROJECT 9 ARROWS

				// PROJECT 10 ARROWS
					$('#backProject9').click(function(){
						setTimeout(function(){
							$('#project10').removeClass('currentProject');
							$('#project9').addClass('currentProject');
						},100);
					});
					$('#nextProject11').click(function(){
						setTimeout(function(){
							$('#project10').removeClass('currentProject');
							$('#project11').addClass('currentProject');
						},100);
					});
				// END PROJECT 10 ARROWS

				// PROJECT 11 ARROWS
					$('#backProject10').click(function(){
						setTimeout(function(){
							$('#project11').removeClass('currentProject');
							$('#project10').addClass('currentProject');
						},100);
					});
					$('#nextProject12').click(function(){
						setTimeout(function(){
							$('#project11').removeClass('currentProject');
							$('#project12').addClass('currentProject');
						},100);
					});
				// END PROJECT 11 ARROWS

				// PROJECT 12 ARROWS
					$('#backProject11').click(function(){
						setTimeout(function(){
							$('#project12').removeClass('currentProject');
							$('#project11').addClass('currentProject');
						},100);
					});
					$('#nextProject13').click(function(){
						setTimeout(function(){
							$('#project12').removeClass('currentProject');
							$('#project13').addClass('currentProject');
						},100);
					});
				// END PROJECT 12 ARROWS

				// PROJECT 13 ARROWS
					$('#backProject12').click(function(){
						setTimeout(function(){
							$('#project13').removeClass('currentProject');
							$('#project12').addClass('currentProject');
						},100);
					});
					$('#nextProject14').click(function(){
						setTimeout(function(){
							$('#project13').removeClass('currentProject');
							$('#project14').addClass('currentProject');
						},100);
					});
				// END PROJECT 13 ARROWS

				// PROJECT 14 ARROWS
					$('#backProject13').click(function(){
						setTimeout(function(){
							$('#project14').removeClass('currentProject');
							$('#project13').addClass('currentProject');
						},100);
					});
					$('#nextProject15').click(function(){
						setTimeout(function(){
							$('#project14').removeClass('currentProject');
							$('#project15').addClass('currentProject');
						},100);
					});
				// END PROJECT 14 ARROWS

				// PROJECT 15 ARROWS
					$('#backProject14').click(function(){
						setTimeout(function(){
							$('#project15').removeClass('currentProject');
							$('#project14').addClass('currentProject');
						},100);
					});
					$('#nextProject16').click(function(){
						setTimeout(function(){
							$('#project15').removeClass('currentProject');
							$('#project16').addClass('currentProject');
						},100);
					});
				// END PROJECT 15 ARROWS

				// PROJECT 16 ARROWS
					$('#backProject15').click(function(){
						setTimeout(function(){
							$('#project16').removeClass('currentProject');
							$('#project15').addClass('currentProject');
						},200);
					});
					$('#nextProject1').click(function(){
						setTimeout(function(){
							$('#project16').removeClass('currentProject');
							$('#project1').addClass('currentProject');
						},200);
					});
				// END PROJECT 16 ARROWS

			// END CHANGE PROJECTS LEFT/RIGHT CLICK


			// INIT CLOSE PROJECTS
				$('#backZoom').click(function(){
					//Projects Type Box and Back Zoom Appear/Disappear
					$('#backZoom').addClass('crystal');
					$('#menuNavWrapper').removeClass('onProjectsMenuNavWrapper');
			 		$('#contactBox').removeClass('onProjectsContact');
			 		$('#burguerBox').removeClass('onProjectsBurguer');
			 		
					$('.projectKnowMore').addClass('crystal');
					setTimeout(function(){
						$('#backZoom').addClass('notHere');
						$('.projectKnowMore').addClass('notHere');
					},500);

					$('#menuNavWrapper').removeClass('pushMenuNavWrapper');
					
					

					$('#portfolioProjectsWrapper').removeClass('openProjects');
					$('.daivaProjects').removeClass('notCurrentProject');
					$('.daivaProjects').removeClass('currentProject');
					$('.daivaProjects').addClass('opFlow');

					$('#portfolioSection2').animate({
			        	scrollLeft: lastLeftPush
			        }, 1500);
					

					// INIT REMOVE REPEATED CLASSES FROM ALL PROJECTS
						$('.changeProject').addClass('crystalArrowProjects');
						
						setTimeout(function(){
							$('.changeProject').addClass('hiddenArrowProjects');
						},400);


					// END REMOVE REPEATED CLASSES FROM ALL PROJECTS
				});
			// END CLOSE PROJECTS
		// END PORTFOLIO PROJECTS INTERACTION


		// INIT KNOW MORE PROJECTS INTERACTION

			// SHOW DATA OF PROJECT 1
				$('#showData1').click(function(){
					$('#projectTypeWrapper1').find('img').addClass('crystal');
					$('#project1').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project1').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore1").find('.descriptionClose').removeClass('notHere');

					$("#knowMore1").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project1').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project1').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project1').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore1').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription1').click(function(){
					
					$('#project1').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project1').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore1').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project1').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project1').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore1').find('h2').removeClass('crystal');
						$('#project1').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore1').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper1').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 1

			// SHOW DATA OF PROJECT 2
				$('#showData2').click(function(){
					$('#projectTypeWrapper2').find('img').addClass('crystal');
					$('#project2').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project2').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore2").find('.descriptionClose').removeClass('notHere');

					$("#knowMore2").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project2').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project2').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project2').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore2').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription2').click(function(){
					
					$('#project2').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project2').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore2').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project2').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project2').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore2').find('h2').removeClass('crystal');
						$('#project2').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore2').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper2').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 2

			// SHOW DATA OF PROJECT 3
				$('#showData3').click(function(){
					$('#projectTypeWrapper3').find('img').addClass('crystal');
					$('#project3').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project3').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore3").find('.descriptionClose').removeClass('notHere');

					$("#knowMore3").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project3').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project3').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project3').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore3').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription3').click(function(){
					
					$('#project3').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project3').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore3').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project3').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project3').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore3').find('h2').removeClass('crystal');
						$('#project3').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore3').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper3').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 3

			// SHOW DATA OF PROJECT 4
				$('#showData4').click(function(){
					$('#projectTypeWrapper4').find('img').addClass('crystal');
					$('#project3').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project3').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore4").find('.descriptionClose').removeClass('notHere');

					$("#knowMore4").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project4').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project4').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project4').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore4').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription4').click(function(){
					
					$('#project4').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project4').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore4').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project4').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project4').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore4').find('h2').removeClass('crystal');
						$('#project4').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore4').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper4').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 4

			// SHOW DATA OF PROJECT 4
				$('#showData4').click(function(){
					$('#projectTypeWrapper4').find('img').addClass('crystal');
					$('#project4').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project4').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore4").find('.descriptionClose').removeClass('notHere');

					$("#knowMore4").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project4').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project4').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project4').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore4').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription4').click(function(){
					
					$('#project4').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project4').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore4').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project4').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project4').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore4').find('h2').removeClass('crystal');
						$('#project4').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore4').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper4').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 4

			// SHOW DATA OF PROJECT 5
				$('#showData5').click(function(){
					$('#projectTypeWrapper5').find('img').addClass('crystal');
					$('#project5').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project5').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore5").find('.descriptionClose').removeClass('notHere');

					$("#knowMore5").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project5').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project5').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project5').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore5').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription5').click(function(){
					
					$('#project5').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project5').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore5').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project5').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project5').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore5').find('h2').removeClass('crystal');
						$('#project5').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore5').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper5').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 5

			// SHOW DATA OF PROJECT 6
				$('#showData6').click(function(){
					$('#projectTypeWrapper6').find('img').addClass('crystal');
					$('#project6').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project6').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore6").find('.descriptionClose').removeClass('notHere');

					$("#knowMore6").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project6').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project6').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project6').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore6').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription6').click(function(){
					
					$('#project6').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project6').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore6').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project6').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project6').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore6').find('h2').removeClass('crystal');
						$('#project6').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore6').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper6').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 6

			// SHOW DATA OF PROJECT 7
				$('#showData7').click(function(){
					$('#projectTypeWrapper7').find('img').addClass('crystal');
					$('#project7').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project7').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore7").find('.descriptionClose').removeClass('notHere');

					$("#knowMore7").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project7').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project7').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project7').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore7').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription7').click(function(){
					
					$('#project7').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project7').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore7').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project7').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project7').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore7').find('h2').removeClass('crystal');
						$('#project7').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore7').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper7').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 7

			// SHOW DATA OF PROJECT 8
				$('#showData8').click(function(){
					$('#projectTypeWrapper8').find('img').addClass('crystal');
					$('#project8').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project8').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore8").find('.descriptionClose').removeClass('notHere');

					$("#knowMore8").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project8').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project8').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project8').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore8').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription8').click(function(){
					
					$('#project8').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project8').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore8').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project8').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project8').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore8').find('h2').removeClass('crystal');
						$('#project8').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore8').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper8').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 8

			// SHOW DATA OF PROJECT 9
				$('#showData9').click(function(){
					$('#projectTypeWrapper9').find('img').addClass('crystal');
					$('#project9').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project9').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore9").find('.descriptionClose').removeClass('notHere');

					$("#knowMore9").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project9').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project9').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project9').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore9').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription9').click(function(){
					
					$('#project9').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project9').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore9').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project9').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project9').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore9').find('h2').removeClass('crystal');
						$('#project9').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore9').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper9').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 9

			// SHOW DATA OF PROJECT 10
				$('#showData10').click(function(){
					$('#projectTypeWrapper10').find('img').addClass('crystal');
					$('#project10').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project10').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore10").find('.descriptionClose').removeClass('notHere');

					$("#knowMore10").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project10').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project10').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project10').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore10').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription10').click(function(){
					
					$('#project10').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project10').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore10').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project10').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project10').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore10').find('h2').removeClass('crystal');
						$('#project10').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore10').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper10').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 10

			// SHOW DATA OF PROJECT 11
				$('#showData11').click(function(){
					$('#projectTypeWrapper11').find('img').addClass('crystal');
					$('#project11').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project11').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore11").find('.descriptionClose').removeClass('notHere');

					$("#knowMore11").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project11').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project11').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project11').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore11').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription11').click(function(){
					
					$('#project11').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project11').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore11').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project11').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project11').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore11').find('h2').removeClass('crystal');
						$('#project11').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore11').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper11').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 11

			// SHOW DATA OF PROJECT 12
				$('#showData12').click(function(){
					$('#projectTypeWrapper12').find('img').addClass('crystal');
					$('#project12').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project12').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore12").find('.descriptionClose').removeClass('notHere');

					$("#knowMore12").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project12').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project12').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project12').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore12').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription12').click(function(){
					
					$('#project12').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project12').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore12').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project12').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project12').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore12').find('h2').removeClass('crystal');
						$('#project12').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore12').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper12').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 12

			// SHOW DATA OF PROJECT 13
				$('#showData13').click(function(){
					$('#projectTypeWrapper13').find('img').addClass('crystal');
					$('#project13').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project13').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore13").find('.descriptionClose').removeClass('notHere');

					$("#knowMore13").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project13').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project13').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project13').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore13').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription13').click(function(){
					
					$('#project13').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project13').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore13').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project13').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project13').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore13').find('h2').removeClass('crystal');
						$('#project13').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore13').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper13').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 13

			// SHOW DATA OF PROJECT 14
				$('#showData14').click(function(){
					$('#projectTypeWrapper14').find('img').addClass('crystal');
					$('#project14').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project14').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore14").find('.descriptionClose').removeClass('notHere');

					$("#knowMore14").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project14').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project14').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project14').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore14').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription14').click(function(){
					
					$('#project14').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project14').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore14').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project14').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project14').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore14').find('h2').removeClass('crystal');
						$('#project14').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore14').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper14').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 14

			// SHOW DATA OF PROJECT 15
				$('#showData15').click(function(){
					$('#projectTypeWrapper15').find('img').addClass('crystal');
					$('#project15').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project15').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore15").find('.descriptionClose').removeClass('notHere');

					$("#knowMore15").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project15').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project15').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project15').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore15').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription15').click(function(){
					
					$('#project15').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project15').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore15').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project15').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project15').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore15').find('h2').removeClass('crystal');
						$('#project15').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore15').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper15').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 15

			// SHOW DATA OF PROJECT 16
				$('#showData16').click(function(){
					$('#projectTypeWrapper16').find('img').addClass('crystal');
					$('#project16').find('.projectIcon').addClass('fullDescriptionWrapper');
					$('#project16').find('.descriptionWrapper').removeClass('notHere');
					$("#knowMore16").find('.descriptionClose').removeClass('notHere');

					$("#knowMore16").find('h2').addClass('crystal');

					setTimeout(function(){
						$('#project16').find('.projectTypeBox').addClass('makeItDescriptorBox');
						$('#project16').find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$('#project16').find('.descriptionWrapper').removeClass('crystal');
						$('#knowMore16').find('.descriptionClose').removeClass('crystal');
					},600);
					
				});

				$('#closeDescription16').click(function(){
					
					$('#project16').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('#project16').find('.descriptionWrapper').addClass('crystal');
					$('#knowMore16').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('#project16').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('#project16').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('#knowMore16').find('h2').removeClass('crystal');
						$('#project16').find('.descriptionWrapper').addClass('notHere');
						$('#knowMore16').find('.descriptionClose').addClass('notHere');

						$('#projectTypeWrapper16').find('img').removeClass('crystal');
					},900);
					
				});
			// END SHOW DATA OF PROJECT 16

		// END KNOW MORE PROJECTS INTERACTION
	//// END PORTFOLIO INTERACTION
	
});