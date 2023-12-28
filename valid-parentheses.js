// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// ()[({}())]]()(({{} {)[)]}())))

const isValid = function(s) {

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i=0; i<s.length; i++) {
    console.log(s[i])

    if(s[i] === '(')
    {
        count1++;
    }
    else if(s[i] === ')')
    {
        count1--;
    }

    
    if(s[i] === '[')
    {
        count2++;
    }
    else if(s[i] === ']')
    {
        count2--;
    }

    

    if(s[i] === '{')
    {
        count3++;
    }
    else if(s[i] === '}')
    {
        count3--;
    }

    if(count1 < 0 || count2 < 0 || count3 < 0)
    {
        return false;
    } 
  }  

  return true;

};

console.log(isValid('()[({})]]'));