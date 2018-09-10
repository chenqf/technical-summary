
## 单词搜索
> 给定一个二维网格和一个单词，找出该单词是否存在于网格中。          
> 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。          
> 同一个单元格内的字母不允许被重复使用。       

### 示例:
> board = [         
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['A','B','C','E'],          
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['S','F','C','S'],            
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['A','D','E','E']         
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]         
> 给定 word = "ABCCED", 返回 true.
> 给定 word = "SEE", 返回 true.
> 给定 word = "ABCB", 返回 false.


### 解法
```javascript 1.8
var helper = function (board, i, j, word, index, visited) {
    if (word.length === index) {
        return true;
    }
    let m = board.length,
        n = board[0].length,
        cur = word[index];
    if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || board[i][j] !== cur) {
        return false;
    }
    if (!cur) {
        return true;
    }
    visited[i][j] = true;
    let res = helper(board, i - 1, j,word, index + 1, visited)
        || helper(board, i + 1, j, word,index + 1, visited)
        || helper(board, i , j - 1, word,index + 1, visited)
        || helper(board, i , j + 1, word,index + 1, visited);
    visited[i][j] = false;
    return res;
};
var exist = function (board, word) {
    let m = board.length,
        n = board[0].length,
        visited = [];
    for (let i = 0; i < m; i++) {
        visited.push([]);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (helper(board, i, j, word, 0, visited)) {
                return true;
            }
        }
    }
    return false;
};
```
