/* global define */
define(function (require) {
  'use strict'
  var FormView = require('views/FormView')

  return function (rootElement) {
    var formView = new FormView({
      el: rootElement.find('#search-form')
    })
    formView.render()
  }
})
