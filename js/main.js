///Footer Functions

//Restart Game
document.getElementById("restartGame").onclick = function () {
    location.reload();
};

//Github
document.getElementById("github").onclick = function () {
    window.open('https://github.com/HeiseMo/days-gone-by');
};


//Switch
document.getElementById("switch").onclick = function () {
    let switchMode = document.getElementById("switch").innerHTML
    if (switchMode == '_darkMode') {
        lightsOff()
    } else if (switchMode == '_lightMode') {
        lightsOn()
    }
};

//Share
document.getElementById("share").onclick = function () {
    //Going to work this in later stage
};


function lightsOn() {
    document.getElementById("switch").innerHTML = "_darkMode";
    document.getElementById("mode").className = 'lightbg'
};

function lightsOff() {
    document.getElementById("switch").innerHTML = "_lightMode";
    document.getElementById("mode").className = 'darkbg'
};
/// Footer Functions End
