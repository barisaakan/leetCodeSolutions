var solution = function(isBadVersion) {
    return function(n) {
        var searchArea = [1, n];
        var middle;
        while(searchArea[1] - searchArea[0] >= 50){
            middle = searchArea[0] + Math.floor((searchArea[1] - searchArea[0])/2);
            if(isBadVersion(middle)) searchArea[1] = middle;
            else searchArea[0] = middle;
        }
        for(var i = searchArea[0]; i <= searchArea[1]; i++){
            if(isBadVersion(i)) return i;
        } 
    };
};
