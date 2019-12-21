function myFunction() {
  var numberGenerator = document.getElementById("bingo-number")
  numberGenerator.innerHTML = Math.floor((Math.random() * 90) + 1);
}