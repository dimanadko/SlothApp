'use strict';
const retardMinim = require('./lib/retardMinim');
const schedule = require('./lib/schedule');
const task = require('./lib/task');
const taskList = require('./lib/taskList');
const tasksCompability = require('./lib/tasksCompability');
const weightedRetardMinim = require('./lib/weightedRetardMinim');
const tools = require('./lib/tools');

const submodules = [
  retardMinim,
  schedule,
  task,
  taskList,
  tasksCompability,
  weightedRetardMinim,
];


module.exports = Object.assign({ tools }, ...submodules);
