
## 生命游戏
> 根据百度百科，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在1970年发明的细胞自动机。       
> 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞具有一个初始状态 live（1）即为活细胞， 或 dead（0）即为死细胞。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：      
+ 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
+ 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
+ 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
+ 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
> 根据当前状态，写一个函数来计算面板上细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。     


### 示例 1
> 输入:       
> [         
> &nbsp;&nbsp;&nbsp;&nbsp;   [0,1,0],           
> &nbsp;&nbsp;&nbsp;&nbsp;   [0,0,1],           
> &nbsp;&nbsp;&nbsp;&nbsp;   [1,1,1],           
> &nbsp;&nbsp;&nbsp;&nbsp;   [0,0,0]            
>  ]        
> 输出:               
> [         
> &nbsp;&nbsp;&nbsp;&nbsp;   [0,0,0],,           
> &nbsp;&nbsp;&nbsp;&nbsp;   [1,0,1],           
> &nbsp;&nbsp;&nbsp;&nbsp;   [0,1,1],           
> &nbsp;&nbsp;&nbsp;&nbsp;   [0,1,0]            
>  ]        



### 说明
+ 你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
+ 本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？

### 解法
```javascript 1.8
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
```