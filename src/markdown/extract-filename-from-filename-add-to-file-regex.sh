#!/bin/bash
re='([0-9]+-[0-9]+-[0-9]+-)([-0-9a-z]+)(\.md)'
for file in *.md
do 
  [[ $file =~ $re ]]
  #echo ${BASH_REMATCH[2]}
  sed -i "4s/$/\/${BASH_REMATCH[2]}/" $file
 done
