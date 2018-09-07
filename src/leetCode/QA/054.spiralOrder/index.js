


let spiralOrder = function (matrix) {
    let m = matrix.length || 0,//行
        n = (matrix[0] && matrix[0].length) || 0,//列
        len = m * n,
        res = [];
    let i = 0, //上行已使用
        j = 0 ,//右列已使用
        ii = 0,//下行已使用
        jj = 0;//左列已使用
    while (res.length < len){
        //行排序，左到右
        for(let k = jj;k<n - j && res.length < len; k++){
            res.push(matrix[i][k])
        }
        i++;
        //列排序，上到下
        for(let k = i;k<m - ii && res.length < len;k++){
            res.push(matrix[k][n - 1 - j])
        }
        j++;
        //行排序，右到左
        for(let k = n - 1 - j;k>=jj && res.length < len;k--){
            res.push(matrix[m-1-ii][k])
        }
        ii++;
        for(let k = m - 1 - ii;k>=i && res.length < len;k--){
            res.push(matrix[k][jj])
        }
        jj++
    }
    return res;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));

