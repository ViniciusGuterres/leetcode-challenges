/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

const result = strStr('hello', 'll');

// Output expected 0
console.log("🚀 ~ result:", result);