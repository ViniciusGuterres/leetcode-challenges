/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let counter = 0;
    
    nums.forEach(item => {
        if (item !== val) {
            nums[counter] = item;
            counter++;
        }
    });

    return counter;
};

const result = removeElement([3,2,2,3], 3);
console.log("🚀 ~ result:", result)