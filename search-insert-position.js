const searchInsert = function(nums, target) {
    
    let targetPosition = nums.length;

    for(let i=0; i<nums.length-1; i++)
    {
        if(nums[i] === target)
        {
            targetPosition = i+1;
            break;
        }

        if(target >= nums[i] && target <= nums[i+1])
        {
           
            targetPosition = i+1;
            break;
        }
    }

    return targetPosition;
};

console.log(searchInsert([1,3,5,6],5));