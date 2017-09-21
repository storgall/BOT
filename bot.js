(function(){
	
	API.getWaitListPosition = function(id) {
		if (typeof id === 'undefined' || id === null) {
			id = API.getUser().id;
		}
		var wl = API.getWaitList();
		for (var i = 0; i < wl.length; i++) {
			if (wl[i].id === id) {
				return i;
			}
		}
		return -1;
	};
	
	
	
 	var init = function(){
		//API.sendChat(API.getWaitListPosition(6117568).toString())
		//API.sendChat(stor["version"])
		API.sendChat(API.getUser(6117568)["id"])
		//API.sendChat("Done!")
	}

	var stor = {
		"version": "0.0",
		"status": false,
		"name": "stor"
	}
	
	
	
	init();

}).call(this);
