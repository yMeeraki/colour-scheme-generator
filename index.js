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
