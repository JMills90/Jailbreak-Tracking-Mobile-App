$(document).ready(function(){
	
	var count;
	var lastMessage;
	var form = $("#message_form");
	var message = $("#message");

	count = localStorage.getItem("Count");
	
	if(count === null){
		count  = 0;
	}
	
	if(count === 0){
		localStorage.clear();
	};
	
	form.on("submit", function (event){
		if($.trim(message.val()).length != 0){
			lastMessage = message.val();
			localStorage.setItem(count.toString(),lastMessage);
			count++;
			localStorage.setItem("Count",count);
		}
	});
});