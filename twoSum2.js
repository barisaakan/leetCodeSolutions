var twoSum = function(numbers, target) {
    var index1 = 0;
    var index2 = numbers.length - 1;
    var sum;
    
    while(index1 < index2){
        sum = numbers[index1] + numbers[index2];
        if(sum > target) index2--;
        else if(sum < target) index1++;
        else break;
    }
    
    index1++;
    index2++;
    
    return [index1, index2];
};