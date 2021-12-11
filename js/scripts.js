(() => {
  const navButton = document.querySelector("#nav_button");
  const navList = document.querySelector("#nav_list");

  navButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    navList.classList.toggle("nav_menu_list--showed");
  });
})();
