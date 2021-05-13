//
for(var i=0; i<document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function (event) {

     var pressedKey = event.key;
    // alert(pressedKey);
    makeSound(pressedKey);
    buttonAnimation(pressedKey);

    });

function makeSound(x) {

  switch (x) {
    case "w":
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
    case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
    case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
    case "J":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
    case "K":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
    case "L":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Press only (w, a, s, d, j, k or l) key..");

  }

}

function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout (function() {
    activeKey.classList.remove("pressed"); 
  }, 100);
}




// for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
//   document.addEventListener("keydown", function (event) {
//        var pressedKey = event.key;
//       // alert(pressedKey);
//
//       switch (pressedKey) {
//         case "w":
//           var tom1 = new Audio("sounds/tom-1.mp3");
//           tom1.play();
//           break;
//
//         case "a":
//           var tom2 = new Audio("sounds/tom-2.mp3");
//           tom2.play();
//           break;
//
//         case "s":
//           var tom3 = new Audio("sounds/tom-3.mp3");
//           tom3.play();
//           break;
//
//         case "d":
//           var tom4 = new Audio("sounds/tom-4.mp3");
//           tom4.play();
//           break;
//
//         case "j":
//           var snare = new Audio("sounds/snare.mp3");
//           snare.play();
//           break;
//
//         case "k":
//           var crash = new Audio("sounds/crash.mp3");
//           crash.play();
//           break;
//
//         case "l":
//           var kick = new Audio("sounds/kick-bass.mp3");
//           kick.play();
//           break;
//
//         default:
//           console.log("KUCH TOH GADBAD HAI DAYA..");
//
//       }
//   });
// }



// this.style.color = "white";
// console.log(this.innerHTML);
