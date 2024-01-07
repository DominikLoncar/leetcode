const plusOne = function(digits) {
    
    const digitsCount = digits.length;
    let result = 0;


    
    result = digits.map((digit, i) => {
        
       // console.log(`i ${i}`);
        //console.log(10**(digitsCount - i - 1) * digit);
        
        if(i-1 !== 0)
        {
            result += digit * (10**(digitsCount - i - 1));
        }
        

        //console.log(``);

        return digit;
    })

    return result;
};

console.log(plusOne([1,2,3]));