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
    
        }
       
    }


}

createGrid(39);




