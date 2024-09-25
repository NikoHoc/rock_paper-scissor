var playerScore = 0;
var compScore = 0;

function Pilihan(playerChoice, botChoice) {
  this.playerChoice = playerChoice;
  this.botChoice = botChoice;
}

function botChoices() {
  var choices = ["batu", "gunting", "kertas"];
  var randomIndex = Math.floor(Math.random() * 3);

  if (choices[randomIndex] == choices[0]) {
    document.getElementById("batuComp").style.backgroundColor = "yellow";
    document.getElementById("computer").src = "img/batu.png";
    document.getElementById("computer").style.width = "30%";
    document.getElementById("computer").style.height = "30%";
  } else if (choices[randomIndex] == choices[1]) {
    document.getElementById("guntingComp").style.backgroundColor = "yellow";
    document.getElementById("computer").src = "img/gunting.png";
    document.getElementById("computer").style.width = "30%";
    document.getElementById("computer").style.height = "30%";
  } else if (choices[randomIndex] == choices[2]) {
    document.getElementById("kertasComp").style.backgroundColor = "yellow";
    document.getElementById("computer").src = "img/kertas.png";
    document.getElementById("computer").style.width = "30%";
    document.getElementById("computer").style.height = "30%";
  }
  return choices[randomIndex];
}

function kertasClick() {
  var playerChoice = "kertas";
  document.getElementById("kertasPlayer").style.backgroundColor = "yellow";

  document.getElementById("player").src = "img/kertas.png";
  document.getElementById("player").style.width = "30%";
  document.getElementById("player").style.height = "30%";

  var botChoice = botChoices();
  let pilihan = new Pilihan(playerChoice, botChoice);
  playoff(playerChoice, botChoice);
}

function guntingClick() {
  var playerChoice = "gunting";
  document.getElementById("guntingPlayer").style.backgroundColor = "yellow";

  document.getElementById("player").src = "img/gunting.png";
  document.getElementById("player").style.width = "30%";
  document.getElementById("player").style.height = "30%";

  var botChoice = botChoices();
  let pilihan = new Pilihan(playerChoice, botChoice);
  playoff(playerChoice, botChoice);
}

function batuClick() {
  var playerChoice = "batu";
  document.getElementById("batuPlayer").style.backgroundColor = "yellow";

  document.getElementById("player").src = "img/batu.png";
  document.getElementById("player").style.width = "30%";
  document.getElementById("player").style.height = "30%";

  var botChoice = botChoices();
  let pilihan = new Pilihan(playerChoice, botChoice);
  playoff(playerChoice, botChoice);
}

function playoff(playerChoice, botChoice) {
  if (playerChoice == botChoice) {
    //Mengganti notifikasi seri
    document.getElementById("notification").innerHTML = "SERI!";
    document.getElementById("notification").style.textAlign = "center";
    document.getElementById("notification").style.color = "darkred";
    document.getElementById("notification").style.fontSize = "35px";
  } else if (
    (playerChoice == "kertas" && botChoice == "gunting") ||
    (playerChoice == "gunting" && botChoice == "batu") ||
    (playerChoice == "batu" && botChoice == "kertas")
  ) {
    //code jika computer menang
    compScore += 1;
    document.getElementById("compPoint").innerHTML = compScore;
    document.getElementById("pilihanComp").style.backgroundColor = "green";
    document.getElementById("pilihanPlayer").style.backgroundColor = "red";

    //Mengganti notifikasi computer menang
    document.getElementById("notification").innerHTML = "COMPUTER MENANG!";
    document.getElementById("notification").style.textAlign = "center";
    document.getElementById("notification").style.color = "darkred";
    document.getElementById("notification").style.fontSize = "35px";
  } else if (
    (playerChoice == "kertas" && botChoice == "batu") ||
    (playerChoice == "gunting" && botChoice == "kertas") ||
    (playerChoice == "batu" && botChoice == "gunting")
  ) {
    //code jika player menang
    playerScore += 1;
    document.getElementById("playerPoint").innerHTML = playerScore;
    document.getElementById("pilihanPlayer").style.backgroundColor = "green";
    document.getElementById("pilihanComp").style.backgroundColor = "red";

    //Menulis notifikasi player menang
    document.getElementById("notification").innerHTML = "PLAYER MENANG!";
    document.getElementById("notification").style.textAlign = "center";
    document.getElementById("notification").style.color = "darkred";
    document.getElementById("notification").style.fontSize = "35px";
  }

  timerTigaDetik();
}

let detik = 0; // Variabel untuk menyimpan jumlah detik

function timerTigaDetik() {
  const interval = setInterval(function () {
    detik++;
    console.log("Detik ke-" + detik);
    if (detik === 3) {
      clearInterval(interval); // Hentikan timer setelah 3 detik
      detik = 0;

      //RESET PILIHAN BOT DAN PLAYER
      playerChoice = "";
      botChoice = "";

      //RESET BACKGROUND PILIHAN PLAYER
      document.getElementById("kertasPlayer").style.backgroundColor = "white";
      document.getElementById("guntingPlayer").style.backgroundColor = "white";
      document.getElementById("batuPlayer").style.backgroundColor = "white";

      //RESET BACKGROUND PILIHAN BOT
      document.getElementById("batuComp").style.backgroundColor = "white";
      document.getElementById("guntingComp").style.backgroundColor = "white";
      document.getElementById("kertasComp").style.backgroundColor = "white";

      //RESET NOTIFIKASI VS
      document.getElementById("notification").innerHTML = "VS";
      document.getElementById("notification").style.textAlign = "center";
      document.getElementById("notification").style.color = "darkred";
      document.getElementById("notification").style.fontSize = "35px";

      //RESET PILIHAN COMPUTER & PLAYER
      document.getElementById("pilihanComp").style.backgroundColor = "white";
      document.getElementById("computer").src = "";
      document.getElementById("computer").style.width = "0px";
      document.getElementById("computer").style.height = "0px";

      document.getElementById("pilihanPlayer").style.backgroundColor = "white";
      document.getElementById("player").src = "";
      document.getElementById("player").style.width = "0px";
      document.getElementById("player").style.height = "0px";
    }
  }, 1000); // 1000 milidetik = 1 detik
}
