
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
createGrid(parseInt(prompt("Enter grid size: ")));

const items = document.querySelectorAll(".item");

items.forEach(item => {
    console.log('The item is: ', item);
    
    item.addEventListener('mouseover', (e)=>{
        console.log(e);
        item.classList.add('blue');
        
    })
})
console.log(items.forEach(item => {
    console.log('The is from items in main: ', item);
}));



