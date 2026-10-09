const container = document.querySelector("#container");
const btnSize = document.querySelector("#size");
const btnReset = document.querySelector("#reset");
const input = document.querySelector("#input-size");


function createGrid(a) {

    for(let i = 0; i < (a * a); i++) {

    const singleDiv = document.createElement("div");

    singleDiv.classList.add("field");

    container.appendChild(singleDiv);

    singleDiv.addEventListener("mouseenter", () => singleDiv.classList.add("black"));

    }
}

createGrid(16);

btnSize.addEventListener("click", () => {
    
    document.querySelectorAll(".field").forEach(element => element.remove());
    createGrid(input.value);

});

btnReset.addEventListener("click", () => document.querySelectorAll(".black").forEach(element => element.classList.remove("black")));







