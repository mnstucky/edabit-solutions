"use strict";

// https://edabit.com/challenge/9CNJtMXaw2K5NwMLJ

function convert(deg) {
	let result;
	if (deg.includes("C")) {
		result = Math.round(parseInt(deg, 10) * 9 / 5 + 32);
		return String(result) + deg.slice(-2, -1) + "F";
	}
	else if (deg.includes("F")) {
		result = Math.round((parseInt(deg, 10) - 32) * 5 / 9);
		return String(result) + deg.slice(-2, -1) + "C";
	} else {
		return "Error";
	}
}