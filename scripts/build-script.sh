#!/usr/bin/env bash -x

cp \
bower_components/{\
jquery/dist/jquery.js,\
underscore/underscore.js,\
backbone/backbone.js} \
build/script

cp node_modules/{\
handlebars/dist/handlebars.runtime.js,\
requirejs/require.js \
build/script

cp -r src/script/* build/script
