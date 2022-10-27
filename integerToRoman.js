const values = {
    'I' : 1,
    'IV' : 4,
    'V' : 5,
    'IX' : 9,
    'X' : 10,
    'XL' : 40,
    'L' : 50,
    'XC' : 90,
    'C' : 100,
    'CD' : 400,
    'D' : 500,
    'CM' : 900,
    'M' : 1000
}

var intToRoman = function(num) {
    var resultArray  = [
        {letter:'M', value: 0},
        {letter:'CM', value: 0},
        {letter:'D', value: 0}, 
        {letter:'CD', value: 0},
        {letter:'C', value: 0}, 
        {letter:'XC', value: 0},
        {letter:'L', value: 0}, 
        {letter:'XL', value: 0},
        {letter:'X', value: 0}, 
        {letter:'IX', value: 0},
        {letter:'V', value: 0},
        {letter:'IV', value: 0},
        {letter:'I', value: 0},
    ];
    var remain = num;
    var resultStr = ''; 
    
    resultArray.map(i => {
        i.value = Math.floor(remain / values[i.letter]);
        for(var count = 0; count < i.value; count++){
            resultStr += i.letter;
        }
        remain -= i.value * values[i.letter];
    })
    
    return resultStr; 
};