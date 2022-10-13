var moveZeroes = function(nums) {
    var slow = 0;
    var fast = 1;
    
    while(fast < nums.length){
       if(nums[slow] == 0){
           if(nums[fast] != 0){
              [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
              fast++;
              slow++; 
           }else{
               fast++;
           }  
       }else{
           slow++;
           fast++;
       }
    }
};