"use strict";

// https://edabit.com/challenge/dzdoYrTL5vws4dFud

function nextElement(arr) {
    let difference = arr[1] - arr[0];
    return arr[arr.length - 1] + difference;
}