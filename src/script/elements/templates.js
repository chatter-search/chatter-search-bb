define(function(require) {
	var Handlebars = require("handlebars.runtime");
	require("__templates");
	Handlebars.partials = Handlebars.templates;
	return Handlebars.templates;
});
