// https://edabit.com/challenge/rvsvGvqZ3BzNieKqA

"use strict";

function detectWord(str) {
    const array = [...str.matchAll(/[a-z]/g)];
    return array.join("");
}