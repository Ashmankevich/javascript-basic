const root = document.getElementById("root");
const container = document.createElement("div");
container.className = "container";
root.append(container);

const mainItems = document.createElement("div");
mainItems.className = "wrapper main-items";
container.append(mainItems);

const btnDeleteAll = document.createElement("button");
btnDeleteAll.className = "btn delete-all";
btnDeleteAll.textContent = "Delete All";
mainItems.append(btnDeleteAll);

const btnDeleteLast = document.createElement("button");
btnDeleteLast.className = "btn delete-last";
btnDeleteLast.textContent = "Delete Last";
mainItems.append(btnDeleteLast);

const inputEnterTODO = document.createElement("input");
inputEnterTODO.className = "input__enter-todo";
inputEnterTODO.setAttribute("placeholder", "Enter todo...");
mainItems.append(inputEnterTODO);

const btnAdd = document.createElement("button");
btnAdd.className = "btn add";
btnAdd.textContent = "Add";
mainItems.append(btnAdd);

const additionalItems = document.createElement("div");
additionalItems.className = "wrapper addition-items";
container.append(additionalItems);

const btnShowCompleted = document.createElement("button");
btnShowCompleted.className = "btn show-completed";
btnShowCompleted.textContent = "Show Completed";
additionalItems.append(btnShowCompleted);

const btnShowAll = document.createElement("button");
btnShowAll.className = "btn show-all";
btnShowAll.textContent = "Show All";
additionalItems.append(btnShowAll);

const inputSearchTODO = document.createElement("input");
inputSearchTODO.className = "input__search-todo";
inputSearchTODO.setAttribute("placeholder", "Search...");
additionalItems.append(inputSearchTODO);

const divAllCount = document.createElement("div");
divAllCount.className = "wrapper__all-count";
additionalItems.append(divAllCount);
const allCountName = document.createElement("p");
allCountName.textContent = "All:";
divAllCount.append(allCountName);
const allCount = document.createElement("p");
allCount.textContent = "0";
divAllCount.append(allCount);

const completed = document.createElement("div");
completed.className = "wrapper__completed";
additionalItems.append(completed);
const allCompletedName = document.createElement("p");
allCompletedName.textContent = "Completed:";
completed.append(allCompletedName);
const allCompleted = document.createElement("p");
allCompleted.textContent = "2";
completed.append(allCompleted);
