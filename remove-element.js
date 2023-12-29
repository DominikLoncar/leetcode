const removeElement = function(nums, val) {

    nums.map((num, i) => {

        if(num === val)
        {
            nums.splice(i,1);
        }
    })

    return nums;
};

console.log(removeElement([0,1,2,2,3,0,4,2],2));