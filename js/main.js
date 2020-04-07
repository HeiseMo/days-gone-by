let health = 100;
let hunger = 100;
let bodyTemperature = 100;
let wood = 0;
let food = 0;
let completedDays = 0;
let txtReaderItemCount = 0;

//
let i = 1;
const txtReaderList = document.querySelectorAll(".textReader li");
// document.getElementById("actionTest").onclick = function () {
//   document.querySelector(".gameScreen span").innerText = i++;
//   fillTextReader("Some random game action");
// };

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

//Start Game
document.getElementById("play-button").onclick = function () {
  document.querySelector(".startGame").classList.toggle("startGameHidden");
  document
    .querySelector(".globalScreenHidden")
    .classList.toggle("globalScreen");
  tempBar();
  hungBar();
  daysPassing();
  storyIntro();
};

//Function for Days passing by
function daysPassing() {
  let count = 0;
  setInterval(function () {
    document.getElementById("daysGoneBy").innerText = count += 1;
    if (count == 1) return fillTextReader(count + ' Day has passed since the crash...');
    fillTextReader(count + ' Days have passed since the crash..');
  }, 10000);}

//Story Into Sequence

function storyIntro() {
  let count = 0;
  setInterval(function () {
    count++
    if (count == 1) return fillTextReader('You wake up to an awfull smell, you look to your body and thankfull you dont see any burn marks.');
    if (count == 2) return fillTextReader('The seat you were sitting on somehow managed to end up a couple of meters away from you, but the rest of the plane is missing.')
    if (count == 3) return fillTextReader('The smell you noticed before is still present and you assume its the plane, you just cant see it.')
    if (count == 4) return fillTextReader('You start to shiver, as you just notice how cold it is.')
    if (count == 5) return fillTextReader('You notice some wood around your location.')
    if (count > 4) clearInterval();
  }, 1000);
}


function tempBar() {
  if(bodyTemperature == 0)fillTextReader('You start to shiver due to feeling so cold!');
  setInterval(function () {
    bodyTemperature--;
    if(bodyTemperature >= 0){
      document.getElementById("tmpBar").style.width = bodyTemperature + '%';
    }
    if(bodyTemperature <= 0) healthBar();

    }, 1000);
}

function hungBar() {
  if(hunger == 0)fillTextReader('You start to shiver due to feeling so cold!');
  setInterval(function () {
    hunger--;
    if(hunger >= 0){
      document.getElementById("hunBar").style.width = hunger + '%';
    }
    if(hunger <= 0) healthBar();

    }, 1000);
}


function healthBar(){
        health--;
        document.getElementById("hBar").style.width = health + '%'; 
    }

// Functions for color switch

function lightsOn() {
  document.getElementById("switch").innerHTML = "darkMode";
  document.getElementById("mode").className = "lightbg";
}

function lightsOff() {
  document.getElementById("switch").innerHTML = "lightMode";
  document.getElementById("mode").className = "darkbg";
}

function fillTextReader(str) {
  let newItem = document.createElement("LI");
  let textnode = document.createTextNode(str);
  newItem.appendChild(textnode);

  let list = document.getElementById("text-reader");
  list.insertBefore(newItem, list.childNodes[0]);
  const txtReaderList = document.querySelectorAll(".textReader li");
  if (txtReaderList.length == 10) {
    list.removeChild(list.childNodes[9])
  }
}