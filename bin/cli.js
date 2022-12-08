#!/usr/bin/env node

function roll(sides, dice, rolls) {
	let sums = [];
	for (let i = 0; i < rolls; i++) {
		let total = 0;
		for (let j = 0; j < dice; j++) {
			let val = Math.floor(Math.random() * this.sides) + 1;
			total += val;
		}
	}
}
