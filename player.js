var Player = function(playerName,p)
{
	var player = {};
	player.name= playerName;
	player.score = 0;
	player.width = 1;

	var program = p;
	var vao;
	var vaoAttrib;

	player.init = function(){
		vao = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vao);
		var vertices = [
			vec2(1,0),
			vec2(0,-1),
			vec2(0,1),
			vec2(-1,0)
		];

		gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

		vaoAttrib = gl.getAttribLocation(program,"vPosition");
		gl.enableVertexAttribArray(vaoAttrib);
		gl.vertexAttribPointer(vaoAttrib, 2, gl.FLOAT, false, 0,0);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
	}

	player.draw = function()
	{
		gl.useProgram(program);
		gl.bindBuffer(gl.ARRAY_BUFFER, vao);
		gl.enableVertexAttribArray(vaoAttrib);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	}



	return player;
}