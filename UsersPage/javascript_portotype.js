$('.dropdown-submenu > a').on("click", function(e) {
    var submenu = $(this);
    $('.dropdown-submenu .dropdown-menu').removeClass('show');
    submenu.next('.dropdown-menu').addClass('show');
    e.stopPropagation();
});

$('.dropdown').on("hidden.bs.dropdown", function() {
    // hide any open menus when parent closes
    $('.dropdown-menu.show').removeClass('show');
});

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
		$("#searchTab").hide();
	});

	$("a[href^='#benefits']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    },1000);
});

	$("a[href^='#courseName']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    },1000);
});
}); 
