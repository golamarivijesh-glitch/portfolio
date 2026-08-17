#!/bin/bash
# Launcher for the preview tool — ensures Node (installed via anaconda3) is on PATH.
export PATH="/Users/golamarivijeshreddy/anaconda3/bin:$PATH"
cd "/Users/golamarivijeshreddy/Portfolio" || exit 1
exec npm run start
