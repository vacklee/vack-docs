pnpm docs:build

cd docs/.vuepress/dist
git init
git add -A
git commit -m "auto construct blog"

git push -f git@github.com:vacklee/vack-website.git master:gh-pages
