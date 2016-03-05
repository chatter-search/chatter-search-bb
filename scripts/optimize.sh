#!/usr/bin/env bash -x

r.js -o scripts/optimize-config.js

# cleanup unnecessary files
cd deploy
	sed -i.bak 's/require-config/start/' index.html
	rm index.html.bak
	rm script/require-config.js
cd -
