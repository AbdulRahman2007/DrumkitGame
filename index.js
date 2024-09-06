var audio1 = new Audio("/sounds/tom-1.mp3");
var audio2 = new Audio("/sounds/tom-2.mp3");
var audio3 = new Audio("/sounds/tom-3.mp3");
var audio4 = new Audio("/sounds/tom-4.mp3");
var audio5 = new Audio("/sounds/kick-bass.mp3");
var audio6 = new Audio("/sounds/crash.mp3");
var audio7 = new Audio("/sounds/snare.mp3");

var btn = document.querySelectorAll(".drum").length;

for(var i = 0; i < btn; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var btn = this.innerHTML;
     makeSound(btn);
     activeBtn(btn);
    });
};


addEventListener("keypress", function(event){
    makeSound(event.key);
    activeBtn(event.key);
})
function makeSound(key){

    switch(key){
        case "w":
            audio6.play();
        case "a":
            audio7.play();
        case "s":
            audio4.play();
        case "d":
            audio1.play();
        case "j":
            audio2.play();
        case "k":
            audio3.play();
        case "l":
            audio5.play();
            break;  
            default:
        }
};

function activeBtn(current){
   var butn = document.querySelector("."+current);
   butn.classList.add("pressed");
   setTimeout(() => {
    butn.classList.remove("pressed")
   }, 100);
}

