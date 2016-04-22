/**
 * User Show View
 */

 /*global define*/

define(function (require) {
  'use strict'

  var Backbone = require('backbone')
  var $ = require('jquery')
  var _ = require('underscore')

  var UserTimelineView = require('views/UserTimelineView')
  var templates = require('spices/templates')
  var showTemplate = templates.userShow

  return Backbone.View.extend({
    template: showTemplate,
    events: {
      'click button': 'searchButton',
      'submit form': 'submitForm'
    },
    initialize: function (opt) {
      this.model.bind('change', this.render, this)
    },
    render: function (model) {
      var data = model.toJSON()
      var rendered = this.template(data)
      this.$el.html(rendered)
      return this
    },
    renderUserTimeline: function () {
      this.$('.twitter').removeClass('loading')
      this.userTimelineView = new UserTimelineView({
        collection: this.collection
      })
      this.userTimelineView.render()
    },
    searchButton: function () {
      this.$('.search-bar').toggleClass('expanded')
    },
    submitForm: function (ev) {
      ev.preventDefault()
      this.$('.twitter').addClass('loading')
      var query = $(ev.target).serializeObject()
      this.fetchUserData(query)
    },
    fetchUserData: function (query) {
      var success = _.bind(this.renderUserTimeline, this)
      this.model.fetch({
        data: query,
        reset: true
      })
      this.collection.fetch({
        data: query,
        reset: true,
        success: success
      })
    }
  })
})
