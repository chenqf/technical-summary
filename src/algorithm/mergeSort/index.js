
// 用于排序的数组 10万个元素
let list = Array.from({length:100000}).map(()=>parseInt(Math.random() * 100 * Math.pow(10,parseInt(Math.random().toString().slice(-1)))));

//---------------------------------递归版本，最简实现-------------------------------------------

function merge(left, right) {
    let tmp = [];
    while (left.length && right.length) {
        if (left[0] < right[0]){
            tmp.push(left.shift()); // 此处损耗性能严重
        }
        else{
            tmp.push(right.shift()); // 此处损耗性能严重
        }
    }
    return tmp.concat(left, right);
}

function mergeSort(list = []) {
    let len = list.length;
    if (len <= 1){
        return list;
    }
    let mid = parseInt(len / 2),
        left = list.slice(0, mid),
        right = list.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

console.time('merge1');
mergeSort(list); // merge1: 620.807861328125ms
console.timeEnd('merge1');

//---------------------------------递归版本，避免使用数组方法，提高性能-------------------------------------------

function merge(left,right) {
    let leftLen = left.length,
        rightLen = right.length,
        leftIndex = 0,
        rightIndex = 0,
        temp = [];
    for(let i = 0; i<leftLen + rightLen; i++){
        if(leftIndex === leftLen){
            temp[i] = right[rightIndex++];
        }else if(rightIndex === rightLen){
            temp[i] = left[leftIndex++];
        }else {
            temp[i] = left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex ++]
        }
    }
    return temp;
}
function mergeSort(list = []) {
    let len = list.length;
    if(len <= 1){
        return list;
    }
    let mid = parseInt(len/2),
        left = [],
        right = [];
    for(let i = 0; i<len; i++){
        if(i<mid){
            left[i] = list[i];
        }else{
            right[i - mid] = list[i];
        }
    }
    return merge(mergeSort(left),mergeSort(right));
}

console.time('merge2');
mergeSort(list); // merge2: 47.4619140625ms
console.timeEnd('merge2');

//---------------------------------非递归版本，避免栈溢出，性能对比递归方式，性能稍差-------------------------------------------

function merge(left = [],right = []) {
    let leftLen = left.length,
        rightLen = right.length,
        leftIndex = 0,
        rightIndex = 0,
        temp = [];
    for(let i = 0; i<leftLen + rightLen; i++){
        if(leftIndex === leftLen){
            temp[i] = right[rightIndex++];
        }else if(rightIndex === rightLen){
            temp[i] = left[leftIndex++];
        }else {
            temp[i] = left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex ++]
        }
    }
    return temp;
}

function mergeSort(list = []) {
    let len = list.length;
    if(len <= 1){
        return list;
    }
    let works = [];
    //将原数组分解成多个小数组
    for(let i = 0; i < len; i++){
        works[i] = [list[i]]
    }
    //为避免奇数项整除舍弃最后一项，默认在数组后添加一项空
    works[len] = [];

    while (len > 1){ // 存在需要合并的子数组
        let j = 0;
        for(let i = 0; i < len; i = i + 2,j++){
            works[j] = merge(works[i],works[i+1])
        }
        works[j] = [];
        len = j;
    }
    return works[0];
}

console.time('merge3');
mergeSort(list); // merge3: 76.687744140625ms
console.timeEnd('merge3');

