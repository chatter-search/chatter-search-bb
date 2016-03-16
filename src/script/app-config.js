/**
 * Application configuration
 */

/* global define */
define(function () {
  var apiBase = 'http://localhost:5000'
  var appConfig = {
    api_110: {
      userShowUri: apiBase + '/1.2.0/user_show',
      userTimelineUri: apiBase + '/1.2.0/user_timeline'
    }
  }

  return appConfig
})
