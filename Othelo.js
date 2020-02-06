isP1Turn =true;
const isOver =false;

//const root = document.getElementById('root');
const horizontalSpaces = 8;
const veritaclSpaces =8;
const state= [
	 [0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,1,-1,0,0,0,]
	,[0,0,0,-1,1,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]];
	

// cyclo para jugar hasta que haya un ganador
while (isThereAWinner()==false){

	 if (isP1Turn==true) {
		console.log("it is turn of player 1");
		//var tryAgain=true;
		// while(tryAgain=true){
			typeOfChip=1;
			row=Math.floor(Math.random() * 8);
			column=Math.floor(Math.random() * 8);
			// if(isTurnValid(row,column)){
			// 	
			// 	}
			makeAMove(row,column,typeOfChip);
			// 	tryAgain=false;
			//}	
			isP1Turn=false;
	} 
	if (isP1Turn==false){
		console.log("it is turn of player 2");
		//tryAgain=true;
		//while(tryAgain=true){
			row=Math.floor(Math.random() * 8);
			column=Math.floor(Math.random() * 8);
			//if(isTurnValid(row,column)){
				makeAMove(row,column,-1);
				//tryAgain=false;
				isP1Turn=true;

			
		}	

		

	}




function makeAMove(row,column,typeOfChip){
	state[row][column]=typeOfChip;
	//printBonito();
	refreshState(row, column, typeOfChip)
	printBonito();
}


function printBonito(){
	for(i=0;i<8;i++){
		console.log(state[i][0],state[i][1],state[i][2],state[i][3],state[i][4],state[i][5],state[i][6],state[i][7])
	}
	console.log();
}



function printState(){
	for (let i =0; i<8; i++) {
		for (let j=0; j<8; j++){
			printASpace(state[i][j]);
		}
	}

}
function printASpace(color){
//debe crear caja 
// const space = document.createElement('div');
// space.style.whidth = 100;
// space.style.height= 100;

//dependiendo del estado , asigna el color
	switch (color){
		case -1:
		// space.style.backgroundColor = white; 
		//console.log("White");

		break;

		case 0:
		// space.style.backgroundColor = lime;
		//console.log("Empty");

		break;

		case 1:
		// space.style.backgroundColor = black;
		//console.log("Black");

		break;

	}

}


function printTurn(){

}

function refreshState(row, column, typeOfChip){
	checkVertically(row,column,typeOfChip);
	checkHorizontally(row,column,typeOfChip);
	checkDiagonally(row,column,typeOfChip);
	printState();

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
	for(b=7;b>row ; b--){
		
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
	for(b=7;b>column ; b--){
		
		if(state[row][b]== typeOfChip){
			for(n=b;n>column; n--){
				state[row][n]=typeOfChip;
				}
			}
			
		}
	}







function checkDiagonally(row,column,typeOfChip){}

function isTurnValid(row, column){
	if (state[row][column]==0) {return true;} else{return false;}
	//return (state[row][column]==0)? (true) : (false);

}

function isThereAWinner(){
	for (i =0; i<8; i++){
		for (j =0; j<8; j++){
			// if (state[i][j]==1){amountOfBlackChips++; console.log("Negras: "+ amountOfBlackChips);}
			// if (state[i][j]==-1){amountOfWhiteChips++; console.log("Blancas: "+ amountOfBlackChips);}
			if (state[i][j]==0){return false;}
	}
	finalCount();
	return true;
	
}
}

function finalCount(){
	amountOfWhiteChips=0;
	amountOfBlackChips=0;
	for (i =0; i<8; i++){
		for (j =0; j<8; j++){
			if (state[i][j]==1){amountOfBlackChips++;}
			if (state[i][j]==-1){amountOfWhiteChips++; }
			
}}
 console.log("Negras: "+ amountOfBlackChips);
 console.log("Blancas: "+ amountOfBlackChips);
}