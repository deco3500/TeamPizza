function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {    
var image1 = document.getElementById('imageRight');
var image2 = document.getElementById('imageLeft');
var image3 = document.getElementById('imageMid');

var top_menu = document.getElementById('nav_wrapper');
var checkTop = document.body.scrollTop;  
	
	if (checkTop) {
		top_menu.style.backgroundColor = "#e25151";	
	} else {
		top_menu.style.backgroundColor = "transparent";	
		
	}

    if(isScrolledIntoView($('.images-container'))) {
		image1.style.transform= "translate3d(70%, 0, 0)";
		image1.style.transition= "transform .6s .8s";
		
		image2.style.transform= "translate3d(-100%, 0, 0)";
		image2.style.transition= "transform .6s .8s";
		
		image3.style.transform= "translate3d(-15%, 0, 0)";
		image3.style.transition= "transform .6s .8s";
        
    } 
	else {
		image1.style.transform= "translate3d(0, 0, 0)";
		image1.style.transition= "transform .6s .9s";
		image1.style.width ="200px";
		
		image2.style.transform= "translate3d(0, 0, 0)";
		image2.style.transition= "transform .6s .9s";
		image2.style.width ="200px";
		
		image3.style.transform= "translate3d(0, 0, 0)";
		image3.style.transition= "transform .6s .9s";
		image3.style.width ="200px";
		
		
	}
});

function dialogChange(){
	var feedImage = document.getElementById("imageLeft"); //news feed
	var nearbyImage = document.getElementById('imageRight'); //nearby
	var seachImage = document.getElementById('imageMid'); //search
	
	var flyNews = document.getElementById('flyoutNewsFeed'); //news feed
	var flyNearby = document.getElementById('flyoutNearby'); //nearby
	var flySearch = document.getElementById('flyoutSearch'); //search
	
	$( '#imageLeft' ).click( function() { //NEWS FEED
		feedImage.style.width = '210px';
		nearbyImage.style.width = '200px';
		seachImage.style.width = '200px';		
		flyNews.style.visibility = 'visible';
		flyNearby.style.visibility = 'hidden';
		flySearch.style.visibility = 'hidden';
	} );
	
	$( '#imageMid' ).click( function() { //SEARCH
		feedImage.style.width = '200px';
		nearbyImage.style.width = '200px';
		seachImage.style.width = '210px';
		flyNews.style.visibility = 'hidden';
		flyNearby.style.visibility = 'hidden';
		flySearch.style.visibility = 'visible';
	} );
	
	$( '#imageRight' ).click( function() { //NEARBY
		feedImage.style.width = '200px';
		nearbyImage.style.width = '210px';
		seachImage.style.width = '200px';
		flyNews.style.visibility = 'hidden';
		flyNearby.style.visibility = 'visible';
		flySearch.style.visibility = 'hidden';
	} );
	
}
