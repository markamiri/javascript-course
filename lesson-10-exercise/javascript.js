function classcontain() {
  console.log(document.querySelector(".js-button").classList.contains("red"));
}

function toggle(btnclass) {
  const but = document.querySelector(`.${btnclass}`);
  if (!but.classList.contains("on")) {
    but.classList.add("on");
  } else {
    but.classList.remove("on");
  }
}
function toggle(btnclass) {
  const but = document.querySelector(`.${btnclass}`);
  if (!but.classList.contains("on")) {
    but.classList.add("on");
  } else {
    but.classList.remove("on");
  }
}
