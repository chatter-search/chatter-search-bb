/**
 * Form View
 */

 /*global define*/

define((require) => {
  'use strict'

  var Backbone = require('backbone')
  var $ = require('jquery')

  var SearchResultView = require('views/SearchResultView')

  return Backbone.View.extend({
    events: {
      'click button': 'searchButton',
      'submit form': 'submitForm'
    },
    searchButton: function () {
      var searchBar = this.$('.search-bar')
      searchBar.toggleClass('expanded')
      if (searchBar.hasClass('expanded')) {
        searchBar.find('input').focus()
        this.searchResultView = new SearchResultView()
      } else {
        this.searchResultView.remove()
      }
    },
    submitForm: function (ev) {
      ev.preventDefault()
      this.startProgress()
      var data = $(ev.target).serializeObject()
      this.searchResultView.fetchUserData(data)
      .then(() => {
        var rendered = this.searchResultView.render()
        this.$el.after(rendered.$el)
      })
      .always(() => this.stopProgress())
    },
    startProgress: function () {
      this.$('.twitter').addClass('loading')
    },
    stopProgress: function () {
      this.$('.twitter').removeClass('loading')
    }
  })
})
