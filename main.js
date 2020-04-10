let ticker = 0;
let health = 100;
let hunger = 100;
let bodyTemperature = 100;
let wood = 0;
let stone = 0;
let bamboo = 0;
let rawMeat = 0;
let cookedMeat = 0;
let isFireActive = 0;
let isTrapBuilt = 0;
let completedDays = 0;
let txtReaderItemCount = 0;
let isRiverside = 1;
let campsite = 0;
let toggleBearAttack = 0;
let totalBattle = 0;
let hasAttackedBear = 1;
let endScreen = 1;
let finalSequence = 0;
let start = 1
//

//Hunger Ticker
let id = setInterval(function () {
  ticker++
  if (start == 1) console.log("hunger hasnt started")
  if (start == 0) {
    hunger--;
    if (hasAttackedBear == 6) {
      clearInterval(id);
    }
    if (hunger >= 100) {
      hunger = 100;
    }
    if (hunger >= 0) {
      document.getElementById("hunBar").style.width = hunger + '%';
      document.querySelector('.hunStatusBarText span').innerText = hunger;
    }
    if (hunger < 1) {
      hunger = 0;
      document.getElementById("hunBar").style.width = hunger + '%';
      document.querySelector('.hunStatusBarText span').innerText = hunger;
      let deathTimer = 0;
      let deathOn = setInterval(function () {
        deathTimer++
        if (deathTimer == 1) fillTextReader('You collapse and starve to death on day ' + completedDays + ', oh well... you dont get the cake....');
        if (deathTimer == 5) location.reload();
      }, 1000)
      clearInterval(id);
    }
  }
  //Function for switching to between rooms
  if (isRiverside == 1) {
    // document.getElementById("stone-collection").parentElement.classList.remove("availableActions");
    // document.getElementById("stone-collection").classList.add("hidden");
    // document.getElementById("bamboo-collection").parentElement.classList.remove("availableActions");
    // document.getElementById("bamboo-collection").classList.add("hidden");
    document.getElementById("strange-device").parentElement.classList.remove("availableActions")
    document.getElementById("strange-device").classList.add("hidden")
  }
  if (isRiverside == 0) {
    // document.getElementById("stone-collection").parentElement.classList.add("availableActions");
    // document.getElementById("stone-collection").classList.remove("hidden");
    // document.getElementById("bamboo-collection").parentElement.classList.add("availableActions");
    // document.getElementById("bamboo-collection").classList.remove("hidden");
    document.getElementById("strange-device").parentElement.classList.add("availableActions")
    document.getElementById("strange-device").classList.remove("hidden")
  }
  if (endScreen == 1) {
    document.getElementById("the-question").parentElement.classList.remove("availableActions");
    document.getElementById("the-question").classList.add("hidden");
    document.getElementById("the-answer").parentElement.classList.remove("availableActions");
    document.getElementById("the-answer").classList.add("hidden");
  }
  if (endScreen == 0) {
    document.getElementById("the-question").parentElement.classList.add("availableActions");
    document.getElementById("the-question").classList.remove("hidden");
    document.getElementById("the-answer").parentElement.classList.add("availableActions");
    document.getElementById("the-answer").classList.remove("hidden");
  }

  if (campsite == 1) {
    document.getElementById("wood-collection").parentElement.classList.remove("availableActions");
    document.getElementById("wood-collection").classList.add("hidden");
    document.getElementById("put-out-fire").parentElement.classList.remove("availableActions");
    document.getElementById("put-out-fire").classList.add("hidden");
    document.getElementById("check-trap").parentElement.classList.remove("availableActions");
    document.getElementById("check-trap").classList.add("hidden");
    document.getElementById("cook-raw-meat").parentElement.classList.remove("availableActions");
    document.getElementById("cook-raw-meat").classList.add("hidden");
    document.getElementById("building-options").classList.remove("optionButton");
    document.getElementById("building-options").classList.add("hidden");
    document.getElementById("bear-attack").parentElement.classList.remove("availableActions")
    document.getElementById("bear-attack").classList.add("hidden")
  }
  if (campsite == 0) {
    document.getElementById("wood-collection").parentElement.classList.add("availableActions");
    document.getElementById("wood-collection").classList.remove("hidden");
    document.getElementById("put-out-fire").parentElement.classList.add("availableActions");
    document.getElementById("put-out-fire").classList.remove("hidden");
    document.getElementById("check-trap").parentElement.classList.add("availableActions");
    document.getElementById("check-trap").classList.remove("hidden");
    document.getElementById("cook-raw-meat").parentElement.classList.add("availableActions");
    document.getElementById("cook-raw-meat").classList.remove("hidden");
    document.getElementById("building-options").classList.add("optionButton");
    document.getElementById("building-options").classList.remove("hidden");
    document.getElementById("bear-attack").parentElement.classList.remove("availableActions")
    document.getElementById("bear-attack").classList.add("hidden")

  }
  //Toggle Bear Attack
  if (toggleBearAttack == 0 && campsite == 0) {
    document.getElementById("bear-attack").parentElement.classList.remove("availableActions")
    document.getElementById("bear-attack").classList.add("hidden")
  }
  if (toggleBearAttack == 1 && campsite == 0) {
    document.getElementById("bear-attack").parentElement.classList.add("availableActions")
    document.getElementById("bear-attack").classList.remove("hidden")
  }
  //Check if riverside location is active
  if (isFireActive == 1 && isTrapBuilt == 1) {
    riverside = 1;
    document.getElementById("riverside").classList.remove("disabled")
  }
  //Check if fire is alive
  if (isFireActive == 1 && campsite == 0) {
    document.getElementById("put-out-fire").parentElement.classList.add("availableActions")
    document.getElementById("put-out-fire").classList.remove("hidden")
    document.getElementById("light-fire").classList.add("disabled");

  }
  if (isFireActive == 0 && campsite == 0) {
    document.getElementById("put-out-fire").parentElement.classList.remove("availableActions")
    document.getElementById("put-out-fire").classList.add("hidden")
    document.getElementById("cook-raw-meat").parentElement.classList.remove("availableActions")
    document.getElementById("cook-raw-meat").classList.add("hidden");

  }
  //Check if Fire is build and meat can be cooked
  if (isFireActive == 1 && rawMeat >= 1 && campsite == 0) {
    document.getElementById("cook-raw-meat").parentElement.classList.add("availableActions")
    document.getElementById("cook-raw-meat").classList.remove("hidden");
    document.getElementById("cook-raw-meat").classList.remove("disable");
  }
  //Check if you can click Light Fire
  if (isFireActive == 0 && wood > 4) {
    document.getElementById("light-fire").classList.remove("disabled");
  }
  //Check if you can click Build Trap
  if (isTrapBuilt == 0 && wood > 9) {
    document.getElementById("build-trap").classList.remove("disabled");
  }

  // Check if trap is set
  if (isTrapBuilt == 1) {
    document.getElementById("check-trap").classList.remove("disabled");
    document.getElementById("build-trap").classList.add("disabled");
  }
  if (isTrapBuilt == 0) {
    document.getElementById("check-trap").parentElement.classList.remove("availableActions")
    document.getElementById("check-trap").classList.add("hidden");
  }
  //Hunger bar system with eating system
  if (cookedMeat >= 1) {
    if (hunger >= 100) {
      console.log("Already 100%")
      hunger = 100;
    } else if (hunger < 100 && hunger > 0) {
      hunger = hunger + 15;
      cookedMeat = cookedMeat - 1
      document.querySelector("#rawMeatList span").innerText = rawMeat;
      document.querySelector("#cookedMeatList span").innerText = cookedMeat;
    }
  }
  if (hunger <= 1) {
    document.getElementById("game").classList.toggle("disabled");
    clearInterval(id)
  }
  if (finalSequence == 1) {
    finalSequence = 0;
    let time = 0;
    let timer = setInterval(function () {
      time++
      if (time == 1) fillTextReader("Congratulations... One final test awaits...");
      if (time == 3) fillTextReader("You have two options before you.");
      if (time == 5) fillTextReader("You can select the Answer to the Ultimate Question of Life, the Universe, and Everything");
      if (time == 6) fillTextReader("or.............");
      if (time == 8) fillTextReader("You can select the Ultimate Question");
      if (time == 10) fillTextReader("Pick wisely the answer will get you some cake...");
      if (time == 11) {
        clearInterval(timer);
      }
    }, 1000)
  }

  document.getElementById("hBar").style.width = health + '%';
  document.querySelector('.hStatusBarText span').innerText = health;

  console.log(ticker)
}, 1000);


