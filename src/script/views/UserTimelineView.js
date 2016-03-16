/**
 * User Timeline View
 */

/* global define */
define(function (require) {
  'use strict'

  var Backbone = require('backbone')
  var _ = require('underscore')

  var templates = require('spices/templates')
  var timelineTemplate = templates.userTimeline
  var timelineContentTemplate = templates.userTimelineContent
  var timelineContentEmpty = templates.userTimelineContentEmpty

  return Backbone.View.extend({
    el: '#user-timeline',
    events: {
      'change [name=filter-has-image]': 'filterImages',
      'input [name=filter-retweet-count]': 'filterRetweetCount',
      'change [name=sort-by]': 'sortBy'
    },
    template: timelineTemplate,
    // This is going to be triggered by MainView as well
    render: function () {
      var tweets = this.collection.toJSON()
      var isEmpty = tweets.length === 0

      this.toolbar = {
        filters: {
          hasImage: false,
          retweetCount: 0
        },
        sort: {}
      }

      var rendered = this.template({
        isEmpty: isEmpty,
        tweets: tweets
      })
      this.$el.html(rendered)
    },
    filter: function () {
      var retweetCount = this.toolbar.filters.retweetCount
      var hasImage = this.toolbar.filters.hasImage
      var tweets = this.collection.filter(function (el) {
        var hasPhotos = Boolean(el.has('photos'))
        var isPassThreshold = el.get('retweet_count') >= retweetCount

        var isGood = hasImage ? (hasPhotos && isPassThreshold) : isPassThreshold

        return isGood
      })

      return tweets
    },
    filterImages: function (ev) {
      var on = ev.target.checked
      this.toolbar.filters.hasImage = on

      this.renderFiltered()
    },
    filterRetweetCount: function (ev) {
      var retweetCount = Number(ev.target.value)
      this.toolbar.filters.retweetCount = retweetCount

      this.renderFiltered()
    },

    renderFiltered: function () {
      var tweetsModelsArray = this.filter()
      this.filteredCollection = new Backbone.Collection(tweetsModelsArray)
      // preserve sorting
      tweetsModelsArray = this.sort()

      var tweets = _.map(tweetsModelsArray, function (el) {
        return el.toJSON()
      })

      var rendered
      if (tweets.length) {
        rendered = timelineContentTemplate({
          tweets: tweets
        })
      } else {
        rendered = timelineContentEmpty({
          text: 'Nothing matched your criteria.'
        })
      }
      this.reRenderTimelineContent(rendered)
    },
    sort: function () {
      var criteria = this.toolbar.sort.criteria
      var collection = this.filteredCollection || this.collection
      return collection.sortBy(criteria)
    },
    sortBy: function (ev) {
      var criteria = ev.target.value

      this.toolbar.sort = {
        criteria: criteria
      }

      this.renderSorted()
    },
    renderSorted: function () {
      var tweetsModelsArray = this.sort()
      var tweets = _.map(tweetsModelsArray, function (el) {
        return el.toJSON()
      })
      var rendered = timelineContentTemplate({
        tweets: tweets
      })

      this.reRenderTimelineContent(rendered)
    },
    reRenderTimelineContent: function (rendered) {
      this.$('.user-timeline-content').html(rendered)
    }
  })
})
