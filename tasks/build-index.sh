#!/usr/bin/env bash

version=${npm_package_version}
mkdir -p ./build

cat ./src/index.html | \
sed -E "s/(<meta name=\"version\" content=\")[[:alnum:].]*(\">)/\1$version\2/" > \
./build/index.html
