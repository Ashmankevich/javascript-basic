/*
Your task is to return:

true if all of the following continents / geographic zones will be represented
by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
*/

var list1 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];

function allContinents(list) {
  const developerForCheck = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  let developerOfList1 = list.map((item) => item.continent);
  let result;
  for (let i = 0; i < developerForCheck.length; i++) {
    developerOfList1.includes(developerForCheck[i])
      ? (result = true)
      : (result = false);
  }
  return result;
}
allContinents(list1);
