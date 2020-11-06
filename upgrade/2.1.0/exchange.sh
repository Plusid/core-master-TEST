#!/usr/bin/env bash

cd ~/core-master
pm2 delete inf-core
pm2 delete inf-core-relay
git reset --hard
git pull
git checkout master
yarn run bootstrap
yarn run upgrade

pm2 --name 'inf-core-relay' start ~/inf-core/packages/core/dist/index.js -- relay --network mainnet
