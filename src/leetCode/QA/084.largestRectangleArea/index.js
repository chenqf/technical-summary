

let largestRectangleArea = function(heights) {
    let res = 0;
    let st = [];
    heights.push(0);
    for (let i = 0; i < heights.length; ++i) {
        if (!st.length || heights[st[st.length - 1]] < heights[i]) {
            st.push(i);
        } else {
            let cur = st.pop();
            res = Math.max(res, heights[cur] * (!st.length ? i : (i - st[st.length - 1] - 1) ));
            --i;
        }
    }
    return res;
};



largestRectangleArea([3,6,5,7,4,8,1,0])