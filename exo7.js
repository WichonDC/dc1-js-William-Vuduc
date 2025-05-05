let mots = ["chat", "éléphant", "lion"];
let long = mots[0];

if (mots[1].length > long.length) {
  long = mots[1];
}
if (mots[2].length > long.length) {
  long = mots[2];
}

console.log("Mot le plus long : " + long);
