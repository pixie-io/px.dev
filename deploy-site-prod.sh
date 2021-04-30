#!/bin/bash

set -ex
export NODE_ENV="production"

yarn build

firebase deploy --only hosting:pixielabs-website-prod
