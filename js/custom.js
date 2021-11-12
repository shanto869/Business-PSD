$(document).ready(function(){

	//banner slider;
	$('.banner-slider').slick({
		dots: true,
		prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
		nextArrow: '<i class="fas fa-chevron-right slick-next right-arrow"></i>',
	});

	//scroll function;
	$(window).on('scroll',function(){
		var scrolling = $(this).scrollTop();

		//nacbar fixed;
		if(scrolling > 100){
			$('nav').addClass('navbar-fixed');
		}else{
			$('nav').removeClass('navbar-fixed');
		};

		//back to top button show;
		if(scrolling > 200){
			$('.back-top-btn').fadeIn();
		}else{
			$('.back-top-btn').fadeOut();
		}

		//back to top button click;
		$('.back-top-btn').on('click',function(){
			$('body,html').animate({
				scrollTop: '0px',
			},1500);
		});
	});

});