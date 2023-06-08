let foodPosX = undefined;
let foodPosY = undefined;

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
}

//funciton to randomly place food
let randomFood = ()=>{
    //set pos of X and Y
    /*use floor and not ceil as if for example random is position of 
    full dimension, it will an error as it wil round up*/
    foodPosX = Math.floor(Math.random()*row*blockSize);
    foodPosY = Math.floor(Math.random()*column*blockSize);
}

/*lets not create the widht or height in the CSS or HTML, but
lets do it once the page oads using this as it refers to
the window object*/
this.onload = ()=>{
    //call function to set up
    loadUp();
}


