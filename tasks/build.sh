#!/usr/bin/env bash

npm run build-index & \
npm run copy-dependencies & \
npm run compile-scripts & \
npm run compile-templates & \
npm run compile-styles &\

wait
