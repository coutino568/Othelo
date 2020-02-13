
isP1Turn =true;
const isOver =false;

//const root = document.getElementById('root');
const horizontalSpaces = 8;
const veritaclSpaces =8;
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
	



function clearBoard(){
	const mount = document.getElementById("root");
    while (mount.firstChild) {
    mount.firstChild.remove();
}
}




function renderBoard(){
clearBoard();
const mount = document.getElementById("root");
const board = document.createElement('div');
board.style.backgroundColor = 'green';
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
if (isP1Turn) {status.textContent = "Turno de las Blancas";}else{status.textContent = "Turno de las Negras";}

mount.appendChild(status);
mount.appendChild(board);
}



renderBoard();


function createASquare(value,row,column){
	thisSquare = document.createElement('div');
	thisSquare.style.width = '70px';
	thisSquare.style.height= '70px';
	thisSquare.style.fontSize = '20px';
	thisSquare.style.boxSizing='border-box';
	thisSquare.style.borderStyle= "solid";
  	thisSquare.style.borderWidth="0.5px";
	thisSquare.style.padding='1px';
	thisSquare.style.borderRadius= '100px';
	thisSquare.innerText=" ";
	switch (value){
		case -1:
		thisSquare.style.backgroundColor= 'white';
		break;
		case 0:
		thisSquare.style.backgroundColor= 'green';
		break;
		case 1:
		thisSquare.style.backgroundColor= 'black';
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
	//printBonito();
	refreshState(row, column, typeOfChip);
	if (isP1Turn) {isP1Turn=false;}else{isP1Turn=true;}
	renderBoard();
	if(isThereAWinner()){
		setTimeout(function(){
			alert("Gracias por jugar");
		}, 2000);
	}
	// printBonito();
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
				state[m][column]=typeOfChip;
			}
		}
	}
	//revisa las casillas de la derecha en este sentido <-
	for(b=8;b>row ; b--){
		
		if(state[b][column]== typeOfChip){
			for(n=b;n>row; n--){
				state[n][column]=typeOfChip;
				}
			}
			
		}
}

function checkHorizontally(row,column, typeOfChip) {
	//revisa las casillas anteriores en este sentido ->
	for(a=0;a<column ; a++){
		if(state[row][a]== typeOfChip){
			for(m=a;m<column; m++){
				state[row][m]=typeOfChip;
			}
		}
	}
	//revisa las casillas de la derecha en este sentido <-
	for(b=8;b>column ; b--){
		
		if(state[row][b]== typeOfChip){
			for(n=b;n>column; n--){
				state[row][n]=typeOfChip;
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
	for (i =1; i<9; i++){
		for (j =1; j<9; j++){
			if (state[i][j]==0){return false;}
	}
	finalCount();
	return true;
	
}
}

function finalCount(){
	amountOfWhiteChips=0;
	amountOfBlackChips=0;
	for (i =1; i<9; i++){
		for (j =1; j<9; j++){
			if (state[i][j]==1){amountOfBlackChips++;}
			if (state[i][j]==-1){amountOfWhiteChips++; }
			
}}
 setTimeout(function(){
			alert("HAY UN GANADOOR");
			alert("Blancas: "+ amountOfBlackChips);
			alert("Negras: "+ amountOfBlackChips);
		}, 1000);
 
}