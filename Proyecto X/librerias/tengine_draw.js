var canvas = document.getElementById("canvas");
		 	var ctx = canvas.getContext("2d");

function drRect(posx,posy,width,height,color){
	ctx.fillStyle = color;
	ctx.fillRect(posx,posy,width,height);
	
}

function drSprite(img,posx,posy,width,height){
	ctx.drawImage(img,posx,posy,width,height);
	
}