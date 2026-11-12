let isDarkMode = false;

function switchTheme() {
  const body = document.body;
  const heading = document.getElementById("heading");
  const button = document.getElementById("toggleBtn");

  if (isDarkMode === false) {
  
    body.style.backgroundColor = "#121212";
    body.style.color = "#ffffff";
    heading.innerText = "Dark Mode";
    button.innerText = "Switch to Light Mode";
    isDarkMode = true;
  } else {
    
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    heading.innerText = "Light Mode";
    button.innerText = "Switch to Dark Mode";
    isDarkMode = false;
  }
}