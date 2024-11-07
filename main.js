
const container = document.getElementById('container');
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');

        // elements of every row
        for (let i = 0; i < gridSize; i++) {
            const rowItem = document.createElement("div")
            rowItem.classList.add('item');
            rowContainer.appendChild(rowItem);
            console.log('It is working');       
        }
        container.appendChild(rowContainer);
        
    }
}
const items = document.querySelectorAll(".item");
items.forEach(item => {
    console.log('The itm is: ', item);
    
    item.onmouseover = () => {
        item.classList.add("blue");
    }
})
console.log(items);


createGrid(parseInt(prompt("Enter grid size: ")));

console.log(items);
