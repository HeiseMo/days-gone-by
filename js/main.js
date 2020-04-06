//
let i = 1;
const txtReaderList = document.querySelectorAll(".textReader li");
document.getElementById("actionTest").onclick = function () {
  document.querySelector(".gameScreen span").innerText = i++;
  if (txtReaderList[0].innerText === "") {
    txtReaderList[0].innerText = "I was clicked";
    console.log(txtReaderList[0].innerText);
  }
};
//console.log(txtReaderList[0])

///Footer Functions

//Restart Game
document.getElementById("restartGame").onclick = function () {
  location.reload();
};

//Github
document.getElementById("github").onclick = function () {
  window.open("https://github.com/HeiseMo/days-gone-by");
};

//Switch
document.getElementById("switch").onclick = function () {
  let switchMode = document.getElementById("switch").innerHTML;
  if (switchMode == "darkMode") {
    lightsOff();
  } else if (switchMode == "lightMode") {
    lightsOn();
  }
};

//Share
document.getElementById("play-button").onclick = function () {
  //Going to work this in later stage
  document
  .querySelector(".startGame")
  .classList.toggle("startGameHidden");
  document
    .querySelector(".globalScreenHidden")
    .classList.toggle("globalScreen");
  console.log("clicked");
};

function lightsOn() {
  document.getElementById("switch").innerHTML = "darkMode";
  document.getElementById("mode").className = "lightbg";
}

function lightsOff() {
  document.getElementById("switch").innerHTML = "lightMode";
  document.getElementById("mode").className = "darkbg";
}
/// Footer Functions End
