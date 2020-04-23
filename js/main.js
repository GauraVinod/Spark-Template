jQuery(document).ready(function(){

	"use strict";

	$('.slider').ripples({
	  dropRadius: 15,
	  perturbance: 0.01,
	});


var options = {
  strings: ["We Are <strong class='primary'>Sparky</strong>", "We Are <strong class='primary'>Developers.</strong>"],
  typeSpeed: 0,
  loop:true
};

var typed = new Typed('.text', options);

	$(window).scroll(function(){
		var top= $(window).scrollTop();
		if(top>70){
			$('header').addClass('transparent-bg');
		}
		else{
			if($('header').hasClass('transparent-bg')){
				$('header').removeClass('transparent-bg');
			}
		}
	});
});

