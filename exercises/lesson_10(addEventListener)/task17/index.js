arrowTop.addEventListener("click", handler1);

function handler1() {
  window.scrollTo(scrollX, 0);
}

window.addEventListener("scroll", handler2);

function handler2() {
  arrowTop.hidden = scrollY < document.documentElement.clientHeight;
}
