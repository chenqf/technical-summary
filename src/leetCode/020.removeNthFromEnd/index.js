

let isValid = function(s) {
    if(!s){
        return true;
    }
    let array = [];
    for(let i = 0,len = s.length; i<len; i++){
        let cur = s.charAt(i);
        if(cur === '(' || cur === '{' || cur === '['){
            array.push(cur);
        }else if(!array.length){
            return false;
        }else{
            let pre = array.pop();
            if(pre === '(' && cur !== ')'){
                return false;
            }
            if(pre === '{' && cur !== '}'){
                return false;
            }
            if(pre === '[' && cur !== ']'){
                return false;
            }
        }
    }
    return !array.length
};