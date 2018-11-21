#!/bin/bash

SHORT_DATE=$(date +"%Y-%b")
COMMIT_COUNT=$(git rev-list --since=$(date +"%Y-%b-01") --count HEAD)
COMMIT_PLUS_ONE=$((1 + $COMMIT_COUNT))
HASH=$(git rev-parse --short HEAD)
VERSION=$SHORT_DATE-build-$COMMIT_PLUS_ONE-$HASH
DATE=$(date)

JSON='{ "version": "'$VERSION'", "buildDate": "'$DATE'" }'

echo $JSON