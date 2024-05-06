function createGrid(num) {
    const grid = document.querySelector("div#container");

    for (i = 1; i <= num; i++){
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        row.id = i;
        grid.appendChild(row); 

        for (j = 1; j<= num; j++){
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.id = j;
            row.appendChild(cell);

            cell.addEventListener("mouseover", () => {
                cell.setAttribute("style", "background-color: black")
            })
    
        }
       
    }

}

const btn = document.querySelector("button");
btn.addEventListener("click", () => { 
    let sqr = parseInt(prompt("Please enter the number of cells"));
    console.log(sqr);
    if (sqr != null){
        createGrid(sqr);
    }
})



