#!/bin/bash

case "$1" in
  "start")
    if [ ! -d "node_modules" ]; then
      npm install
    fi
    npm start
  ;;
  "clear")
    rm -rf .config .npm node_modules public package-lock.json
  ;;
  *)
    docker-compose -f docker-compose.dev.yml up
  ;;
esac