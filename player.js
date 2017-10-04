var Player = function(playerName)
{
	var player = {};
	player.name= playerName;
	player.score = 0;
	player.width = 1;
  var rectangle;
  var program;

	player.init = function(center, width, height){
     program = initShaders(gl, "vertex-shader", "fragment-shader");
     program.x = gl.getUniformLocation(program, "x");
     program.y = gl.getUniformLocation(program, "y");
     rectangle = new Rectangle(program);
     rectangle.init(center, width, height);
	}

  var posX = 0;
  var posY = 0;
	player.draw = function()
	{
    rectangle.draw(posX, posY);
	}

  player.update = function(){
    posX += 0.01;
    posY += 0.01;
  }

	return player;
}
