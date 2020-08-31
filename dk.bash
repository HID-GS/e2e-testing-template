#!/usr/bin/env bash
docker run --rm -ti -v $PWD:/app -w /app hidgweb/node-chromium $@

