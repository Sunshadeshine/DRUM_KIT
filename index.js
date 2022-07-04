for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
makesound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress",function(event){
makesound(event.key);
buttonAnimation(event.key);
});
function makesound(key)
{
  switch (key) {
case 'w':
    case 'W':
    var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
      case 'a':
    case 'A':
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
      case 's':
    case 'S':
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case 'd':
    case 'D':
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case 'j':
    case 'J':
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case 'k':
    case 'K':
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case 'l':
    case 'L':
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
  }
}
function buttonAnimation(currentkey)
{
  var activekey=document.querySelector(".b" + currentkey.toLowerCase() );
activekey.classList.add("pressed");
setTimeout(function () {
  activekey.classList.remove("pressed");

}, 50);
}
