$(document).ready(function() {
	$("#linkToNew").click(function () {
		$("#newInstructor").show();
		$("#instructor").hide();
	});

	$("#linkToOld").click(function () {
		$("#newInstructor").hide();
		$("#instructor").show();
	});
}); 