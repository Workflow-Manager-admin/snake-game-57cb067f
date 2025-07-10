#!/bin/bash
cd /home/kavia/workspace/code-generation/snake-game-57cb067f/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

