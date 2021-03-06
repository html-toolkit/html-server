var express = require("express"),
	app = express(), // Express application initialization
	fs = require("fs"), // File system module,
	helper = require("./modules/helper").Helper, // Helper`s methods
	config = require("./server.conf"), // Configuration parameters,
	router = helper.getRouter(config); // Router parameters



helper.setConfig(config, app, express) // Setting configuration params



// Router
// Simple pages
if(router.pages) {

	var pages = router.pages;

	app.get(pages.rule, function(req, res) {

		fs.readFile(pages.path + req.route.params.page + pages.ext, "utf8", function(err, text) { //Read required html page

			helper.parseParams(req.query, function() { // Parse GET params
				res.send(text);
			});

		});

	});
}
// //Simple pages
// //Router



app.listen(app.get("port")); // Server starting