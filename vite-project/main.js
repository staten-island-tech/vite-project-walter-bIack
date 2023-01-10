import { menu } from "./list";
const menuDiv = document.querySelector("#menu");
display(menu);

document.querySelector("#all").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  display(menu);
});
document.querySelector("#Fatherless").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.Skill === "Fatherless");
  display(filtered);
});
document.querySelector("#Mid").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.Skill === "Mid");
  display(filtered);
});
document.querySelector("#Skill").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.Skill === "Skill");
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
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-object">
                <h2>${item.name}</h2>
                <img class="menu-image" src="${item.image}">
                <p class="menu-object-price">${item.elixer} Elixir</p>
                <p class="menu-object-text">${item.description}</p>
            </div>`
    );
  });
}
