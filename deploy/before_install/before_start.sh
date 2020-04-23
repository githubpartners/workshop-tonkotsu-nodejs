#!/bin/sh
sudo -s
cd /opt/tonkotsu-nodejs
npm install
npm audit fix
