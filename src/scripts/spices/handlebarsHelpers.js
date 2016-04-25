/* global define */
define((require) => {
  'use strict'
  var Handlebars = require('handlebars.runtime')
  var moment = require('moment')

  Handlebars.registerHelper('$checked', (a, b) => {
    var out = ''
    if (a === b) {
      out = 'checked'
    }
    return out
  })

  Handlebars.registerHelper('$formatTime', (time) => {
    var out = moment(time).fromNow()
    return out
  })
})
