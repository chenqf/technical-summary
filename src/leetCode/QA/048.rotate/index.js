

let rotate = function(matrix) {
    let len = matrix.length;
    let list = [];
    for(let i = 0; i<len; i++){
        for(let j = 0; j<len ;j++){
            let cur = matrix[i][j];
            list.push({
                i:j,
                j:len - 1 - i,
                cur
            })
        }
    }
    for(let k = 0; k<list.length; k++){
        let item = list[k],
            i = item.i,
            j = item.j;
        matrix[i][j] = item.cur;
    }
};
