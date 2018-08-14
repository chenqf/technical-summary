



/**
 * @param {number[]} w
 */
const Solution = function(w) {
    this.list = [];
    this.sum = 0;
    for(let i = 0;i<w.length; i++){
        this.list.push([this.sum,this.sum + w[i] - 1]);
        this.sum = this.sum + w[i];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let index = ~~(Math.random() * this.sum);
    let left = 0,
        right = this.list.length - 1;
    while (left <= right){
        let mid = ~~((left + right)/2),
            arr = this.list[mid];
        if(arr[0] <= index && index <= arr[1]){
            return mid;
        }else if(index < arr[0]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
};