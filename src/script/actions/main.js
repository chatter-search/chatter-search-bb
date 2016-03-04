define(function(require) {

 	var	MainView = require("views/MainView");
 	var	UserShowModel = require("models/UserShowModel");
 	var UserTimelineCollection = require("collections/UserTimelineCollection");
 	var $ = require("jquery");

 	return function() {
 		var userShowModel = new UserShowModel();
 		var userTimelineCollection = new UserTimelineCollection();
 		var mainView = new MainView({
 			model: userShowModel,
 			collection: userTimelineCollection
 		});

 		mainView.render(userShowModel);
 		$("#user-show").prepend(mainView.$el);
	};
});
