# Preliminary Research
UI and UX designs from similar applications


In order to provide an optimal user experience it was necessary to analyse similar applications to the Foodle concept. The aim is to compare apps and find common features that allow users to easily browse and communicate with their friends on one platform.

This document focuses on analysing the common, successful features of three food related mobile applications: BigOven, Yummly, Urban Spoon and Yelp. The features of these highly rated applications will help to shape the functionality of Foodle. 


### BigOven:

Overview: BigOven is an Android/IOS based application that allow users to create, search and share food recipes to their friends.
It uses a simple image based approach to display content. Popular searches or recipes shared by friends are displayed on the Main page (Figure 1). All application pages are linked in the menu bar (at the top of the page). Figure 2, shows the user profile page. It contains recipes created and shared by the user. User are able to track others by “following” them.

Analysis:
Main Page (Figure 1): Recipes are displayed in a list as large images with titles. For quick and easy browsing, a search tool is implemented at the top of the screen. Also the user can browse through the entire app by using the top menu bar.

User Profile (Figure 2): At the top of the screen, follower count is indicated, as well as the number of recipes uploaded by the user. The recipes shared by the user (owner) are displayed as a list with medium sized images. Below each image a star rating system is implemented, users can rate recipes from lowest (1) to highest (5).


### Yummly Recipes & Shopping List

Overview:
Yummly, an Android/IOS based application focused on personalised searches, helps users to collect, save and manage their favourite recipes. Useres can select recipes based on nutritional value as well as time and technique required to complete them. Additionally they can rate and review others’ recipes.

Analysis:
As shown in Figure 3, Yummly has a filtered search tool (salty, bitter, sour, etc.) allowing users to refine their results.

Figure 4, shows the user rating and review section. Users of Yummly can rate and comment recipes shared by friends. Recipe ratings - from 1 to 5 stars, shown at the top of the screen - are dependant on these reviews. 

### Zomato

Overview:
Zomato, an Android/IOS based application, allows users to discover new restaurants in their area. Their main goal is to provide a vast list of restaurants to search through and give users the option to order food through the application.

Analysis:
As shown in Figure 5, Zomato features a “Places you might like” feature that provides users with a list of suggested restaurants. Suggestions are dependant on previous searches and places users have checked in to. Zomato also allows users to check restaurant menus and to “book a table”.

In Figure 6, the bookmarks page stores a list of restaurants that have been pinned or saved by the user. 


### Yelp

### Comparison and Conclusions

Although displayed differently, several features were found to be common across BigOven, Yummly, Zomato and Yelp. These similarities will be discussed in the next section.

It is important to mention that BigOven and Yummly are recipe focused, while Yelp and Zomato put emphasis on the display of restaurants and their services.


**Search and Advanced Search (Filters)**
The four apps place the search feature at the top of the screen (easy access) and display the results from each search as a list. However, some of them lack the feature to refine or do specific searches (BigOven). The traditional approach to filter results is to tick boxes selecting the filters that you want to apply to the search, Yummly uses an innovative approach to refine the search for the users. As it is shown in Figure 3, a slider is implemented to filter results depending of the user needs. Therefore, it is easier for the user to specify how much filters will affect the search and by this way improve accuracy.

**Rate and Review**
Users are encouraged to leave a review sharing their experience. The five star rating system is consistent across all applications, which is commonly found in most applications on the market.

**Bookmarks**
The bookmark tool is used similarly across Zomato, Yummly and Yelp; providing a saved list of pages or links. They consist of a sample picture (of the food or restaurant) with a short description, rating and location (see Figure 6 – Zomato Bookmarks). However this feature was absent in BigOven, which could prove inconvenient to users wanting to revisit an article. 

**Profiles**
Users can manually create a profile or login using Facebook, Google+ or Twitter. BigOven, Yummly and Zomato provide three ways to sign up to their database while Yelp only allows users to sign up through Facebook or email. Some apps like BigOven, let users follow the content of other users instead of bookmarking. When users upload recipes, their “followers” will see this on their newsfeed. On the other hand, Yummly, Zomato and Yelp profiles are used to save a user’s preferences or likes, therefore their news feeds will be filtered accordingly with appropriate food.


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
