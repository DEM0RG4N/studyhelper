
$(document).ready(function() {
	var statusForLogin = false;
	var statusForSingup = false;
	$("#loginButton").click(function () {
		if (!statusForLogin && !statusForSingup) {
		$("#loginCard").show();
		statusForLogin = true;
		$("#searchTab").hide();
	}
	else if (statusForLogin && !statusForSingup) {
		$("#loginCard").hide();
		statusForLogin = false;
		$("#searchTab").show();
	}
	else if (!statusForLogin && statusForSingup) {
		$("#signupCard").hide();
		$("#loginCard").show();
		statusForLogin = true;
		statusForSingup = false;
		$("#searchTab").hide();
	}

	});

	$("#signupButton").click(function () {
	if (!statusForLogin && !statusForSingup) {
		$("#signupCard").show();
		statusForSingup = true;
		$("#searchTab").hide();
	}
	else if (statusForLogin && !statusForSingup) {
		$("#loginCard").hide();
		$("#signupCard").show();
		statusForLogin = false;
		statusForSingup = true;
		$("#searchTab").hide();
	}
	else if (!statusForLogin && statusForSingup) {
		$("#signupCard").hide();
		statusForSingup = false;
		$("#searchTab").show();
	}
	});

	$("#signupLink").click(function () {
		$("#loginCard").hide();
		$("#signupCard").show();
		statusForSingup = true;
		statusForLogin = false;
		$("#searchTab").hide();
	});

	$("#loginLink").click(function () {
		$("#signupCard").hide();
		$("#loginCard").show();
		statusForSingup = false;
		statusForLogin = true;
	});



	// scrolling navbar
	$(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('#navigation-bar').addClass('background');
            }

            else {
                  $('#navigation-bar').removeClass('background');
            }

     })

	$('#loginButton').click(function(){
            	$('body, html').animate({
            		scrollTop: 0
            	}, 500);

            });
	$('#signupButton').click(function(){
            	$('body, html').animate({
            		scrollTop: 0
            	}, 500);

            });

	$(".carousel-control-prev").hide();
    var carouselLength = $('.carousel-item').length;
    var carouselActive = $('.carousel-inner .active').index();
    $('.carousel-control-next').click(function () {
        carouselActive = carouselActive + 1;
    if (carouselActive == carouselLength - 1)
    {
        $(".carousel-control-prev").show();
        $(".carousel-control-next").hide(); 
    }
    });

    $('.carousel-control-prev').click(function () {
        carouselActive = carouselActive - 1;
    if (carouselActive == 0)
    {
        $(".carousel-control-prev").hide();
        $(".carousel-control-next").show(); 
    }
    });
}); 
