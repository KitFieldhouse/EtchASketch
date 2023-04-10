
let gridX = 50;
let gridY = 50;

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

    event.target.r = Math.floor(Math.random()*256);
    event.target.g = Math.floor(Math.random()*256);
    event.target.b = Math.floor(Math.random()*256);
    event.target.a = 1;

    event.target.classList.add('cell-mouse-over');
    event.target.style = `background-color: rgba(${event.target.r}, ${event.target.g}, ${event.target.b}, ${event.target.a});`;


}

function mouseOut(event){

    if(!event.target.classList.contains("cells")){
        return;
    }

    event.target.classList.remove('cell-mouse-over');
    event.target.classList.add('moused');
    event.target.style = `background-color: rgba(${event.target.r}, ${event.target.g}, ${event.target.b}, ${event.target.a});`;

}