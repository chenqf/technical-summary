



let merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    let i = m - 1,j = n - 1,index = m + n - 1;
    while (i >= 0 || j >= 0){
        if(i< 0){
            nums1[index] = nums2[j];
            j--;
        }else if(j < 0){
            nums1[index] = nums1[i];
            i--;
        }else if(nums1[i]>nums2[j]){
            nums1[index] = nums1[i];
            i--
        }else{
            nums1[index] = nums2[j];
            j--;
        }
        index -- ;
    }
};
