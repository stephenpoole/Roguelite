var room1 ={ 
layout: [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ]
};

var player = {
	img: null,
	xLoc: 1,
	yLoc: 1,
	keyPressed: false
};

var enemy = {
	img: null,
	xLoc: 19,
	yLoc: 19,
	action: [["N",1],
	["E",1],
	["S",1],
	["W",1],
	],
	actionCounter: 0
};

var tileX = 30;
var tileY = 30;

var wallImage = new Image();
wallImage.src ="img/wall.png";
var floorImage = new Image();
floorImage.src ="img/floor.png";
var playerImage = new Image();
playerImage.src = "img/playerV2.png";
player.img = playerImage;
var enemyImage = new Image();
enemyImage.src = "img/enemy.png";
enemy.img = enemyImage;


window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

var floorLayer = document.getElementById("Floor");
var floorLayerCtx = floorLayer.getContext("2d");
var playerLayer = document.getElementById("Player");
var playerLayerCtx = playerLayer.getContext("2d");
var uiLayer = document.getElementById("UserInterface");
var uiLayerCtx = uiLayer.getContext("2d");

var uIval = setInterval(update,33.34); // 30 fps



function onKeyDown(event)
{
	if (leftPressed == false && rightPressed == false && downPressed == false && upPressed == false && spacePressed == false)
	{
		switch(event.keyCode)
		{
			case 37: // Left.
					if ( leftPressed == false )
						leftPressed = true;
					break;
			case 39: // Right.
					if ( rightPressed == false )
						rightPressed = true;
					break;
			case 38: // Up.
					if ( upPressed == false )
						upPressed = true;
					break;
			case 40: // Down.
					if ( downPressed == false )
						downPressed = true;
					break;
			case 32:
					if ( spacePressed == false )
						spacePressed = true;
					break;
			default:
					console.log("Unhandled key.");
					break;
		}
		playerMove();
		console.log(player.xLoc,player.yLoc)
	}
	
}

function onKeyUp(event)
{
	
	switch(event.keyCode)
	{
		case 37: // Left.
				leftPressed = false;
				break;
		case 39: // Right.
				rightPressed = false;
				break;
		case 38: // Up.
				upPressed = false;
				break;
		case 40: // Down.
				downPressed = false;
				break;
		case 32:
				spacePressed = false;
				break;
		default:
				console.log("Unhandled key.");
				break;
	}
	
}




function update() // Going to run 30fps
{
	
	render();
}

function render()
{
	drawRoomLayer();
	drawPlayerLayer();
	drawUiLayer();
}

function drawRoomLayer()
{
	for (var i=0;i<25;i++)
	{
		for (var j=0;j<25;j++)
		{
			if(room1.layout[i][j] == 0)
			{
				floorLayerCtx.drawImage(wallImage,j*tileX,i*tileY);
			}
			if(room1.layout[i][j] == 1)
			{
				floorLayerCtx.drawImage(floorImage,j*tileX,i*tileY);
			}
		}
	}
	
}

function drawPlayerLayer()
{
	playerLayerCtx.clearRect(0,0,750,750);
	playerLayerCtx.drawImage(enemy.img,enemy.xLoc*tileX,enemy.yLoc*tileY);
	playerLayerCtx.drawImage(player.img,player.xLoc*tileX,player.yLoc*tileY);
	
}

function drawUiLayer()
{
}

function playerTick()
{
	if(enemy.actionCounter == enemy.action.length)
		enemy.actionCounter = 0;
		if ( enemy.action[enemy.actionCounter][0] == "E" && enemy.xLoc > 0 ) 
		{
			console.log("PlayerTick() - E");
			if(room1.layout[enemy.yLoc][enemy.xLoc-1] !=0)
				enemy.xLoc --;
		}		
		if ( enemy.action[enemy.actionCounter][0] == "W" && enemy.xLoc < 24 )
		{
			if(room1.layout[enemy.yLoc][enemy.xLoc+1] !=0)
				enemy.xLoc ++;
		}
		if ( enemy.action[enemy.actionCounter][0] == "N" && enemy.yLoc > 0)
		{
			if(room1.layout[enemy.yLoc-1][enemy.xLoc] !=0)
				enemy.yLoc --;
		}
		if ( enemy.action[enemy.actionCounter][0] == "S" && enemy.yLoc < 24)
		{
			if(room1.layout[enemy.yLoc+1 ][enemy.xLoc] !=0)
				enemy.yLoc ++;
		}
	enemy.actionCounter++;	
	console.log("actionCounter"+enemy.actionCounter);
}

function playerMove()
{
	//add enemy collision and attack and stuff here
	if ( leftPressed == true && player.xLoc > 0 ) 
	{
		if(room1.layout[player.yLoc][player.xLoc-1] !=0)
		player.xLoc --;
	}		
	if ( rightPressed == true && player.xLoc < 24 )
	{
		if(room1.layout[player.yLoc][player.xLoc+1] !=0)
		player.xLoc ++;
	}
	if ( upPressed == true && player.yLoc > 0)
	{
		if(room1.layout[player.yLoc-1][player.xLoc] !=0)
		player.yLoc --;
	}
	if ( downPressed == true && player.yLoc < 24)
	{
		if(room1.layout[player.yLoc+1 ][player.xLoc] !=0)
		player.yLoc ++;
	}
	playerTick();
}