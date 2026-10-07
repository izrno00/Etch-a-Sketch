const container = document.querySelector("#container");


function createGrid() {

    for(let i = 0; i < 256; i++) {

    const singleDiv = document.createElement("div");

    singleDiv.classList.add("field");

    container.appendChild(singleDiv);

    singleDiv.addEventListener("mouseenter", () => singleDiv.classList.add("black"));

    }
}



createGrid();


