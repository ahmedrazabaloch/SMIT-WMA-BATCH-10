var randomNumber = Math.floor(Math.random() * 2);

var flip = randomNumber;

if (flip === 0) {
  alert("Head Win");
} else if (flip === 1) {
  alert("Tail Win");
}

// var heads = 0;
// var tails = 0;

// var randomNumber = Math.floor(Math.random() * 2);

// var flip = randomNumber;
// if (flip) {
//   heads++;
// } else {
//   tails++;
// }

// function updateCoins() {
//   document.getElementById("#head-count").textContent = "heads:${heads}";
//   document.getElementById("#tail-count").textContent = "tails:${heads}";
// }
