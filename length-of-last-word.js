const lengthOfLastWord = function(s) {
    
    let foundFirstLetterFromBack = false;
    let lastWordLength = 0;

    for(let i=s.length-1; i>=0; i--)
    {
        if(!foundFirstLetterFromBack && s[i] === ' ')
        {
            continue;
        }

        if(foundFirstLetterFromBack && s[i] === ' ')
        {
            break;
        }

        if(!foundFirstLetterFromBack && s[i] !== ' ')
        {
            foundFirstLetterFromBack = true;
        }

        console.log(s[i]);
        lastWordLength++;
    }

    return lastWordLength;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));