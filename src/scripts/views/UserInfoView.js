/**
 * User Info card View
 */

/* global define */
define((require) => {
  'use strict'
  var Backbone = require('backbone')

  var templates = require('spices/templates')
  var template = templates.userShow

  return Backbone.View.extend({
    template,
    render: function () {
      var data = this.model.toJSON()
      var rendered = this.template(data)
      this.$el.html(rendered)
      return this
    }
  })
})
