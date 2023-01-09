import { menu } from "./list";
const d = new Date();
var day = "";

switch (d.getDay()) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "moday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
}

const menuDiv = document.querySelector("#menu");
display(menu);

document.querySelector("#all").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  display(menu);
});
document.querySelector("#beef").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.Skill === "beef");
  display(filtered);
});
document.querySelector("#chicken").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.Skill === "chicken");
  display(filtered);
});
document.querySelector("#vegetarian").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.Skill === "none");
  display(filtered);
});

document.querySelector("#theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

function display(array) {
  array.forEach((item) => {
    if (item.sales.includes(day)) item.elixer = item.elixer / 2;
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-object">
                <h2>${item.name}</h2>
                <img class="menu-image" src="${item.image}">
                <p class="menu-object-price">${item.elixer}</p>
                <p class="menu-object-text">${item.description}</p>
            </div>`
    );
    if (item.sales.includes(day)) item.elixer = item.elixer * 2;
  });
}
