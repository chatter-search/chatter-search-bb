#!/usr/bin/env bash

cp node_modules/{\
jquery/dist/jquery.js,\
underscore/underscore.js,\
backbone/backbone.js, \
handlebars/dist/handlebars.runtime.js,\
requirejs/require.js} \
build/script

cp -r src/script/* build/script
