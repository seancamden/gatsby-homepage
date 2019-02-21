---
title: 'Python solution to West of Loathing elevator repair puzzle'
date: 2018-07-04T00:00:00+00:00
path: /2018/07/04/python-west-of-loathing-elevator-repair-puzzle
---
I've been a fan of the [asymmetric folks](http://asymmetric.net/people.html) ever since I stumbled upon [Kingdom of Loathing](https://www.kingdomofloathing.com/) years ago. Stunning visuals. You should check them out.  
Last night, playing [West of Loathing](https://store.steampowered.com/app/597220/West_of_Loathing/), their newest game (available on all the coolest platforms) I came upon a broken elevator in Soupstock Lode.   
I had a wrench and I could turn any of three nuts with it. The objective, apparently, was to adjust the steam pressure (or something like that) in order to get the elevator moving again. The trick was that each nut delivered a different value to the total. The first nut (Number 3) would add 411, the second (Number 5) would add 295, and the third (Number 7) would add 161.  
But the target amount was hidden. It would only tell you when you had gone over, so you had to guess what the exact number was.  
Monkeying around with the wrenches manually, I was able to get a rough idea of what the target number was (somewhere between 3,199 and 3,209), but nailing it this way seemed impossible. However, writing a short script seemed quite possible.  
First I defined a function to do the multiplication and addition:
<pre>
def l(no3,no5,no7):
  sum = (no3 * 411) + (no5 * 295) + (no7 * 161)
  return sum
</pre>

Then I wrote a nest of 'for' loops three deep, arbitrarily assumed that I would not need to turn any of the nuts more than 10 times, and iterated over my function:
<pre>
for i in range(10):
  for j in range(10):
    for k in range(10):
      sum = l(i,j,k)
      if sum > 3199 and sum < 3209:
        print(i,j,k,sum)
</pre>
And the answer popped right out! I am so [smrt](https://www.youtube.com/watch?v=DxNzuCCh1T8).  
Of course, the answer is probably somewhere close by in the game text, as it usually is, but this was way more fun I think!  
