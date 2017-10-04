var p1;
window.onload = function()
{
	var canvas = document.getElementById("gl-canvas");
	gl = WebGLUtils.setupWebGL(canvas);
	if(!gl){
		alert("yo");
	}

	gl.viewport(0,0,canvas.width, canvas.height);
	gl.clearColor(0,1.0,0,1);

	gl.clear(gl.COLOR_BUFFER_BIT);

	var program = initShaders(gl, "vertex-shader","fragment-shader");

	p1 = new Player("p1");
  p1.init(vec2(-1, 0), 1, 0.5);

  gameLoop();
}
var gameEnded = false;
var gameLoop = function(){
  gl.clear(gl.COLOR_BUFFER_BIT);

  if(!gameEnded){

    p1.update();
    p1.draw();
    window.requestAnimationFrame(gameLoop);
  }
  else {
    window.cancelAnimationFrame(gameLoop);
  }

}
