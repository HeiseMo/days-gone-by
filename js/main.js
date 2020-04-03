document.getElementById("switch").onclick = function () {
    let switchMode = document.getElementById("switch").innerHTML
    if (switchMode == '_darkMode') {
        lightsOff()
    } else if (switchMode == '_lightMode') {
        lightsOn()
    }
};

function lightsOn() {
    document.getElementById("switch").innerHTML = "_darkMode";
    document.getElementById("mode").className = 'lightbg'
};

function lightsOff() {
    document.getElementById("switch").innerHTML = "_lightMode";
    document.getElementById("mode").className = 'darkbg'
};