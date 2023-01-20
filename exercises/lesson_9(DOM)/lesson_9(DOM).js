/*
Дочерние элементы в DOM
важность: 5
Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?
*/

<html>
  <body>
    <div>Пользователи:</div>
    <ul>
      <li>Джон</li>
      <li>Пит</li>
    </ul>
    <script>
      alert(document.body.firstElementChild);
      alert(document.body.lastElementChild);
      alert(document.body.lastElementChild.lastElementChild);
    </script>
  </body>
</html>;

/*
Получите атрибут
важность: 5
Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    /your code
  </script>
</body>
</html>
*/

<html>
  <body>
    <div data-widget-name="menu">Choose the genre</div>

    <script>
      for(let div of document.querySelectorAll(('[data-widget-name]')))
      {alert(elem.getAttribute("data-widget-name"))}
    </script>
  </body>
</html>;
