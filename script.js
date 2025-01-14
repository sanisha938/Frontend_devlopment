// Toggle Left Menu
function toggleLeftMenu() {
  const leftMenu = document.getElementById("left-menu");
  leftMenu.classList.toggle("collapsed");
}

// Toggle Dark/Light Theme
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Adjust Page Width for Responsiveness
function adjustPageWidth() {
  const width = window.innerWidth;
  const container = document.querySelector(".container");

  if (width <= 600) {
    container.style.transform = "scale(0.5)";
    container.style.transformOrigin = "top left";
  } else if (width > 600 && width <= 700) {
    container.style.transform = "scale(0.75)";
    container.style.transformOrigin = "top left";
  } else if (width > 700 && width <= 767) {
    container.style.transform = "scale(0.8)";
    container.style.transformOrigin = "top left";
  } else if (width > 992 && width <= 1600) {
    container.style.transform = "scale(0.9)";
    container.style.transformOrigin = "top left";
  } else {
    container.style.transform = "scale(1)";
    container.style.transformOrigin = "top left";
  }
}

// Add Event Listeners
window.addEventListener("resize", adjustPageWidth);
window.addEventListener("load", adjustPageWidth);
