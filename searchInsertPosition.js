var searchInsert = function(nums, target) {
    var left = 0,
        right = nums.length - 1,
        middle;
    
    while(left <= right){
        middle = Math.floor((left + right) / 2);
        if(nums[middle] > target){
            right = middle - 1;
        }else if(nums[middle] < target){
            left = middle + 1;
        }else{
            return middle;
        }
    }
    return left;
};