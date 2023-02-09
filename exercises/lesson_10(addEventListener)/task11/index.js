thumbs.addEventListener("click", handler);

function handler(event) {
  let target = event.target.closest("a");
  if (target) {
    largeImg.src = target.href;
    largeImg.alt = target.title;
    event.preventDefault();
  } else return;
}
