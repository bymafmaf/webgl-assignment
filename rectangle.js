var Rectangle = function(program ){
  var rectangle = {};
  var vao;
  var vaoAttrib;

  rectangle.init = function(center, width, height){
    vao = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vao);
    var vertices = [
      vec2(center[0] + width/2, center[1] + height/2),
      vec2(center[0] + width/2, center[1] - height/2),
      vec2(center[0] - width/2, center[1] + height/2),
      vec2(center[0] - width/2, center[1] - height/2),
    ];

    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    vaoAttrib = gl.getAttribLocation(program,"vPosition");
    gl.enableVertexAttribArray(vaoAttrib);
    gl.vertexAttribPointer(vaoAttrib, 2, gl.FLOAT, false, 0,0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }

  rectangle.draw = function(posX, posY){
    gl.useProgram(program);
    gl.uniform1f(program.x, posX);
    gl.uniform1f(program.y, posY);
    gl.bindBuffer(gl.ARRAY_BUFFER, vao);
    gl.enableVertexAttribArray(vaoAttrib);
    console.log(gl.NO_ERROR == gl.getError());
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  }

  return rectangle;
}
