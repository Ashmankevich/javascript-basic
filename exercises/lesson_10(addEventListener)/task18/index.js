let genres = document.getElementById("genres");
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.text);
alert(selectedOption.value);
let option = new Option("Классика", "classic", true, true);
genres.append(option);