// Buttons for Building and Actions
document.getElementById("building-options").onclick = function () {
  document.getElementById("actionBox").classList.add("hidden")
  document.getElementById("buildingBox").classList.remove("hidden")
  document.getElementById("action-header").innerText = "Building Options"
}

document.getElementById("action-options").onclick = function () {
  document.getElementById("actionBox").classList.remove("hidden")
  document.getElementById("buildingBox").classList.add("hidden")
  document.getElementById("action-header").innerText = "Available Actions"
}


// Disable by default

document.getElementById("build-trap").classList.toggle("disabled");
document.getElementById("light-fire").classList.toggle("disabled");


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
  document.getElementById("action-header").innerText = "Available Actions"
  document.getElementById("hunBar").style.width = hunger + '%';
  start = 0;
};

//Function for Days passing by
function daysPassing() {
  let count = 0;
  let id = setInterval(function () {
    completedDays = count++;
    if (hunger == 1) {
      clearInterval(id)
    }
    if (hunger > 1) {
      document.getElementById("daysGoneBy").innerText = completedDays += 1;
      if (count == 1) return fillTextReader(count + ' Day has passed since the crash...');
      fillTextReader(count + ' Days have passed since the crash..');

    }
    if (hasAttackedBear >= 5) {
      clearInterval(id);
    }
  }, 20000);
}

