/**
 * 暴力求解
 */
let maxArea1 = function (list) {
    let result = 0;
    for(let i = 0,len = list.length; i<len; i++){
        for(let j = i+1; j<len; j++){
            let x = (j - i);
            let y = Math.min(list[i],list[j]);
            result = Math.max(result,x*y)
        }
    }
    return result;
};
/**
 * 双指针法
 */
let maxArea2 = function (list) {
    let i = 0,j = list.length -1,result = 0;
    while(i < j){
        result = Math.max(result ,(j - i ) * Math.min(list[i],list[j]))
        if(list[i] < list[j]){
            i++;
        }else{
            j--;
        }
    }
    return result;
};

