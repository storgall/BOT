(function(){
	
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	async function sleep1000(){
		await sleep(1000);
	}
	
	
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
		API.sendChat(API.getWaitListPosition(6117568).toString())
		sleep1000()
		API.sendChat(stor["version"].toString())
		sleep1000()
		API.sendChat(API.getUser(6117568)["id"].toString())
		sleep1000()
		API.sendChat("Done!")
		sleep1000()
	}

	var stor = {
		"version": "0.0",
		"status": false,
		"name": "stor"
	}
	
	
	
	init();

}).call(this);