document.getElementById("the-question").onclick = function () {
  endScreen = 1;
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  let time = 0;
  let timer = setInterval(function () {
    time++
    if (time == 1) fillTextReader("You hear a strange voice 'Interesting, you have shown genuine signs of curiosty'");
    if (time == 4) fillTextReader("'As a reward I will let you live on'");
    if (time == 7) fillTextReader("SYS MSG: Warning!!! Simulation delete sequence aborted")
    if (time == 8) {
      fillTextReader("SYS MSG: Congratulations you beat the game.. you can restart it from the link in the footer.")
      clearInterval(timer)
    }
  }, 1000)


}
//
document.getElementById("the-answer").onclick = function () {
  endScreen = 1;
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  fillTextReader("");
  let time = 0;
  let timer = setInterval(function () {
    time++
    if (time == 1) fillTextReader("You hear a strange voice 'World simulation number 9512 ended with the same result of the previous simulations,'");
    if (time == 4) fillTextReader(" SYS MSG: Alert!!! Simulation delete sequence has started");
    if (time == 7) fillTextReader("Enjoy your cake!")
    if (time == 12) {
      location.reload();
      clearInterval(timer)
    }
  }, 1000)


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
    if (count == 5) return fillTextReader('You notice some branches around your location and the smell of cake.')
    if (count > 4) clearInterval();
  }, 1000);
}


function healthBar() {
  document.getElementById("hBar").style.width = health + '%';
  let id = setInterval(function () {
    if (bodyTemperature == 0) {
      health--;
      document.querySelector('.hStatusBarText span').innerText = health;
    }
    if (health == 0) {
      fillTextReader('You start to shiver and starve to death on ' + completedDays + 'QQ');
      location.reload()
      clearInterval(id)
    }
  }, 1000);
}


