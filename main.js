$(document).ready(function(){
	
	$("p").addClass("uppg3class");
	
	$("p").addClass("intro");
	var uppg4width = $("#uppg4-box").width();
	var uppg4height = $("#uppg4-box").height();
	
	$("#uppg4-box").html("<p>bredd: " + uppg4width + " px</p><p>höjd: " + uppg4height + " px</p>");
	//$("#uppg4-box").heigth();
	$("#uppg5-box").show('slow');
	$("#uppg6-btn").click(function(){
    $("#uppg6-box").addClass('uppg6-class');
	});
	$("#uppg7-btn").click(function(){
    $("#uppg7-box").animate({
		width: '+=100px'
	},1000);
	
});
});