#!/usr/bin/env bash

npm run build-index & \
npm run compile-styles &\
npm run compile-scripts & \
npm run copy-dependencies & \
npm run compile-templates & \

wait
