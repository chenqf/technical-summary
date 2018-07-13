
function sumIndex(sum = 0,arr) {
    for(let i = 0,len = arr.length; i< len; i++){
        let value = sum - arr[i];
        let index = arr.indexOf(value);
        if(index >= 0){
            return [i,index];
        }
    }
    return false;
}
