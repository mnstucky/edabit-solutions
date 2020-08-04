"use strict";

// https://edabit.com/challenge/MjqneMZ7aZa8AxXZG

function repetition(txt, n) {
    if (n === 1) {
        return txt;
    }
    return txt.concat(repetition(txt, n - 1));
}