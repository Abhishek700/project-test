/* JavaScript Document */
(function (window){
 	var helloSpeaker={};
 	
 	var speakHello="Hello";
 	
 	helloSpeaker.speak=function(name){
 		console.log(speakHello + " "+name);
 	}
 	window.helloSpeaker=helloSpeaker;
 	
 })(window);
 