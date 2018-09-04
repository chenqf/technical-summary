

let findSubstring = function(s, words) {
    let res = [];
    let num = words.length;//共有几个单词
    if(!num){
        return res;
    }
    let len = words[0].length;//每个单词的长度
    let length = num * len;//匹配的字符串总长度
    let map = new Map();
    for(let i = 0; i<num; i++){
        if(map.has(words[i])){
            map.set(words[i],map.get(words[i]) + 1)
        }else{
            map.set(words[i],1)
        }
    }
    for(let i = 0; i < s.length - length + 1; i++){
        let m = new Map();
        let count = 0;
        for(let j = i; j<s.length; j = j + len){
            let str = s.substr(j,len);
            //匹配的字符串不在条件内，索引 i 移动
            if(!map.has(str)){
                break;
            }
            if(m.has(str)){
                m.set(str,m.get(str) + 1);
            }else{
                m.set(str,1);
            }
            if(m.get(str) > map.get(str)){
                break;
            }
            count ++ ;
        }
        if(count === num){
            res.push(i)
        }
    }
    return res
};


console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"]));
