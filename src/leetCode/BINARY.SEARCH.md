 
### 何时使用二分查找
1. 每次比较后可将查找空间一分为二
### 二分查找的组成
1. **预处理** 
    + 如果集合未排序，则进行排序
2. **二分查找** 
    + 使用循环或递归在每次比较后将空间划分为两半
3. **后处理** 
    + 在剩余空间中确定可行的候选者
### 二分查找的三个模板
1. 基本模板 ( 结束条件：left > right )
    > 这是一个标准的二分查找模板,用于查找可以通过访问数组中的单个索引来确定的元素或条件。
    ```javascript 1.8
    let binarySearch = function (nums,target) {
        if(!nums || !nums.length){
            return -1;
        }
        let len = nums.length,
            left = 0,
            right = len - 1;
        while (left <= right){
            let mid = ~~(left + (right - left)/2); // 避免left + right 出现溢出
            let midVal = nums[mid];
            if(midVal === target){
                return mid
            }else if(midVal > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return -1;
    };
    ```
    + 二分查找的最基础和最基本的形式
    + 查找条件可以不与元素的两侧进行比较的情况下确定
    + 不需要后处理，因为每一步中，你都在检查时候找到了元素
    #### 实际例子
    + [x 的平方根](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/069.mySqrt)
    + [猜数字大小](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/374.guessNumber)
    + [搜索旋转排序数组](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/033.search)
2. 高级模板 ( 结束条件：left === right )
    > 它用于查找需要访问数组中当前索引及其直接右邻居索引的元素或条件。
    ```javascript 1.8
    let binarySearch = function (nums,target) {
        if(!nums || !nums.length) return -1;
        let left = 0,
            right = nums.length;
        while ( left < right ){
            let mid = ~~(left + (right - left)/2), // 避免left + right 出现溢出
                midVal = nums[mid];
            if(midVal === target){
                return mid;
            }else if(midVal < target){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        if(left !== nums.length && nums[left] === target) return left;
        return -1;
    };
    ```
    + 一种实现二分查找的高级方法。
    + 查找条件需要访问元素的直接右邻居。
    + **使用元素的右邻居来确定是否满足条件，并决定是向左还是向右**。
    + **保证查找空间在每一步中至少有 2 个元素。**
    + 需要进行后处理。 当你剩下 1 个元素时，循环 / 递归结束。 需要评估剩余元素是否符合条件。
    #### 实际例子
    + [第一个错误的版本](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/278.solution)
    + [寻找峰值](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/162.findPeakElement)
    + [寻找旋转排序数组中的最小值](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/153.findMin)
3. 特殊模板 ( 结束条件：left + 1 < right )
    > 它用于搜索需要访问当前索引及其在数组中的直接左右邻居索引的元素或条件。
    ```javascript 1.8
    let binarySearch = function (nums,target) {
        if(!nums || !nums.length) return -1;
        let left = 0,
            right = nums.length - 1;
        while ( left + 1 < right ){
            let mid = ~~(left + (right - left)/2),
                midVal = nums[mid];
            if(midVal === target){
                return mid;
            }else if(midVal > target){
                right = mid;
            }else{
                left = mid;
            }
        }
        if(nums[left] === target) return left;
        if(nums[right] === target) return right;
        return -1;
    };
    ```
    + 实现二分查找的另一种方法。
    + **搜索条件需要访问元素的直接左右邻居。**
    + **使用元素的邻居来确定它是向右还是向左。**。
    + **保证查找空间在每个步骤中至少有 3 个元素。**
    + 需要进行后处理。 当剩下 2 个元素时，循环 / 递归结束。 需要评估其余元素是否符合条件。
    #### 实际例子
    + [在排序数组中查找元素的第一个和最后一个位置](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/034.searchRange)
    + [找到 K 个最接近的元素](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/658.findClosestElements)
    + [寻找峰值](https://github.com/chenqf/technical-summary/tree/master/src/leetCode/QA/162.findPeakElement)