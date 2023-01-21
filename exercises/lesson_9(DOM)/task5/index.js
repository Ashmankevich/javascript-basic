let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

let div = document.createElement("div");
div.setAttribute("id", "container");
document.body.prepend(div);

let container = document.getElementById("container");

function createTree(container, data) {
  container.append(createDOM(data));

  function createDOM(data) {
    let ul = document.createElement("ul");
    for (let key in data) {
      let li = document.createElement("li");
      li.innerHTML = key;

      if (typeof data[key] == "object") {
        let childrenUl = createDOM(data[key]);
        li.append(childrenUl);
      }

      ul.append(li);
    }
    return ul;
  }
}
createTree(container, data);
