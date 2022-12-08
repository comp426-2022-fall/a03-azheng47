#!/usr/bin/env node

// import dependencies
import {roll} from "../lib/roll.js";
import minimist from "minimist";

let args = minimist(process.argv.slice(2));

let sides = args.sides || 6;
let dice = args.dice || 2;
let rolls = args.rolls || 1;

let output = roll(sides, dice, rolls);
console.log(output);
