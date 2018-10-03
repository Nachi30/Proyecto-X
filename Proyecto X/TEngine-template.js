//Variables
var canvas = document.getElementById("canvas");
		 	var ctx = canvas.getContext("2d");
		 	var state = false;
		 	var loop;
		 	var boton = document.getElementById("boton");
			var FPS = 30;
		 	boton.addEventListener("click", State);

//Funciones:
introMsg=true;

function punch(){
	alert("LOL")
}

var restartGame=document.getElementById("restart")

mapa = document.createElement("img")
mapa.src="imagenes/map.png";

var puntos = 0;
//Creando al enemigo

var timer=0;
var timeLimit=15000;
raditz = new Image();
raditz.src="imagenes/Raditz.png";
raditz.id=

var posxRaditz;
var posyRaditz;
var rmovimiento;
function mvRaditz(interruptor){
	var posActx=posxRaditz;
	var posActy=posyRaditz;


	if (interruptor==true){
	posxRaditz=Math.random()*360;
	posyRaditz=Math.random()*240;
	
	}
	else{
		
	}

}

//............................................Dibujo de contenido...........................................................................................
function draw(){
			
				if (introMsg==true){
					alert("Raditz ha invadido la tierra... Golpealo con el mouse para que picoro gane tiempo!")
					introMsg=false;
				}
				
				
				
		 		ctx.clearRect(0,0,canvas.width,canvas.height);
				
				 //Dibujando el mapa...
				 ctx.drawImage(mapa,0,0)

				  //Dibujando al enemigo...
				  ctx.drawImage(raditz, posxRaditz, posyRaditz)
			
			}

//........................................Colisiones de juego..............................................................
		
function collides(){
		 		
			   
			
		 	}	
				
//........................................Actualiza el contenido..............................................................		
		 	function update(){
					timer++;
					
					if (timer == timeLimit){
						mvRaditz(true);
						timer=0;
						timeLimit=timeLimit-1000;
					}
					if (timer < timeLimit){
						mvRaditz(false);
					}
					if (timeLimit<6000 && puntos>5){
						alert("Muy bien! picoro pudo hacer el macankosapo...");
						window.location.href = 'index.html';
						}
					if (timeLimit<6000 && puntos<5){
						alert("No fuiste lo suficientemente fuerte, raditz te acaba de derrotar")
					}

					raditz.addEventListener("click", punch,false)
				}

					

//........................................Llama a todas las funciones del juego..............................................................
		 	
			function frame(){
		 		update();
		 		collides();
		 		draw();
		 		loop = requestAnimationFrame(frame);
		 	}

//........................................Define el estado del juego..............................................................
		 	function State(){
		 		if(!state){
		 			state = true;
		 			setInterval(function(){
					frame();},1000/FPS)
		 		} else {
		 			state = false;
		 			cancelAnimationFrame(loop);
		 		}
		 	}
