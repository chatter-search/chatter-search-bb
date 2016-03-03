define(function(require) {

 	var	UserShowView = require("views/UserShowView");
 	var	UserShowModel = require("models/UserShowModel");
 	var $ = require("jquery");

 	return function() {
 		var userShowModel = new UserShowModel();
 		var userShowView = new UserShowView({
 			model: userShowModel
 		});

 		userShowView.render();
 		$("#user-show").prepend(userShowView.$el);
	};
});
