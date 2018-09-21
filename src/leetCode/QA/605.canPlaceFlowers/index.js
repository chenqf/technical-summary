


let canPlaceFlowers = function(flowerbed, n) {
    let num = 0;
    for(let i = 0,len = flowerbed.length; i<len; i++){
        let pre = flowerbed[i - 1] || 0,
            cur = flowerbed[i],
            next = flowerbed[i + 1] || 0;
        if(!pre && !next && !cur){
            flowerbed[i] = 1
            num++
        }
    }
    return num >= n;
};

canPlaceFlowers([1,0,0,0,0,1],2)