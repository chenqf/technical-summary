

let gameOfLife = function(board) {
    let m = board.length;
    let n = board[0].length;
    function getNum(i,j) {
        if(i < 0 || j < 0 || i>=m || j>=n){
            return 0;
        }
        if(board[i][j] === 2){
            return 1
        }else if(board[i][j] === 3){
            return 0
        }else{
            return board[i][j];
        }
    }
    // 0 死细胞还是死细胞
    // 1 活细胞还是活细胞
    // 2 活细胞变成死细胞
    // 3 死细胞变成活细胞
    for(let i = 0;i<m; i++){
        for(let j = 0;j<n;j++){
            let cur = board[i][j];
            let sum = getNum(i,j - 1) // 左
                + getNum(i,j + 1) // 右
                + getNum(i - 1,j) // 上
                + getNum(i + 1,j) // 下
                + getNum(i - 1,j - 1) // 左上
                + getNum(i + 1,j + 1) // 右下
                + getNum(i + 1,j - 1) // 左下
                + getNum(i - 1,j + 1); // 右上
            //当前是死细胞
            if(cur === 0 || cur === 3){
                //三个活细胞，死细胞变为活细胞
                if(sum === 3){
                    board[i][j] = 3;
                }
            }
            //当前是活细胞
            else if(cur === 1 || cur === 2){
                //活细胞少于2个，死亡
                //活细胞 2 或 3 个，仍然存货
                //活细胞大于3个，死亡
                if(sum < 2 || sum >3){
                    board[i][j] = 2;
                }
            }

        }
    }
    for(let i = 0;i<m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board[i][j] % 2;
        }
    }
};