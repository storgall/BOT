(function(){
	
	
	API.getWaitListPosition = function(id) {
		API.sendChat(id)
		if (typeof id === 'undefined' || id === null) {
			id = API.getUser().id;
		}
		var wl = API.getWaitList();
		
		API.sendChat(wl)
		
		for (var i = 0; i < wl.length; i++) {
			if (wl[i].id === id) {
				return i;
			}
		}
		return -1;
	};
	
	
	
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
