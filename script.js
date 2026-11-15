let isDarkMode = false;

function switchTheme() {
  const body = document.body;
  const navbar = document.getElementById("navbar");
  const button = document.getElementById("toggleBtn");
  const footer = document.querySelector(".footer");
  const modeText = document.getElementById("modeText");
  const cards = document.querySelectorAll(".card");

  if (isDarkMode === false) {
    body.style.backgroundColor = "#1b1714";
    body.style.color = "#f5efe8";
    navbar.style.backgroundColor = "#1b1714";
    navbar.style.borderColor = "#332b26";
    footer.style.borderColor = "#332b26";
    button.style.backgroundColor = "#29231f";
    button.style.borderColor = "#3d342e";
    button.innerText = "☀️";
    modeText.innerText = "Evening Dark Mode";

    cards.forEach(function(card) {
      card.style.backgroundColor = "#241f1b";
      card.style.borderColor = "#362e29";
    });

    isDarkMode = true;
  } else {
    body.style.backgroundColor = "#fdf8f2";
    body.style.color = "#2c221e";
    navbar.style.backgroundColor = "#fdf8f2";
    navbar.style.borderColor = "#e8dfd5";
    footer.style.borderColor = "#e8dfd5";
    button.style.backgroundColor = "#ffffff";
    button.style.borderColor = "#dfd4c8";
    button.innerText = "🌙";
    modeText.innerText = "Morning Light Mode";

    cards.forEach(function(card) {
      card.style.backgroundColor = "#ffffff";
      card.style.borderColor = "#e8dfd5";
    });

    isDarkMode = false;
  }
}
