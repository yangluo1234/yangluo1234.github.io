// const drawerButton = document.querySelector("#drawer-button");
// const sideDrawer = document.querySelector("#side-drawer");
// console.log(sideDrawer);
// let isOpen = false;
// drawerButton.addEventListener("click", openDrawer);

// function openDrawer() {
//   console.log("i am clicked");
//   if (!isOpen) {
//     // sideDrawer.style.transform = `translateX(200px)`;
//     sideDrawer.style.translate = "200px";
//     isOpen = true;
//   } else {
//     sideDrawer.style.translate = "-200px";
//     // sideDrawer.style.transform = `translateX(-200px)`;
//     isOpen = false;
//   }
// }

const clickButton = document.querySelector("#click-button");
console.log(clickButton);

const myDuck = document.querySelector("#my-duck");

let counter = 0;

clickButton.addEventListener("click", moveDuck);

function moveDuck() {
  if (counter === 0) {
    myDuck.style.translate = "-20px -40px";
    myDuck.style.rotate = "-20deg";
    counter = 1;
  } else {
    myDuck.style.translate = "0px 0px";
    myDuck.style.rotate = "0deg";
    counter = 0;
  }
}
