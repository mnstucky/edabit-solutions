"use strict";

// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

function getAbsSum(arr) {
    return arr.reduce((acc, ele) => acc += Math.abs(ele), 0);
}