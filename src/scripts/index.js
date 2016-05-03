/**
 * @module - main starter
 */

/* global define */
define((require) => {
  'use strict'
  require('polyfill')
  var $ = require('jquery')
  require('spices/plugins/serializeObject')
  var templates = require('spices/templates')

  var rootElement = $('body')
  var indexTemplate = templates.index
  rootElement.html(indexTemplate)

  require(['actions/main'], (main) => {
    main(rootElement)
  })
})
