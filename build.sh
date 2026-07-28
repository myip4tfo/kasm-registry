#!/bin/sh
set -e

node processing
cp -a public/. process
npm run deploy --prefix site
cp -a process/. public/ # Have to run it again because the deploy wipes the file and folders out
rm -rf process
