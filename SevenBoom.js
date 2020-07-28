"use strict";

// https://edabit.com/challenge/6R6gReGTGwzpwuffD

function sevenBoom(arr) {
    if (arr.find((ele) => ele.toString().includes("7")) === undefined) {
        return "there is no 7 in the array";
    } else {
        return "Boom!";
    }
}