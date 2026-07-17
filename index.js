let allColors = [];

function colorDOM(color) {
  return `
    <div>
      <div class="color" style="background:${color.hex.value}"></div>
      <div class="hex-color">${color.hex.value}</div>
    </div>
  `;
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
  let html = "";
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then((res) => res.json())
    .then((data) => {
      allColors = data.colors;
      allColors.forEach((color) => {
        html += colorDOM(color);
      });
      document.querySelector("#color-section-container").innerHTML = html;
    });
}
