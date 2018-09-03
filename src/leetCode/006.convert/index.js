

let convert = function (str,row = 1) {
    if(row === 1){
        return str;
    }
    let result = '';
    let len = str.length;
    let nodeLen = 2*row -2;
    for(let i = 0; i<row; i++){
        let j = i;
        if(i === 0 || i === row -1){
            while(j < len){
                result = result + str.charAt(j);
                j = j + nodeLen;
            }
        }else{
            let k = nodeLen - i;
            while (j <len){
                result = result + str.charAt(j);
                if(k<len){
                    result = result + str.charAt(k);
                }
                j = j + nodeLen;
                k = k + nodeLen;
            }
        }
    }
    return result;
};




console.log(convert('0123456789',3));

