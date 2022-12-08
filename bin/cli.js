#!/usr/bin/env node

import {roll} from "../lib/roll.js";
import minimist from "minimist";

let args = minimist(process.argv.slice(2));

let sides = args.sides || 6;
