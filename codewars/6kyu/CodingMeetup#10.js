var list1 = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "Evil.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];

function createUserName(list) {
  list.forEach(
    (item) =>
      (item.username =
        item.firstName.toLowerCase() +
        item.lastName[0].toLowerCase() +
        (new Date().getFullYear() - item.age))
  );

  let userData = [];
  for (let i = 0; i < list.length; i++) userData.push(list[i]);

  return userData;
}
createUserName(list1);
