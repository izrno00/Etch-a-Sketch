const container = document.querySelector("#container");
const btnSize = document.querySelector("#size");
const input = document.querySelector("#input-size");


function createGrid(a) {

    for(let i = 0; i < (a * a); i++) {

    const singleDiv = document.createElement("div");

    singleDiv.classList.add("field");

    container.appendChild(singleDiv);

    singleDiv.addEventListener("mouseenter", () => singleDiv.classList.add("black"));

    }
}


btnSize.addEventListener("click", () => createGrid(input.value));


createGrid(16);




