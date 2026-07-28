#!/bin/sh
set -e

# Kasm Workspaces discovers a compatible registry by first fetching
# versions.txt at the root URL you add in Admin, then fetching list.json
# from whichever version-numbered subfolder it picks, so the version here
# must match site/next.config.js's basePath.
VERSION=1.1

node processing
cp -a public/. process
npm run deploy --prefix site
cp -a process/. public/ # deploy wipes the folder, so restore the icons/list.json
rm -rf process

mkdir base
mv public base/$VERSION
echo "$VERSION" > base/versions.txt
cat > base/index.html << EOF
<meta http-equiv="refresh" content="0; url=./$VERSION/">
EOF
touch base/.nojekyll
cp base/$VERSION/favicon.ico base/favicon.ico
mv base public
