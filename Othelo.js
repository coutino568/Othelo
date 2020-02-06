const isP1Turn =true;
const horizontalSpaces = 8;
const veritaclSpaces =8;
const state= [
	 [0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]
	,[0,0,0,0,0,0,0,0,]];
	//]

//console.log(state);
printState();




function printState(){
	for (let i =0; i<3; i++) {
		for (let j=0; j<8; j++){
			printASpace(state[i][j]);
		}
	}

}
function printASpace(color){
//debe crear caja 


//dependiendo del estado , asigna el color
	switch (color){
		case -1:
		console.log("White");

		break;

		case 0:
		console.log("Empty");

		break;

		case 1:
		console.log("Black");

		break;

	}

}


function printTurn(){

}

function refreshState(row, column, typeOfChip){
	checkVertically(row,column);
	checkHorizontally(row,column);
	checkDiagonally(row,column);
	printState();

}

function checkVertically(row, column, typeOfChip){}

function checkHorizontally(row,column, typeOfChip) {}

function checkDiagonally(row,column,typeOfChip){}