/**
 * Main View
 */

define(function(require) {
	"use strict";

	var Backbone = require("backbone");
	var $ = require("jquery");
	var _ = require("underscore");
	var templates = require("bites/templates");
	var indexTemplate = templates.index;

	return Backbone.View.extend({
		template: indexTemplate,
		events: {
			"click button": "searchButton",
			"submit form": "fetchUserData"
		},
		initialize: function(opt) {
			this.model.bind("change", this.render, this);
		},
		render: function(model) {
			var data = model && model.toJSON();
			var rendered = this.template(data);
			this.$el.html(rendered);
			return this;
		},
		searchButton: function() {
			this.$(".search").toggleClass("close");
			this.$(".input").toggleClass("square");
			if (this.$(".search").hasClass("close")) {
				this.$("input").focus();
			} else {
				this.$("input").blur();
			}
		},
		fetchUserData: function(ev) {
			ev.preventDefault();
			var sdata = $(ev.target).serializeArray();
			var data = {};

			this.$(".twitter").addClass("loading");

			_.each(sdata, function(el) {
				data[el.name] = el.value;
			});

			this.model.fetch({	
				data: data
			});
		}
	});
});
