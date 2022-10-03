var lengthOfLongestSubstring = function(s) {
    var substring = '';
    var maxLength = 0;
    
    for(var i = 0; i < s.length; i++){  
        
        if(substring.includes(s[i])){
            substring = substring.slice(substring.indexOf(s[i]) + 1, i) + s[i];
        }else{
            substring = substring + s[i];
        }
        
        if(substring.length > maxLength) maxLength = substring.length;
        
    }
    
    return maxLength;
};