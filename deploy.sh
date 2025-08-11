#!/bin/bash

echo "Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "Build failed. Aborting deployment."
  exit 1
fi

echo "Deploying to portfolio-lxc..."
rsync -avz --delete .next/ root@192.168.4.53:/var/www/html/

# rsync -avz --delete .next/ root@192.168.4.53:/var/www/portfolio/

if [ $? -eq 0 ]; then
  echo "Deployment complete. Visit http://192.168.4.53"
else
  echo "Deployment failed."
fi
