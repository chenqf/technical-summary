
## 找到 K 个最接近的元素
> 给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。

### 示例 1
> 输入: [1,2,3,4,5], k=4, x=3     
> 输出: [1,2,3,4]

### 示例 2
> 输入: [1,2,3,4,5], k=4, x=-1        
> 输出: [1,2,3,4]

### 说明:
+ k 的值为正数，且总是小于给定排序数组的长度。
+ 数组不为空，且长度不超过 Math.pow(10,4)
+ 数组里的每个元素与 x 的绝对值不超过 Math.pow(10,4)

### 双指针解法
```javascript 1.8
let findClosestElements = function(arr, k, x) {
    let len = arr.length;
    let left = 0,
        right = len - 1;
    while (right - left + 1 > k){
        let l = Math.abs(arr[left] - x),
            r = Math.abs(arr[right] - x);
        if(r >= l){
            right--;
        }else{
            left ++;
        }
    }
    return arr.slice(left,right + 1);
};
```

### 二分法解法
```javascript 1.8
let findClosestElements = function(arr, k, x) {
    let len = arr.length;
    let left = 0,
        right = len - k;
    while (left <= right){
        let mid = ~~((left + right)/2);
        if(x - arr[mid] > arr[mid + k] - x){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return arr.slice(left,left + k);
};
```