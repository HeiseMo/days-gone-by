let health = 100;
let hunger = 100;
let bodyTemperature = "Cold";
let wood = 0;
let food = 0;
let completedDays = 0;
let txtReaderItemCount = 0;
let j = 1;
//
let i = 1;
const txtReaderList = document.querySelectorAll(".textReader li");
document.getElementById("actionTest").onclick = function () {
  document.querySelector(".gameScreen span").innerText = i++;
  fillTextReader(j++);
};

function fillTextReader(str) {
    let newItem = document.createElement("LI");
    let textnode = document.createTextNode(str);
    newItem.appendChild(textnode);
  
   let list = document.getElementById("text-reader");
    list.insertBefore(newItem, list.childNodes[0]);
    const txtReaderList = document.querySelectorAll(".textReader li");
    if(txtReaderList.length == 10){
        console.log(list.removeChild(list.childNodes[9]))
    }
}

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
  document.querySelector(".startGame").classList.toggle("startGameHidden");
  document
    .querySelector(".globalScreenHidden")
    .classList.toggle("globalScreen");
    var count=0;
setInterval(function()
{
    document.getElementById("daysGoneBy").innerText = count += 1;
    fillTextReader(count + ' Days have passed');
},10000);
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
