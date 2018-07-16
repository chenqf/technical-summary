

```javascript 1.8
/**
 * 获取数组中元素与索引值和的最大/最小值
 * 应用假设法，首先限定第一项是最大/最小
 */
function getMaxOrMinItemAndIndex(list) {
    let maxIndex = 0,
        minIndex = 0,
        minValue = list[0],
        maxValue = list[0];
    for(let i = 1,len = list.length; i<len; i++){
        if(list[i] + i > maxValue){
            maxIndex = i;
            maxValue = list[i] + i;
        }
        if(list[i] + i < minValue){
            minIndex = i;
            minValue = list[i] + i;
        }
    }
    return {min:minIndex,max:maxIndex}
}

let arr = [2, 10, 9, 1, 8, 3, 4];
let result = getMaxOrMinItemAndIndex(arr);
console.log(result); // {min: 0, max: 4}

```