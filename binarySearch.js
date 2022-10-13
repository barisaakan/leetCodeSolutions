var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var middle = Math.floor((left + right) / 2);;
    
    while(left <= right){
        if(target > nums[middle]){
            left = middle + 1;
            middle = Math.floor((left + right) / 2);
        }else if(target < nums[middle]){
            right = middle - 1;
            middle = Math.floor((left + right) / 2);
        }else{
            return middle;
        }
    }
    return -1;
};