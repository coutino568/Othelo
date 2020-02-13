
isP1Turn =true;
gameTheme=0;
const isOver =false;

//sera una matriz de 10 por 10 pero solo se renderizan las 8 casillas centrales
const state= [
	 [0,0,0,0,0,0,0,0,0,0]
	,[0,0,0,0,0,0,0,0,0,0]
	,[0,0,0,0,0,0,0,0,0,0]
	,[0,0,0,0,0,0,0,0,0,0]
	,[0,0,0,0,1,-1,0,0,0,0]
	,[0,0,0,0,-1,1,0,0,0,0]
	,[0,0,0,0,0,0,0,0,0,0]
	,[0,0,0,0,0,0,0,0,0,0]
	,[0,0,0,0,0,0,0,0,0,0]
	,[0,0,0,0,0,0,0,0,0,0]];
	
//renderBoard();
renderBoard();

function clearBoard(){
	const mount = document.getElementById("root");
    while (mount.firstChild) {
    mount.firstChild.remove();
}
}




function renderBoard(){
clearBoard();

// if (isThereAWinner()) {finalCount();}

const mount = document.getElementById("root");
const board = document.createElement('div');
switch(gameTheme){
	case 0:
	board.style.backgroundColor = 'green';
	break;
	case 1:
	board.style.backgroundColor = 'black';
	break;
}
if(gameTheme==0){board.style.backgroundColor = 'green';} else {
	board.style.backgroundColor = 'black';
}
board.style.margin='5px', 'dotted' ,'red';
board.style.width= '600px';
board.style.height = '600px';
//board.style.padding='1px';

	for (let i=1;i<9;i++){
		row= document.createElement('div');
		row.style.display = 'inline-block';
		//row.style.padding='1px';
		for(let j=1;j<9;j++){
			row.appendChild(createASquare(state[i][j],j,i));
		}
		board.appendChild(row);
	}
const status = document.createElement('div');
status.style.width ="600px";
status.style.height="30px";
status.style.textAlign="center";
status.style.fontSize="25px";
if (isP1Turn) {status.textContent = (gameTheme==0)? "Turno de las Blancas": "Turno de las Rojas";}else
{status.textContent = (gameTheme==0)?"Turno de las Negras" : "Turno de las Amarillas";}
// boton alterna tema
const themeButton = document.createElement('button');
themeButton.style.width = '250px';
themeButton.style.fontSize = '20px';
themeButton.innerText = "Cambiar tema";

themeButton.onclick = ()=> {
	gameTheme=(gameTheme+1 )%2;
	renderBoard();
}

mount.appendChild(status);
mount.appendChild(themeButton);
mount.appendChild(board);
}





function createASquare(value,row,column){
	thisSquare = document.createElement('div');
	thisSquare.style.width = '70px';
	thisSquare.style.height= '70px';
	thisSquare.style.fontSize = '20px';
	thisSquare.style.boxSizing='border-box';
	thisSquare.style.borderStyle= "solid";
	(gameTheme==0)? thisSquare.style.borderColor="black" :thisSquare.style.borderColor="grey" ;
  	thisSquare.style.borderWidth="0.5px";
	thisSquare.style.padding='1px';
	thisSquare.style.borderRadius= '100px';
	thisSquare.innerText=" ";
	switch (value){
		case -1:
		if (gameTheme==0) {thisSquare.style.backgroundColor= 'white';}else{thisSquare.style.backgroundColor= 'red';}
		break;
		case 0:
		if (gameTheme==0) {thisSquare.style.backgroundColor= 'green';}else{thisSquare.style.backgroundColor= 'black';}
		
		break;
		case 1:
		if (gameTheme==0) {thisSquare.style.backgroundColor= 'black';}else{thisSquare.style.backgroundColor= 'yellow';};
	}
	thisSquare.onclick = ()=> {
		if(isTurnValid(row,column)){
		if (isP1Turn) {makeAMove(row,column,-1);} else{makeAMove(row,column,1);} 
		//alert("me han presionado \n" + "mi fila es "+row + "\n mi columna es "+ column);
		}else {
			alert("Invalid Move");
		}
	}
	return thisSquare;

}



function makeAMove(column,row,typeOfChip){
	state[row][column]=typeOfChip;
	refreshState(row, column, typeOfChip);
	if (isP1Turn) {isP1Turn=false;}else{isP1Turn=true;}
	renderBoard();
}

function refreshState(row, column, typeOfChip){
	checkVertically(row,column,typeOfChip);
	checkHorizontally(row,column,typeOfChip);
	checkDiagonally(row,column,typeOfChip);

}

function checkVertically(row, column, typeOfChip){
	//revisa las casillas anteriores 
	for(a=0;a<row ; a++){
		if(state[a][column]== typeOfChip){
			for(m=a;m<row; m++){
				//solo si no estan vacias las cambia
				if(state[m][column]!=0){
					state[m][column]=typeOfChip;
				}
			}
		}
	}
	//revisa las casillas de la derecha en este sentido <-
	for(b=8;b>row ; b--){
		
		if(state[b][column]== typeOfChip){
			for(n=b;n>row; n--){
				//solo si no estan vacias , las invierte
				if(state[n][column]!=0){
					state[n][column]=typeOfChip;
				}
				}
			}
			
		}
}

function checkHorizontally(row,column, typeOfChip) {
	//revisa las casillas anteriores en este sentido ->
	for(a=0;a<column ; a++){
		if(state[row][a]== typeOfChip){
			for(m=a;m<column; m++){
				//solo si no esta vacia las invierte
				if(state[row][m]!=0){
					state[row][m]=typeOfChip;
				}
			}
		}
	}
	//revisa las casillas de la derecha en este sentido <-
	for(b=8;b>column ; b--){
		
		if(state[row][b]== typeOfChip){
			for(n=b;n>column; n--){
				//solo si no estan vacias las cambia
				if(state[row][n]!=0){
					state[row][n]=typeOfChip;
				}
				}
			}
			
		}
	}



function checkDiagonally(row,column,typeOfChip){}

function isTurnValid(column,row){
	if (state[row][column]==0) {
		//casos para el turno de -1
		if (isP1Turn) { opposite= 1; } else {opposite=-1;}
		
		if(state[row+1][column]==opposite||state[row-1][column]==opposite
			||state[row][column+1]==opposite||state[row][column-1]==opposite
			||state[row+1][column+1]==opposite||state[row-1][column-1]==opposite
			||state[row-1][column+1]==opposite||state[row+1][column-1]==opposite){
					return true;
				}
			}else{
				return false;}


}

function isThereAWinner(){
	var emptyspaces=0;
	for (i =1; i<9; i++){
		for (j =1; j<9; j++){
			if (state[i][j]==0){				
				emptyspaces++;
			}
	}
}
return (emptyspaces>0)? false : true;
}

function finalCount(){
	amountOfWhiteChips=0;
	amountOfBlackChips=0;
	for (i =1; i<9; i++){
		for (j =1; j<9; j++){
			if (state[i][j]==1){amountOfBlackChips++;}
			if (state[i][j]==-1){amountOfWhiteChips++; }
			
}}
 
		
		alert("Blancas: "+ amountOfBlackChips);
		alert("Negras: "+ amountOfBlackChips);
 
}