#!/usr/bin/env bash -x

mkdir -p build/script/lib
cp \
bower_components/{\
requirejs/require.js,\
jquery/dist/jquery.js,\
underscore/underscore.js,\
backbone/backbone.js} \
build/script
# cp bower_components/requirejs-plugins/src/json.js build/script/requirejs-json.js
cp node_modules/handlebars/dist/handlebars.runtime.js build/script

cp -r src/script/* build/script
