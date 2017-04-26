$(document).ready(function() {

	
	redrawDotNav();
	

	/* Scroll event handler */
    
$(window).bind('scroll',function(e){
   
 	parallaxScroll();
		
redrawDotNav();
    });
    
	

/* Next/prev and primary nav btn click handlers */
	
$('a.home').click(function(){
    	
$('html, body').animate({
    		
scrollTop:0
    	}, 1000, function() {
	 
   	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.about').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#about').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 

// Callback is required for iOS
		});
   
 	return false;
    });
   
 $('a.comic').click(function(){
    	
$('html, body').animate({
    		
scrollTop:$('#comic').offset().top
    	}, 1000, function() {

	    	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
    });
	
$('a.contact').click(function(){
    	
$('html, body').animate({
    		
scrollTop:$('#contact').offset().top
    	},
 1000, function() {
	    	
parallaxScroll();

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.child-rights').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#child-rights').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 
 
// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.about').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#about').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.characters').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#characters').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.chapter1').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#chapter1').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.chapter2').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#chapter2').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.chapter3').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#chapter3').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.chapter4').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#chapter4').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.chapter5').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#chapter5').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 

// Callback is required for iOS
		});
    
	return false;
	});
    
$('a.chapter6').click(function(){
   
 	$('html, body').animate({
    	
	scrollTop:$('#chapter6').offset().top
    	}, 
1000, function() {
	    
	parallaxScroll(); 


// Callback is required for iOS
		});
    	
return false;
    });

   
 /* Show/hide dot lav labels on hover */
    
$('nav#primary a').hover(
    	function () {
	
		$(this).prev('h1').show();
		},
	
	function () {
			
$(this).prev('h1').hide();
		}
 
   );
    
});



/* Scroll the background layers */
function parallaxScroll(){
	
var scrolled = $(window).scrollTop();
	
$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	
$('#parallax-bg2').css('top',(0-(scrolled*.25))+'px');
	
$('#parallax-bg3').css('top',(0-(scrolled*.25))+'px');
}



/* Set navigation dots to an active state as the user scrolls 
*/
function redrawDotNav(){
	
var section1Top =  0;
	

// The top of each section is offset by half the distance to the previous section.

var section2Top =  $('#about').offset().top - (($('#comic').offset().top - $('#about').offset().top) / 2);
	
var section3Top =  $('#comic').offset().top - (($('#contact').offset().top - $('#comic').offset().top) / 2);
	
var section4Top =  $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 2);
var section5Top =  $('#child-rights').offset().top - (($('#comic').offset().top - $('#about').offset().top) / 2);
var section6Top =  $('#characters').offset().top - (($('#contact').offset().top - $('#comic').offset().top) / 2);
var section7Top =  $('#chapter1').offset().top - (($(document).height() - $('#contact').offset().top) / 2);
var section8Top =  $('#chapter2').offset().top - (($('#comic').offset().top - $('#about').offset().top) / 2);
var section9Top =  $('#chapter3').offset().top - (($('#contact').offset().top - $('#comic').offset().top) / 2);

var section10Top =  $('#chapter4').offset().top - (($(document).height() - $('#contact').offset().top) / 2);
var section11Top =  $('#chapter5').offset().top - (($('#comic').offset().top - $('#about').offset().top) / 2);
var section12Top =  $('#chapter6').offset().top - (($('#contact').offset().top - $('#comic').offset().top) / 2);

;
	
$('nav#primary a').removeClass('active');
	
if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){

		$('nav#primary a.home').addClass('active');
	
}
 
else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
	
	$('nav#primary a.about').addClass('active');
	

}

 else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
	
	$('nav#primary a.comic').addClass('active');
	
}

else if ($(document).scrollTop() >= section4Top){
		
$('nav#primary a.contact').addClass('active');
	
}


else if ($(document).scrollTop() >= section5Top){
		
$('nav#primary a.child-rights').addClass('active');

}

else if ($(document).scrollTop() >= section6Top){
		
$('nav#primary a.characters').addClass('active');

}

else if ($(document).scrollTop() >= section7Top){
		
$('nav#primary a.chapter1').addClass('active');

}

else if ($(document).scrollTop() >= section8Top){
		
$('nav#primary a.chapter2').addClass('active');

}

else if ($(document).scrollTop() >= section9Top){
		
$('nav#primary a.chapter3').addClass('active');

}

else if ($(document).scrollTop() >= section10Top){
		
$('nav#primary a.chapter4').addClass('active');

}

else if ($(document).scrollTop() >= section11Top){
		
$('nav#primary a.chapter5').addClass('active');

}

else if ($(document).scrollTop() >= section12Top){
		
$('nav#primary a.chapter6').addClass('active');

}

	
}
