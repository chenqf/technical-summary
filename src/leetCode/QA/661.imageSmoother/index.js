


let imageSmoother = function(M) {
    let r = M.length,
        l = M[0].length,
        res = Array.from({length:r},()=>[]);
    for(let i = 0;i<r; i++){
        for(let j = 0; j<l; j++){
            let num = 9,
                top,
                right,
                bottom,
                left,
                leftTop,
                rightTop,
                leftBottom,
                rightBottom,
                cur = M[i][j];
            //上
            if(i > 0){
                top = M[i - 1][j];
            }else{
                top = 0;
                num --;
            }
            //右
            if(j < l - 1){
                right = M[i][j + 1]
            }else{
                right = 0;
                num --;
            }
            //下
            if(i < r - 1){
                bottom = M[i + 1][j];
            }else{
                bottom = 0;
                num --;
            }
            //左
            if(j > 0){
                left = M[i][j - 1];
            }else{
                left = 0;
                num --;
            }
            //左上
            if(j > 0 && i > 0){
                leftTop = M[i - 1][j - 1];
            }else{
                leftTop = 0;
                num --;
            }
            //左下
            if(j > 0 && i < r - 1){
                leftBottom = M[i + 1][j - 1];
            }else{
                leftBottom = 0;
                num --;
            }
            //右上
            if(j < l - 1 && i > 0){
                rightTop = M[i -1][j + 1];
            }else{
                rightTop = 0;
                num --;
            }
            //右下
            if(j < l - 1 && i < r - 1){
                rightBottom = M[i + 1][j + 1];
            }else{
                rightBottom = 0;
                num --;
            }
            res[i][j] = ~~((top+right+bottom+left+leftTop+rightTop+leftBottom+rightBottom+cur)/num)
        }
    }
    return res;
};


imageSmoother([[1,1,1],[1,0,1],[1,1,1]])