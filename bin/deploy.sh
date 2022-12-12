#!/bin/bash
pnpm generate
touch .output/public/.nojekyll
git add .output
git cm -m "Update .output/public"
git subtree push --prefix .output/public origin gh-pages
