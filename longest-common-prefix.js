const longestCommonPrefix = function(strs) {
    


    let maxLetters = -1;
    let longestCommonString = '';

    for(let i=0; i<strs.length; i++)
    {
        if(strs[i].length > maxLetters)
        {
            maxLetters = strs[i].length;
        }
    }


    for(let i=0; i<maxLetters; i++)
    {  
        let shouldBreak = false;

        for(let j=1; j<strs.length; j++)
        {
            if(strs[j][i] !== strs[j-1][i])
            {
                shouldBreak=true;
                break;
            }
        }
        
        if(shouldBreak)
        {
            break;
        }
        longestCommonString+=strs[0][i];
    }

    return longestCommonString;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));