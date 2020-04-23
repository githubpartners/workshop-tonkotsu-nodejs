#!/bin/sh
export PATH=/opt/nodejs/bin
cd /opt/tonkotsu-nodejs
npm cache clean --force
npm install
npm update 
npm audit fix
npm start
