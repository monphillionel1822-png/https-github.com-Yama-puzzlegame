// Pilih angka rahasia
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guess = document.getElementById("guess").value;
  attempts++;

  if (guess == secretNumber) {
    document.getElementById("result").innerText = "🎉 Benar! Angkanya adalah " + secretNumber;
    document.getElementById("result").style.color = "green";
  } else if (guess < secretNumber) {
    document.getElementById("result").innerText = "Terlalu kecil! Coba lagi.";
    document.getElementById("result").style.color = "red";
  } else {
    document.getElementById("result").innerText = "Terlalu besar! Coba lagi.";
    document.getElementById("result").style.color = "red";
  }

  document.getElementById("attempts").innerText = "Percobaan: " + attempts;
}
