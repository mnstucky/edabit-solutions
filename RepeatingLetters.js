"use strict";

// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

function doubleChar(str) {
    let array = str.split("");
    let transformedArray = array.map((x) => x.concat(x));
    return transformedArray.join("");
}