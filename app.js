const html = document.documentElement;
const modeToggle = document.getElementById("dark-btn");

modeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    modeToggle.innerHTML = `LIGHT <i class="fa-regular fa-sun"></i>`;
  } else {
    modeToggle.innerHTML = `DARK <i class="fa-solid fa-moon"></i>`;
  }
});
