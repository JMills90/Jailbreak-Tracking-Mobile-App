$(document).ready(function(){
	
	var count;
	var lastMessage;
	var form = $("#message_form");
	var message = $("#message");

	count = localStorage.getItem("Count");
	
	displayTexts(count);
	
	if(count === null){
		count  = 0;
	}
	
	if(count === 0){
		localStorage.clear();
	};
	
	form.on("submit", function (event){
		if($.trim(message.val()).length != 0){
			event.preventDefault();
			
			lastMessage = message.val();
			localStorage.setItem(count.toString(),lastMessage);
			
			message.val(null);
			addToTexts("sender", localStorage.getItem(count.toString()));
			
			count++;
			localStorage.setItem("Count",count);
		}
	});
});