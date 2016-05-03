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
      this.model = new UserShowModel()
      this.collection = new UserTimelineCollection()
    },
    render: function () {
      var hasNothingFound = !this.model.get('name')
      var rendered = this.template({
        hasNothingFound
      })
      this.$el.html(rendered)

      if (hasNothingFound) {
        this.userInfoView && this.userInfoView.remove()
        this.userTimelineView && this.userTimelineView.remove()
      } else {
        this.userInfoView = new UserInfoView({
          model: this.model,
          el: this.$('#user-show')
        })

        this.userTimelineView = new UserTimelineView({
          collection: this.collection,
          el: this.$('#user-timeline')
        })
        this.userInfoView.render()
        this.userTimelineView.render()
      }
      return this
    },
    fetchUserData: function (data) {
      var conf = {
        data,
        reset: true
      }
      return $.when(
        this.model.fetch(conf),
        this.collection.fetch(conf)
      )
    }
  })
})
