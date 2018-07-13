
let l1 = Array.from({length:100000}).map(()=>parseInt(Math.random() * 100 * Math.pow(10,parseInt(Math.random().toString().slice(-1)))));
let l2 = Array.from({length:100000}).map(()=>parseInt(Math.random() * 100 * Math.pow(10,parseInt(Math.random().toString().slice(-1)))));
/**
 * 方法1 性能较差
 * 时间复杂度为 n²
 */
function mergeArray(arr1 = [],arr2 = []) {
    let result = [];
    while (arr1.length && arr2.length){     //此处时间复杂度为 n
        result.push(arr1[0] < arr2[0] ? arr1.shift():arr2.shift()); // 此处时间复杂度为 n
    }
    return result.concat(arr1,arr2);
}
/**
 * 方法2 性能较好
 * 时间复杂度为 n
 */
function mergeArray(arr1 = [],arr2 = []) {
    let result = [],
        len1 = arr1.length,
        len2 = arr2.length,
        k = 0,
        i = 0,
        j = 0;
    while (true){
        if(i >= len1 && j >= len2){
            return result;
        }else if(i >= len1){
            result[k] = arr2[j];
            j++;
        }else if(j >= len2){
            result[k] = arr1[i];
            i++;
        }else if(arr1[i] > arr2[j]){
            result[k] = arr2[j];
            j++;
        }else{
            result[k] = arr1[i];
            i++;
        }
        k++;
    }
}

mergeArray(l1,l2);

