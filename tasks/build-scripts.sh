#!/usr/bin/env bash

cp node_modules/{\
jquery/dist/jquery.js,\
underscore/underscore.js,\
backbone/backbone.js, \
handlebars/dist/handlebars.runtime.js,\
requirejs/require.js} \
build/scripts

cp -r src/scripts/* build/scripts
