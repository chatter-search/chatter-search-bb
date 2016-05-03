 /**
 * Search result View
 */

 /*global define*/

define((require) => {
  'use strict'

  var UserShowModel = require('models/UserShowModel')
  var UserTimelineCollection = require('collections/UserTimelineCollection')
  var UserTimelineView = require('views/UserTimelineView')
  var UserInfoView = require('views/UserInfoView')
  var templates = require('spices/templates')
  var template = templates.searchResult

  var Backbone = require('backbone')
  var $ = require('jquery')

  return Backbone.View.extend({
    template,
    initialize: function () {
      var rendered = this.template()
      this.$el.html(rendered)

      var model = new UserShowModel()
      var collection = new UserTimelineCollection()

      this.userInfoView = new UserInfoView({
        model,
        el: this.$('#user-show')
      })

      this.userTimelineView = new UserTimelineView({
        collection,
        el: this.$('#user-timeline')
      })
    },
    render: function () {
      this.userInfoView.render()
      if (this.userInfoView.model.get('name')) {
        this.userTimelineView.render()
      }
      return this
    },
    fetchUserData: function (data) {
      var reset = true
      return $.when(
        this.userInfoView.model.fetch({
          data,
          reset
        }),
        this.userTimelineView.collection.fetch({
          data,
          reset
        })
      )
    }
  })
})
