/**
 * User show model
 */

define(function(require) {
	var Backbone = require("backbone");
	var appConfig = require("app-config");

	return Backbone.Model.extend({
		url: appConfig.api_110.userShowUri,
		parse: function(data) {

			// well... apparently passingn reset: true
			//+ to the fetch did't made the trick
			this.clear({
				silent: true
			});

			//@TODO consider api improvements
			if ( data ) {
				data.isEmpty = false;
				return data;
			} else {
				return {
					isEmpty: true
				};
			}
		}
	});
});
