


let nextGreatestLetter = function(letters, target) {
   let len = letters.length,
       left = 0 ,
       right = len - 1;
   while (left <= right){
       let mid = ~~((left + right)/2),
           midVal = letters[mid];
       if(midVal === target){
           while (letters[mid + 1] === letters[mid]){
               mid++;
           }
           return letters[(mid + 1)%len];
       }else if(target > midVal){
           left = mid + 1;
       }else{
           right = mid - 1;
       }
   }
   return letters[left%len]
};