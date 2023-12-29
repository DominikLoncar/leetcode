const strStr = function(haystack, needle) {
    let indexOfFirstStringOccurance = -1;

    for(let i=0; i<haystack.length - needle.length + 1; i++)
    {
        let flag = true;

        for(let j=0; j<needle.length; j++)
        {
            if(haystack[i+j] !== needle[j])
            {
                flag = false;
                break;
            }
        }

        if(flag)
        {
            indexOfFirstStringOccurance = i;
            break;
        }
    }

    return indexOfFirstStringOccurance;
};

console.log(strStr('blablablaab','laa'));