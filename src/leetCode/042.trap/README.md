
## 接雨水
> 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
     
![avatar](https://raw.githubusercontent.com/chenqf/technical-summary/master/src/leetCode/042.trap/img.png)
      
> 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

### 示例 1
> 输入: [0,1,0,2,1,0,1,3,2,1,2,1]     
> 输出: 6     

### 解法
```javascript 1.8
let trap = function(height) {
    let res = 0,
        len = height,
        l = 0,
        r = len - 1;
    while (l < r){
        let left = height[l];
        let right = height[r];
        let min = Math.min(left,right);
        if(min === left){
            l++;
            while (l < r && height[l] < min){
                res = res + min - height[l];
                l++;
            }
        }else if(min === right){
            r--;
            while (l < r && height[r] < min){
                res = res + min - height[r];
                r--;
            }
        }
    }
    return res;
};
```
