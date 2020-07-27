// https://edabit.com/challenge/6MZx5RqKYkFaogeAQ

"use strict";

function getOnlyEvens(nums) {
    const result = [];
    nums.forEach(function (element, index) {
        if (element % 2 === 0 && index % 2 === 0) {
            result.push(element);
        }
    });
    return result;
}