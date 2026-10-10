const container = document.querySelector("#container");
const btnSize = document.querySelector("#size");
const btnReset = document.querySelector("#reset");
const input = document.querySelector("#input-size");


function createGrid(a) {

    for(let i = 0; i < a; i++) {

    const singleRow = document.createElement("div");

    singleRow.classList.add("single-row");

    container.appendChild(singleRow);

        for(let j = 0; j < a; j++) {

            const field = document.createElement("div");

            field.classList.add("field");

            singleRow.appendChild(field);

            field.addEventListener("mouseenter", () => field.classList.add("black"));
        }

    

    }
}

createGrid(16);

btnSize.addEventListener("click", () => {
    
    document.querySelectorAll(".single-row").forEach(element => element.remove());
    createGrid(input.value);

});

btnReset.addEventListener("click", () => document.querySelectorAll(".black").forEach(element => element.classList.remove("black")));







