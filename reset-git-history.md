rm -rf .git

git init
git checkout -b main
git add .
git commit -m "Initial commit"

git remote add origin https://github.com/push-based/ws-nx-enschede-81223.git
git push -u --force origin main