/* global define */
define((require) => {
  'use strict'
  var Handlebars = require('handlebars.runtime')
  require('spices/handlebarsHelpers')
  require('__templates')
  Handlebars.partials = Handlebars.templates
  return Handlebars.templates
})
