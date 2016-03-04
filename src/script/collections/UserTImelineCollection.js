/**
 * User timeline collection
 */

define(function(require) {
	var Backbone = require("backbone");
	var appConfig = require("app-config");

	return Backbone.Collection.extend({
		url: appConfig.api_110.userTimelineUri
	});
});
