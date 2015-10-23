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


	// INIT HOME INTERACTION

		// HOME SCROLLERS
			$('#homeScrollLanding').click(function(){
				$('html, body').animate({
			    	scrollTop: $("#homeSection2").offset().top
			    }, 1200);
			});

			$('#homeScrollTimelapse').click(function(){
				$('html, body').animate({
			    	scrollTop: $("#homeSection3").offset().top
			    }, 1200);
			});

			$('#homeQuotesScroll-1').click(function(){
				$('html, body').animate({
			    	scrollTop: $("#homeQuoteWrapper2").offset().top
			    }, 1200);
			});

			$('#homeQuotesScroll-2').click(function(){
				$('html, body').animate({
			    	scrollTop: $("#homeQuoteWrapper3").offset().top
			    }, 1200);
			});


		// END HOME SCROLLERS


		//// INIT HOME CHANGE QUOTES
			// $('#quotesScroll-1').click(function(){
			// 	$('#homeQuoteWrapper1').animate({top: '-100vh',opacity: '0'}, 1600);
			// 	$('#homeQuoteWrapper2').removeClass('hidden');
			// 	setTimeout(function(){
			// 		$('#homeQuoteWrapper2').animate({opacity: '1'}, 800);
			// 	},1000);
			// });

			// $('#quotesScroll-2').click(function(){
			// 	$('#homeQuoteWrapper2').animate({top: '-100vh',opacity: '0'}, 1600);
			// 	$('#homeQuoteWrapper3').removeClass('hidden');
			// 	setTimeout(function(){
			// 		$('#homeQuoteWrapper3').animate({opacity: '1'}, 800);
			// 	},1000);
			// });
		//// END HOME CHANGE QUOTES
			// PENDIENTE


	//END HOME INTERACTION



	//// INIT PORTFOLIO INTERACTION

		// PORTFOLIO SCROLLERS
			$('#scrollPortfolioLanding').click(function(){
				$('html, body').animate({
			    	scrollTop: $("#portfolioDescriptionWrapper").offset().top
			    }, 800);
			});

			$('#scrollPortfolioDescription').click(function(){
				$('html, body').animate({
			    	scrollTop: $("#portfolioIncenseWrapper").offset().top
			    }, 800);
			});

			$('#scrollPortfolioIncense').click(function(){
				$('html, body').animate({
			    	scrollTop: $("#portfolioSection2").offset().top
			    }, 800);
			});
		// END PORTFOLIO SCROLLERS

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



				// HIDE DATA SHOWED DATA OF ALL PROJECTS
					$('.changeProject').click(function(){
						hideShowedData();
					});
				// END HIDE DATA SHOWED DATA OF ALL PROJECTS

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



			        // HIDE SHOWED DATA FROM ALL PROJECTS
			        	hideShowedData();
			        // END HIDE SHOWED DATA FROM ALL PROJECTS
					

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

			// NATIVE FUNCTIONS
				function showData(projectTypeWrapperX, projectX, knowMoreX){
					$(projectTypeWrapperX).find('img').addClass('crystal');
					$(projectX).find('.projectIcon').addClass('fullDescriptionWrapper');
					$(projectX).find('.descriptionWrapper').removeClass('notHere');
					$(knowMoreX).find('.descriptionClose').removeClass('notHere');

					$(knowMoreX).find('h2').addClass('crystal');

					setTimeout(function(){
						$(projectX).find('.projectTypeBox').addClass('makeItDescriptorBox');
						$(projectX).find('.bgSet').addClass('bgBlur');
					},500);
					
					setTimeout(function(){
						$(projectX).find('.descriptionWrapper').removeClass('crystal');
						$(knowMoreX).find('.descriptionClose').removeClass('crystal');
					},600);
				}



				function hideShowedData(){
					$('.daivaProjects').find('.projectTypeBox').removeClass('makeItDescriptorBox');
					
					
					$('.daivaProjects').find('.descriptionWrapper').addClass('crystal');
					$('.projectKnowMore').find('.descriptionClose').addClass('crystal');

					
					setTimeout(function(){
						$('.daivaProjects').find('.bgSet').removeClass('bgBlur');
						
					},500);
					
					setTimeout(function(){
						$('.daivaProjects').find('.projectIcon').removeClass('fullDescriptionWrapper');

						$('.projectKnowMore').find('h2').removeClass('crystal');
						$('.daivaProjects').find('.descriptionWrapper').addClass('notHere');
						$('.projectKnowMore').find('.descriptionClose').addClass('notHere');

						$('.projectTypeBox').find('img').removeClass('crystal');
					},900);
				}
			// END NATIVE FUNCTIONS

			// SHOW / HIDE PROJECTS DATA
				$('#showData1').click(function(){
					showData('#projectTypeWrapper1', '#project1', '#knowMore1');
				});
			
			
				$('#showData2').click(function(){
					showData('#projectTypeWrapper2', '#project2', '#knowMore2');
				});
			
			
				$('#showData3').click(function(){
					showData('#projectTypeWrapper3', '#project3', '#knowMore3');
				});
			
			
				$('#showData4').click(function(){
					showData('#projectTypeWrapper4', '#project4', '#knowMore4');
				});
			
			
				$('#showData5').click(function(){
					showData('#projectTypeWrapper5', '#project5', '#knowMore5');
				});
			
			
				$('#showData6').click(function(){
					showData('#projectTypeWrapper6', '#project6', '#knowMore6');
				});
			
			
				$('#showData7').click(function(){
					showData('#projectTypeWrapper7', '#project7', '#knowMore7');
				});
			
			
				$('#showData8').click(function(){
					showData('#projectTypeWrapper8', '#project8', '#knowMore8');
				});
			
			
				$('#showData9').click(function(){
					showData('#projectTypeWrapper9', '#project9', '#knowMore9');
				});
			
			
				$('#showData10').click(function(){
					showData('#projectTypeWrapper10', '#project10', '#knowMore10');
				});
			
			
				$('#showData11').click(function(){
					showData('#projectTypeWrapper11', '#project11', '#knowMore11');
				});
			
			
				$('#showData12').click(function(){
					showData('#projectTypeWrapper12', '#project12', '#knowMore12');
				});
			
			
				$('#showData13').click(function(){
					showData('#projectTypeWrapper13', '#project13', '#knowMore13');
				});
			
			
				$('#showData14').click(function(){
					showData('#projectTypeWrapper14', '#project14', '#knowMore14');
				});
			
			
				$('#showData14').click(function(){
					showData('#projectTypeWrapper14', '#project14', '#knowMore14');
				});
			
			
				$('#showData15').click(function(){
					showData('#projectTypeWrapper15', '#project15', '#knowMore15');
				});
			
			
				$('#showData16').click(function(){
					showData('#projectTypeWrapper16', '#project16', '#knowMore16');
				});


				$('.descriptionClose').click(function(){
					hideShowedData();
				})
			// SHOW / HIDE PROJECTS DATA
		// END KNOW MORE PROJECTS INTERACTION
	//// END PORTFOLIO INTERACTION
	
});