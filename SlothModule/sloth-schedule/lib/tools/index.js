'use strict';

const parser = require('./parser');
const binaryHeap = require('./binaryHeap');

const tools = [
  parser,
  binaryHeap,
];

module.exports = Object.assign({}, ...tools);
