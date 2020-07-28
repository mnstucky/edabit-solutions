"use strict";

// https://edabit.com/challenge/b7iHQDw72zzkmgCun

function countBoomerangs(arr) {
    let count = 0;
    arr.forEach(function (value, index) {
        if (value === arr[index + 2] && value !== arr[index + 1]) {
            count += 1;
        } 
    });
    return count;
}