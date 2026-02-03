let secretNumber;
let attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  document.getElementById("tries").textContent = attempts;
  document.getElementById("result").textContent = "";
  document.getElementById("guess").value = "";
}

function checkGuess() {
  let guess = Number(document.getElementById("guess").value);
  attempts++;
  document.getElementById("tries").textContent = attempts;

  if (!guess || guess < 1 || guess > 10) {
    document.getElementById("result").textContent = "⚠️ من 1 إلى 10 فقط!";
    return;
  }

  if (guess === secretNumber) {
    document.getElementById("result").textContent = "🎉 تهانينا! رقمك صحيح!";
    document.getElementById("result").style.color = "#f5b7b1";
  } else if (guess < secretNumber) {
    document.getElementById("result").textContent = "⬆️ حاول رقم أكبر!";
    document.getElementById("result").style.color = "#fadbd8";
  } else {
    document.getElementById("result").textContent = "⬇️ حاول رقم أصغر!";
    document.getElementById("result").style.color = "#fadbd8";
  }
}

function resetGame() {
  startGame();
}

// بدء اللعبة عند تحميل الصفحة
startGame();
