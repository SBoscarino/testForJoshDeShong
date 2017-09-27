Stefanie Boscarino's coding challenge:

I will document my thought process and then attempt to solve for the solution.

FYI: If the goal of this challenge is to show you I can DO THIS without reinventing the wheel, you will be disappointed. I know there are libraries for handling this sort of thing, but i'm pretty sure you guys want to see that I can think though this logically, so I will solve it to the best of my ability instead of using libraries.

By the way, the library I would have used is Google's libphonenumber.


Thought process:
1. Explain why I'm not just using a library. Check.

2. Research "E.164 format".
--https://www.sitepoint.com/working-phone-numbers-javascript/
What is it? What makes this special?


3. What are possible inputs i'll have to test for and handle?
202 456 1111
(202) 456 1111
2024561111
1-202-456-1111
1-202-456-1111 x1234
1-202-456-1111 ext1234
1 (202) 456-1111
1.202.456.1111
1/202/456/1111
12024561111
+1 202 456 1111

PROPER E.164 (expected output) : "+12024561111"

Looking at possible inputs, I first consider removing all symbols and spaces since these are not in "proper" E.164. There is also a plus sign and a 1 at the beginning in proper format.

I will use Jest and TDD to solve for this. If you look at my test file, you will see how I solved this problem in order from top to bottom.
Jest documentation: https://facebook.github.io/jest/docs/en/getting-started.html


First, we should remove any symbols the user could put in.
I started by checking some Stack Overflow:
https://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
I liked the simplicity of the regex answers, so I looked at the examples, noticed a pattern, and decided to disallow all things except numbers in my function for now.

Next, I added the plus sign which is required for E.164.

Next, I need to handle all of the silly things a user might try to throw in.

Finally, I should try to accommodate extensions. If a user tries to put in letters, they will be removed due to my regex and the extension number will be left behind. Therefore, if a number is longer than 10 (minus the +1 at the beginning), all extra numbers are the extension.
After doing some research on extensions, it looks like a lot of sites have an extra field for extensions. When inserting extensions into a database, it looks like people tend to use this format: 1567842222;ext=3456. This is what I used. I'm not totally sure if this is right, but getting information from a user usually leads us to store it as data, right? Right!

I did not have time to handle more with extensions. There are definitely some outliers to handle, such as extensions greater than four or less than three, but I think what I have is proof that I can think through things.


Thank you so much for your time.
I hope to hear back from you soon!

Stefanie
