

let hIndex = function(citations) {
    citations.sort((a,b)=>a-b);
    let len = citations.length;
    let i = 0;
    while (i<len){
        let num = len - i;
        if(citations[i] >= num){
            return num;
        }
        i++;
    }
    return 0;
};

console.log(hIndex([3,0,6,1,5]));