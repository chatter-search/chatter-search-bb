#!/usr/bin/env bash

mkdir -p build/styles

node-sass src/styles/ -r -o build/styles