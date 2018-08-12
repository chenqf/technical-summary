
## 寻找比目标字母大的最小字母
> 给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。       
> 数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。

### 示例 1
> 输入: letters = ["c", "f", "j"]   target = "a"      
> 输出: "c"

### 示例 2
> 输入: letters = ["c", "f", "j"] target = "c"        
> 输出: "f"   

### 示例 3
> 输入: letters = ["c", "f", "j"] target = "d"
> 输出: "f"   



### 注意
+ letters长度范围在[2, 10000]区间内。
+ letters 仅由小写字母组成，最少包含两个不同的字母。
+ 目标字母target 是一个小写字母。

### 解法 
```javascript 1.8
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
```
