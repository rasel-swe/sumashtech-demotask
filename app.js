const searchContainer = document.querySelector(".form");
const inputField = searchContainer.querySelector(".search-bar");
const searchBtn = searchContainer.querySelector(".button");
const closeWindow = searchContainer.querySelector(".close-window");
const closeBtn = closeWindow.querySelector(".close-btn");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.add("active");
  inputField.focus();
});

closeBtn.addEventListener("click", () => {
  searchContainer.classList.remove("active");
});

inputField.addEventListener("focus", () => {
  closeWindow.classList.add("active");
});

inputField.addEventListener("blur", () => {
  closeWindow.classList.remove("active");
});


function toggleMenu() {
  var menuIcon = document.querySelector('.menu-icon');
  var menu = document.querySelector('section');

  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
}
