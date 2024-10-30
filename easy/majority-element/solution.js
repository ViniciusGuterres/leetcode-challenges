var majorityElement = function (nums) {
    const counterObj = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!counterObj[num]) {
            counterObj[num] = 1;
            continue;
        }

        counterObj[num] = counterObj[num] + 1;
    }

    const counterKeys = Object.keys(counterObj).sort((a, b) => {
        const aValue = counterObj[a];
        const bValue = counterObj[b];

        if (aValue > bValue) return -1;

        if (aValue < bValue) return 1;

        return 0;
    });

    return +counterKeys[0];
};

const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);

// Output expected: 2
console.log("🚀 ~ result:", result);