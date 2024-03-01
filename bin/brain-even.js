#! /usr/bin/env node

import greetUser from '../src/cli.js';
import brainEvenGame from '../games/brain-even-src.js';

const userName = greetUser();
brainEvenGame(userName);
