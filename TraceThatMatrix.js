"use strict";

// https://edabit.com/challenge/humnHvXGXnBnStg5F

function trace(arr) {
    let sum = 0;
    arr.forEach(function (element, index) {
        sum += arr[index][index];
    });
    return sum;
}