var age = prompt("How old are you?")
if(isNaN(age)){
if(age > 50){
alert("You've been around for a while!")
}else{alert("Wow, that's really young!")
}
}
else{
alert("That's not a number!")
}
function runFor(){
for(var i = 0; i<5; i++){
$("#main").append("<img class='loopimage' src='assets/dog.jpg")
}
}
