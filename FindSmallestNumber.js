"use strict";

// https://edabit.com/challenge/g66EJsbdnSDayyEcK

function findSmallestNum(arr) {
    arr.sort((ele1, ele2) => ele1 - ele2);
    return arr[0];
}