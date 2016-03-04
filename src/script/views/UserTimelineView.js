/**
 * User Timeline View
 */

define(function(require) {
	"use strict";

	var Backbone = require("backbone");
	var $ = require("jquery");
	var _ = require("underscore");

	var templates = require("spices/templates");
	var timelineTemplate = templates.userTimeline;
	var timelineContentTemplate = templates.userTimelineContent;
	var timelineContentEmpty = templates.userTimelineContentEmpty;

	return Backbone.View.extend({
		el: "#user-timeline",
		events: {
			"change [name=has-image]": "filterImages",
			"input [name=retweets-threshold]": "filterRetweetsThreshold"
		},
		filters: {
			hasImage: false,
			retweetsThreshold: 0
		},
		template: timelineTemplate,
		// This is going to be triggered by MainView as well
		render: function() {
			var tweets = this.collection.toJSON();
			var isEmpty = tweets.length === 0;

			var rendered = this.template({
				isEmpty: isEmpty,
				tweets: tweets
			});
			this.$el.html(rendered);
		},
		filter: function() {
			var retweetsThreshold = this.filters.retweetsThreshold;
			var hasImage = this.filters.hasImage;
			var tweetsModelsArray = this.collection.filter(function(el) {
				var hasPhotos = Boolean(el.has("photos"));
				var isPassThreshold = el.get("retweet_count") >= retweetsThreshold;

				var isGood = hasImage? (hasPhotos && isPassThreshold) : isPassThreshold;

				return isGood;
			});
			// @TODO there should be easier ways to deal with...
			var tweets = _.map(tweetsModelsArray, function(el) {
				return el.toJSON();
			});
			return tweets;
		},
		filterImages: function(ev) {
			var on = ev.target.checked;
			this.filters.hasImage = on;

			this.renderFilter();
		},
		filterRetweetsThreshold: function(ev) {
			var retweetsThreshold = Number(ev.target.value);
			this.filters.retweetsThreshold = retweetsThreshold;

			this.renderFilter();
		},

		renderFilter: function() {
			var tweets = this.filter();
			var rendered;

			if ( tweets.length ) {

				rendered = timelineContentTemplate({
					tweets: tweets
				});
			} else {
				
				rendered = timelineContentEmpty({
					text: "Nothing matched your criteria."
				});
			}
			this.$(".user-timeline-content").html(rendered);
		}
	});
});
