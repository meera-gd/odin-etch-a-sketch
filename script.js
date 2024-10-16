function drawGrid(size) {
  const container = document.querySelector(".container");
  container.textContent = "";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.minWidth = 500 / size + "px";
    square.style.minHeight = 500 / size + "px";
    square.addEventListener("mouseenter", (e) => {
      e.target.classList.add("highlighted");
    });
    container.appendChild(square);
  }
}

const sizeBtn = document.querySelector("#sizer");
sizeBtn.addEventListener("click", () => {
  let size = +prompt("How many squares wide should the grid be (max 100)?");
  size = Math.min(100, size);
  drawGrid(size);
});

drawGrid(16);
