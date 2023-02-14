export const SNAKE_SPEED = 1;
const snakeBody = [
    { x : 10, y : 11 },
    { x : 11, y : 11 },
    { x : 12, y : 11}
];    

// Update the snake
export function update()
{
    for (let i = snakeBody.length - 2; i>= 0; i--)
        {
            snakeBody[i + 1] = { ...snakeBody[i]};
        }

}

// Draw/Render the snake
export function draw(gameBoard)
{
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}