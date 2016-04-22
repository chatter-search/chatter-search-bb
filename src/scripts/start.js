/**
 * @module - main starter
 */

/* global define */
define((require) => {
  // Load jQuery plugins
  require('polyfill')
  require('jquery')
  require('spices/plugins/serializeObject')

  require(['actions/main'], (main) => {
    main()
  })
})
