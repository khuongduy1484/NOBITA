function nen() {
 let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + "px";
}
function xuong() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + "px";
}
function sangtrai() {
    let element = document.getElementById("nobita");
    element.style.left =parseInt(element.style.left) - 5 + "px";
}
function sangphai() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + "px";
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            sangtrai();
            break;
        case 38:
            nen();
        break;
        case 39 :
            sangphai();
        break;
        case 40:
            xuong();
        break;
    }
}
function docready() {
    window.addEventListener('keydown',moveSelection);
}