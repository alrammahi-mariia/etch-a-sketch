const grid = document.querySelector("div#container");

function createGrid(num) {

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
                let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
                cell.style.backgroundColor = randomColor;
            })
    
        }
       
    }

}

const setBtn = document.querySelector(".set-btn");
setBtn.addEventListener("click", () => { 
    let sqr = parseInt(prompt("Please enter the number of cells"));
    if (sqr != null && sqr <= 100){
        createGrid(sqr);
    }
    else alert("Please enter a number less than or equal to 100")
})

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => { 
    location.reload();
})


