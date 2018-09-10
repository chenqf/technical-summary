

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