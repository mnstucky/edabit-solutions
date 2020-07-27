"use strict";

// https://edabit.com/challenge/kbFhwaDyrd79JrgeB

function charCount(myChar, str) {
    const regex = new RegExp(myChar, "g");
    const matchedCharacters = [...str.matchAll(regex)];
    return matchedCharacters.length;
}