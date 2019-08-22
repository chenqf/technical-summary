const clone = function(data){
    if(typeof data !== 'object'){
        return data;
    }
    let keys = Object.keys(data);
    let result = Array.isArray(data) ? [] : {};
    keys.forEach(key=>{
        if(typeof data[key] === 'object'){
            result[key] = clone(data[key]);
        }else{
            result[key] = data[key];
        }
    })
    return result;
}
