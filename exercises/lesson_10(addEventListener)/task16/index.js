function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener("keydown", handler1);

  function handler1(event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  }

  document.addEventListener("keyup", handler2);
  function handler2(event) {
    pressed.delete(event.code);
  }
}

runOnKeys(() => alert("Привет!"), "KeyQ", "KeyW");
