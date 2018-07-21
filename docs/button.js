var activeClass = "pending";
var el = document.getElementById("plotly-button");

$("#plotly-button").one('click', function toggle(e) {
  if (e.keyCode && e.keyCode !== 69) return;
  el.classList.toggle(activeClass);
}

el.addEventListener("click", toggle);
document.addEventListener("keydown", toggle, false);
