// https://edabit.com/challenge/5232asan2yFuMGnHq

"use strict";

function unlucky13(nums) {
    return nums.filter((num) => num % 13 !== 0);
}