colors = ['red','blue','green','orange','purple']
//Waits for the html to load first. Important to wait before trying to get the doms 
window.addEventListener("load", ()=>{
    const button = document.querySelector('#button')
    button.addEventListener('click', ()=>{
        let choice = 1; 
        do{
            choice = parseInt(prompt("Enter an integer between 2 and 100 inclusive"))
        } while(isNaN(choice) || choice < 2 || choice > 100)

        createGrid(choice)

        //We want to wait until the button is clicked before finding the columns because they're not generated yet
        const gridCells = document.querySelectorAll(".column")
        gridCells.forEach((cell) => {
            cell.addEventListener("mouseover", ()=>{
                cell.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
            })
        })
    })
 
})

//This function creates a grid by first creating a string of html. Then uses 2 loops to create rows and colums 
function createGrid(size){
    let html = ``
    for(let i = 0; i < size; i++){
        html += `<div class="row">`
        for(let j=0; j < size; j++){
            html += `<div class="column"></div>`
        }
        html += `</div>`
    }
    const map = document.querySelector('.map')
    map.innerHTML = html; 
}