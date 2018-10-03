var canvas = document.getElementById("canvas");
		 	var ctx = canvas.getContext("2d");
var colision = false;
function checkCollide(posx,posy,posx2,posy2,width,height,width2,height2,speedx,speedy,speedx2,speedy2){
	cx = posx+width;
	cxn = posy-width;
	cy = posy+height;
	cyn = posy-height;
	
	cx2 = posx2+width2;
	cxn2 = posy2-width2;
	cy2 = posy2+height2;
	cyn2 = posy2-height2;
	
	vx1 = speedx;
	vy1 = speedy;
	vx2 = speedx2;
	vy2 = speedy2;
	if (cx > posx2 && 
		posx < cx2 &&
		posy < cy2 &&
		cy > posy2){
		colision = true;
	return colision;}}


	
