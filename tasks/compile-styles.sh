#!/usr/bin/env bash

mkdir -p ./build/styles

node-sass ./src/styles/index.scss \
| postcss -c ./postcss-options.json \
> ./build/styles/index.css
