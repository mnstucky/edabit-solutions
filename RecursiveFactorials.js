"use strict";

// https://edabit.com/challenge/rgXMMHEmbh2MCKSrM

function factorial(n) {
	if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}