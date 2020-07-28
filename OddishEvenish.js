"use strict";

function oddishOrEvenish(num) {
    const array = num.toString(10).split("");
    const sum = array.reduce((acc, ele) => Number(acc) + Number(ele));
    if (sum % 2 === 0) {
        return "Evenish";
    } else {
        return "Oddish";
    }
}