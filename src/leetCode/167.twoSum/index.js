

let twoSum = function(numbers, target) {
    let map = new Map();
    for(let i = 0,len = numbers.length; i<len; i++){
        let cur = numbers[i];
        if(map.has(target - cur)){
            return [map.get(target - cur) + 1,i + 1]
        }
        map.set(cur,i);
    }
};

