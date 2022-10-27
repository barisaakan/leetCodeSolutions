const values = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
}

var romanToInt = function(s) {
    var resultNumber = 0;
    for(var i = 0; i < s.length; i++){
        if(values[s[i]] < values[s[i + 1]]) resultNumber -= values[s[i]];
        else resultNumber += values[s[i]];
    }
    return resultNumber;   
};