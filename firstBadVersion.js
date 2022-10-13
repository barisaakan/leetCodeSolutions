var solution = function(isBadVersion) {
    return function(n) {
        var left = 1, right = n, middle;
        
        while(left <= right){
            middle = Math.floor((left + right) / 2);
            if(isBadVersion(middle) && !isBadVersion(middle - 1)){
                return middle;
            }else if(isBadVersion(middle)){
                right = middle - 1;
            }else{
                left = middle + 1;
            }
        }
    };
};
