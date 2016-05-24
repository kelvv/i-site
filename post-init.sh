#! /bin/bash
. /root/.bashrc
npm install 
pm2 startOrRestart ecosystem.json
