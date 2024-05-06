function createGrid(num) {
    const grid = document.querySelector("div#container");

    for (i = 1; i <= num*num; i++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.id = i;
        grid.appendChild(cell);
       
    }

}

createGrid(16);




