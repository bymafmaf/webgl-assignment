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

	var player = new Player("asd", program);
	
	player.init();
	player.draw();
}