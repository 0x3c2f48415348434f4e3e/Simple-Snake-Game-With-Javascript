let blockSize = 25; //here its 5*5
let row = 30; //so we need 10*25 blocks in the X-direction
let column = 20; //here we need 20*25 blocks in the Y-direction
let foodPosX = undefined;
let foodPosY = undefined;
let snakeX = blockSize*5; //Positon of snake at start
let snakeY = blockSize*5;

let snakeHorizontalSpeed = 0;
let snakeVerticalSpeed = 0;
snakeBody = []

let gameRunning;

//when window loads
let loadUp = ()=>{
    gameRunning = true;
    //get access to canvas vai DOM
    let canvas1 = document.getElementById("link");
    ctx = canvas1.getContext("2d");
    /*imgine this to be made of blocks (pixelated game), so lets 
    set up the playground*/

    //set width and height
    canvas1.width = row * blockSize;
    canvas1.height = column *blockSize;
    console.log(canvas1.width,canvas1.height)
    //randomly place food when window loads
    randomFood();
    //console.log(foodPosX,foodPosY)
    document.addEventListener("keydown",snakeMove)//When button is pressed, then funciton runs
    setInterval(gameLoop,100)
}

//funciton to randomly place food
let randomFood = ()=>{
    //set pos of X and Y
    /*use floor and not ceil as if for example random is position of 
    full dimension, it will an error as it wil round up*/
    foodPosX = Math.floor(Math.random()*((row*blockSize) - blockSize)); //random int between 0 and total dimension
    foodPosY = Math.floor(Math.random()*((column*blockSize) - blockSize));
    console.log(foodPosX,foodPosY)
}

let snakeMove = props =>{
    if(props.code == "ArrowUp" && snakeVerticalSpeed !=1){
        snakeVerticalSpeed = -1; //this ensure user can not go opposite direction
        //set horizontal seed to 0, for example if user preesed it previosuly
        snakeHorizontalSpeed = 0;
    } //remebr snake can not go in opposite direction (real life scenario)
    if(props.code == "ArrowDown" && snakeVerticalSpeed !=-1){
        snakeVerticalSpeed = 1;
        //Same logic as above
        snakeHorizontalSpeed = 0;
    }
    if(props.code == "ArrowLeft" && snakeHorizontalSpeed !=1){
        snakeHorizontalSpeed = -1;
        //set vertical seed to 0, for example if user preesed it previosuly
        snakeVerticalSpeed = 0
    }
    if(props.code == "ArrowRight" && snakeHorizontalSpeed !=-1){
        snakeHorizontalSpeed = 1;

        //Same logic as before
        snakeVerticalSpeed = 0;
    }

}

let gameLoop = ()=>{
    //test if game is over
    if(!(gameRunning)){
        return 0; //so game end
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(foodPosX,foodPosY,blockSize,blockSize)


    if(snakeX == foodPosX && snakeY == foodPosY){
        snakeBody.push([foodPosX,foodPosY]) //append position of food
        randomFood() //generate random food
    }

    for(let i=snakeBody.length-1; i>0;i--){
        snakeBody[i] = snakeBody[i-1];
        //This parts take care of the snake eating the food and making the snake grow
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY]; //replace food positon with current position of snake
    }
    ctx.fillStyle = "white";
    ctx.clearRect(snakeX,snakeY,blockSize,blockSize); //Ensures that snakes does not grow without eating food
    snakeX += snakeHorizontalSpeed * blockSize; //Move snake position
    snakeY += snakeVerticalSpeed * blockSize;
    ctx.fillRect(snakeX,snakeY,blockSize,blockSize);
    for(let i=0; i<snakeBody.length; i++){
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }

    if(snakeX <0 || snakeX > column*blockSize || snakeY < 0 || snakeY > row * blockSize){
        gameRunning = false;
        this.alert("Game Over");
    }

    for(let i=0; i< snakeBody.length; i++){
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameRunning = false;
            this.alert("Game Over");
        }
    }
}

/*lets not create the widht or height in the CSS or HTML, but
lets do it once the page oads using this as it refers to
the window object*/
this.onload = ()=>{
    //call function to set up
    loadUp();
}


