

# Project 4
+ By: Nicholas Hills
+ Production URL: <http://p4.daoist.life>

## Improvements based on P3 peer review feedback
My reviewer pointed out an error in my path names. I changed my "favorites" page path name to "/favs" to fix the issue. They also noted that 
my "favorites" page displayed no text for when the user has no favorites. I added a message saying "no messages" to prevent any confusion.

## Outside resources
Bootstrap3 <http://getbootstrap.com>

## Notes for instructor
I have added several features to my blog. The "posts" page features a filter on top that will give the user any chapter at a click. The filter
users local storage to save the user's choice. Individual post pages feature a nav system that lets the user return to "posts" page or "go back, go forward."

The user can add a post to their favorites' list with the favorites' button. The button changes appearance based on its favorite status. The number
of favorited posts are displayed next to the "favorite posts" link in the header/footer navbars.

The favorites' page will feature a list of posts by title and author. The post title will link to the post. The user can remove the posts by clicking the "x" button. 

The "contact page" features a simple "contact us" form with vuelidate taking care of the simple form validation. When the user submits their message, a message thanking the user by name is displayed.
