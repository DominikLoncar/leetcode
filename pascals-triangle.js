const pascalsTriangle = (numRows) => {
    
    let tmpRowArr = new Array(numRows).fill(0);
    tmpRowArr[0] = 1;
    let resultArr = [];

    for(let i=0; i<numRows; i++)
    {
        resultArr[i] = [...tmpRowArr];
    }

    // Populate double array with numRows amount of rows and columns, all 0s and then 1s for first row

    for(let i=1; i<numRows; i++)
    {
        for(let j=1; j<numRows; j++)
        {
            resultArr[i][j] = resultArr[i-1][j] + resultArr[i-1][j-1];
        }
    }

    return resultArr[numRows-1];
};

console.log(pascalsTriangle(5));