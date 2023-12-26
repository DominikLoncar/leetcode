const isPalindrome = function(x) {
    let xReversed =  [...x.toString()].reverse().join("");
    console.log(xReversed)

    if(x.toString() === xReversed) 
    {
        return true;
    }

    else
    {
    return false;
    }
};

console.log(isPalindrome(1211))