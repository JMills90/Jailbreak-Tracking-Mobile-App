$(document).ready(function() {
    var maxChars = 140;
	
	$("#message").keyup(function(){
		var charsLeft = maxChars - $(this).val().length;
		
		$("#chars_left").text(charsLeft);
		});
});