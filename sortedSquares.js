var sortedSquares = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var leftSquared = nums[left] * nums[left];
    var rightSquared = nums[right] * nums[right];
    var resultArray = [];
    var currentIndex = 0 
    
    while(left <= right){
        if(leftSquared >= rightSquared){
            resultArray.push(leftSquared);
            left++;
            leftSquared = nums[left] * nums[left]
        }else{
            resultArray.push(rightSquared);
            right--;
            rightSquared = nums[right] * nums[right];
        }
    }
    
    return resultArray.reverse();
};