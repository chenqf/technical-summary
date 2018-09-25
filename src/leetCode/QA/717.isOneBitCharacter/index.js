

let isOneBitCharacter = function(bits) {
    let len = bits.length,
        i = 0;
    while (i<len){
        let cur = bits[i];
        if(i === len - 2 && cur === 1){
            return false
        }else if(i === len - 1){
            return cur === 0;
        }else if(cur === 1){
            i = i + 2;
        }else{
            i++;
        }
    }
};