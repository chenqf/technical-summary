const clone = function(data){
    let map = new WeakMap();
    function dp(obj){
        if(typeof obj !== 'object'){
            return obj;
        }
        let o = map.get(obj);
        if(o){
            return o;
        }
        let result = Array.isArray(obj) ? [] : {};
        map.set(obj,result);
        let keys = Object.keys(obj);
        keys.forEach(key=>{
            if(typeof obj[key] === 'object'){
                result[key] = dp(obj[key]);
            }else{
                result[key] = obj[key];
            }
        })
        return result;
    }
    return dp(data);
}
