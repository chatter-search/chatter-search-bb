#!/usr/bin/env bash

mkdir -p ./build/scripts

cp node_modules/{\
jquery/dist/jquery.js,\
underscore/underscore.js,\
backbone/backbone.js,\
moment/moment.js,\
babel-polyfill/dist/polyfill.js,\
handlebars/dist/handlebars.runtime.js,\
requirejs/require.js} \
build/scripts
