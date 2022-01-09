let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
    if(count > 0) {
        document.getElementById("count").style.color = "green";
    }
    else if(count == 0) {
        document.getElementById("count").style.color = "black";
    }
}
function decrease() {
    count--;
    document.getElementById("count").innerText = count;
    if(count < 0) {
        document.getElementById("count").style.color = "red";
    }
    else if(count == 0) {
        document.getElementById("count").style.color = "black";
    }
}
function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
    document.getElementById("count").style.color = "black";
}