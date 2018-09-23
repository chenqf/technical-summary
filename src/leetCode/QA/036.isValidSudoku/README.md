
## 有效的数独
> 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
+ 数字 1-9 在每一行只能出现一次。        
+ 数字 1-9 在每一列只能出现一次。        
+ 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。      
![avatar](https://raw.githubusercontent.com/chenqf/technical-summary/master/src/leetCode/QA/036.isValidSudoku/img.png)
>上图是一个部分填充的有效的数独。       
>数独部分空格内已填入了数字，空白格用 '.' 表示。


### 示例
> 输入:       
> [              
> &nbsp;&nbsp;&nbsp;&nbsp;["5","3",".",".","7",".",".",".","."],               
> &nbsp;&nbsp;&nbsp;&nbsp;["6",".",".","1","9","5",".",".","."],               
> &nbsp;&nbsp;&nbsp;&nbsp;[".","9","8",".",".",".",".","6","."],               
> &nbsp;&nbsp;&nbsp;&nbsp;["8",".",".",".","6",".",".",".","3"],               
> &nbsp;&nbsp;&nbsp;&nbsp;["4",".",".","8",".","3",".",".","1"],               
> &nbsp;&nbsp;&nbsp;&nbsp;["7",".",".",".","2",".",".",".","6"],               
> &nbsp;&nbsp;&nbsp;&nbsp;[".","6",".",".",".",".","2","8","."],               
> &nbsp;&nbsp;&nbsp;&nbsp;[".",".",".","4","1","9",".",".","5"],               
> &nbsp;&nbsp;&nbsp;&nbsp;[".",".",".",".","8",".",".","7","9"]                
> ]     
> 输出: true

### 求解
```javascript 1.8
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
```
