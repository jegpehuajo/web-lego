const btn1 = document.querySelector("#btn1");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__content--close");

btn1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

close.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});