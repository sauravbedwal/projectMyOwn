var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")



// bluecar move
blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
    counter++
})

//racecar move
window.addEventListener("keydown", function(e){
    //right move
   if(e.keyCode == "39"){ 
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if(raceCarLeft < 260){ //as starts from middle so already 130 if 260 then it is in extreme right so thats why has to be less than 260
        raceCar.style.left = (raceCarLeft + 130) + "px"  //starts from middle
    }
    jumpsound.play()
};

    //left move
    if(e.keyCode == "37"){
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(raceCarLeft > 0){raceCar.style.left = (raceCarLeft - 130) + "px"
        jumpsound.play()
    }

    }
})


//Game over
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        // if((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
            if((blueCarLeft === raceCarLeft) && (blueCarTop > 400) && (blueCarTop < 599)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)