"use strict";

// https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;
    str.split("").forEach(function (letter) {
        if (vowels.includes(letter)) {
            count += 1;
        }
    });
    return count;
}