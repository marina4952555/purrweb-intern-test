(function () {
  'use strict'
  const cookiesWindow = document.querySelector(".cookies");
  const buttonAccept = document.querySelector(".cookies__button-accept");
  const buttonDecline = document.querySelector(".cookies__button-decline");
  const buttonClosed = document.querySelector(".cookies__button-closed");

  buttonAccept.addEventListener("click", function(e){
    closedCookies(e);
  });

  buttonDecline.addEventListener("click", function(e){
    closedCookies(e);
  });

  buttonClosed.addEventListener("click", function(e){
    closedCookies(e);
  });

  const closedCookies = (e) => {
    e.preventDefault();
    cookiesWindow.classList.add("cookies--closed");
  }

})();