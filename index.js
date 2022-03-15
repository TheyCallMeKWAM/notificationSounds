var audio = new Audio("audiofiles/discord.mp3");

audio.oncanplaythrough = function(){
    audio.volume = 0.3;
audio.play();
}

var audio2 = new Audio("audiofiles/googlemeet.mp3");

audio2.oncanplaythrough = function(){
    audio2.volume = 0.75;
audio2.play();
}
var audio3 = new Audio("audiofiles/teams.mp3");

audio3.oncanplaythrough = function(){
    audio3.volume = 0.75;
audio3.play();
}

var audio4 = new Audio("audiofiles/slack.mp3");
audio4.oncanplaythrough = function(){
    audio4.volume = 0.2;
audio4.play();

}

var audio5 = new Audio("audiofiles/dazzle.mp3");
audio5.oncanplaythrough = function(){
    audio5.volume = 0.2;
audio5.play();

}
