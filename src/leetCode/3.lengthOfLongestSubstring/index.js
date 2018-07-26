// @flow Created by 陈其丰 on 2018/7/26.


let lengthOfLongestSubstring = function (str) {
    let len = str.length;
    if(len <= 1){
        return len;
    }
    let mid = ~~(len/2);//中间索引
    //计算从mid左边开始加字符，再从mid右边开始加字符
    let leftSet = new Set();
    leftSet.add(str.charAt(mid));
    for(let i = mid - 1;i>=0; i--){
        if(leftSet.has(str.charAt(i))){
            break;
        }
        leftSet.add(str.charAt(i));
    }
    for(let i = mid + 1,len = str.length; i<len; i++){
        if(leftSet.has(str.charAt(i))){
            break;
        }
        leftSet.add(str.charAt(i));
    }

    //计算从mid右边边开始加字符，再从mid左边开始加字符
    let rightSet = new Set();
    rightSet.add(str.charAt(mid));
    for(let i = mid + 1,len = str.length; i<len; i++){
        if(rightSet.has(str.charAt(i))){
            break;
        }
        rightSet.add(str.charAt(i));
    }
    for(let i = mid - 1;i>=0; i--){
        if(rightSet.has(str.charAt(i))){
            break;
        }
        rightSet.add(str.charAt(i));
    }

    let midNum = Math.max(leftSet.size,rightSet.size);
    let leftNum = lengthOfLongestSubstring(str.slice(0,mid));
    let rightNum = lengthOfLongestSubstring(str.slice(mid,str.length));
    console.log(midNum,leftNum,rightNum,mid);
    return Math.max(midNum,leftNum,rightNum);
};



let lengthOfLongestSubstring2 = function (str) {
  let list = str.split('');
  let len = 0;
  let result;
  for(let i = 0; i<list.length; i++){
      let arr = [list[i]];
      for(let j = i + 1; j<list.length; j++){
          if(arr.indexOf(list[j]) >= 0){
              break;
          }
          arr.push(list[j])
      }
      if(arr.length > len){
          arr.length = len;
          result = arr;
      }
  }
  return result.length;
};



console.log(lengthOfLongestSubstring2("bziuwnklhqzrxnb"));