#!/usr/bin/env node

// import dependencies
import {roll} from "../lib/roll.js";
import minimist from "minimist";

// grab command line arguments
let args = minimist(process.argv.slice(2));

// extract the cli arg values or give them a default value if not present
let sides = args.sides || 6;
let dice = args.dice || 2;
let rolls = args.rolls || 1;

// make call to our imported dice roll function
let output = roll(sides, dice, rolls);
console.log(output);
