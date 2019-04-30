$(document).ready(function() {
	$("#linkToNew").click(function () {
		$("#newInstructor").show();
		$("#instructor").hide();
	});

	$("#linkToOld").click(function () {
		$("#newInstructor").hide();
		$("#instructor").show();
	});

	$(window).on("load", function() {
	preloaderFadeOutTime = 1200;
	function hidePreloader() {
	var preloader = $('.loader');
	setTimeout(function(){
        $('.container-fluid').removeClass('none');
        preloader.hide();
    }, 1200);
	}
	hidePreloader();
	});
}); 

