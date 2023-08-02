(function () {
  'use strict'
  const menu = document.querySelector(".header__menu");
  const buttonOpenMenu = document.querySelector(".header__menu-open");
  const buttonClosedMenu = document.querySelector(".header__menu-closed");

  buttonOpenMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.add("header__menu--open");
  });

  buttonClosedMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.remove("header__menu--open");
  });

})();