var seconds = 0;
var paused = true;
var scores = 0;
var faults = 0;
// var counter = 0;
var timer;
setInterval(time, 1000);
function random_() {
    const b = 'abcdefghigklmnopkrstuvwxyz';
    var c = Math.floor(Math.random() * b.length);
    printsth("hahaha", b[c]);
}
document.addEventListener('keydown', (event) => {
    var ddd = document.getElementById('hahaha');
    var name = event.key;
    if (!paused) {
        if (ddd.innerHTML == name) {
            random_();
            ddd.style.color = "green";
            scores += 1;
            printsth("Scoreboard", scores);
            printsth("logbox", "Correct!")
        } else {
            ddd.style.color = "red";
            faults += 1;
            printsth("faultboard", faults);
            printsth("logbox", "Wait!");
            // counter++;
        }
    }

}, false);

function time() {
    if (seconds >= 10) {
        result();
        paused = true;
    }
    if (!paused) {
        seconds = seconds + 1;
        timer = Math.floor(seconds / 60) + ":" + seconds % 60;
        printsth("lalala", timer);
    };
}
function reset() {
    paused = true;
    seconds = 0;
    scores = 0;
    printsth("psk", "start");
    printsth("Scoreboard", scores);
    faults = 0;
    printsth("faultboard", faults);
    printsth("lalala", "0:0");
    printsth("logbox", "")
    random_();
    // counter = 0;
}
function button_start() {
    if (!paused) {
        paused = true;
        printsth("psk", "start");

    } else {
        paused = false;
        printsth("psk", "pause");
    }
}
function printsth(idname, cont) {
    document.getElementById(idname).innerHTML = cont;
}
function result() {
    printsth("logbox", "You pass " + scores + " Charcters with " + faults +" faults!");
}