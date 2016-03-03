/**
 * User show model
 */

define(function(require) {
	var Backbone = require("backbone");
	var appConfig = require("app-config");

	return Backbone.Model.extend({
		urlRoot: appConfig.api_110.userShowUri,
		parse: function(data) {
			//@TODO consider api improvements
			if ( data ) {
				data.isEmpty = false;
				return data;
			} else {
				this.clear({
					silent: true
				});
				return {
					isEmpty: true
				};
			}
		}
	});
});
