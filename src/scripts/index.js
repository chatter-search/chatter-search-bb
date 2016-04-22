/**
 * @module - main starter
 */

/* global define */
define((require) => {
  'use strict'
  require('polyfill')
  require('jquery')
  require('spices/plugins/serializeObject')

  require(['actions/main'], (main) => {
    main()
  })
})
