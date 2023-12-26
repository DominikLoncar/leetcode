const mergeTwoSortedLists = (list1, list2) => {
    
    list2.forEach(list2element => {

        for(let j=0; j<list1.length; j++) {
            if(list2element <= list1[j])
            {
                list1.splice(j,0, list2element)
                break;
            }
            else if (j+1 === list1.length)
            {
                list1.splice(j+1,0, list2element)
                break;
            }
        }

    })

    return list1;
}

console.log(mergeTwoSortedLists([1,2,3],[3,4,5]));