#!/bin/sh
# Copies the static SpiceCube site from this repo into the website root.
# WordPress stays in place behind it. Undo: restore .htaccess.pre-spicecube and delete index.html, en/, img/.
set -e
ROOT=/home/u569384998/domains/spicecube.hu/public_html
SRC=$ROOT/spicecube-site/dist
cd "$ROOT"
[ -f .htaccess.pre-spicecube ] || cp .htaccess .htaccess.pre-spicecube
mkdir -p en img
cp -f "$SRC/index.html" index.html
cp -f "$SRC/en/index.html" en/index.html
cp -f "$SRC"/img/* img/
cp -f "$SRC/robots.txt" "$SRC/sitemap.xml" "$SRC/favicon.svg" .
# (re)write our block at the top of .htaccess, keeping everything else as it is
sed -i '/# BEGIN SpiceCube static site/,/# END SpiceCube static site/d' .htaccess
cat "$ROOT/spicecube-site/htaccess-block.txt" .htaccess > .htaccess.new
mv .htaccess.new .htaccess
date > "$ROOT/spicecube-site/last-deploy.txt"
