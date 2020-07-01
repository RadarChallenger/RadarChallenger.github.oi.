//image switcher

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/RL-1_final_300ppi.png") {
    myImage.setAttribute("src", "images/DYNNH9fVoAAkt-j.jpg");
  } else {
    myImage.setAttribute("src", "images/RL-1_final_300ppi.png");
  }
};

//welcome message

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to Rocket Lab, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome to Rocket Lab, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
