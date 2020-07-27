"use strict";

// https://edabit.com/challenge/uRtubbXsDHLwAz5RS

function smallerNum(n1, n2) {
    if (n1.length < n2.length) {
        return n1;
    } else if (n2.length < n1.length) {
        return n2;
    } else {
        return (
            (n1[0] < n2[0])
            ? n1
            : n2
        );
    }
}