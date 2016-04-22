/**
 * @module - main starter
 */

define(function(require) {
	// Load jQuery plugins
	require("jquery");
	require("spices/plugins/serializeObject");

 	require(["actions/main"], function(main) {
 		main();
 	});
});
