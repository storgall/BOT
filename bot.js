(function(){
	
	function sleep(delay) {
		var start = new Date().getTime();
		while (new Date().getTime() < start + delay);
	}
	
	API.getWaitListPosition = function(id) {
		if (typeof id === 'undefined' || id === null) {
			id = API.getUser().id;
		}
		var wl = API.getWaitList();
		for (var i = 0; i < wl.length; i++) {
			if (wl[i].id === id) {
				//API.sendChat(i.toString())
				sleep(1000)
				return i;
			}
		}
		//API.sendChat("-1")
		sleep(1000)
		return -1;
	};
	
	
	
 	var init = function(){
		API.sendChat("Done!")
		API.sendChat(API.getWaitListPosition(6117568).toString())
		sleep(1000)
		API.sendChat(stor[version])
	}

	var stor = {
		version: "0.0",
		status: false,
		name: "stor"
	}
	
	
	
	init();

}).call(this);
