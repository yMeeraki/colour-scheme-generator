fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5")
  .then((res) => res.json())
  .then((data) => console.log(data));

const colorCountainer = document.querySelector("#color-section-container");

function colorDOM() {
  return `<div>
          <div class="color red"></div>
          <div class="hex-color">#ffff</div>
        </div>`;
}

document
  .querySelector("#select-color")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    gettingColorsAPI();
  });

function gettingColorsAPI() {
  const color = document.querySelector("#color").value.slice(1);
  const mode = document.querySelector("#mode-select").value;
  console.log(color, mode);
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`);
}
