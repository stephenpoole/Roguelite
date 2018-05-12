let canvas = document.getElementById("gameArea");//getting canvas
canvas.width = 600;//setting canvas size
canvas.height = 630;//bottom 30 pixels reserved for ui
let surface = canvas.getContext("2d");//setting canvas for drawing
surface.fillStyle = 'white';//text colour for text used on canvas

let backgroundCanvas = document.getElementById("backgroundCanvas");//offscreen canvas for holding the background image
let backCan = backgroundCanvas.getContext("2d");//the background image will be constructed once per room then stored here

//var audioAttack = new Audio();//example audio loading
//audioAttack.src = "data/foo.mp3";

let backgroundImage = new Image();//loading a spite sheet i downloaded
backgroundImage.src = "data/dungeon_tiles.png";

let keysPressed = [];//an array that holds the keys currently down

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

let character = createCharacter();//creates and holds character
let enemies = []; //array of all currently active enemies
let miscObjects = []; // other interactive objects

let animation = requestAnimationFrame(gameLoop); //calls game loop 60 times a second


function gameLoop()
{
    render();
    userInputHandler();
    gameLogic();
    animation = requestAnimationFrame(gameLoop);
}

function render() //clears screen and draws all elements in turn
{
    surface.clearRect(0,0,600,630);
    drawBackground();
    drawMain();
    drawUI();
}


function drawBackground()// draws background layer
{

}

function drawMain() //draws all enemies player and interactive objects
{

}

function drawUI() // draws UI ontop of everything else
{

}


function userInputHandler() //accepts and applies player input
{
    if(keysPressed.includes(37))//left
        character.moveLeft();
    if(keysPressed.includes(39))//right
        character.moveRight();
    if(keysPressed.includes(38))//up
        character.moveUp();
    if(keysPressed.includes(40))//down
        character.moveDown();
    if(keysPressed.includes(32))//spacebar
        character.attack();
}

function gameLogic() //updates all game functions and ai
{

}


function roughCollision(x1,y1,w1,h1,x2,y2,w2,h2) //takes the x,y,width and height of 2 objects and checks for collision returns true or false
{
    return (x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        h1 + y1 > y2)
}

function fineCollision()//determines the angle of collision so the walls can apply counterforce
{

}

function killAllOnemies() //kills every enemy and object on screen used during screen transitions
{

}

function spawnAllObjects() //takes the room data and spawns the appropriate enemies and objects
{

}

function generateFloorMap () //generates and returns the floor map
{

}

function generateRoomMap () //called by floor map to generate each room
{

}

function keyDownHandler(e) //appends key to array if it is not already present
{
    if(!keysPressed.includes(e.keyCode))
        keysPressed.push(e.keyCode)
}

function keyUpHandler(e) //removes specified key from array
{
    keysPressed.splice(keysPressed.indexOf(e.keyCode), 1);
}

function createCharacter() //generates and contains game character
{
    let obj = {};
    obj.xCord = 290;
    obj.yCord = 550;
    obj.state = 1;
    obj.attackChargeTimer = 0;
    obj.moveLeft = function(){};
    obj.moveRight = function(){};
    obj.moveUp = function(){};
    obj.moveDown = function(){};
    obj.attack = function(){};
    return (obj);
}