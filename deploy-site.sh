#!/bin/bash

# Deploys the production version to https://nnnnn.pixielabs.ai

set -ex
export NODE_ENV="production"

yarn build

firebase deploy --only hosting:pixielabs-website
