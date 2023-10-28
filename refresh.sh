#!/bin/bash
echo ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
echo beginning program refresh...
git pull
pm2 delete ____
pm2 start _____
echo refresh complete!
echo ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~