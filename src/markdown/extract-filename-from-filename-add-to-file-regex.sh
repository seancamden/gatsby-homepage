#!/bin/bash
# thanks to JPvRiel of Johannesburg for explaining how the new bash regex works!
# https://gist.github.com/JPvRiel/4cf82d42beb6387dec7eadc43cef6c17
# for matching filenames that look like '2013-07-05-photoshop-snap-guides-to-pixels.md'
re='([0-9]+-[0-9]+-[0-9]+-)([-0-9a-z]+)(\.md)'
# only markdown files in the current directory
for file in *.md
do 
  [[ $file =~ $re ]]
  #disregard the date and the extension and apply what's left to the end of the 4th line of each file.
  sed -i "4s/$/\/${BASH_REMATCH[2]}/" $file
 done
