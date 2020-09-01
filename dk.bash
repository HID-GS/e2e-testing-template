#!/usr/bin/env bash
docker volume create e2e-testing-fpx__node_modules
docker run --rm -ti -v $PWD:/app:delegated -v e2e-testing-fpx__node_modules:/app/node_modules:delegated -w /app hidgweb/node-chromium $@

