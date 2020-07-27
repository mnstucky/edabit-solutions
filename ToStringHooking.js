"use strict";

// https://edabit.com/challenge/P8eaoczqtnNAkm7Gs

String.prototype.toString = function () {
    let array = this.split("");
    array.reverse();
    return array.join("");
}