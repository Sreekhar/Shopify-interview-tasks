$(document).ready(function(){
	
$.getJSON("http://shopicruit.myshopify.com/products.json?page=1", function(json) {				 
	while(json['products'].length != 0) {
		var iPageNumber = 1;
		var ComputerArray = [];
		ComputerArray.push({
			id : '', 
			grams : '',
			price : ''
		});
		var KeyboardArray = [];
		KeyboardArray.push({
			id : '', 
			grams : '',
			price : ''
		});
			$.getJSON("http://shopicruit.myshopify.com/products.json?page=iPageNumber", function(newjson) {				 				
				for(var iCount = 0; iCount< newjson['products'].length; iCount++) {
					if((json['products'][iCount]['product_type'] == "Computer")) {
						for(var jCount = 0; jCount< newjson['products'][iCount]['variants'].length; jCount++) {
							for(var kCount = 0; kCount< ComputerArray.length; kCount++) {
								if((ComputerArray[kCount]['id'] != newjson['products'][iCount]['variants'][jCount]['id']) && newjson['products'][iCount]['variants'][jCount]['available'] == true) {
									ComputerArray.push({
										id : newjson['products'][iCount]['variants'][jCount]['id'], 
										grams : newjson['products'][iCount]['variants'][jCount]['grams'],
										price : newjson['products'][iCount]['variants'][jCount]['price']
									});
								}
							
							}
						}
					}
					if((json['products'][iCount]['product_type'] == "Keyboard")) {
						for(var jCount = 0; jCount< newjson['products'][iCount]['variants'].length; jCount++) {
							for(var kCount = 0; kCount< KeyboardArray.length; kCount++) {
								if((KeyboardArray[kCount]['id'] != newjson['products'][iCount]['variants'][jCount]['id']) && newjson['products'][iCount]['variants'][jCount]['available'] == true) {
									KeyboardArray.push({
										id : newjson['products'][iCount]['variants'][jCount]['id'], 
										grams : newjson['products'][iCount]['variants'][jCount]['grams'],
										price : newjson['products'][iCount]['variants'][jCount]['price']
									});
								}
							
							}
						}
					}
				}
			});	
		iPageNumber++;
		}
	KeyboardArray.sort(custom_compare);
	ComputerArray.sort(custom_compare);
	var totalWeight = 0;
	if(KeyboardArray.length > ComputerArray.length) {
		for(var kCount = 0; kCount< ComputerArray.length; kCount++) {
			totalWeight += ComputerArray[kCount]['grams'] + KeyboardArray[kCount]['grams'];
		}
	} else {
		for(var kCount = 0; kCount< KeyboardArray.length; kCount++) {
			totalWeight += ComputerArray[kCount]['grams'] + KeyboardArray[kCount]['grams'];
		}		
	}
	});	
});

function custom_compare (a,b) {
	return a.price- b.price;
}