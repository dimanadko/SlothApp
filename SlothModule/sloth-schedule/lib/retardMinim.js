'use strict';

const { TaskList } = require('./taskList.js');

function retardMinim(taskList, schedule) {
  taskList.sort();
  if (taskList.noReleaseDate) {
    noReleaseDate(taskList, schedule);
  } else {
    greedyMinim(taskList, schedule);
  }

  return schedule;
}

function noReleaseDate(taskList, schedule) {
  const immediateTasks = new TaskList([], 'processingTime', true);
  let time = 0;

  while (taskList.getLength()) {
    const task = taskList.extract();
    immediateTasks.insert(task);

    time += task.processingTime;
    if (time > task.dueDate) time -= immediateTasks.extract().processingTime;
  }

  immediateTasks.sort('dueDate', false);
  while (immediateTasks.getLength())
    schedule.insert(immediateTasks.extract());

  return schedule;
}

function greedyMinim(taskList, schedule) {
  while (taskList.getLength()) {
    const task = taskList.extract();
    if (schedule.getTime() + task.processingTime <= task.dueDate)
      schedule.insert(task);
  }

  return schedule;
}

module.exports = { retardMinim };
