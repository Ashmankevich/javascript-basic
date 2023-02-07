let tooltipElem;

document.addEventListener("mouseover", handler1);

document.addEventListener("mouseout", handler2);

function handler1(event) {
  let target = event.target;

  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";
}

function handler2() {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
}
