#! /bin/bash

npm install 
pm2 startOrRestart ecosystem.json
