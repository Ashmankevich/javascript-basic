function showCover() {
  let coverDiv = document.createElement("div");
  coverDiv.id = "cover-div";
  document.body.style.overflowY = "hidden";
  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById("cover-div").remove();
  document.body.style.overflowY = "";
}

function showPrompt(text, callback) {
  showCover();
  let container = document.getElementById("prompt-form-container");
  let form = document.getElementById("prompt-form");
  let message = document.getElementById("prompt-message");
  message.innerHTML = text;
  form.elements.textInput.value = "";

  function complete(value) {
    hideCover();
    container.style.display = "none";
    callback(value);
  }

  form.addEventListener("submit", handlerForm);
  function handlerForm() {
    let value = form.elements.textInput.value;
    if (!value == "") {
      complete(value);
    } else return false;
  }

  form.cancel.addEventListener("click", handlerCancel);
  function handlerCancel() {
    complete(null);
  }

  document.addEventListener("keydown", handlerKey);
  function handlerKey(e) {
    e.key == "Escape" ? complete(null) : null;
  }

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function (e) {
    if (e.key == "Tab" && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == "Tab" && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = "block";
  form.elements.textInput.focus();
}

let modalBtn = document.getElementById("show-button");
modalBtn.addEventListener("click", handler);
function handler() {
  showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert("Вы ввели: " + value);
  });
}
