#!/bin/sh
sed -i "s/PROXY [0-9]*\.[0-9]*\.[0-9]*\.[0-9]*:[0-9]*/PROXY $1/g"  ../www/pac.pac
