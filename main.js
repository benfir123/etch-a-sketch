container = document.querySelector('.container')

function createGrid(squares) {
    for (let i = 0; i < squares ** 2; i++) {
        squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        squareDiv.style.backgroundColor = 'aqua';
        squareDiv.style.width = 960 / squares + 'px';
        squareDiv.style.height = 960 / squares + 'px';
        container.appendChild(squareDiv);
    }
    squareDivs = document.querySelectorAll('.square-div')
    squareDivs.forEach(div => div.addEventListener('mouseover', () => div.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)));
}

function askInput() {
    let userInput = prompt('Please enter the number of squares you would like between 2 and 100');
    if (userInput < 2 || userInput > 100 || isNaN(userInput) || !userInput) {
        return;
    }
    container.innerHTML = '';
    createGrid(userInput);
}

