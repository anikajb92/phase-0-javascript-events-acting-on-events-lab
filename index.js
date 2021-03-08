// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") { // listen for left key click
    moveDodgerLeft() //call on function to move left
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") { // listen for right key click
    moveDodgerRight() //call on function to move right
  }
})