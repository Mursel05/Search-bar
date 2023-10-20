const body = document.querySelector("body");
const section = document.querySelector(".section");
const cancel = document.querySelector(".cancel-open2");

body.addEventListener("click", function () {
  if (document.activeElement.id == "input") {
    section.classList.add("open");
    section.classList.remove("close");
    cancel.classList.replace("cancel2", "cancel1");
  } else {
    section.classList.remove("open");
    section.classList.add("close");
    cancel.classList.replace("cancel1", "cancel2");
  }
});

