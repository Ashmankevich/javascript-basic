let tooltip;

document.addEventListener("mouseover", handler1);

document.addEventListener("mouseout", handler2);

function handler1(event) {
  let anchorElem = event.target.closest("[data-tooltip]");

  if (anchorElem) {
    let tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = anchorElem.dataset.tooltip;
    document.body.append(tooltipElem);

    let coords = anchorElem.getBoundingClientRect();

    let left =
      coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + anchorElem.offsetHeight + 5;
    }

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";

    tooltip = tooltipElem;
  } else return;
}

function handler2() {
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }
}
