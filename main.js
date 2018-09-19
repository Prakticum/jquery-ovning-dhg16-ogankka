$(document).ready(function(){
	$("p").addClass("intro");
	var uppg4width = $("#uppg4-box").width();
	var uppg4height = $("#uppg4-box").height();
	
	$("#uppg4-box").html("<p>bredd: " + uppg4width + " px</p><p>höjd: " + uppg4height + " px</p>");
	//$("#uppg4-box").heigth();
	$("#uppg5-box").show('slow');
	$("#show").click(function(){
    $("#uppg6-box").show();
});
});