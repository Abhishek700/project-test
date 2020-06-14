/* JavaScript Document */
(function (window){
 
 	var goodBye={};
 	
 	var speakBye="Good Bye";
 	
 	goodBye.speak=function(name){
 		console.log(speakBye + " " +name);
 	}
 	
 	window.goodBye=goodBye;
 
 })(window);