/*Your task is to return:

true if developers from all of the following age groups have signed up:
teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties,
centenarian (at least 100 years young).
false otherwise.
Your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.
*/

var list1 = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
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
    firstName: "Noa",
    lastName: "A.",
    country: "Israel",
    continent: "Asia",
    age: 40,
    language: "Ruby",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 59,
    language: "C",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 60,
    language: "C",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 75,
    language: "Python",
  },
  {
    firstName: "Chloe",
    lastName: "K.",
    country: "Guernsey",
    continent: "Europe",
    age: 88,
    language: "Ruby",
  },
  {
    firstName: "Viktoria",
    lastName: "W.",
    country: "Bulgaria",
    continent: "Europe",
    age: 98,
    language: "PHP",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
  },
];

function isAgeDiverse(list) {
  let result;
  let gropus = [
    (teen = []),
    (twenties = []),
    (thirties = []),
    (forties = []),
    (fifties = []),
    (sixties = []),
    (seventies = []),
    (eighties = []),
    (nineties = []),
    (centenarian = []),
  ];
  let ageOfDevelopers = list.map((item) => item.age);
  for (let i = 0; i < ageOfDevelopers.length; i++) {
    if (ageOfDevelopers[i] <= 19) {
      teen.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 20 && ageOfDevelopers[i] <= 29) {
      twenties.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 30 && ageOfDevelopers[i] <= 39) {
      thirties.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 40 && ageOfDevelopers[i] <= 49) {
      forties.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 50 && ageOfDevelopers[i] <= 59) {
      fifties.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 60 && ageOfDevelopers[i] <= 69) {
      sixties.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 70 && ageOfDevelopers[i] <= 79) {
      seventies.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 80 && ageOfDevelopers[i] <= 89) {
      eighties.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 90 && ageOfDevelopers[i] <= 99) {
      nineties.push(ageOfDevelopers[i]);
    } else if (ageOfDevelopers[i] >= 100 && ageOfDevelopers[i] <= 199) {
      centenarian.push(ageOfDevelopers[i]);
    }
  }
  for (let j = 0; j < gropus.length; j++) {
    gropus[j].length != 0 ? (result = true) : (result = false);
    if (result == false) break;
  }
  return result;
}
isAgeDiverse(list1);
