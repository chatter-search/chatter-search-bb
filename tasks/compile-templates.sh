#!/usr/bin/env bash

mkdir -p build/scripts

handlebars --amd -e hbs -c -f build/scripts/__templates.js src/templates/*.hbs
