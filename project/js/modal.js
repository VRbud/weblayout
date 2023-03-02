const body = document.querySelector("body"),
  modalOverlay = document.createElement("div"),
  modalWindow = document.createElement("div"),
  modalHeading = document.createElement("h2"),
  modalExit = document.createElement("button"),
  modalSpanTop = document.createElement("span"),
  modalRegLink = document.createElement("a"),
  modalForm = document.createElement("form"),
  modalInpLogin = document.createElement("input"),
  modalInpPass = document.createElement("input"),
  modalBtnLogin = document.createElement("button"),
  modalSpanBottom = document.createElement("span"),
  modalSocialsList = document.createElement("ul"),
  modalSocialsItem1 = document.createElement("li"),
  modalSocialsItem2 = document.createElement("li"),
  modalSocialsItem3 = document.createElement("li"),
  modalSocialsLink1 = document.createElement("a"),
  modalSocialsLink2 = document.createElement("a"),
  modalSocialsLink3 = document.createElement("a"),
  openModal = document.querySelectorAll(".header__login");

modalBtnLogin.classList.add("form__btn", "btn", "reset-btn", "modal__btn");
modalBtnLogin.setAttribute("type", "submit");
modalBtnLogin.innerText = "Войти";
modalForm.setAttribute('action', 'POST');
modalInpLogin.setAttribute("placeholder", "Логин");
modalInpPass.setAttribute("placeholder", "Пароль");
modalInpPass.setAttribute("type", "password");
modalSocialsLink1.classList.add("modal__fb");
modalSocialsLink2.classList.add("modal__vk");
modalSocialsLink3.classList.add("modal__goog");

modalWindow.classList.add(
  "modal__window",
  "animate__animated",
  "animate__backInDown"
);
modalHeading.classList.add("modal__heading");
modalExit.classList.add("modal__close", "reset-btn");
modalSpanTop.classList.add("modal__span");
modalRegLink.classList.add("modal__regist");
modalRegLink.setAttribute('tabindex', '0');
modalForm.classList.add("modal__form");
modalInpLogin.classList.add("form__input", "modal__input");
modalInpPass.classList.add("form__input", "modal__input");
modalSpanBottom.classList.add("modal__span");
modalSocialsList.classList.add("reset-list", "modal__list");
modalSocialsItem1.classList.add("modal__list-item");
modalSocialsItem2.classList.add("modal__list-item");
modalSocialsItem3.classList.add("modal__list-item");

modalForm.append(modalInpLogin);
modalForm.append(modalInpPass);
modalForm.append(modalBtnLogin);
modalSocialsList.append(modalSocialsItem1);
modalSocialsList.append(modalSocialsItem2);
modalSocialsList.append(modalSocialsItem3);
modalSocialsItem1.append(modalSocialsLink1);
modalSocialsItem2.append(modalSocialsLink2);
modalSocialsItem3.append(modalSocialsLink3);

modalHeading.innerText = "Вход";
modalSpanTop.innerText = "Если у вас ещё нет аккаунта, ";
modalRegLink.innerText = "зарегестрируйтесь";
modalSpanBottom.innerText = "Войти с помощью:";

modalWindow.append(modalHeading);
modalWindow.append(modalExit);
modalWindow.append(modalSpanTop);
modalSpanTop.append(modalRegLink);
modalWindow.append(modalForm);
modalWindow.append(modalSpanBottom);
modalWindow.append(modalSocialsList);




openModal.forEach((el) => {
  el.preventDefault;
  el.addEventListener("click", function (event) {
    event.preventDefault;
    modalOverlay.classList.add("modal", "animate__animated", "animate__fadeIn");
    body.style.overflow = "hidden";
    body.append(modalOverlay);
    modalOverlay.append(modalWindow);
  });
});

modalExit.addEventListener('click', () => {
  body.removeAttribute('style');
  modalWindow.classList.remove("animate__backInDown");
  modalWindow.classList.add("animate__backOutDown");
  modalOverlay.classList.remove("animate__fadeIn");
  modalOverlay.classList.add("animate__fadeOut");
  setTimeout(() => {
    modalOverlay.classList.remove("animate__fadeOut");
    modalOverlay.classList.remove("animate__fadeIn");
    modalWindow.classList.add("animate__backInDown");
  modalWindow.classList.remove("animate__backOutDown");
    body.removeChild(modalOverlay)
  }, 1000)
})


