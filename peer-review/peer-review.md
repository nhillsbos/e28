## P3 Peer Review

+ Reviewer's name: Nicholas Hills
+ Reviwee's name: Madusha Gamage
+ URL to reviewee's Github repo: *<https://github.com/madushag/e28/>*


### Are you able to produce any errors or unexpected results?

While using the website normally, I could produce no errors or strange results. When I refreshed the browser, the website returned a 404 error. 
We discussed how to solve this issue on github, but well after the assignments were due. My own site has the same issue!

### Were there any parts of the interface that you found confusing or unclear?

When I began to use the application's buttons, I noticed something strange. The "add to shopping list" and "add to favorites" buttons disappear
after being clicked. I feel this looks odd and makes the site look "broken." It might be easier to understand that something has already been
clicked if the buttons became "grayed out."

Moving on to the "favorites" and "shopping list" pages, because they have the same problem. The "favorites" do not link to the recipes. This
means that if the application featured many more recipes, the user might have to spend some time looking for their desired recipe manually.
The shopping list does not include links either. Although I noticed that ingredients don't have individual pages. It might be interesting to see 
the shopping list link to a grocery delivery service.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

I was looking at the code for the "add to favorites" button. I noticed there is another method involved that checks to see if something has already
been favorited. 
```
existsInFavorites: function (recipe) {

			if (this.favorites.getItem(recipe.id)) {
				return true;
			}
			else {
				return false;
			}
		},

		addToFavorites: function (recipeId) {

			let favorites = new app.Favorites();
...
```
I think this to make the button disappear. But it took me a bit to understand. Instead of causing the button to disappear, maybe this code can gray out
buttons already clicked.

### Are there any parts of the code that you found interesting or taught you something new?

I am still new to programming and web development frameworks. While looking over their code, I noticed they user bootstrapvue. I am using bootstrap
in my own project, but I was not aware of bootstrapvue. I see they make good use of it to style their application in a way that's attractive and easy 
to read. 

For example:
```
<b-container>				
				<li v-for='ingredient in recipe.ingredients' :key='ingredient.name'>
					<b-row>
						<b-col cols="4"><p class="text-left capitalize">{{ ingredient.name }}</p></b-col>						
						<b-col cols="4">{{ ingredient.amount }} {{ ingredient.unit}}</b-col>						
						<b-col cols="4">
							<b-button v-if='!existsInShoppingList(ingredient.name, recipe.id)'
								size="sm" variant="info" 
								@click='addToShoppingList(ingredient.name, recipe.id, ingredient.amount, ingredient.unit, recipe.name)'>
								Add to shopping list
							</b-button>
						</b-col>						
					</b-row>
				</li>				
			</b-container>

```
They also made great use of bootstrapvue's toast message feature to set the message in the addToFavorites method:
```
this.$bvToast.toast([vNodesMsg], {
					autoHideDelay: 4000,
					variant: "success",
					appendToast: true,
					solid: true,
					noCloseButton: true
				});
```

### Are there any best practices discussed in course material that you feel were not addressed in the code?

None that I could see.

### Do you have any additional comments not covered in the above questions?

I would love to see the "p4" version with slight improvements to the ui and an expanded recipe list.