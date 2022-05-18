
container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    squareDiv = document.createElement('div');
    squareDiv.classList.add('square-div');
    container.appendChild(squareDiv);
}