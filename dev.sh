#!/bin/bash

case "$1" in
  "shell")
    docker exec -it gov-express bash
  ;;
  "test")
    docker exec -it gov-express bash -c "npm run test"
  ;;
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