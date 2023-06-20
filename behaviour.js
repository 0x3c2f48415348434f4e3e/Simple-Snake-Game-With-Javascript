let foodPosX = undefined;
let foodPosY = undefined;

let snakeHorizontalSpeed = 0;
let snakeVerticalSpeed = 0;

gameRunning = true;

//when window loads
let loadUp = ()=>{
    //get access to canvas vai DOM
    let ctx = this.document.getElementById("link");
    ctx.getContext('2d');
    /*imgine this to be made of blocks (pixelated game), so lets 
    set up the playground*/
    let blockSize = 25; //here its 5*5
    let row = 30; //so we need 10*25 blocks in the X-direction
    let column = 20; //here we need 20*25 blocks in the Y-direction

    //set width and height
    ctx.width = row * blockSize;
    ctx.height = column *blockSize;
    //randomly place food when window loads
    randomFood();
    document.addEventListener("keydown",snakeMove)
}

//funciton to randomly place food
let randomFood = ()=>{
    //set pos of X and Y
    /*use floor and not ceil as if for example random is position of 
    full dimension, it will an error as it wil round up*/
    foodPosX = Math.floor(Math.random()*row*blockSize);
    foodPosY = Math.floor(Math.random()*column*blockSize);
}

let snakeMove = props =>{
    if(props.code == "ArrowUp" && snakeVerticalSpeed !=1){
        snakeVerticalSpeed = -1;
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
}

/*lets not create the widht or height in the CSS or HTML, but
lets do it once the page oads using this as it refers to
the window object*/
this.onload = ()=>{
    //call function to set up
    loadUp();
}


