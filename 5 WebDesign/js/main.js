/*Video controls*/
var video = document.getElementById("myVideo")
	playButton = document.getElementById("play-btn"); 


function playVideo() { 
    video.play(); 
    playButton.classList.add("hidden");
} 

function pauseVideo() { 
    video.pause();
    playButton.classList.remove("hidden");
} 


/*Stars raiting (section four)*/
var raiting = document.querySelector(" .raiting"),
	raitingStar = document.querySelectorAll(".raiting-star");
 
 raiting.onclick = function(e){
 	var target = e.target;
 	if(target.classList.contains("raiting-star")) {
 		removeClass(raitingStar, "current-active")
 		target.classList.add("active", "current-active");
 	}
 };

 raiting.onmouseover = function(e){
 	var target = e.target;
 	if(target.classList.contains("raiting-star")) {
 		removeClass(raitingStar,"active","current-active");
 		target.classList.add("active");
 		mouseOverActiveClass(raitingStar);
 	}
 };

 function removeClass(arr) {
 	for (var i = 0, iLen = arr.length; i < iLen; i++) {
 		for (var j = 1; j < arguments.length; j++) {
 			raitingStar[i].classList.remove(arguments[j]);
 		}
 	}
 };

 function addClass(arr) {
 	for (var i = 0, iLen = arr.length; i < iLen; i++) {
 		for (var j = 1; j < arguments.length; j++) {
 			raitingStar[i].classList.add(arguments[j]);
 		}
 	}
 };

 function mouseOverActiveClass(arr){
 	for(var i = 0, iLen = arr.length; i < iLen; i++) {
 		if(arr[i].classList.contains("active")){
 			break;
 		} else {
 			arr[i].classList.add("active");
 		}
 	}
 };
