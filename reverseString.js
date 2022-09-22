var reverseString = function(s) {
    var len = s.length;
    var half = Math.floor(len / 2);
    
    for (var i = 0; i < half; i++){
       [ s[i], s[len - 1 - i] ] = [ s[len - 1 - i], s[i] ]
    }
    return s;
};