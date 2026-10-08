const container = document.querySelector("#container");


function createGrid(a) {

    for(let i = 0; i < (a * a); i++) {

    const singleDiv = document.createElement("div");

    singleDiv.classList.add("field");

    container.appendChild(singleDiv);

    singleDiv.addEventListener("mouseenter", () => singleDiv.classList.add("black"));

    }
}



createGrid(16);


