# Preliminary Research
UI and UX designs from similar applications

To provide the best user experience it was necessary to analyse similar application to the one desired to build (Foodle). The aim is to see and compare between apps, the common features that allow users to browse easily and communicate with their friends through the same platform.

Currently in the market there several mobile applications that distribute food related content. The mobile applications reviewed in this section are BigOven, Yummly, Urban Spoon and Yelp. These platforms contain similar features and are high rated by users in the stores (AppStore and Google Play). This will help to improve certain features that would be implemented in Foodle.

Several features from these applications are similar, so the features discussed in the next section are considered more relevant to the implementation of Foodle.  

### BigOven:

Overview: BigOven is an Android/IOS based application that allow users to create, search and share food recipes to their friends.
It uses a simple image based approach to display the content. Main page (Figure 1) displays as a “news feed” recipes that friends shared or popular searches. It also implements a top menu bar which links all the application sites together. Figure 2, shows the user profile page. It contains the recipes that the user have created and shared with their friends. Also by “following” the user it is possible to keep track of the other user activity.

Analysis:
Main Page (Figure 1): The recipes are displayed as a list using large images with the name of each dish. To ease browsing, a search tool is implemented at the top of the screen as a quick access. Also the user can browse through the entire app by using the top menu bar.

User Profile (Figure 2): At the top of the screen a counter is displayed which indicates how many recipes the owner currently have uploaded and the amount of people that follow their recipes. The recipes shared by the user (owner) are displayed as a list with medium sized images. Below each image a star rating system is implemented, every user is allowed to rate the recipe starting from the lowest rating value “1” to “5” stars which is the highest rating value.


### Yummly Recipes & Shopping List

Overview: Yummly is an Android/IOS based application that help users to collect, save and manage their favourite recipes. This application focuses on personalized searches. The user can select recipes depending of nutritional values (calories, fats, etc.), time and technique required to complete the recipe. Users that have downloaded the same application are able to rate and review others’ recipes.

Analysis:
As it is shown in Figure 3, Yummly uses a filter search tool. This feature allow user to refine their search depending on specific needs (salty, bitter, sour, etc.), as a result the user will find better recipes that suit their needs.

Figure 4, shows the user rating and review section. Users within the same platform are able to rate and comment the recipes shared by their friends. Depending on the rating given by the participant users, an overall rating of the recipe (score from 1 to 5 stars) is displayed at the top of the screen.

### Zomato

### Yelp

### Comparison and Conclusions

* Standard rate system using stars à Spoons
* Check how useful was the article from that particular restaurant.
* Search Bar to search for restaurants outside the user’s location.
* Avoid continuous transition through pages (frames)
* Maybe rate the service and food too (more detailed rating system).
 
Social Interaction:
* Reward users depending of their contribution to the rest of users. Similar to “Yahoo Answers”.
* Leaderboard to encourage people to share more content.
* Other users not from the “friend list” are able to rate the information shared by the user. Increase interaction and make it less boring.
* Meeting feature: Users able to set up meeting point (“create event on fb”) friends need to confirm attendance.
* If user approves location tracking à create feature that allow the users to show their location on their friends map. Similar to Apple app “find friends”. Check if friends are in the zone and facilitate last minute meetings.

# Version 1
## Wireframes
### Log In page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/login.png"  height="auto" width="250" >

### Menu page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/mainmenu.png" height="auto" width="250" >

### Newsfeed page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/newfeed.png"  height="auto" width="250" >
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/expandedarticle.png" height="auto" width="250" >

### Search page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/search1.png" height="auto" width="250" >
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/expandedsearch.png" height="auto" width="250" >
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/refinesearch.png" height="auto" width="250" >

### Inbox page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/inbox.png" height="auto" width="250" >

### Notify page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/tellafriend.png" height="auto" width="250" >

### Map page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/map.png"  height="auto" width="250" >

### Leave Review page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/wireframes/leavereview.png" height="auto" width="250" >



## Usability Testing
### User 1
#### Search page
‘Refine Search’ wasn’t obvious, user was unaware of the functionality of the button.
* Solution: Have it at the bottom of the page with a button that says refine search or an icon.

#### Restaurant details
User suggested to include a ‘leave a review’ button as well as a ‘see user reviews’.
* Solution: include buttons to view user reviews and to leave a review.

#### Newsfeed
User thought that the newfeed looked bland with just article titles and blurbs. The user suggested using images in the article previews to make them look more appealing.

### User 2
#### Main Menu page
User thought that having the main menu in a seperate page was old fashioned and suggested that we have a menu/navigation bar with only a few links in them.

#### Search page
User couldn't find 'refine search' option. User didn't think that the symbol meant anything, thought it was a decoration. User suggested having it right below the search bar with a more universally accepted/understood icon or just have it say 'refine search'.

#### Overall thoughts
User thought that the application could benefit from some colours and proper pictures to have a more complete look.

### User 3
#### Log In/Landing page
User suggested having a little blurb as to what the application is about on the front page and maybe some explanation or pictures as to what functions the application has.

#### Newsfeed 
User thought the newsfeed page needed a filter for posts from friends and a filter for news only. User got the idea from Facebook.

#### Overall thoughts
Application seemed pretty straightforward to the user. User thought that navigation was quite intuitive other than the flaws mentioned above. 

## Mockups
Based on the usability testing results above, mockups were made with the users' critiques put into consideration.

Changes made: 
* Main menu page has been removed and placed into menu/navigation bars at the bottom of the screen which will be present on every page
* Images added to the background of the articles
* Users have the option to read other user reviews on the restaurant details page

Interactive wireframes were made on Marvel App. 
https://marvelapp.com/86cbbjg

### Log In page
TBD

### Newsfeed page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/mockups/newsfeed.png"  height="auto" width="250" >
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/mockups/newsfeed-expand.png" height="auto" width="250" >

### Search page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/mockups/search.png" height="auto" width="250" >
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/mockups/search-expanded.png" height="auto" width="250" >
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/mockups/search-refined.png" height="auto" width="250" >

### Inbox page
TBD

### Notify page
TBD

### Map page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/mockups/nearby.png"  height="auto" width="250" >

### Restaurant Details page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/mockups/restaurant-details.png"  height="auto" width="250" >

### Leave Review page
<img src="https://github.com/deco3500/TeamPizza/blob/master/Version-1/mockups/review.png" height="auto" width="250" >
