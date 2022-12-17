/*
You will be given an array of objects representing data about developers
who have signed up to attend the next web development meetup that you are organising.
Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing
any of the three programming languages is ** at most 2 times higher than the number of developers
representing any of the remaining programming languages**; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher
than the number of Python developers (1). It can't be more than 2 times higher to be
regarded as language-diverse.
*/

var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

function isLanguageDiverse(list) {
  let javascript = [];
  let ruby = [];
  let python = [];
  let language = list.map((item) => item.language);

  for (let i = 0; i < language.length; i++) {
    if (language[i] == "JavaScript") javascript.push(language[i]);
    else if (language[i] == "Ruby") ruby.push(language[i]);
    else if (language[i] == "Python") python.push(language[i]);
  }

  let jsCountVsRubyCount = javascript.length / ruby.length;
  let jsCountVsPythonCount = javascript.length / python.length;

  let rubyCountVsJsCount = ruby.length / javascript.length;
  let rubyCountVsPythonCount = ruby.length / python.length;

  let pythonCountVsRubyCount = python.length / ruby.length;
  let pythonCountVsJsCount = python.length / javascript.length;

  let arrCount = [
    Math.ceil(jsCountVsRubyCount),
    Math.ceil(jsCountVsPythonCount),
    Math.ceil(rubyCountVsJsCount),
    Math.ceil(rubyCountVsPythonCount),
    Math.ceil(pythonCountVsRubyCount),
    Math.ceil(pythonCountVsJsCount),
  ];

  let result;

  arrCount.includes(3) ? (result = false) : (result = true);

  return result;
}
checkDevelopers(list1);
