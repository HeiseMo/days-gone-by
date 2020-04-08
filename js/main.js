let ticker = 0;
let health = 100;
let hunger = 100;
let bodyTemperature = 100;
let wood = 0;
let rawMeat = 0;
let cookedMeat = 0;
let isFireActive = 0;
let completedDays = 0;
let txtReaderItemCount = 0;
//Global Ticker
setInterval(function () {
  ticker++
  if (rawMeat >= 1) {
    if (hunger >= 100) {
      console.log("Already 100%")
      hunger = 100;
    } else if (hunger < 100 && hunger > 0) {
      hunger = hunger + 0.5;
      rawMeat = rawMeat - 1
      document.querySelector("#meatList span").innerText = rawMeat;
    }
  }

  if (hunger < 0) {
    location.reload();
  }

  console.log(ticker)
}, 1000);

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
  daysPassing();
  storyIntro();

};

//Function for Days passing by
function daysPassing() {
  let count = 0;
  setInterval(function () {
    document.getElementById("daysGoneBy").innerText = count += 1;
    if (count == 1) return fillTextReader(count + ' Day has passed since the crash...');
    fillTextReader(count + ' Days have passed since the crash..');;
  }, 10000);
}

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

document.getElementById("hunBar").style.width = hunger + '%';
let id = setInterval(function () {
  hunger--;
  if (hunger >= 0) {
    document.getElementById("hunBar").style.width = hunger + '%';
    document.querySelector('.hunStatusBarText span').innerText = hunger;
  }
  if (hunger == 0) {
    fillTextReader('You start to feel dizzy due to being so hungry! Look for food!');
    clearInterval(id);
  }
}, 1000);


function healthBar() {
  document.getElementById("hBar").style.width = health + '%';
  let id = setInterval(function () {
    if (bodyTemperature == 0) {
      health--;
      document.querySelector('.hStatusBarText span').innerText = health;
    }
    if (health == 0) {
      fillTextReader('You start to shiver due to feeling so cold! Go feed the fire!');
      location.reload()
      clearInterval(id)
    }
  }, 1000);
}


//Collect Wood
document.getElementById("wood-collection").onclick = function () {
  wood++
  document.getElementById("wood-collection").classList.toggle("disabled")
  let timeLeft = 11
  let id = setInterval(function () {
    timeLeft--
    if (timeLeft == 0) {
      document.getElementById("wood-collection").classList.toggle("disabled");
      console.log(timeLeft);
      document.querySelector("#wood-collection span").innerText = '';
      clearInterval(id)
    } else if (timeLeft >= 0) {
      document.querySelector("#wood-collection span").innerText = '(' + timeLeft + ')'
    }
  }, 1000)

  if (wood > 0) {
    console.log("Yes I got " + wood + ' pieces of wood!')
    document.querySelector("#woodList span").innerText = wood;
  }
  if (wood == 5) {
    toggleLightFire();
  }
  if (wood % 5 == 0) {
    fillTextReader("You have collected " + wood + " pieces of wood.")
  }
};

// Light Fire

function toggleLightFire() {
  document.getElementById("light-fire").classList.toggle("collapsed")
}

document.getElementById("light-fire").onclick = function () {
  wood = wood - 5
  document.querySelector("#woodList span").innerText = wood;
  if (wood < 5) {
    toggleLightFire();
  }
  fillTextReader("You lit a fire, you never felt so warm before.")
}

// Collect Meat

document.getElementById("collect-meat").onclick = function () {
  rawMeat++
  hunger = hunger + 2;
  console.log(hunger)
  if (rawMeat > 0) {
    console.log("Yes I got " + rawMeat + ' pieces of raw meat!')
    document.querySelector("#meatList span").innerText = rawMeat;
  }
  if (rawMeat % 5 == 0) {
    fillTextReader("You have collected " + rawMeat + " pieces of raw meat.")
  }
};

// Functions for color switch

function lightsOn() {
  document.getElementById("switch").innerHTML = "darkMode";
  document.getElementById("mode").className = "lightbg";
}

function lightsOff() {
  document.getElementById("switch").innerHTML = "lightMode";
  document.getElementById("mode").className = "darkbg";
}

// Text Reader

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