(function () {
  'use strict'
  const buttonContactList = document.querySelectorAll(".button-contact");
  const form = document.querySelector(".form__box");
  const formContainer = document.querySelector(".form__container");
  const formAnswer = document.querySelector(".form__answer");
  const buttonFormClosed = document.querySelector(".form__closed");
  const buttonAnswerClosed = document.querySelector(".form__answer-closed");
  const name = document.getElementById("name");
  const errorTextName = document.querySelector(".form__error-text--name");
  const email = document.getElementById("email");
  const errorTextEmail = document.querySelector(".form__error-text--email");
  const phone = document.getElementById("phone");
  const errorTextPhone = document.querySelector(".form__error-text--phone");
  const formBox = document.querySelector(".form");
  const INPUT_ERROR_CLASS = ("form__input--error");
  const TEXT_ERROR_CLASS = ("form__error-text--show");

  for (let i = 0; i < buttonContactList.length; i++) {
    buttonContactList[i].addEventListener("click", function(e){
      e.preventDefault();
      formBox.classList.add("form--open");
    });    
  }

  buttonFormClosed.addEventListener("click", function(e){
    e.preventDefault();
    formBox.classList.remove("form--open");
  });

  buttonAnswerClosed.addEventListener("click", function(e){
    e.preventDefault();
    formBox.classList.remove("form--open");
    formContainer.classList.remove("form__container--hide");
      formAnswer.classList.remove("form__answer--show")
  });

  form.addEventListener("submit", function(e){
    console.log('click')
    e.preventDefault();
    if (!name.value) { 
      name.classList.add(INPUT_ERROR_CLASS);
      errorTextName.classList.add(TEXT_ERROR_CLASS);
    } else { 
      name.classList.remove(INPUT_ERROR_CLASS);
      errorTextName.classList.remove(TEXT_ERROR_CLASS);
    }
    if (!email.value) { 
      email.classList.add(INPUT_ERROR_CLASS);
      errorTextEmail.classList.add(TEXT_ERROR_CLASS);
    } else { 
      email.classList.remove(INPUT_ERROR_CLASS);
      errorTextEmail.classList.remove(TEXT_ERROR_CLASS);
    }
    if (!phone.value) { 
      phone.classList.add(INPUT_ERROR_CLASS);
      errorTextPhone.classList.add(TEXT_ERROR_CLASS);
    } else { 
      phone.classList.remove(INPUT_ERROR_CLASS);
      errorTextPhone.classList.remove(TEXT_ERROR_CLASS);
    }
    if (name.value && email.value && phone.value) {
      formContainer.classList.add("form__container--hide");
      formAnswer.classList.add("form__answer--show")
      console.log(name.value);
      console.log(email.value);
      console.log(phone.value);
    }
  });
})();