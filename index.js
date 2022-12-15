// Your code here
const dodgerLeft = document.getElementById("dodger");
const dodgerRight = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodgerLeft.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodgerLeft.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (x) {
    if (x.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const rightNumbers = dodgerRight.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if(left < 360){
        dodgerRight.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(y){
    if(y.key === "ArrowRight"){
        moveDodgerRight();
    }
})