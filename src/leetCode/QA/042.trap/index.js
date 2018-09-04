
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
trap([0,1,0,2,1,0,1,3,2,1,2,1]);