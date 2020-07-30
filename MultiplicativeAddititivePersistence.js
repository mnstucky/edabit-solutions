"use strict";

// https://edabit.com/challenge/vHvu4Wis8RhmQbwXm

function additivePersistence(n) {
    let count = 0;
    while (String(n).length > 1) {
        n = String(n).split("").reduce((acc, ele) => Number(acc) + Number(ele));
        count += 1;
    }
    return count;
}

function multiplicativePersistence(n) {
    let count = 0;
    while (String(n).length > 1) {
        n = String(n).split("").reduce((acc, ele) => Number(acc) * Number(ele));
        count += 1;
    }
    return count;
}