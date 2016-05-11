#!/usr/bin/env bash

r.js -o tasks/optimize-config.js

# replace require-config.js to index.js
# due to optimization took care of it already
cd deploy
	sed -i.bak 's/require-config/index/' index.html
	rm index.html.bak
	rm scripts/require-config.js
cd -
