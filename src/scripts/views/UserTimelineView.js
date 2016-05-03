/**
 * User Timeline View
 */

/* global define */
define((require) => {
  'use strict'

  var Backbone = require('backbone')

  var templates = require('spices/templates')
  var timelineTemplate = templates.userTimeline
  var timelineContentTemplate = templates.userTimelineContent

  return Backbone.View.extend({
    events: {
      'change [name=filter-has-image]': 'filterImages',
      'input [name=filter-retweet-count]': 'filterRetweetCount',
      'change [name=sort-by]': 'sortByCriteria',
      'change [name=sort-direction]': 'sortDirection'
    },
    template: timelineTemplate,
    // This is going to be triggered by MainView as well
    render: function () {
      this.toolbar = {
        filters: {
          hasImage: false,
          retweetCount: 0
        },
        sort: {
          criteria: 'created_at_timestamp',
          direction: -1
        }
      }

      var tweets = this.pipeline(this.collection).toJSON()
      var hasNoTweets = this.collection.length === 0

      var rendered = this.template({
        hasNoTweets: hasNoTweets,
        toolbar: this.toolbar,
        tweets: tweets
      })
      this.$el.html(rendered)
      return this
    },
    pipeline: function (tweets) {
      tweets = this.filter(tweets)
      tweets = this.sort(tweets)
      return tweets
    },
    filter: function (tweets) {
      var retweetCount = this.toolbar.filters.retweetCount
      var hasImage = this.toolbar.filters.hasImage

      tweets = tweets.filter(function (el) {
        var hasPhotos = Boolean(el.has('photos'))
        var isPassThreshold = el.get('retweet_count') >= retweetCount
        var isGood = hasImage ? (hasPhotos && isPassThreshold) : isPassThreshold
        return isGood
      })

      return new Backbone.Collection(tweets)
    },
    sort: function (tweets) {
      var criteria = this.toolbar.sort.criteria
      tweets = tweets.sortBy(criteria)

      if (this.toolbar.sort.direction === -1) {
        tweets = tweets.reverse()
      }

      return new Backbone.Collection(tweets)
    },

    filterImages: function (ev) {
      var on = ev.target.checked
      this.toolbar.filters.hasImage = on

      this.renderTimeline()
    },
    filterRetweetCount: function (ev) {
      var retweetCount = Number(ev.target.value)
      this.toolbar.filters.retweetCount = retweetCount

      this.renderTimeline()
    },

    sortByCriteria: function (ev) {
      var criteria = ev.target.value

      this.toolbar.sort.criteria = criteria

      this.renderTimeline()
    },
    sortDirection: function (ev) {
      var direction = ev.target.checked ? -1 : 1

      this.toolbar.sort.direction = direction
      this.renderTimeline()
    },
    renderTimeline: function () {
      var tweets = this.pipeline(this.collection)

      tweets = tweets.toJSON()
      var rendered
      rendered = timelineContentTemplate({
        tweets
      })
      this.$('.user-timeline-content').html(rendered)
    }
  })
})
