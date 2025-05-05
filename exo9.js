let secret = Math.floor(Math.random() * 100) + 1;
let essai = Number(prompt("Devine le nombre :"));

while (essai !== secret) {
  if (essai < secret) {
    console.log("Trop petit !");
  } else {
    console.log("Trop grand !");
  }
  essai = Number(prompt("Essaie encore :"));
}

console.log("Bravo !");
