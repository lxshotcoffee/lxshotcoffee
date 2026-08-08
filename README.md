# LX-SHOT
git add . && git commit -m "fix: ignore conflicts and force push perfect production structures"
git push origin feature/pr-packaging:main --force
git branch --show-current
sed -i 's/actions\/checkout@v4/actions\/checkout@v7.0.1/' .github/workflows/deploy.yml
sed -i 's/actions\/setup-node@v4/actions\/setup-node@v7/' .github/workflows/deploy.yml
sed -i 's/node-version: 20/node-version: 22/' .github/workflows/deploy.yml
