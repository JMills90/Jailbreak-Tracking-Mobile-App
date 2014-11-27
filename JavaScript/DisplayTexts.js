function addToTexts(divClass,message){
	$("#prev_texts").append("<div class='" + divClass + "'><p>" + message + "</p>");
	};
	
	
function displayTexts(noTexts){
	var counter = 0;
	var tempMessage;
	while(counter <= noTexts){
		tempMessage = localStorage.getItem(counter.toString());
		if(tempMessage != null){
			addToTexts("sender", tempMessage);
		}
		counter++;
		}
	
	}