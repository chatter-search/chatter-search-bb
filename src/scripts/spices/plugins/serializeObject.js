/**
 * Serialize object Jquery form extention
 */

/* global define */
define(function (require) {
  var _ = require('underscore')
  var $ = require('jquery')

  $.fn.serializeObject = function () {
    var sdata = $(this).serializeArray()
    var data = {}

    _.each(sdata, function (el) {
      data[el.name] = el.value
    })

    return data
  }
})
