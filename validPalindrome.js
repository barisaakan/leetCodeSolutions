var isPalindrome = function(s) {
    const regex = new RegExp(/^[a-z0-9]+$/i);
    var left = 0;
    var right = s.length - 1;
    while(left <= right){
        if(!regex.test(s[left])){
            left++;  
        }else if(!regex.test(s[right])){
            right--;  
        }else if(s[left].toLowerCase() == s[right].toLowerCase()){
            left++;
            right--;     
        }else{
            return false;
        }
    }
    return true;
};