

let simplifyPath = function(path) {
    let list = path.split('/');
    let array = [];
    for(let i = 0,len = list.length; i<len; i++){
        let cur = list[i];
        if(cur === '' || cur === '.'){
            continue
        }
        if(cur === '..'){
            array.pop();
        }else{
            array.push(cur);
        }
    }
    return '/' + array.join('/')
};
