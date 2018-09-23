


let isValidSudoku = function(board) {
    let rowMap = new Map();
    let colMap = new Map();
    let array = Array.from({length:9}).map(()=> new Map());
    for(let i = 0; i<9; i++){
        for(let j = 0; j<9; j++){
            //校验行
            let rowCur = board[i][j];
            if(rowMap.has(rowCur) && rowCur !== '.'){
                return false;
            }
            rowMap.set(rowCur,1);
            if(j === 8){
                rowMap.clear();
            }
            //校验列
            let colCur = board[j][i];
            if(colMap.has(colCur) && colCur !== '.'){
                return false;
            }
            colMap.set(colCur,1);
            if(j === 8){
                colMap.clear();
            }
            //校验小方阵
            let index = Math.floor(i/3) * 3 + Math.floor(j/3)
            let cellMap = array[index];
            let cur = board[i][j];
            if(cellMap.has(cur) && cur !== '.'){
                return false;
            }
            cellMap.set(cur,1);
        }
    }
    return true;
};