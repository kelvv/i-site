#! /bin/bash

cp -r /root/config ./

npm install 
pm2 startOrRestart ecosystem.json