//Collect Wood
document.getElementById("wood-collection").onclick = function () {
  wood += Math.round(Math.random() * 10)
  document.getElementById("wood-collection").classList.toggle("disabled")
  let timeLeft = 1
  let id = setInterval(function () {
    timeLeft--
    if (timeLeft == 0) {
      document.getElementById("wood-collection").classList.toggle("disabled");
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
  if (wood % 5 == 0) {
    fillTextReader("You have collected " + wood + " pieces of wood.")
  }
};

//Collect Stone
// document.getElementById("stone-collection").onclick = function () {
//   rand = Math.round(Math.random() * 10)
//   stone += (rand * 2)
//   document.getElementById("stone-collection").classList.toggle("disabled")
//   let timeLeft = 6
//   let id = setInterval(function () {
//     timeLeft--
//     if (timeLeft == 0) {
//       document.getElementById("stone-collection").classList.toggle("disabled");
//       document.querySelector("#stone-collection span").innerText = '';
//       clearInterval(id)
//     } else if (timeLeft >= 0) {
//       document.querySelector("#stone-collection span").innerText = '(' + timeLeft + ')'
//     }
//   }, 1000)

//   if (stone > 0) {
//     console.log("Yes I got " + stone + ' pieces of stone!')
//     document.querySelector("#stoneList span").innerText = stone;
//   }
//   if (stone % 5 == 0) {
//     fillTextReader("You have collected " + stone + " pieces of stone.")
//   }
// };

//Collect Bamboo
// document.getElementById("bamboo-collection").onclick = function () {
//   bamboo += 1;
//   document.getElementById("bamboo-collection").classList.toggle("disabled")
//   let timeLeft = 1
//   let id = setInterval(function () {
//     timeLeft--
//     if (timeLeft == 0) {
//       document.getElementById("bamboo-collection").classList.toggle("disabled");
//       document.querySelector("#bamboo-collection span").innerText = '';
//       clearInterval(id)
//     } else if (timeLeft >= 0) {
//       document.querySelector("#bamboo-collection span").innerText = '(' + timeLeft + ')'
//     }
//   }, 1000)

//   if (bamboo > 0) {
//     console.log("Yes I got " + bamboo + ' pieces of bamboo!')
//     document.querySelector("#bambooList span").innerText = bamboo;
//   }
//   if (bamboo % 5 == 0) {
//     fillTextReader("You have collected " + bamboo + " pieces of bamboo.")
//   }
// };


// Light Fire

document.getElementById("light-fire").onclick = function () {
  if (wood > 4) {
    wood = wood - 5
    document.querySelector("#woodList span").innerText = wood;
    isFireActive = 1;
  }

  fillTextReader("You lit a fire, you never felt so warm before.")
}

//Put out fire
document.getElementById("put-out-fire").onclick = function () {
  isFireActive = 0;
  fillTextReader("You stomp out the fire.")
}

// Build Trap
document.getElementById("build-trap").onclick = function () {
  if (wood >= 10) {
    wood = wood - 10
    document.querySelector("#woodList span").innerText = wood;
    isTrapBuilt = 1
    document.getElementById("check-trap").parentElement.classList.add("availableActions")
    document.getElementById("check-trap").classList.remove("hidden")
    fillTextReader("You built a trap, you can check if you have caught anything!")
  }

}
// Check Trap
document.getElementById("check-trap").onclick = function () {
  isTrapBuilt = 0
  rawMeat += Math.round(Math.random() * 10)
  document.querySelector("#rawMeatList span").innerText = rawMeat;
  document.getElementById("check-trap").parentElement.classList.remove("availableActions")
  document.getElementById("check-trap").classList.add("hidden")
  fillTextReader("You hear the trap go off... You obtained " + rawMeat + " pieces of raw meat!")
}
// Cook Raw Meat
document.getElementById("cook-raw-meat").onclick = function () {
  if (rawMeat >= 1) {
    rawMeat--
    cookedMeat++
  }
}

// Bear Attack
document.getElementById("bear-attack").onclick = function () {
  if (hunger > 80) {
    document.getElementById("bear-attack").classList.toggle("disabled")
    let timeLeft = 5
    let id = setInterval(function () {
      timeLeft--
      if (timeLeft == 0) {
        document.getElementById("bear-attack").classList.toggle("disabled");
        document.querySelector("#bear-attack span").innerText = ''
        hasAttackedBear++
        clearInterval(id)
      } else if (timeLeft >= 0) {
        document.querySelector("#bear-attack span").innerText = '(' + timeLeft + ')'
      }
    }, 1000)
    let ranNum = Math.round(Math.random() * 20)
    if (ranNum > health) {
      health = 0
    }
    health -= ranNum
    if (hasAttackedBear == 1) {
      fillTextReader("You attacked a bear and you took " + ranNum + " amount of damage. You need to kill 4 more bears.")
    }
    if (hasAttackedBear == 2) {
      fillTextReader("You attacked a bear and you took " + ranNum + " amount of damage. You need to kill 3 more bears.")
      fillTextReader("You smell the cake, make sure to find the answer...")
    }
    if (hasAttackedBear == 3) {
      fillTextReader("You hear loud laughter, it is deafening.")
      fillTextReader("You attacked a bear and you took " + ranNum + " amount of damage. You need to kill 2 more bears.")
    }
    if (hasAttackedBear == 4) {
      fillTextReader("Good... Good... You are on your last attack. Just a little more. You can do it")
      fillTextReader("You attacked a bear and you took " + ranNum + " amount of damage. You need to kill 1 more bears.")
    }
    if (hasAttackedBear == 5) {
      campsite = 1;
      isRiverside = 1;
      endScreen = 0;
      finalSequence = 1
      document.getElementById("game-locations").classList.toggle("disabled");
      document.getElementById("game-screen").classList.toggle("disabled");
    }
  } else fillTextReader("You need to eat more meat! you cant be hungry while attacking the bear!")
}

document.getElementById("riverside").onclick = function () {
  document.getElementById("riverside").classList.remove("locationButton")
  document.getElementById("riverside").classList.add("activeLocationButton")
  document.getElementById("campsite").classList.remove("activeLocationButton")
  document.getElementById("campsite").classList.add("locationButton")
  isRiverside = 0;
  campsite = 1;
}
document.getElementById("campsite").onclick = function () {
  document.getElementById("riverside").classList.add("locationButton")
  document.getElementById("riverside").classList.remove("activeLocationButton")
  document.getElementById("campsite").classList.add("activeLocationButton")
  document.getElementById("campsite").classList.remove("locationButton")
  campsite = 0;
  isRiverside = 1;
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

// Text Reader
//
let i = 1;
const txtReaderList = document.querySelectorAll(".textReader li");

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

//modal
let modal = document.getElementById("myModal");

let btn = document.getElementById("strange-device");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  document.getElementById("strange-device").classList.toggle("disabled");
  fillTextReader("Warning!!! Th5/3-1-11-5/is/1/12-9-5")
  toggleBearAttack = 1
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}