const searchInsert = function(nums, target) {
    
    let targetPosition = nums.length;

    if(target < nums[0])
    {
        return 0;
    }
    
    for(let i=0; i<nums.length-1; i++)
    {
        if(nums[i] === target)
        {
            return i+1;
        }

        if(target >= nums[i] && target <= nums[i+1])
        {
           
            return i+1;
        }
    }

    return targetPosition;
};

console.log(searchInsert([1,3,5,6],5));