
let gridX = 20;
let gridY = 20;

let r = 155;
let g = 155;
let b = 200;
let a = 1;

let container = document.querySelector('.etch-grid');

for(let i = 0; i < gridY; i++)
{

    let rowElem = document.createElement('div');

    rowElem.classList.add("rows");

    for(let j = 0; j < gridX; j++){

         let cell = document.createElement('div');
        
         cell.classList.add('cells');

         rowElem.appendChild(cell);
    }

    container.appendChild(rowElem);

}

container.addEventListener('mouseover', mouseEnter);  // delegate event handling of the cells to to the container object
container.addEventListener('mouseout', mouseOut);


function mouseEnter(event){

    if(!event.target.classList.contains("cells")){
        return;
    }

    event.target.classList.add('cell-mouse-over');
    event.target.style = `background-color: rgba(${r}, ${g}, ${b}, ${a});`;


}

function mouseOut(event){

    if(!event.target.classList.contains("cells")){
        return;
    }

    event.target.classList.remove('cell-mouse-over');
    event.target.classList.add('moused');
    event.target.style = `background-color: rgba(${r}, ${g}, ${b}, ${a});`;

}