#!/usr/bin/env bash

npm run build-index & \
npm run build-scripts & \
npm run compile-templates & \
npm run compile-styles &\

wait