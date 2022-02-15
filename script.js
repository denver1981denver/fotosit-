const menuButton = document.querySelector(".button__burger"),
	menu = document.querySelector(".menu");



menuButton.addEventListener('click', () => {
  console.log('Кликнули по меню');
  menu.classList.toggle("is-open");
});
