console.log("ejs-chapter2.js is on")



function chessBoardMaker(sizeY,sizeX){
    let board = "";
    for (let y = 0; y < sizeY; y++){
        for (let x = 0; x < sizeX; x++){
            if ((x + y) % 2 == 0)
            board += " ";
            else
            board += "#";
        }
        board += "\n";
    }

    console.log(board);
}   

chessBoardMaker(11, 16)