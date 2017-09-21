(function(){
	
	
	/*API.getWaitListPosition = function(id) {
		API.sendChat("1")
		if (typeof id === 'undefined' || id === null) {
			API.sendChat("2")
			id = API.getUser().id;
		}
		var wl = API.getWaitList();
		for (var i = 0; i < wl.length; i++) {
			API.sendChat("3")
			if (wl[i].id === id) {
				return i;
			}
		}
		return -1;
	};*/
	
	API.sendChat(sting(API.getWaitListPosition(6117568)))
	
	
	
 	var init = function(){
		API.sendChat("Hello")
	}

	var stor = {
		version: "0.0",
		status: false,
		name: "stor"
	}

	init();

}).call(this);
